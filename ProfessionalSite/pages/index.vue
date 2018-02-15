<template>
  <div>
    <jumbo class="mb-5"></jumbo>
    <skills class="mb-5"></skills>
    <experience class="mb-5"></experience>
    <projects class="mb-5"></projects>
    <about class="mb-5"></about>
  </div>
</template>
<script>
  import Jumbo from './sections/jumbo'
  import Skills from './sections/skills'
  import Experience from './sections/experience'
  import Projects from './sections/projects'
  import About from './sections/about'

  export default {
    components: {
      Jumbo,
      Skills,
      Experience,
      Projects,
      About
    }
  }
</script>