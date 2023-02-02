<script lang="ts" setup>
import { nextTick, ref, withDefaults } from 'vue';

interface Props {
  contentId: string,
  enabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  enabled: false
});

const display = ref('');
const enabled = ref(props.enabled);

nextTick(() => {
  const element = document.getElementById(props.contentId);
  if (element != null) {
    display.value = element.style.display;
    if (!enabled.value) {
      element.style.display = 'none';
    }
  }
});

function toggle() {
  enabled.value = !enabled.value;
  document.getElementById(props.contentId)!.style.display = enabled.value ? display.value : 'none';
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
