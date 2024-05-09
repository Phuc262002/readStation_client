
<template>
   <div class="md:px-20 px-8 md:container md:mx-auto">
    <div class="pb-12">
        <BlogBanner/>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-3">
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
    </div>
    <div class="flex justify-center items-center my-8">
    <div >
      <a-button class="text-base flex justify-center items-center border border-gray-200 rounded-md w-[123px] h-[48px]">Load More</a-button>
    </div>
  </div>
   </div>
</template>