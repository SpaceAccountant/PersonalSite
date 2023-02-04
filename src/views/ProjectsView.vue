<script lang="ts" setup>
const project_nav_links = [
  {
    path: '/projects/site',
    text: 'This Site'
  }
];
</script>

<template>
  <ul class="projects-list" v-for="l in project_nav_links">
    <li><a v-bind:href="l.path">{{l.text}}</a></li>
  </ul>
</template>

<style lang="scss" scoped>
.projects-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>
