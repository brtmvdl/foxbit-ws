import * as tabs from './index.js'

export const getTabHTML = (tab) => {
  switch (tab) {
    case 'AuthenticateUser': return [new HTML()]
    case 'Authenticate2FA': return [new HTML()]
    case 'GetOrderHistory': return [new HTML()]
    case 'GetTickerHistory': return [new HTML()]
    case 'GetTradesHistory': return [new HTML()]
    case 'GetAccountInfo': return [new HTML()]
    case 'GetAccountPositions': return [new HTML()]
    case 'GetAccountTrades': return [new HTML()]
    case 'GetDepositTickets': return [new HTML()]
    case 'GetInstrument': return [new HTML()]
    case 'GetInstruments': return [new HTML()]
    case 'GetOrderFee': return [new HTML()]
    case 'GetOrderStatus': return [new HTML()]
    case 'GetProducts': return [new HTML()]
    case 'GetL2Snapshot': return [new HTML()]
    case 'GetUserInfo': return [new HTML()]
    case 'GetUserPermissions': return [new HTML()]
    case 'GetWithdrawTickets': return [new HTML()]
    case 'Logout': return [new HTML()]
    case 'SendOrder': return [new HTML()]
    case 'SubscribeAccountEvents': return [new HTML()]
    case 'SubscribeLevel1': return [new HTML()]
    case 'SubscribeLevel1Markets': return [new HTML()]
    case 'SubscribeLevel2': return [new HTML()]
    case 'SubscribeTicker': return [new HTML()]
    case 'SubscribeTrades': return [new HTML()]
    case 'UnsubscribeLevel1': return [new HTML()]
    case 'UnsubscribeLevel2': return [new HTML()]
    case 'UnsubscribeTicker': return [new HTML()]
    case 'UnsubscribeTrades': return [new HTML()]
    case 'CancelAllOrders': return [new HTML()]
    case 'GetOpenOrders': return [new HTML()]
    case 'CancelOrder': return [new HTML()]
  }

  return [new HTML()]
}
