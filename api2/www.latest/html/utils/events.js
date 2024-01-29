
export const getEventsList = () => {
  return Array.from([
    'AuthenticateUser',
    'Authenticate2FA',
    'Logout',
    'GetUserInfo',
    'GetUserPermissions',
    'GetAccountTrades',
    'SubscribeAccountEvents',
    'GetAccountPositions',
    'GetAccountInfo',
    'GetInstrument',
    'GetInstruments',
    'GetOpenOrders',
    'GetOrderHistory',
    'GetOrderStatus',
    'GetOrderFee',
    'SendOrder',
    'CancelOrder',
    'CancelAllOrders',
    'GetL2Snapshot',
    'GetTickerHistory',
    'SubscribeTicker',
    'UnsubscribeTicker',
    'GetTradesHistory',
    'SubscribeTrades',
    'UnsubscribeTrades',
    'SubscribeLevel1Markets',
    'SubscribeLevel1',
    'UnsubscribeLevel1',
    'SubscribeLevel2',
    'UnsubscribeLevel2',
    'GetProducts',
    // 
    'GetWithdrawTickets',
    'GetDepositTickets',
  ])
}