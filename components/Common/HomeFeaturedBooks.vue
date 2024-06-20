<template>
    <NuxtLink :to="`/products/${data.slug}`">
        <button class="hover:relative hover:brightness-50 ">
            <img class="rounded-lg h-72 w-48" :src="data?.book_detail[0]?.poster" alt="">
        </button>
    </NuxtLink>
</template>

<script>
export default {
    props: ["data"],
};
</script>
