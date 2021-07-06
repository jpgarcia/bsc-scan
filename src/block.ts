import query, { RequestConfig, QueryParams } from './query'

function getBlockAndUncleRewardsbyBlockNo(blockno: number, requestConfig?: RequestConfig) {
  return query<string>(
    {
      blockno,
      module: 'block',
      action: 'getblockreward',
    },
    requestConfig
  )
}

function getEstimatedBlockCountdownTimebyBlockNo(blockno: number, requestConfig?: RequestConfig) {
  return query<string>(
    {
      blockno,
      module: 'block',
      action: 'getblockcountdown',
    },
    requestConfig
  )
}

function getBlockNumberByTimestamp(timestamp: number, closest: QueryParams['closest'], requestConfig?: RequestConfig) {
  return query<string>(
    {
      timestamp,
      closest,
      module: 'block',
      action: 'getblocknobytime',
    },
    requestConfig
  )
}


export default {
  getBlockAndUncleRewardsbyBlockNo,
  getEstimatedBlockCountdownTimebyBlockNo,
  getBlockNumberByTimestamp
}
