// netlify/functions/saveActivity.js
const fs = require('fs').promises;
const path = require('path');

exports.handler = async function(event, context) {
  const dataPath = path.resolve(__dirname, 'data.json');
  
  if (event.httpMethod === 'POST') {
    try {
      const incomingData = JSON.parse(event.body);

      // Write the incoming data to the JSON file
      await fs.writeFile(dataPath, JSON.stringify(incomingData, null, 2));

      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Data saved successfully!' })
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error saving data', error: err.message })
      };
    }
  } else if (event.httpMethod === 'GET') {
    try {
      // Read the existing data from the JSON file
      const data = await fs.readFile(dataPath, 'utf8');
      return {
        statusCode: 200,
        body: data
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Error loading data', error: err.message })
      };
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ message: 'Method not allowed' })
  };
};
