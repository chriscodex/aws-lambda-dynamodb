const aws = require('aws-sdk');

const deleteTask = async (event) => {
  const dynamodb = new aws.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;
};

module.exports = {
  deleteTask,
};
