import query, { RequestConfig } from './query'

function getTokenSupplyByContractAddress(contractAddress: string, requestConfig?: RequestConfig) {
  return query<string>(
    {
      contractAddress,
      module: 'stats',
      action: 'tokensupply',
    },
    requestConfig
  )
}

function getCirculatingSupplyByContractAddress(contractAddress: string, requestConfig?: RequestConfig) {
  return query<string>(
    {
      contractAddress,
      module: 'stats',
      action: 'tokenCsupply',
    },
    requestConfig
  )
}

function getAccountBalanceForTokenContractAddress(
  address: string,
  contractAddress: string,
  requestConfig?: RequestConfig
) {
  return query<string>(
    {
      address,
      contractAddress,
      module: 'account',
      action: 'tokenbalance',
      tag: 'latest',
    },
    requestConfig
  )
}

export default {
  getTokenSupplyByContractAddress,
  getCirculatingSupplyByContractAddress,
  getAccountBalanceForTokenContractAddress,
}
