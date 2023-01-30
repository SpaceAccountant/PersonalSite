<script lang="ts" setup>
import Copyable from '@/components/Copyable.vue';
</script>

<template>
  <ul id="contact-list">
    <li><a href="mailto:jade@spaceaccountant.me">Email</a></li>
    <li><a href="https://github.com/SpaceAccountant">GitHub</a></li>
    <li><a href="https://www.linkedin.com/in/jade-clark-muth/">LinkedIn</a></li>
    <li><div>Discord</div><div><Copyable content="jade eats stocking#8182">jade eats stocking#8182<font-awesome-icon icon="fa-solid fa-copy" style="margin-left: 5px;" /></Copyable></div></li>
    <li><a href="https://en.wikipedia.org/wiki/IP_over_Avian_Carriers">Pigeon</a></li>
  </ul>
</template>

<style lang="scss" scoped>
@import '@/assets/style/default.scss';

#contact-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
