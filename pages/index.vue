<template>
  <div>
    <jumbo id="c-jumbo" class="mb-5"></jumbo>
    <skills id="c-skills" class="mb-5"></skills>
    <experience id="c-experience" class="mb-5"></experience>
    <projects id="c-projects" class="mb-5"></projects>
    <contact id="c-contact" class="mb-5"></contact>
  </div>
</template>
<script>
import Jumbo from '../components/sections/jumbo';
import Skills from '../components/sections/skills';
import Experience from '../components/sections/experience';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';

export default {
  components: {
    Jumbo,
    Skills,
    Experience,
    Projects,
    Contact
  }
};
</script>

<style>
.content ul {
  margin-left: 16px;
}

.card__text {
  padding-bottom: 0;
}
</style>
