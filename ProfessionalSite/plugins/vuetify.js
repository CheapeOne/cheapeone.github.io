import Vue from 'vue'

import Vuetify from 'vuetify/es5/components/Vuetify' // required
import VApp from 'vuetify/es5/components/VApp' // required
import VAvatar from 'vuetify/es5/components/VAvatar'
import VBtn from 'vuetify/es5/components/VBtn'
import VCard from 'vuetify/es5/components/VCard'
import VChip from 'vuetify/es5/components/VChip'
import VFooter from 'vuetify/es5/components/VFooter'
import VIcon from 'vuetify/es5/components/VIcon'
import VGrid from 'vuetify/es5/components/VGrid'
import VList from 'vuetify/es5/components/VList'
import VMenu from 'vuetify/es5/components/VMenu'
import VParallax from 'vuetify/es5/components/VParallax'
import VToolbar from 'vuetify/es5/components/VToolbar'

import transitions from 'vuetify/es5/components/transitions'
import directives from 'vuetify/es5/directives'

Vue.use(Vuetify, {
  components: {
    Vuetify,
    VApp,
    VAvatar,
    VBtn,
    VCard,
    VChip,
    VFooter,
    VIcon,
    VGrid,
    VList,
    VMenu,
    VParallax,
    VToolbar
  },
  directives,
  transitions,
  theme: {
    //primary: '#17A261',
    primary: '#41A6F3'
  }
})
