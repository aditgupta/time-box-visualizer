const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  // Define a temporary file location (in serverless environments, persistence may not exist)
  const dataPath = path.resolve('/tmp', 'data.json');

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    const body = JSON.parse(event.body);
    console.log('Saving data:', body); // Debugging log

    // Write data to file
    fs.writeFileSync(dataPath, JSON.stringify(body), 'utf8');

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Data saved successfully!' })
    };
  } catch (error) {
    console.error('Error saving data:', error); // Debugging log
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

