import axios, { AxiosRequestConfig } from 'axios'
import identity from 'lodash.identity'
import pickBy from 'lodash.pickby'
import qs from 'querystring'

import config from './config'

type Module = 'account' | 'contract' | 'stats' | 'block'

type AccountAction = 'balance' | 'balancemulti' | 'txlist' | 'txlistinternal' | 'tokentx' | 'getminedblocks'

type ContractAction = 'getabi' | 'getsourcecode'

type StatsAction = 'tokensupply' | 'tokenCsupply' | 'tokenbalance' | 'tokenbalancehistory' | 'bnbsupply' | 'validators'

type BlockAction = 'getblockreward' | 'getblockcountdown' | 'getblocknobytime'

export type QueryParams = {
  module: Module
  action: AccountAction | ContractAction | StatsAction | BlockAction
  address?: string
  contractAddress?: string
  txhash?: string
  startBlock?: number
  endBlock?: number
  blockno?: number
  page?: number
  offset?: number
  sort?: 'asc' | 'desc'
  tag?: string
  apiKey?: string
  timestamp?: number
  closest?: 'before' | 'after'
}

export type RequestConfig = {
  axiosConfig?: AxiosRequestConfig
  rawAxiosResponse?: boolean
}

type Response<T> = {
  status: '0' | '1'
  message: string
  result: T
}

async function query<T>(queryOptions: QueryParams, requestConfig?: RequestConfig) {
  const {
    address,
    contractAddress,
    txhash,
    module,
    action,
    startBlock = 0,
    endBlock = 99999999,
    page = undefined,
    offset = 10000,
    sort = 'asc',
    apiKey = config.apiKey,
    closest,
    timestamp
  } = queryOptions

  const queryParams = pickBy(
    {
      address,
      contractAddress,
      txhash,
      module,
      action,
      startBlock,
      endBlock,
      page,
      offset,
      sort,
      apiKey,
      closest,
      timestamp
    },
    identity
  )

  const { axiosConfig, rawAxiosResponse } = requestConfig || {}

  const query = qs.stringify(queryParams)
  const response = await axios.get<Response<T>>(`${config.url}/api?${query}`, axiosConfig)

  if (rawAxiosResponse) {
    return response
  }

  const { status, result } = response.data as Response<T>

  if (status === '0') {
    throw new Error(String(result))
  }

  return result
}

export default query
