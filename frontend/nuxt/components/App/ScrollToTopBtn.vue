<script setup lang='ts'>

const { scrollTopBtn, scrollTo } = useGsap()

onMounted(() => {
 window.addEventListener('scroll', scrollTopBtn.toggle)
})


</script>

<template>
 <UButton id='scroll-to-top-btn'
  class='fixed z-20 rounded-full right-4 bottom-20 scale-0 md:bottom-4 !text-white dark:text-white dark:hover:!ring-main btn-primary dark:bg-main-800 t-ring'
  icon="mdi-light:chevron-up" color="primary" square size="xl" @click="scrollTo()">

 </UButton>
</template>