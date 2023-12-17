import { BorutaOauth } from 'boruta-client'

class Oauth {
  preauthorizedCodeClient: any
  credentialOffer: any
  tokenResponse: any

  constructor () {
    const oauth = new BorutaOauth({
      host: 'http://localhost:4000',
      authorizePath: '/oauth/authorize',
      tokenPath: '/oauth/token',
      window
    })

    this.preauthorizedCodeClient = new oauth.PreauthorizedCode({
      clientId: '001f7fea-bf29-4ceb-869c-7a4f7931f39b',
      redirectUri: 'http://localhost:8080/oauth-callback'
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
}

export const oauth = new Oauth()
