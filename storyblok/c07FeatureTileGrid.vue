<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div class="component faded-in" v-editable="blok">
    <div class="c7 chrono" id="c7">
      <div class="component-header">
        <h3>{{ blok.heading }}</h3>
        <p>{{ blok.subheading }}</p>
      </div>
      <div class="feature-tile fb">
        <StoryblokComponent
          v-for="blok in blok.tiles"
          :key="blok._uid"
          :blok="blok"
        />
      </div>
    </div>
  </div>
</template>
