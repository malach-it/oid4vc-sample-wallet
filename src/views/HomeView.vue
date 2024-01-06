<template>
<div class="ui placeholder segment">
  <div class="ui icon header">
    <i class="pdf undo icon"></i>
    Get your verifiable credential from your google profile
  </div>
    <a :href="loginUrl" class="ui huge violet button" style="color: white!important;">Get <br />credential offer</a>
</div>
<div class="home">
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
