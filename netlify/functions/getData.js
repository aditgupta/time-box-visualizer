const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  // Use the same temporary file location
  const dataPath = path.resolve('/tmp', 'data.json');

  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed'
    };
  }

  try {
    // Check if the file exists
    if (fs.existsSync(dataPath)) {
      const data = fs.readFileSync(dataPath, 'utf8');
      console.log('Retrieved data:', data); // Debugging log

      return {
        statusCode: 200,
        body: data
      };
    } else {
      console.log('No data found at', dataPath); // Debugging log
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'No data available' })
      };
    }
  } catch (error) {
    console.error('Error retrieving data:', error); // Debugging log
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};


