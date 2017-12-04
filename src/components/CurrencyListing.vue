<template>
  <el-table
    :data="currencies"
    height="500"
    style="width: 100%"
    stripe
  >
    <el-table-column
      class-name="name"
      prop="name"
      label="Name"
    >
    </el-table-column>
    <el-table-column
      prop="market_cap_usd"
      label="Market Cap"
      :formatter="formatPrice"
    >
    </el-table-column>
    <el-table-column
      prop="available_supply"
      label="Available Supply"       
      :formatter="formatPrice"
    >
    </el-table-column>
    <el-table-column
      prop="price_usd"
      label="Price"        
      :formatter="formatPrice"
    >
    </el-table-column>
    <el-table-column
      class-name="more-info"
      prop="id"
      fixed="right"
      label="More"
      width=100
      align="center"
    >
      <template slot-scope="scope">
        <el-button
          type="text"
          size="small"
          @click.prevent="changeRoute(scope.row.id)"
        >
          Details
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import PreviewCard from './PreviewCard';

export default {
  name: 'CurrencyListing',
  components: {
    PreviewCard,
  },
  data() {
    return {
      formatter: new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      }),
    };
  },
  methods: {
    formatPrice(row, column, cellValue) {
      return this.formatter.format(cellValue);
    },
    changeRoute(currency) {
      this.$router.push({
        name: 'CurrencyDetails',
        params: {
          id: currency,
        },
      });
    },
  },
  computed: {
    currencies() {
      return this.$myStore.state.currencies;
    },
  },
};
</script>

<style style="scss" scoped>

</style>
