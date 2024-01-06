<template>
  <nav class="ui two item menu">
    <router-link class="item" to="/">Home</router-link>
    <router-link class="item" to="/about">About</router-link>
  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  color: #f5ba00!important;
}
nav {
  a {
    font-weight: bold!important;
    color: black!important;

    &.router-link-exact-active {
      color: #f5ba00!important;
    }
  }
}
</style>
