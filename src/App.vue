<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  created() {
    this.$myStore.dispatch('fetchCurrencies');

    setInterval(() => {
      this.$myStore.dispatch('fetchCurrencies');
    }, 10000);
  },
};
</script>

<style>
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.15;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

body {
  margin: 0;
  font-size: 14px;
  background: #f5f5f5;
}

article,
aside,
footer,
header,
nav,
section {
  display: block;
}

#app > .el-container {
  margin: 0 auto;
  max-width: 1200px;
}

</style>
