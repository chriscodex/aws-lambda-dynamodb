const aws = require('aws-sdk');

const deleteTask = async (event) => {
  const dynamodb = new aws.DynamoDB.DocumentClient();

  const { id } = event.pathParameters;

  await dynamodb
    .delete({
      TableName: 'TaskTable',
      Key: {
        id,
      },
    })
    .promise();
};

module.exports = {
  deleteTask,
};
