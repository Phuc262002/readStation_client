
<template>
   <div class="lg:px-[100px] px-8 ">
    <div class="py-12">
        <BlogBanner/>
    </div>
    <div class="grid grid-cols-3 gap-4">
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
         <BlogItem/>
    </div>
    <div class="flex justify-center items-center my-8 ">
    <div >
      <a-button class="text-base flex justify-center items-center border border-gray-200 rounded-md w-[123px] h-[48px]">Load More</a-button>
    </div>
  </div>
   </div>
</template>