<template>
  <div id="app">
    <CustomHeader />
    <router-view />
  </div>
</template>

<script>
import CustomHeader from '/src/components/Header';

export default {
  name: 'App',
  components: {
    CustomHeader,
  },
};
</script>

<style lang="less">
@import url('/src/assets/index.less');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,
body {
  width: 100%;
  height: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
