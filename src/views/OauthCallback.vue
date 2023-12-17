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
      tokenResponse: null
    }
  },
  mounted () {
    oauth.callback().then((credentialOffer: any): any => this.credentialOffer = credentialOffer)
  },
  methods: {
    getToken () {
      oauth.getToken().then((response: any) => this.tokenResponse = response)
    }
  }
});
</script>
