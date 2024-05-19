import { message } from 'ant-design-vue';

<template>
    <div class="h-auto mx-auto container md:px-20 px-8">
        <div class="p-10 flex justify-between w-full gap-10">
            <div class="w-1/3 text-right flex flex-col gap-6">
                <div class="text-base text-[#f65d4e]">FEATURED AUTHOR</div>
                <div class="flex flex-col gap-5">
                    <h1 class="text-5xl font-bold">{{ AuthorFeatured.author }}</h1>
                    <p class="text-[#999999]">{{ AuthorFeatured.description}}</p>
                    <!-- <p class="text-[#999999]">Before her breakout entry into the realms of crime fiction, Janice Hallett
                        worked as a
                        journalist, magazine editor and speech writer for the Cabinet Office and Home Office, as well as
                        writing for the stage and screen. Her first feature film Retreat (co-written and directed by
                        Carl Tibbetts) came out in 2011, and she won the award for Best New Screenplay at the 2014
                        British Independent Film Festival.</p> -->
                </div>
                <div>
                    <button class="w-1/3 bg-[#f65d4e] text-white p-2 rounded-full font-bold text-base">Xem thông tin</button>
                </div>
            </div>
            <div class="w-1/3">
                <img :src="AuthorFeatured.avatar" alt="">
            </div>
            <div class="w-1/3 flex flex-col gap-2">
                <div class="flex justify-between">
                    <CommonBook :data=AuthorFeatured />
                    <div class=" border border-[#e6e6e6]"></div>
                    
                </div>
                <div class=" border border-[#e6e6e6] w-full"></div>
                <div class="flex justify-between">
                    
                    <div class=" border border-[#e6e6e6]"></div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const bookstore = useBookStore();
const AuthorFeatured = ref(null);
const isLoading = ref(false);
useAsyncData(async () => {
    isLoading.value = true;
    try {
        const response = await bookstore.getAuthorFeatured(); //promise
        AuthorFeatured.value = response.data._rawValue?.data[0];
    } catch (error) {
        console.error(error);
    } finally {
        isLoading.value = false;
    }
});

watchEffect(() => {
    console.log(AuthorFeatured.value);
});

</script>