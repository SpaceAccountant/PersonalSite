<script lang="ts" setup>
interface Props {
  is?: string
}

const props = withDefaults(defineProps<Props>(), {
  is: 'div'
});
</script>

<template>
  <component v-bind:is="props.is" class="container"><slot></slot></component>
</template>

<style lang="scss" scoped>
.container {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 30px;
}

@media screen and (max-width: 800px) {
  .container {
    flex-direction: column;
  }
}

</style>
