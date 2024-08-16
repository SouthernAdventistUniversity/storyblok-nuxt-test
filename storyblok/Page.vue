<template>
  <div class="container">
    <StoryblokComponent v-for="blok in blok.hero" :key="blok._uid" :blok="blok" />
    <ul class="breadcrumbs">
      Breadcrumbs
    </ul>
    <div v-editable="blok" class="mainpagecontent">
      <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    </div>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>
