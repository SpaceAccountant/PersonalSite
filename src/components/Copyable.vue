<script lang="ts" setup>
interface Props {
  // The content that can be copied
  content: string,
  // The type of element that contains the copyable
  is?: string
}
const props: Props = withDefaults( defineProps<Props>(), {
  is: 'span'
} );

/**
 * Copies the content to the clipboard.
 * 
 */
function copy() {
  navigator.clipboard.writeText( props.content );
}
</script>

<template>
  <component class="copyable" v-bind:is="props.is" v-on:click="copy()">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.copyable {
  color: var( --tertiary-color );
  text-decoration: underline;
}

.copyable:hover, .copyable:active {
  color: var( --link-hover-color );
  cursor: pointer;
}
</style>
