import query from './query'

function getTokenSupplyByContractAddress(contractAddress: string): Promise<string> {
  return query({
    contractAddress,
    module: 'stats',
    action: 'tokensupply',
  })
}

function getCirculatingSupplyByContractAddress(contractAddress: string): Promise<string> {
  return query({
    contractAddress,
    module: 'stats',
    action: 'tokenCsupply',
  })
}

function getAccountBalanceForTokenContractAddress(address: string, contractAddress: string): Promise<string> {
  return query({
    address,
    contractAddress,
    module: 'account',
    action: 'tokenbalance',
    tag: 'latest',
  })
}

export default {
  getTokenSupplyByContractAddress,
  getCirculatingSupplyByContractAddress,
  getAccountBalanceForTokenContractAddress,
}
