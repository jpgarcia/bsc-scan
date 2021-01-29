import query from './query'

type Validator = {
  validatorAddress: string
  validatorName: string
  validatorStatus: string
  validatorVotingPower: string
  validatorVotingPowerProportion: string
}

function getBnbTotalSupply(): Promise<string> {
  return query({
    module: 'stats',
    action: 'bnbsupply',
  })
}

function getValidatorsList(): Promise<Validator[]> {
  return query({
    module: 'stats',
    action: 'validators',
  })
}

export default {
  getBnbTotalSupply,
  getValidatorsList,
}
