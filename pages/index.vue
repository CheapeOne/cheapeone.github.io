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
import Jumbo from './sections/jumbo';
import Skills from './sections/skills';
import Experience from './sections/experience';
import Projects from './sections/projects';
import Contact from './sections/contact';

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
