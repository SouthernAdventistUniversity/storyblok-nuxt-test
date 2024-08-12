<script setup>
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})
 
const headerMenu = ref(null)
headerMenu.value = data.story.content.header_menu
</script>
 
<template>
  <header class="w-full h-24 bg-[#f7f6fd]">
    <div class="container h-full mx-auto flex items-center justify-between">
      <NuxtLink to="/">
        <h1 class="text-[#50b0ae] text-3xl font-bold">Storyblok Nuxt</h1>
      </NuxtLink>
      <nav v-if="headerMenu">
        <ul class="flex space-x-8 text-lg font-bold">
          <li v-for="blok in headerMenu" :key="blok._uid">
            <NuxtLink v-if="blok.link.linktype == 'story'" :to="`/${blok.link.story.slug}`" :target="`${blok.link.target}`" class="hover:text-[#50b0ae]">
              {{ blok.link.story.name }}
            </NuxtLink>
            <NuxtLink v-else :to="`${blok.link.url}`" :target="`${blok.link.target}`" class="hover:text-[#50b0ae]">
              External Link
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
nav a.router-link-active {
  @apply underline underline-offset-4 decoration-4 decoration-[#50b0ae];
}
</style>
