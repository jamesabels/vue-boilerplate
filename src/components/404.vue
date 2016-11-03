<template>
  <div class="error">
    <img src="../assets/logo.png">
    <h1 class="error-msg">404 Error</h1>
    <p>Page Not Found</p>
</template>
<script>
import Store from '../store/store'

export default {
  name: 'error',
  template: '<error/>',
  data () {
    return {
      privateState: {},
      publicState: Store.state
    }
  }
}

</script>

<style lang="scss" scoped>
  .error {
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .error-msg {
    font-weight: normal;
  }

</style>
