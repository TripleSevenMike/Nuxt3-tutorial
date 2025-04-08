<template>
  <div class="mt-7 max-w-sm mx-auto my-auto text-center card">
    <h1 class="text-4xl font-bold text-red-500">Error</h1>
    <p class="text-xl my-7">{{ error.statusCode }}</p>
    <p class="text-xl my-7">{{ error.message }}</p>
    <button @click="handleClearError" class="btn">Go back to home</button>
    
  </div>
</template>

<script lang="ts" setup>
defineProps(['error'])


const handleClearError = () => clearError({redirect: '/'})
</script>

<style>

</style>


