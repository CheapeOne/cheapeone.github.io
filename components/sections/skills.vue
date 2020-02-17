<template>
  <v-layout row wrap>
    <v-flex xs12>
      <h1>Skills</h1>
    </v-flex>

    <v-flex md6>
      <v-card height="100%">
        <v-card-title class="headline">Languages</v-card-title>

        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <icon-chip
              v-for="(language, index) in languages"
              :key="index"
              :text="language.name"
              :icon="language.icon"
            />
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>

    <v-flex md6>
      <v-card>
        <v-card-title class="headline">Technologies</v-card-title>

        <v-container fluid grid-list-lg>
          <v-layout row wrap>
            <icon-chip
              v-for="(tech, index) in technologies"
              :key="index"
              :text="tech.name"
              :icon="tech.icon"
            />
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import IconChip from '../IconChip';

export default {
  components: {
    IconChip
  },
  data() {
    return {
      languages: [
        { name: 'Python', icon: 'icons/python2.svg' },
        { name: 'Javascript', icon: 'icons/js.svg' },
        { name: 'SQL', icon: 'icons/database.svg' },
        { name: 'HTML', icon: 'icons/html.svg' },
        { name: 'CSS / SCSS', icon: 'icons/css.svg' },
        { name: 'Java', icon: 'icons/java2.svg' },
        { name: 'Ruby', icon: 'icons/ruby.svg' }
      ],

      technologies: [
        { name: 'Django', icon: 'icons/django2.svg' },
        { name: 'Django Rest Framework', icon: 'icons/DRF.svg' },
        { name: 'Vue', icon: 'icons/vue.svg' },
        { name: 'Node', icon: 'icons/nodejs.svg' },
        { name: 'Scipy', icon: 'icons/scipy.ico' },
        { name: 'Webpack', icon: 'icons/webpack.svg' },
        { name: 'Nginx', icon: 'icons/nginx2.svg' },
        { name: 'Rails', icon: 'icons/rails.ico' },
        { name: 'Unity', icon: 'icons/unity.ico' },
        { name: 'Adobe Illustrator', icon: 'icons/ai.svg' },
        { name: 'Android', icon: 'icons/android.svg' }
      ]
    };
  }
};
</script>

<style scoped>
.c-icon {
  height: 20px;
}

.cc-chip {
  display: flex;
  border-color: white !important;
}
</style>
