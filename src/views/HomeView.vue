<template>
  <div class="home">
    <a :href="loginUrl" class="ui fluid blue button">Get credential offer</a>
  </div>
</template>

<script lang="ts">
import { oauth } from '../services/oauth.service'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  data () {
    return {
      loginUrl: oauth.loginUrl
    }
  },
  mounted () {
    console.log(oauth.loginUrl)
  },
});
</script>
