<template>
  <v-layout 
    row 
    wrap>
    <v-flex xs12>
      <h1>Contact</h1>
    </v-flex>
    <v-flex xs12 sm6 md4 v-for="i in 10" :key="i">
      <v-card>
        <v-card-text>Hey there</v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>
