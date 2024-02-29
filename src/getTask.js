const AWS = require('aws-sdk');

const getTask = async (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  await dynamodb.scan({
    TableName: 'TaskTable',
  }).promise()
}

module.exports = {
  getTask,
}