<template>
  <div class="home">
    <a :href="loginUrl" class="ui fluid blue button">Get credential offer</a>
    <pre>
      {{ credentialOffer }}
    </pre>
    <a @click="getToken()" v-if="credentialOffer" class="ui fluid blue button">Get access token</a>
    <pre>
      {{ tokenResponse }}
    </pre>
    <a @click="getCredential()" v-if="tokenResponse" class="ui fluid blue button">Get credential</a>
    <pre>
      {{ credential }}
    </pre>
  </div>
</template>

<script lang="ts">
import { oauth } from '../services/oauth.service'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  data () {
    return {
      loginUrl: oauth.loginUrl,
      credentialOffer: null,
      tokenResponse: null,
      credential: null
    }
  },
  mounted () {
    oauth.callback().then((credentialOffer: any): any => this.credentialOffer = credentialOffer)
      .catch((error: any): any => this.credentialOffer = error)
  },
  methods: {
    getToken () {
      oauth.getToken().then((response: any) => this.tokenResponse = response)
      .catch((error: any): any => this.tokenResponse = error)
    },
    getCredential () {
      oauth.getCredential()
        .then((response: any) => this.credential = response.data)
        .catch((error: any): any => this.credential = error.response.data)
    }
  }
});
</script>
