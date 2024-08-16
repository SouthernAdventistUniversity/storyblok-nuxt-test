<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div
    v-editable="blok"
    v-if="blok.visibility"
    id="hero"
    class="component c1 hero-component fullwidth fb flend"
    :class="blok.version"
  >
    <img class="hero-image" :src="blok.image.filename" :alt="blok.image.alt" />
    <div class="hero-component-text">
      <h1>{{ blok.title }}</h1>
    </div>
  </div>
  <p v-else class="bg-red-600 p-4">{{ blok.component }} is hidden</p>
</template>
