<template>
  <v-layout 
    row 
    wrap>
    <v-flex xs12>
      <h1>Contact</h1>
    </v-flex>

    <!-- Social -->
    <v-flex xs12 sm8 md6 height="100%">
      <v-card>
        <v-card-text>

          <v-layout row wrap justify-space-between>
            <v-flex class="contact-info">
              <div>
                <span>Email:</span>
                <span style="float: right;">chrischeape@gmail.com</span>
              </div>
            </v-flex>

            <v-flex class="button-box">
              <v-btn 
                color="primary"
                href="https://www.linkedin.com/in/christopher-cheape-54a08577/"
                target="_blank">
                LinkedIn
              </v-btn>
              <v-btn 
                color="secondary"
                href="https://github.com/CheapeOne"
                target="_blank">
                Github
              </v-btn>
            </v-flex>

          </v-layout>

          
          <div>
            
          </div>
          
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style scoped>
.card__text {
  padding-bottom: 16px;
}

.contact-info {
  width: 300px;
}

.button-box {
  display: flex;
  justify-content: flex-end;
  padding-right: 0 !important;
}

</style>
