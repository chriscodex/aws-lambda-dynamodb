const aws = require('aws-sdk');

const deleteTask = async (event) => {
  try {
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

    return {
      status: 200,
      body: {
        message: 'Task deleted successfully',
      },
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  deleteTask,
};
