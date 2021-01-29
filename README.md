# Node.js BscScan API

[![npm](https://img.shields.io/npm/v/bsc-scan.svg?style=flat-square)](https://www.npmjs.com/package/bsc-scan)
[![Travis branch](https://img.shields.io/travis/jpgarcia/bsc-scan/master.svg?style=flat-square)](https://travis-ci.org/jpgarcia/bsc-scan)

Node.js package to interact with official [BscScan API](https://bscscan.io/apis)

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
