<script setup lang="ts">
import { computed, readonly } from 'vue';
import { RouterLink, RouterView, useRouter } from 'vue-router';

const current_route_name = computed(() => useRouter().currentRoute.value.name);

class Project {
  public constructor( public route: string, public description: string ) {}
}

const projects = readonly( [
  new Project( '/projects/site', 'This site' )
] );
</script>

<template>
  <div id="mainSiteContainer">
    <header>
      <Container>
        <div class="portrait">
          <img alt="Photo of me." src="https://pbs.twimg.com/profile_images/1670685499470786561/Pmap6PeJ_400x400.jpg" />
          <p><small>Me!</small></p>
        </div>
        <div class="description">
          <div>
            <h2>Welcome!</h2>
            <p>Hihi! I'm Jade, your average trans girl programmer who likes *nix! I'm working on a number of projects, some public, some private.
              Feel free to check out my interactive projects and eveything else I put on here! If you enjoy my work and want to support me then
              you can donate via <a href="https://cash.app/$jadeonice">Cash App</a></p>
          </div>
          <br>
          <h3>Maya &#60;3</h3>
          <nav id="siteContentNav">
            <ul>
              <li><RouterLink to="/">Home</RouterLink></li>
              <li><RouterLink to="/contact">Contact</RouterLink></li>
              <li>
                <Revealer target="projectsNav">Projects</Revealer>
                <nav id="projectsNav">
                  <ul>
                    <li v-for="p in projects">
                      <RouterLink v-bind:to="p.route">{{ p.description }}</RouterLink>
                    </li>
                  </ul>
                </nav>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
    <hr>
    <main id="mainSiteContent">
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

#mainSiteContainer {
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

  header {
    margin-bottom: 30px;

    .portrait {
      border: 2px solid black;
      margin: 0 auto;

      img {
        display: block;
        max-width: 320px;
        min-width: 250px;
        width: 100%;
      }

      p {
        padding: 20px 10px;
        text-align: center;
      }
    }

    .description {
      text-align: center;

      #siteContentNav {
        font-size: 24px;
        margin-top: 30px;

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        #projectsNav {
          font-size: 16px;

          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }
        }
      }
    }
  }
}
</style>

<style lang="scss" scoped>
@import '@/assets/style/default.scss';

#mainSiteContainer {
  background-color: rgba(black, 0.3);
  border: 2px solid $tertiary_color;
  box-shadow: 0 0 100px 50px rgba($tertiary_color, 0.2);
  margin: 120px auto;
  max-width: 1152px;
  outline: 3px double $secondary_color;
  padding: 30px;

  #mainSiteContent {
    margin-top: 30px;
    text-align: center;
  }
}
</style>
