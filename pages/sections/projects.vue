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
            :id="'project-img-' + i"
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
              text
              :color="action.color"
              :href="action.link"
              target="_blank">
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
            <p>
            Skyoo Tutors is a platform for English learners in China to practice their speaking
            skills with English speakers in the US. As the sole developer, I architected and implemented
            a responsive web app frontend and backend:
            </p>
            <ul>
              <li>
              Backend built with Django Rest Framework, with timezone aware scheduling, payments, and video chat. 
              Uses Cellery for task management.
              </li>
              <li>
              Modern frontend with Vue, Node, webpack. Includes state management, translations, and prerendering for SEO.
              </li>
            </ul>
          `,
          img: '/projects/skyoo2.jpg',
          actions: [
            {title: 'Site', link: 'https://skyootutors.com', color: 'primary'}
          ]
        },

        // Health Informatics
        {
          title: 'FHIR Health Informatics',
          date: 'January 2017 - May 2017',
          text: `
          <p>
          A collaboration between our team from Georgia Tech and UTHealth. The goal was to visualize nutrition scores
          and other health information in EMRs for use by care providers.
          </p>
          <ul>
            <li>
            I implemented the FHIR app backend using Node JS, and concepted the front end using Adobe Illustrator.
            </li>
          </ul>`,
          img: '/projects/nutrition.jpg',
          actions: [
            {title: 'Github', link: 'https://github.com/CheapeOne/GT-Nutrition', color: 'primary'},
            {title: 'PDF', link: 'https://drive.google.com/file/d/1L0wKCt6fEwZwa9-qX_TZa94LBXKG9olb/view?usp=sharing', color: 'primary'}
          ]
        },

        // GAN
        {
          title: 'Generative Adversarial Network',
          date: 'January 2017 - May 2017',
          text: `I designed and trained a generative adversarial network (GAN) for generating dog images.
          This made use of Scipy, Tensorflow, and the DCGAN architecture. Images were from the Stanford dogs dataset.
          I wrote a Medium article about my findings (and GAN's in general) below:`,
          img: '/projects/gan.jpg',
          actions: [
            {title: 'Article', link: 'https://medium.com/@cheapeone/the-the-ml-architecture-of-the-generation-d3b6f52faaab', color: 'primary'}
          ]
        },

        // Wherever
        {
          title: 'Wherever: Data Analytics',
          date: 'October 2016 - December 2016',
          text: `A group project for CS 6240 Data Analytics. 
          The goal was to display recommendations for where someone should live.
          I designed and built the frontend, using d3 + plotly to generate the map.`,
          img: '/projects/wherever.jpg',
          actions: [
            {title: 'PDF', link: 'https://drive.google.com/file/d/1idSQvGd5HkapyeccbB9z3jkeianYhIGm/view?usp=sharing', color: 'primary'}
          ]
        },

        // // Machine learning for trading
        // {
        //   title: 'Machine Learning for Trading',
        //   date: 'October 2016 - December 2016',
        //   text: 'Find out where you want to live',
        //   img: '',
        //   actions: [
        //     {title: 'More', link: '', color: 'primary'}
        //   ]
        // },

        // Georgia Tech Transportation
        {
          title: 'Georgia Tech Transportation',
          date: 'August 2015 - May 2016',
          text: `
          <p>
          Worked with faculty to improve the tracking and scheduling of 
          Georgia Tech's buses. I specifically focused on using a configuration of 
          bluetooth beacons at each stop to track their movements 
          (as GPS would drift if they stay still too long). 
          </p>
          <ul>
            <li>
              Developed an Android app for the driver's tablet to detect the beacons, 
              using the info + GPS to determine the state of the bus.
            </li>
          <ul>`,
          img: '/projects/bus.jpg',
          actions: [
            {title: 'Site', link: 'http://www.vip.gatech.edu/teams/intelligent-transportation-systems', color: 'primary'}
          ]
        },

        // Twitter Ticker
        {
          title: 'Twitter Ticker',
          date: 'May 2015 - August 2015',
          text: `
          <p>
          A group project for an Information Visualization course. We developed an 
          interactive visualization to compare stock data with twitter sentiment analysis.
          </p>
          <ul><li>
          I led the effort to generate and clean Twitter sentiment data using Semantria 
          and Processing 2 (Java library).
          </li></ul>
          `,
          img: '/projects/twitter.png',
          actions: [
            {title: 'Github', link: 'https://github.com/Shreyyas/TwitterTicker', color: 'primary'}
          ]
        },

        // Jane Bound
        {
          title: 'Jane Bound Unity Game',
          date: 'May 2015 - August 2015',
          text: `
          <p>
          A Unity game our group developed for a Game AI course. 
          The player must sneak through a procedurally generated level with patrolling guards.
          </p>
          <ul><li>
          I built the AI behavior for the guards using behavior trees, allowing them to search 
          for the player using a navigation mesh.
          </li></ul>
          `,
          img: '/projects/jane.jpg',
          actions: [
            {title: 'Github', link: 'https://github.com/CheapeOne/JaneBound', color: 'primary'}
          ]
        },

        // Visual Diff
        {
          title: 'Visual Diff Website',
          date: 'May 2014 - August 2014',
          text: `
          <p>
          Visual Diff is a web testing startup based in Atlanta. I redesigned their web app using AngularJS, along with D3 for graphs.
          </p>
          `,
          img: '/projects/diff.jpeg',
          actions: [
            {title: 'Site', link: 'http://www.visualdiff.com/', color: 'primary'}
          ]
        }
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

#project-img-0 .card__media__background{
  background-position-x: 0% !important;
  background-position-y: 0% !important;
  
}

#project-img-1 .card__media__background{
  background-position-y: 0% !important;
}

#project-img-3 .card__media__background{
  background-position-x: 0% !important;
}

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
