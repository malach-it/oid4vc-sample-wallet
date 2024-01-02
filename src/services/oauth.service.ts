import { BorutaOauth } from 'boruta-client'

class Oauth {
  preauthorizedCodeClient: any
  credentialOffer: any
  tokenResponse: any
  api: any

  constructor () {
    const oauth = new BorutaOauth({
      host: 'https://oauth.boruta.patatoid.fr',
      authorizePath: '/oauth/authorize',
      tokenPath: '/oauth/token',
      window
    })

    this.api = oauth.api

    this.preauthorizedCodeClient = new oauth.PreauthorizedCode({
      clientId: '26e571cc-31d5-4f5a-bba3-9151f2714fca',
      redirectUri: 'https://oid4vc-sample-wallet.boruta.patatoid.fr/oauth-callback',
      clientSecret: ''
    })
  }

  get loginUrl () {
    return this.preauthorizedCodeClient.loginUrl
  }

  callback () {
    return this.preauthorizedCodeClient.callback().then((response: any): any => {
      this.credentialOffer = response
      return response
    })
  }

  getToken () {
    return this.preauthorizedCodeClient.getToken().then((response: any): any => {
      this.tokenResponse = response
      return response
    })
  }

  async getCredential() {
    return this.api.post('/openid/credential', {
      credential_identifier: 'CivilEngineeringDegree-2023'
    }, {
      headers:{ 'Authorization': `bearer ${this.tokenResponse['access_token']}` }
    })
  }
}

export const oauth = new Oauth()
