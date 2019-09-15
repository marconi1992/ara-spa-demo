<template>
  <div>
    <h1>{{title}}</h1>
    <input type="text" v-model="title">
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

