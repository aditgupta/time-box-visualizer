const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  const dataPath = path.join(__dirname, 'data.json');
  
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const body = JSON.parse(event.body);
    fs.writeFileSync(dataPath, JSON.stringify(body), 'utf8');
    return {
      statusCode: 200,
      body: 'Data saved successfully!'
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Internal Server Error: ' + error.message
    };
  }
};
