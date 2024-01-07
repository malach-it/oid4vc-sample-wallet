<template>
<div class="home">
<div class="ui placeholder segment">
  <div class="ui icon header">
    <i class="pdf undo icon"></i>
    Get your verifiable credential from your federated profiles
  </div>
    <a :href="googleLoginUrl" class="ui huge violet button" style="color: white!important;">Get <br />credential offer</a>
</div>
</div>
</template>

<script lang="ts">
import { oauth } from '../services/oauth.service'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  data () {
    return {
      googleLoginUrl: oauth.googleLoginUrl,
      githubLoginUrl: oauth.githubLoginUrl
    }
  },
  mounted () {
    console.log(oauth.googleLoginUrl)
  },
});
</script>
