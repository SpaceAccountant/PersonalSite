<script lang="ts" setup>
import { nextTick, onMounted, withDefaults } from 'vue';

interface Props {
  // If the target is enabled initially
  enabled?: boolean,
  // The ID of the target element
  target: string
}

const props = withDefaults(defineProps<Props>(), {
  enabled: false
});

onMounted(() => {
  nextTick(() => {
    document.getElementById(props.target)!.hidden = !props.enabled;
  });
});

function toggle() {
  const element = document.getElementById(props.target);
  if ( element ) {
    element.hidden = !element.hidden;
  }
}
</script>

<template>
  <span class="revealer-controller" v-on:click="toggle()"><slot></slot></span>
</template>

<style lang="scss" scoped>
@import '@/assets/style/default.scss';

.revealer-controller {
  color: $tertiary_color;
  text-decoration: underline;
}

.revealer-controller:hover {
  color: $link_hover_color;
  cursor: pointer;
}
</style>
