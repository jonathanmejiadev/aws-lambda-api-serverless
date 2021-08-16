'use strict';

const querystring = require('querystring');

module.exports.hello = async (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!'
    }),
  };

  return callback(null, response);
};

module.exports.helloUser = async (event) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${event.pathParameters.name}!`,
      input: event
    }),
  };

  return response;
};

module.exports.createUser = async (event) => {
  const body = JSON.parse(event.body);

  let user = {
    id: 1,
    username: body.username,
    password: body.password,
  };

  const response = {
    statusCode: 201,
    body: JSON.stringify({
      success: true,
      message: `User has been created successfully!`,
      data: user
    }),
  };

  return response;
};
