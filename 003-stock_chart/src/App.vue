<template>
  <div class="main">
    <LineChart />
  </div>
</template>

<script>
import LineChart from './components/lineChart'

export default {
  name: 'App',
  components: {
    LineChart
  }
}
</script>
<style scoped>
.main {
  max-width: 1200px;
  margin: auto;
  padding: 50px
}
</style>
