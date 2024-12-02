const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  const dataPath = path.join(__dirname, 'data.json');

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const data = fs.existsSync(dataPath) ? fs.readFileSync(dataPath, 'utf8') : '{}';
    return {
      statusCode: 200,
      body: data
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Internal Server Error: ' + error.message
    };
  }
};
