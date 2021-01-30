import query, { QueryParams, RequestConfig } from './query'

type AccountQueryParams = Omit<QueryParams, 'address' | 'contractAddress' | 'txhash' | 'module' | 'action'>

type BlockRange = {
  startBlock?: number
  endBlock: number
}

type AddressBalance = {
  account: string
  balance: string
}

type Transaction = {
  blockNumber: string
  timeStamp: string
  hash: string
  nonce: string
  blockHash: string
  transactionIndex: string
  from: string
  to: string
  value: string
  gas: string
  gasPrice: string
  isError: string
  txreceipt_status: string
  input: string
  contractAddress: string
  cumulativeGasUsed: string
  gasUsed: string
  confirmations: string
}

type InternalTransaction = {
  blockNumber: string
  timeStamp: string
  hash: string
  from: string
  to: string
  value: string
  contractAddress: string
  input: string
  type: string
  gas: string
  gasUsed: string
  traceId: string
  isError: string
  errCode: string
}

type TokenTransferEvent = {
  blockNumber: string
  timeStamp: string
  hash: string
  nonce: string
  blockHash: string
  from: string
  contractAddress: string
  to: string
  value: string
  tokenName: string
  tokenSymbol: string
  tokenDecimal: string
  transactionIndex: string
  gas: string
  gasPrice: string
  gasUsed: string
  cumulativeGasUsed: string
  input: string
  confirmations: string
}

function getBnbBalance(address: string, queryOptions?: AccountQueryParams, requestConfig?: RequestConfig) {
  return query<string>(
    {
      ...queryOptions,
      address,
      module: 'account',
      action: 'balance',
      tag: 'latest',
    },
    requestConfig
  )
}

function getBnbBalanceForMultipleAddresses(
  addresses: string[],
  queryOptions?: AccountQueryParams,
  requestConfig?: RequestConfig
) {
  return query<AddressBalance[]>(
    {
      ...queryOptions,
      address: addresses.join(','),
      module: 'account',
      action: 'balancemulti',
      tag: 'latest',
    },
    requestConfig
  )
}

function getInternalTransactionsByAddress(
  address: string,
  queryOptions?: AccountQueryParams,
  requestConfig?: RequestConfig
) {
  return query<InternalTransaction[]>(
    {
      ...queryOptions,
      address,
      module: 'account',
      action: 'txlistinternal',
    },
    requestConfig
  )
}

function getInternalTransactionsByHash(
  txhash: string,
  queryOptions?: AccountQueryParams,
  requestConfig?: RequestConfig
) {
  return query<InternalTransaction[]>(
    {
      ...queryOptions,
      txhash,
      module: 'account',
      action: 'txlistinternal',
    },
    requestConfig
  )
}

function getInternalTransactionsByBlockRange(
  blockRange: BlockRange,
  queryOptions?: Omit<AccountQueryParams, 'startBlock' | 'endBlock'>,
  requestConfig?: RequestConfig
) {
  return query<InternalTransaction[]>(
    {
      ...queryOptions,
      ...blockRange,
      module: 'account',
      action: 'txlistinternal',
    },
    requestConfig
  )
}

function getTokenTransferEventsByAddress(
  address: string,
  queryOptions?: AccountQueryParams,
  requestConfig?: RequestConfig
) {
  return query<TokenTransferEvent[]>(
    {
      ...queryOptions,
      address,
      module: 'account',
      action: 'tokentx',
    },
    requestConfig
  )
}

function getTokenTransferEventsByContractAddress(
  contractAddress: string,
  queryOptions?: AccountQueryParams,
  requestConfig?: RequestConfig
) {
  return query<TokenTransferEvent[]>(
    {
      ...queryOptions,
      contractAddress,
      module: 'account',
      action: 'tokentx',
    },
    requestConfig
  )
}

function getTokenTransferEventsByAddressAndContractAddress(
  address: string,
  contractAddress: string,
  queryOptions?: AccountQueryParams,
  requestConfig?: RequestConfig
) {
  return query<TokenTransferEvent[]>(
    {
      ...queryOptions,
      address,
      contractAddress,
      module: 'account',
      action: 'tokentx',
    },
    requestConfig
  )
}

function getTransactions(address: string, queryOptions?: AccountQueryParams, requestConfig?: RequestConfig) {
  return query<Transaction[]>(
    {
      ...queryOptions,
      address,
      module: 'account',
      action: 'txlist',
    },
    requestConfig
  )
}

export default {
  getBnbBalance,
  getBnbBalanceForMultipleAddresses,
  getInternalTransactionsByAddress,
  getInternalTransactionsByHash,
  getInternalTransactionsByBlockRange,
  getTokenTransferEventsByAddress,
  getTokenTransferEventsByContractAddress,
  getTokenTransferEventsByAddressAndContractAddress,
  getTransactions,
}
