<script setup>
const { slug } = useRoute().params
const url = slug && slug.length > 0 ? slug.join('/') : 'home'
 
const isPreview = useRuntimeConfig().public.NODE_ENV !== 'production'
const resolveRelations = ['popular-articles.articles']
 
const { data: story, status } = await useAsyncData(
  `${url}`,
  async () => {
    const { data } = await useStoryblokApi().get(`cdn/stories/${url.replace(/\/$/, '')}`, {
      version: isPreview ? 'draft' : 'published',
      resolve_relations: resolveRelations
    })
    return data?.story
  },
)
 
if (!isPreview) {
  if (!story.value) {
    showError({ statusCode: 404, statusMessage: "Page Not Found" })
  }
}
 
onMounted(() => {
  if (isPreview && story.value && story.value.id) {
    useStoryblokBridge(
      story.value.id,
      (evStory) => story.value = evStory,
      {
        resolveRelations,
      }
    )
  }
})
</script>
 
<template>
  <StoryblokComponent v-if="status === 'success' && story" :blok="story.content" />
</template>
