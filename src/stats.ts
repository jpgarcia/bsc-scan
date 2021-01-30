import query, { RequestConfig } from './query'

type Validator = {
  validatorAddress: string
  validatorName: string
  validatorStatus: string
  validatorVotingPower: string
  validatorVotingPowerProportion: string
}

function getBnbTotalSupply(requestConfig?: RequestConfig) {
  return query<string>(
    {
      module: 'stats',
      action: 'bnbsupply',
    },
    requestConfig
  )
}

function getValidatorsList(requestConfig?: RequestConfig) {
  return query<Validator[]>(
    {
      module: 'stats',
      action: 'validators',
    },
    requestConfig
  )
}

export default {
  getBnbTotalSupply,
  getValidatorsList,
}
