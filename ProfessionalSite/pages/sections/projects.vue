<template>
  <v-layout 
    id="page"
    column>
    <!-- Projects -->
    <v-flex xs12>
      <h1>Projects</h1>
    </v-flex>
    <!-- <v-layout row wrap ref="projectLayout"> -->
    
    <v-flex xs12>
      <div 
        class="masonry"
        v-masonry 
        transition-duration="0.3s" 
        item-selector=".masonry-item"
        fit-width="true"
        gutter=".gutter-item">
        
        <div class="gutter-item"></div>
        <v-card
          v-masonry-tile
          v-for="(project, i) in projects" 
          :key="i"
          class="masonry-item xs12 sm6 md4 ">
          <v-card-media 
            :src="project.img" 
            height="200px">
          </v-card-media>
          <v-card-text>
            <div>
              <span class="headline">{{project.title}}</span>
              <p>{{project.date}}</p>
              <span v-html="project.text"></span>
            </div>
          </v-card-text>
          <v-spacer></v-spacer>
          <v-card-actions>
            <v-btn 
              v-for="(action, i) in project.actions"
              :key="i"
              flat
              :color="action.color">
              {{action.title}}
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </v-flex>

  </v-layout>
</template>

<script>
import NoSSR from 'vue-no-ssr'

export default {
  data() {
    return {

      projects: [

        // Skyoo
        {
          title: 'Skyoo Tutors Platform',
          date: 'May 2017 - December 2017',
          text: `
            
            Skyoo Tutors is a platform for English learners in China to practice their speaking
            skills with English speakers in the US. As the sole developer, I architected and implemented
            a responsive web app front end and back end.
            
          `,
          img: '/projects/skyoo.jpeg',
          actions: [
            {title: 'More', link: '', color: 'primary'},
            {title: 'Skyoo Site', link: '', color: 'primary'}
          ]
        },

        // Health Informatics
        {
          title: 'FHIR Health Informatics',
          date: 'January 2017 - May 2017',
          text: 'View information on EMR',
          img: '',
          actions: [
            {title: 'More', link: '', color: 'primary'}
          ]
        },

        // GAN
        {
          title: 'Generative Adversarial Network',
          date: 'January 2017 - May 2017',
          text: 'GAN for generating doc images',
          img: '',
          actions: [
            {title: 'More', link: '', color: 'primary'}
          ]
        },

        // Wherever
        {
          title: 'Wherever: Data Analytics',
          date: 'October 2016 - December 2016',
          text: 'Find out where you want to live',
          img: '',
          actions: [
            {title: 'More', link: '', color: 'primary'}
          ]
        },

        // Machine learning for trading
        {
          title: 'Machine Learning for Trading',
          date: 'October 2016 - December 2016',
          text: 'Find out where you want to live',
          img: '',
          actions: [
            {title: 'More', link: '', color: 'primary'}
          ]
        },

        // Georgia Tech Transportation
        {
          title: 'Georgia Tech Transportation',
          date: 'August 2015 - May 2016',
          text: 'Find out where you want to live',
          img: '',
          actions: [
            {title: 'More', link: '', color: 'primary'}
          ]
        },

        // Twitter Ticker
        {
          title: 'Twitter Ticker',
          date: 'May 2015 - August 2015',
          text: 'Find out where you want to live',
          img: '',
          actions: [
            {title: 'More', link: '', color: 'primary'}
          ]
        },

        // Jane Bound
        {
          title: 'Jane Bound Unity Game',
          date: 'May 2015 - August 2015',
          text: 'Find out where you want to live',
          img: '/projects/skyoo.jpeg',
          actions: [
            {title: 'More', link: '', color: 'primary'}
          ]
        },
      ]
    }
  },

  components: {
    'no-ssr': NoSSR
  },

  mounted() {
    if (typeof this.$redrawVueMasonry === 'function') {
      this.$redrawVueMasonry()
    }
  }
}
</script>

<style>


.masonry {
  margin: 0 auto;
}

.masonry-item {
  width: 368px;
  margin-bottom: 24px;
}

.gutter-item {
  width: 24px;
}

@media (min-width: 1264px) {
  .masonry-item {
    width: 368px !important;
  }
} 

@media (min-width: 960px) and (max-width: 1263px) {
  .masonry-item {
    width: 420px !important;
  }
} 

@media (max-width: 791px) {
  .masonry-item {
    width: 320px !important;
  }
} 

@media (max-width: 699px) {
  .masonry {
    width: 100% !important;
  }

  .masonry-item {
    width: 100% !important;
  }
}
</style>
