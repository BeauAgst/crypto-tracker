<template>
  <div class="container">
    <el-row :gutter="20">
      <el-table
        :data="currencies"
        stripe
        style="width: 100%"
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
    </el-row>
  </div>
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
      /* eslint no-console: 0 */
      this.$router.push({
        path: currency,
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

.container {
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
}
</style>
