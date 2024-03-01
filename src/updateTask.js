const AWS = require('aws-sdk');

const updateTask = (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;
  const { title, description } = JSON.parse(event.body);
};

module.exports = {
  updateTask,
};
