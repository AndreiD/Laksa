//
//
//  Copyright
//
//
//

import * as util from 'laksa-utils'
import * as core from 'laksa-core-crypto'
import * as wallet from 'laksa-wallet'
import { HttpProvider, Messenger } from 'laksa-request'
import Zil from 'laksa-zil'
import config from './config'

const { Wallet } = wallet

class Laksa {
  constructor(args) {
    const url = args || config.defaultNodeUrl
    this.util = { ...util, ...core }
    this.currentProvider = new HttpProvider(url)
    this.messenger = new Messenger(this.currentProvider)
    this.zil = new Zil(this)
    this.wallet = new Wallet()
  }

  providers = {
    HttpProvider
  }

  config = config

  // library method
  isConnected = async (callback) => {
    const result = await this.zil.isConnected()
    try {
      return callback === undefined ? !(result instanceof Error) : callback(null, true)
    } catch (e) {
      return false
    }
  }

  getLibraryVersion = () => this.config.version

  getDefaultProviderUrl = () => this.config.defaultProviderUrl

  getDefaultAccount = () => this.config.defaultAccount

  getDefaultBlock = () => this.config.defaultBlock

  getProvider = () => this.currentProvider

  setProvider = (provider) => {
    this.currentProvider = new HttpProvider(provider)
    this.messenger.setProvider(this.currentProvider)
  }
}

export default Laksa
