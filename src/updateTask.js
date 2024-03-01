const AWS = require('aws-sdk');

const updateTask = (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
};

module.exports = {
  updateTask,
};
