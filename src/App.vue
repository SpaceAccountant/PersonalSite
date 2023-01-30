<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="main-container">
    <header>
      <div id="portrait">
        <img src="https://pbs.twimg.com/media/ExQ6TijWgAAJPIx?format=png&name=4096x4096" alt="Dorothy Haze" />
        <p><small>Image by <a href="https://twitter.com/_DJSaturn">DJSATURN</a></small></p>
      </div>
      <div id="description">
        <h2>Welcome!</h2>
        <p>Hihi! I'm Jade, your average trans girl programmer who likes *nix! I'm working on a number of projects, some public, some private.
           Feel free to check out my interactive projects and eveything else I put on here! If you enjoy my work and want to support me then
           you can <a href="https://www.buymeacoffee.com/JadeOnIce">buy me a coffee.</a></p>
        <nav id="content-nav">
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
          </ul>
        </nav>
      </div>
    </header>
    <hr>
    <div id="content">
      <RouterView />
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/global.scss';

#main-container {
  color: white;
  font-family: "IBM VGA",monospace !important;
  font-size: 20px;

  h1, h2, h3, h4, h5, h6 {
    color: $secondary_color;
  }

  a {
    color: $tertiary_color;
  }
}
</style>

<style lang="scss" scoped>
@import '@/assets/global.scss';

#main-container {
  background-color: rgba(black, 0.3);
  border: 2px solid $tertiary_color;
  box-shadow: 0 0 100px 50px rgba($tertiary_color, 0.2);
  margin: 120px auto;
  max-width: 1152px;
  outline: 3px double $secondary_color;
  padding: 30px;

  header {
    column-gap: 30px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: start;
    margin-bottom: 30px;
  }
}

#portrait {
  border: 2px solid black;
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

#content-nav {
  ul {
    list-style-type: square;
  }
}

#content {
  padding: 20px 0;
}
</style>
