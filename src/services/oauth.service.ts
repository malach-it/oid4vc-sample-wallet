import { BorutaOauth } from 'boruta-client'

class Oauth {
  googleClient: any
  githubClient: any
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

    this.googleClient = new oauth.PreauthorizedCode({
      clientId: '26e571cc-31d5-4f5a-bba3-9151f2714fca',
      redirectUri: 'https://oid4vc-sample-wallet.boruta.patatoid.fr/oauth-callback',
      clientSecret: '',
      scope: 'FederatedBorutaCredentialSdJwt'
    })
    this.githubClient = new oauth.PreauthorizedCode({
      clientId: '955e6646-a7a8-4c2b-80cb-7a9e12d41dfb',
      redirectUri: 'https://oid4vc-sample-wallet.boruta.patatoid.fr/oauth-callback',
      clientSecret: ''
    })
  }

  get googleLoginUrl () {
    return this.googleClient.buildLoginUrl({prompt: 'login'}).toString()
  }

  get githubLoginUrl () {
    return this.githubClient.buildLoginUrl({prompt: 'login'}).toString()
  }
}

export const oauth = new Oauth()
