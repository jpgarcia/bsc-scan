import query, { QueryOptions } from './query'

type SourceCode = {
  SourceCode: string
  ABI: string
  ContractName: string
  CompilerVersion: string
  OptimizationUsed: string
  Runs: string
  ConstructorArguments: string
  EVMVersion: string
  Library: string
  LicenseType: string
  Proxy: string
  Implementation: string
  SwarmSource: string
}

function getContractAbi(address: string): Promise<string> {
  const queryOptions: QueryOptions = {
    address,
    module: 'contract',
    action: 'getabi',
  }

  return query(queryOptions)
}

function getContractSourceCode(address: string): Promise<SourceCode[]> {
  const queryOptions: QueryOptions = {
    address,
    module: 'contract',
    action: 'getsourcecode',
  }

  return query(queryOptions)
}

export default {
  getContractAbi,
  getContractSourceCode,
}
