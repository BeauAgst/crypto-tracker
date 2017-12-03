<template>
  <el-card class="box-card">
    <div class="header" slot="header">
      <span class="title">{{ currency.name }} ({{ currency.symbol }})</span>
      <span>{{ price }}</span>
    </div>
    <div class="item">
      <span>Market Cap:</span>
      <span>{{ marketCap }}</span>
    </div>
    <div class="button-container">
      <router-link 
        :to="{
          name: 'CurrencyDetails',
          currency: currency.name.replace(' ', '-'),
          params: currency,
        }"
      >
        <el-button type="primary">More Info</el-button>
      </router-link>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'PreviewCard',
  props: ['currency'],
  data() {
    return {
      formatter: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      }),
    };
  },

  computed: {
    sanitizedName() {
      const lowercase = this.currency.name.toLowerCase();
      const joined = lowercase.replace(' ', '-');
      return joined;
    },

    price() {
      return this.formatter.format(this.currency.price_usd);
    },

    marketCap() {
      return this.formatter.format(this.currency.market_cap_usd);
    },
  },
};
</script>

<style lang="scss" scoped>

.box-card {
  margin-top: 20px;
}

.header {
  font-weight: bold;
}

.title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.header,
.item {
  display: flex;
  justify-content: space-between;
}

.button-container {
  margin: 20px auto 0;
  text-align: center;

  a {
    display: block;
  }
}
</style>
