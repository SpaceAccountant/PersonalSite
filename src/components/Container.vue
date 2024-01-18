<script lang="ts" setup>
interface Props {
  // The type of element that contains the container content
  is?: string
}
const props: Props = withDefaults( defineProps<Props>(), {
  is: 'div'
} );
</script>

<template>
  <component v-bind:is="props.is" class="container">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.container {
  align-items: flex-start;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 30px;
}

@media screen and ( max-width: 800px ) {
  .container {
    flex-direction: column;
  }
}

</style>
