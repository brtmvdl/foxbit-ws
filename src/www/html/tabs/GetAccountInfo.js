import { Tab } from './Tab.js'
import { InputTextGroupComponent } from '../components/index.js'

export class GetAccountInfoHTML extends Tab {
  path = 'GetAccountInfo'

  children = {
    OMSId: new InputTextGroupComponent('OMSId'),
    AccountId: new InputTextGroupComponent('AccountId'),
  }

  getOMSIdInputTextGroup() {
    return this.children.OMSId
  }

  getAccountIdInputTextGroup() {
    return this.children.AccountId
  }

  getForm() {
    return [
      this.getOMSIdInputTextGroup(),
      this.getAccountIdInputTextGroup(),
    ]
  }

  getBody() {
    return {
      OMSId: this.children.OMSId.children.input.getValue(),
      AccountId: this.children.AccountId.children.input.getValue(),
    }
  }
}
