import { WebSocketMessage } from '../../websocket/message.js'
import * as config from '../../config.js'
import { createSignature } from '../../utils.js'

export class AuthenticateUserMessage extends WebSocketMessage {
  Endpoint = 'AuthenticateUser'

  constructor(UserId = config.user, APIKey = config.key, APISecret = config.secret, Nonce = Date.now()) {
    super()

    const Signature = createSignature(Nonce, UserId, APIKey, APISecret)

    this.Payload = { APIKey, Nonce, UserId, Signature }
  }
}
