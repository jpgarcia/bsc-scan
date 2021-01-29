type Config = {
  url: string
  apiKey?: string
}

const config: Config = {
  url: 'https://api.bscscan.com',
  apiKey: undefined,
}

export default {
  get url() {
    return config.url
  },

  setUrl(url: string) {
    config.url = url
  },

  get apiKey() {
    return config.apiKey
  },

  setApiKey(apiKey: string) {
    config.apiKey = apiKey
  },
}
