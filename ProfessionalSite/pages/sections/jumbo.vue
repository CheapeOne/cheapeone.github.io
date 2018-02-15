<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-parallax src="/jumbo/ml-b.jpg">
        <div class="text-xs-center">
          <v-avatar
            size="150px"
            class="grey lighten-4">
            <img src="/chris.jpg" alt="avatar">
          </v-avatar>
        </div>
      </v-parallax>

      <v-card>
        <v-card-title class="headline">About Me</v-card-title>
        <v-card-text>
          <v-layout row wrap>
            <v-flex sm6>
              <v-card-media 
                src="/experience/cmg1.jpg"
                height="250px">
              </v-card-media>
            </v-flex>
            <v-flex sm6>
              <p>
                Hi! I'm a software engineer in Atlanta, GA. I received my Masters in Computer Science 
                from Georgia Tech in December 2017, and my Bachelors in Computer Science from the same 
                school in May 2016. The courses that engaged me the most were those involving machine 
                learning and visualization.
              </p>

              <p>
                I is in full stack development, seeing a feature through front to back. 
                There's nothing like watching someone enjoy something you helped create. My greatest strength is picking 
                up new emerging technologies and running with them, whether it be artificial intelligence, 
                virtual reality, or the next big thing. 
                <!-- When I'm not working on side projects, you'll find me practicing 
                piano or scuba diving. -->
              </p>

              
              
              
              <!-- <div class="text-xs-right">
                <em><small>&mdash; John Leider</small></em>
              </div>
              <hr class="my-3">
              <a href="https://nuxtjs.org/" target="_blank">Nuxt Documentation</a>
              <br>
              <a href="https://github.com/nuxt/nuxt.js" target="_blank">Nuxt GitHub</a> -->
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
