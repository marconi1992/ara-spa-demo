<template>
  <div class="container">
    <div>
      <logo />
      <nova name="Bar" :data="{ title: 'Bar Page' }"/>
    </div>
    <div>
      <nuxt-link  to="/">Main Page</nuxt-link>
    </div>
  </div>
</template>

<script>
import Nova from 'nova-vue-bridge'
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
    Nova
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
