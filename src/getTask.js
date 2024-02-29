const AWS = require('aws-sdk');

const getTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
}

module.exports = {
  getTask,
}