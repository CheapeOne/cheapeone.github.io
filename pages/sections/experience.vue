<template>
  <v-layout row wrap>
    <!-- Work Experience -->
    <v-flex xs12>
      <h1>Work Experience</h1>
    </v-flex>
    <v-flex xs12 sm6 md6 v-for="(work, i) in experiences" :key="i">
      <!-- Work Card -->
      <v-card height="100%">
        <v-img :src="work.img" :id="'card' + i" height="200px"> </v-img>

        <v-card-text>
          <div>
            <span class="headline">{{ work.title }}</span>
            <p>{{ work.date }}</p>
            <span v-html="work.text"></span>
          </div>
        </v-card-text>

        <v-card-actions>
          <v-btn
            v-for="(action, i) in work.actions"
            :key="i"
            text
            :color="action.color"
            :href="action.link"
            target="_blank"
          >
            {{ action.title }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      experiences: [
        // Cloudtags
        {
          title: 'Cloudtags',
          date: 'September 2016 - July 2017',
          text: `
            <p>Cloudtags is a startup focused on making digital experiences for retail stores. 
            As a full stack developer intern, I worked on a variety of projects ranging from web to mobile development:
            </p>
            <ul>
              <li>I designed and programmed a UI for their <a href="http://www.connectedstore.com/what-you-get/">
              connected store overlay</a>.
              </li>

              <li>The interesting thing about this was making it adapt based on the client site it was attached to. 
              This was done through Nginx reverse proxy.
              </li>

              <li> I also implemented a 'KitchenAid Stand Mixer' customization experience for tablets, used in Crate and Barrel stores.
              </li>
            </ul>
            `,
          img: '/experience/cloudtags2.jpg',
          actions: [
            { title: 'Site', link: 'http://cloudtags.com', color: 'primary' }
          ]
        },

        // CMG VR
        {
          title: 'Cox Media Group',
          date: 'June 2016 - August 2016',
          text: `
          <p>
          As part of a summer 2016 internship, I helped brainstorm and implement a 
          virtual reality application for Cox Enterprise's media department. The goal was to create a novel way to experience 
          their long form editorial content filmed for VR.
          </p>
          <ul>
            <li>I took charge of creating Unity application itself using C#.
            </li>
            <li>In order to reach a large user base, I adapted the app to work with both Android and 
            iOS in Google cardboard, as well as Gear VR's unique interface.
            </li>
            <li>
            Comfort is a huge consideration in VR, so I engaged with test users to ensure the app was usable.</li>
          </ul>
          `,
          img: '/experience/cmg4.jpg',
          actions: [
            {
              title: 'Site',
              link: 'https://www.coxmediagroup.com/',
              color: 'primary'
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
#card1 .card__media__background {
  background-position-y: 30% !important;
}
</style>
