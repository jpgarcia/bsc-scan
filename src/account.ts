import query, { QueryOptions } from './query'

type Options = Omit<QueryOptions, 'address' | 'contractAddress' | 'txhash' | 'module' | 'action'>

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

function getBnbBalance(address: string, options?: Options): Promise<string> {
  return query({
    ...options,
    address,
    module: 'account',
    action: 'balance',
    tag: 'latest',
  })
}

function getBnbBalanceForMultipleAddresses(addresses: string[], options?: Options): Promise<AddressBalance[]> {
  return query({
    ...options,
    address: addresses.join(','),
    module: 'account',
    action: 'balancemulti',
    tag: 'latest',
  })
}

function getTransactions(address: string, options?: Options): Promise<Transaction[]> {
  return query({
    ...options,
    address,
    module: 'account',
    action: 'txlist',
  })
}

function getInternalTransactionsByAddress(address: string, options?: Options): Promise<InternalTransaction[]> {
  return query({
    ...options,
    address,
    module: 'account',
    action: 'txlistinternal',
  })
}

function getInternalTransactionsByHash(txhash: string, options?: Options): Promise<InternalTransaction[]> {
  return query({
    ...options,
    txhash,
    module: 'account',
    action: 'txlistinternal',
  })
}

function getInternalTransactionsByBlockRange(
  blockRange: BlockRange,
  options?: Omit<Options, 'startBlock' | 'endBlock'>
): Promise<InternalTransaction[]> {
  return query({
    ...options,
    ...blockRange,
    module: 'account',
    action: 'txlistinternal',
  })
}

function getTokenTransferEventsByAddress(address: string, options?: Options): Promise<TokenTransferEvent[]> {
  return query({
    ...options,
    address,
    module: 'account',
    action: 'tokentx',
  })
}

function getTokenTransferEventsByContractAddress(
  contractAddress: string,
  options?: Options
): Promise<TokenTransferEvent[]> {
  return query({
    ...options,
    contractAddress,
    module: 'account',
    action: 'tokentx',
  })
}

function getTokenTransferEventsByAddressAndContractAddress(
  address: string,
  contractAddress: string,
  options?: Options
): Promise<TokenTransferEvent[]> {
  return query({
    ...options,
    address,
    contractAddress,
    module: 'account',
    action: 'tokentx',
  })
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
