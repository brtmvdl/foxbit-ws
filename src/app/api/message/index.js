const { Message } = require('../message')
const { GetAccountInfoMessage } = require('./get-account-info')
const { GetUserInfoMessage } = require('./get-user-info')
const { AuthenticateUserMessage } = require('./authenticate-user')

module.exports = {
  Message,
  GetAccountInfoMessage,
  GetUserInfoMessage,
  AuthenticateUserMessage,
}
