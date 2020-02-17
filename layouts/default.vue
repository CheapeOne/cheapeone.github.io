<template>
  <v-app>
    <!-- Navbar -->
    <v-app-bar
      app
      color="secondary"
      dark
      dense
      fixed
      flat
      hide-on-scroll
      id="c-toolbar"
    >
      <img class="logo" src="/super-chris-b.png" alt="" />

      <v-toolbar-title>Christopher Cheape</v-toolbar-title>
      <v-spacer></v-spacer>

      <!-- Side menu, shows on mobile -->
      <v-menu
        attach="#c-toolbar-menu"
        bottom
        left
        offset-y
        min-width="130px"
        transition="slide-y-transition"
      >
        <v-btn
          id="c-toolbar-menu"
          class="hidden-md-and-up"
          slot="activator"
          style="margin-right: 16px;"
          text
          icon
        >
          <v-icon>more_horiz</v-icon>
        </v-btn>
        <v-list light>
          <v-list-tile
            v-for="(link, i) in links"
            :key="i"
            @click="goToSection(link.href, link.duration)"
          >
            <v-list-tile-title>{{ link.text }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          @click="goToSection(link.href, link.duration)"
          text
        >
          {{ link.text }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Page Content -->
    <v-content>
      <v-container grid-list-lg>
        <nuxt />
      </v-container>
    </v-content>

    <!-- Footer -->
    <v-footer app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'Skills', href: '#c-skills' },
        { text: 'Experience', href: '#c-experience' },
        { text: 'Projects', href: '#c-projects' },
        { text: 'Contact', href: '#c-contact' }
      ]
    };
  },

  methods: {
    goToSection(selector, duration) {
      if (duration === undefined) {
        duration = 700;
      }
      this.$vuetify.goTo(selector, {
        duration: duration,
        easing: 'easeInOutCubic'
      });
    }
  }
};
</script>

<style>
.logo {
  width: 30px;
  margin-right: 16px !important;
}

.v-application--wrap {
  background: #fafafa;
}

.list__tile__title {
  /* lol important everything totally not a bad idea ....*/
  text-transform: none !important;
}
</style>
