# Node.js BscScan API

[![version](https://img.shields.io/npm/v/bsc-scan.svg)](https://www.npmjs.com/package/bsc-scan)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/bsc-scan.svg)](https://www.npmjs.com/package/bsc-scan)
[![downloads](https://img.shields.io/npm/dt/bsc-scan.svg)](https://www.npmjs.com/package/bsc-scan)
[![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?url=https%3A%2F%2Fgithub.com%2Fjpgarcia%2Fbsc-scan&via=binance&text=BscScan%20Node.js%20Api%20Client%21%20for%20Binance%20Smart%20Chain%20@binance%20%23BSC&hashtags=bnb%2Cbsc%2Cbinancesmartchaib%2Cbscscan)

<img src="https://bscscan.com/images/logo-bscscan.svg?v=0.0.2" height="40" />

Node.js package to interact with official [BscScan API](https://bscscan.io/apis) powered by TypeScript.

## Documentation

**[API reference](https://bscscan.com/apis)**

## Installation

```bash
$ yarn add bsc-scan
```

## Usage

```ts
import bscscan, { account } from 'bsc-scan'

bscscan.setUrl('https://testnet.bscscan.com')
bscscan.setApiKey('YourApiKeyToken')

const start = async () => {
  try {
    const balance = await account.getBnbBalance('0x765090aB712984081aeE059eA7025C48a4198183')

    console.log(`Your balance is: ${balance}`)
  } catch (err) {
    console.log(err)
  }
}

start()
```
