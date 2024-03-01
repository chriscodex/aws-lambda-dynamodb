const AWS = require('aws-sdk');

const updateTask = (event) => {
  const dynamodb = new AWS.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;
  const { done } = JSON.parse(event.body);

  await dynamodb.update({
    TableName: 'TaskTable',
    Key: {
      id,
    },
};

module.exports = {
  updateTask,
};
