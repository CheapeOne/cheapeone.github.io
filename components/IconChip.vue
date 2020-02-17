<template>
  <div class="cc-chip">
    <img v-if="icon" :src="icon" class="c-icon pr-1" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ['icon', 'text']
};
</script>

<style scoped>
.cc-chip {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  padding: 0 12px;
  margin: 4px;
}

img {
  height: 20px;
}

span {
  font-size: 14px;
}
</style>
