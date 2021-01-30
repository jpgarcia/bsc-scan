import axios from 'axios'
import identity from 'lodash.identity'
import pickBy from 'lodash.pickby'
import qs from 'querystring'

import config from './config'

type Module = 'account' | 'contract' | 'stats'

type AccountAction = 'balance' | 'balancemulti' | 'txlist' | 'txlistinternal' | 'tokentx' | 'getminedblocks'

type ContractAction = 'getabi' | 'getsourcecode'

type StatsAction = 'tokensupply' | 'tokenCsupply' | 'tokenbalance' | 'bnbsupply' | 'validators'

export type QueryOptions = {
  module: Module
  action: AccountAction | ContractAction | StatsAction
  address?: string
  contractAddress?: string
  txhash?: string
  startBlock?: number
  endBlock?: number
  page?: number
  offset?: number
  sort?: 'asc' | 'desc'
  tag?: string
  apiKey?: string
}

async function query(options: QueryOptions) {
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
  } = options

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
    },
    identity
  )

  const query = qs.stringify(queryParams)

  const { data } = await axios.get(`${config.url}/api?${query}`)

  return data.result
}

export default query
