import { HTML, nFlex } from '@brtmvdl/frontend'
import { InputMessage, OutputMessage } from './chat-message.js'

export class ChatMessages extends HTML {
  children = {
    messages: new HTML(),
  }

  onCreate() {
    this.setEvents()
    this.append(this.getMessagesHTML())
  }

  setEvents() {
    this.on('input', (ev) => this.onInput(ev))
    this.on('output', (ev) => this.onOutput(ev))
  }

  onInput(ev) {
    this.children.messages.prepend(new InputMessage(ev.value))
  }

  onOutput(ev) {
    this.children.messages.prepend(new OutputMessage(ev.value))
  }

  getMessagesHTML() {
    return this.children.messages
  }

}
