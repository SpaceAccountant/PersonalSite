<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';

const site_nav_links = [
  {
    path: '/',
    text: 'Home'
  },
  {
    path: '/projects',
    text: 'Projects'
  },
  {
    path: '/contact',
    text: 'Contact'
  }
];

const current_route_name = computed( () => useRouter().currentRoute.value.name );
</script>

<template>
  <div id="main-container">
    <header class="container">
      <div id="portrait">
        <img src="https://pbs.twimg.com/media/ExQ6TijWgAAJPIx?format=png&name=4096x4096" alt="Dorothy Haze" />
        <p><small>Image by <a href="https://twitter.com/_DJSaturn">DJSATURN</a></small></p>
      </div>
      <div id="description">
        <div id="welcome">
          <h2>Welcome!</h2>
          <p>Hihi! I'm Jade, your average trans girl programmer who likes *nix! I'm working on a number of projects, some public, some private.
             Feel free to check out my interactive projects and eveything else I put on here! If you enjoy my work and want to support me then
             you can <a href="https://www.buymeacoffee.com/JadeOnIce">buy me a coffee.</a></p>
        </div>
        <nav id="content-nav">
          <ul v-for="link in site_nav_links">
            <li><RouterLink v-bind:to='link.path'>{{link.text}}</RouterLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <hr>
    <main id="main-content">
      <h1>{{current_route_name}}</h1>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
@import '@/assets/style/default.scss';

body {
    background-color: $primary_color;
    margin: 0 50px;
}

#main-container {
  color: white;
  font-family: $font;
  font-size: 20px;

  p {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    color: $secondary_color;
    margin: 0;
    padding: 0;
  }

  a {
    color: $tertiary_color;
  }

  a:hover, a:active {
    color: $link_hover_color;
  }
}
</style>

<style lang="scss" scoped>
@import '@/assets/style/default.scss';
@import '@/assets/style/container.scss';

#main-container {
  background-color: rgba(black, 0.3);
  border: 2px solid $tertiary_color;
  box-shadow: 0 0 100px 50px rgba($tertiary_color, 0.2);
  margin: 120px auto;
  max-width: 1152px;
  outline: 3px double $secondary_color;
  padding: 30px;

  header {
    margin-bottom: 30px;

    #portrait {
      border: 2px solid black;
      margin: 0 auto;
      max-width: 256px;

      img {
        display: block;
        width: 100%;
      }

      p {
        padding: 20px 10px;
        text-align: center;
      }
    }

    #description {
      text-align: center;

      #content-nav {
        font-size: 24px;
        margin-top: 30px;

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }
      }
    }
  }

  #main-content {
    margin-top: 30px;
    text-align: center;
  }
}
</style>
