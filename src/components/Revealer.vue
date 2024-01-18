<script lang="ts" setup>
import { nextTick, ref } from 'vue';

interface Props {
  // The ID of the controlled element
  contentId: string,
  // The type of element that contains the revealer controller
  is?: string,
  // The initial revealed state of the controlled element
  revealed?: boolean
}
const props: Props = withDefaults( defineProps<Props>(), {
  is: 'span',
  revealed: false
} );

// Set up the initial state of the revealer on the next DOM flush.
nextTick( () => {
  const element = document.getElementById( props.contentId );
  if ( element ) {
    element.hidden = !props.revealed;
  }
} );

/**
 * Toggles the reveal state of the controlled content.
 * 
 */
function toggle() {
  const element = document.getElementById( props.contentId );
  if ( element ) {
    element.hidden = !element.hidden;
  }
}
</script>

<template>
  <component class="revealer-controller" v-bind:is="props.is" v-on:click="toggle()">
    <slot></slot>
  </component>
</template>

<style lang="scss" scoped>
.revealer-controller {
  color: var( --tertiary-color );
  text-decoration: underline;
}

.revealer-controller:hover {
  color: var( --link-hover-color );
  cursor: pointer;
}
</style>

