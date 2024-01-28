import { HTML, nH2, nFlex } from '@brtmvdl/frontend'
import * as events from './utils/events.js'
import * as tabs from './tabs/index.js'
import 'socket.io'

export class Page extends HTML {
  state = {
    socket: io('localhost:4080'),
  }

  children = {
    tabs: new HTML(),
  }

  onCreate() {
    this.setHTMLEvents()
    this.setSocketEvents()
    this.append(this.getTitleH2())
    this.append(this.getTabsHTML())
  }

  getTabHTML(tab) {
    switch (tab) {
      case 'List currencies': return new tabs.ListCurrenciesTab()
      case 'List markets': return new tabs.ListMarketsTab()
      case 'Get a market quotation': return new tabs.GetMarketQuotationTab()
      case 'Get an order book': return new tabs.GetOrderBookTab()
      case 'Get candlesticks': return new tabs.GetCandlesticksTab()
      case 'List banks': return new tabs.ListBanksTab()
      case 'Get current time': return new tabs.GetCurrentTimeTab()
      // case 'Get current member details': return new tabs.GetCurrentMemberDetailsTab()
      // case 'Create order': return new tabs.CreateOrderTab()
      // case 'List orders': return new tabs.ListOrdersTab()
      // case 'Get an order ID': return new tabs.GetOrderIDTab()
      // case 'Get an order client ID': return new tabs.GetOrderClientIDTab()
      // case 'Cancel orders': return new tabs.CancelOrdersTab()
      // case 'List trades': return new tabs.ListTradesTab()
      // case 'Get member accounts': return new tabs.GetMemberAccountsTab()
      // case 'Get member PnL data': return new tabs.GetMemberPnLDataTab()
      // case 'List deposits': return new tabs.ListDepositsTab()
      // case 'Get deposit': return new tabs.GetDepositTab()
      // case 'Get deposit address': return new tabs.GetDepositAddressTab()
      // case 'List withdrawals': return new tabs.ListWithdrawalsTab()
      // case 'Create withdrawal': return new tabs.CreateWithdrawalTab()
      // case 'Get withdrawal': return new tabs.GetWithdrawalTab()
      // case 'List Transactional Limits': return new tabs.ListTransactionalLimitsTab()
    }

    return new HTML()
  }

  onTab(tab) {
    console.log('onTab', tab)
    this.children.tabs.clear()
    const html = this.getTabHTML(tab)
    html.on('submit', ({ value }) => this.onSubmit(value))
    this.on('message', ({ value }) => html.dispatchEvent('message', value))
    this.children.tabs.append(html)
  }

  onSubmit(message) {
    console.log('onSubmit', message)
    this.sendMessage(message)
  }

  setHTMLEvents() {
    this.on('tab', (ev) => this.onTab(ev.value))
  }

  setSocketEvents() {
    this.state.socket.on('message', (data) => this.dispatchEvent('message', data))
  }

  sendMessage(message) {
    console.log('message', message)
    this.state.socket.emit('message', message)
  }

  getTitleH2() {
    const h2 = new nH2()
    h2.setText('Foxbit REST API 3.0')
    return h2
  }

  createTabHeader(header) {
    const html = new HTML()
    html.setText(header)
    html.setStyle('cursor', 'pointer')
    html.on('click', () => this.dispatchEvent('tab', header))
    return html
  }

  getTabsHeaders() {
    const html = new HTML()
    events.getEventsList().map((tab) => html.append(this.createTabHeader(tab)))
    return html
  }

  getTabsContents() {
    return this.children.tabs
  }

  getTabsHTML() {
    const tabs = new nFlex()
    tabs.append(this.getTabsHeaders().setContainerStyle('width', '20%'))
    tabs.append(this.getTabsContents().setContainerStyle('width', '80%'))
    return tabs
  }
}
