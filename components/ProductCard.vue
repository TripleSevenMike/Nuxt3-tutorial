<template>
  <div class="card text-center ">
    <img :src="product.image" alt="product" class="thumb">
    <p class="font-bold test-gary-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
        <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>

const {product} = defineProps(['product'])


</script>

<style>
.thumb {
    max-height: 120px;
    max-width: 70%;
    margin: 0 auto;
}
</style>