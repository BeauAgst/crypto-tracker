<template>
  <div class="container">
    <el-row :gutter="20">
      <LineChart
        :width="400"
        :height="200"
      />

        {{$route.params}}
    </el-row>
  </div>
</template>

<script>
import LineChart from './LineChart';

export default {
  name: 'CurrencyDetails',
  components: {
    LineChart,
  },
  data() {
    return {
      msg: 'This is the details',
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
