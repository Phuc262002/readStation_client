<template>
  <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
    <div class="flex gap-[30px]">
      <div class="w-3/4">
        <div
          class="relative overflow-hidden h-[462px] w-full  bg-cover bg-center bg-no-repeat rounded-xl"
          :style="`background-image: url(${postStore.post?.image});`"
        >
          <div
            class="absolute h-[188px] w-full bottom-0 left-0 backdrop-opacity-90 backdrop-blur-sm bg-black/60"
          ></div>
          <div class="absolute h-[166px] bottom-10 left-10 font-semibold p-5">
            <div
              class="flex justify-start items-center bg-[#F1ECFF] border border-gray-100 w-fit p-[5px] gap-3 mt-4 text-sm rounded-[20px]"
            >
              <div class="h-4 w-4 bg-rtprimary rounded-full"></div>
              <div class="text-rtprimary w-fit text-sm font-normal">
                {{ postStore.post?.category?.name }}
              </div>
            </div>
            <p class="text-white w-2/3 text-[27px] pt-2 font-bold">
              {{ postStore.post?.title }}
            </p>
            <div class="pt-4">
              <div
                class="flex items-center text-base text-white gap-5 text-[14px] font-normal"
              >
                <div class="flex items-center gap-3">
                
                  <p>
                    {{
                      $dayjs(postStore.post?.created_at).format("DD/MM/YYYY")
                    }}
                  </p>
                </div>
                <div class="h-1 w-1 bg-white rounded-full"></div>
                <p>{{ postStore.post?.view }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-html="postStore.post?.summary" class="my-5 font-normal"></div>
        <div v-html="postStore.post?.content" class="my-5 font-normal"></div>
        <div
          class="flex justify-between items-center p-5 border bg-orange-100 w-full h-[70px] rounded-[10px] mb-5"
        >
          <div class="text-black font-semibold text-base">
            <p>Like what you see? Share with a friend.</p>
          </div>
          <div class="flex justify-items-end text-white gap-5 mt-[10px]">
            <div>
              <IconFacebook />
            </div>
            <div>
              <IconTwitter />
            </div>
            <div>
              <IconLinkedin />
            </div>
          </div>
        </div>

        <div>
          <BlogComment />
        </div>
        <hr class="mb-5" />

        <div class="mb-5 font-bold text-[27px]">Bài viết liên quan</div>
        <div class="grid grid-cols-3 gap-4">
          <BlogDetailItem
           
          />
        </div>
      </div>

      <div class="w-1/4 space-y-5">
        <div class="p-5 border bg-orange-100 w-full h-fit rounded-[10px]">
          <div class="flex mb-5">
            <div class="">
              <a-avatar
                class="h-[100px] w-full"
                :src="postStore.post?.user?.avatar"
                shape="square"
              ></a-avatar>
            </div>
            
          </div>
          <div class="text-black font-normal">
            <div class="text-xl">{{ postStore.post.user.fullname }}</div>
            <div class="text-sm w-2/3 pt-[10px]">
              {{ postStore.post.user.job }}
            </div>
            <hr class="my-[10px]" />
          </div>
          <div class="text-black text-sm font-normal">
            <p>
           {{ postStore.post.user.story }}
            </p>
          </div>
        </div>
        <div class="p-5 border bg-orange-100 w-full h-70 rounded-[10px]">
          <div class="text-black text-sm font-semibold">
            <p>Share with your community!</p>
          </div>
          <div class="flex text-black gap-5 mt-[10px]">
            <div>
              <IconFacebook />
            </div>
            <div>
              <IconTwitter />
            </div>
            <div>
              <IconLinkedin />
            </div>
          </div>
        </div>
        <div class="bg-orange-100 rounded-lg hover:shadow-md p-5">
          <div class="border-b-2 font-semibold mb-2">Bài viết nổi bật</div>
          <div class="space-y-4">
            <div class="flex space-x-2">
              <img
                src="https://via.placeholder.com/50"
                alt=""
                class="w-12 h-12 rounded object-cover"
              />
              <div>
                <div class="font-semibold">
                  Tiểu thuyết Việt Nam qua công trình nghiên cứu...
                </div>
                <div class="text-sm text-gray-500">
                  <div>[Thời báo Văn học nghệ thuật - 08-05-2024 08:28]</div>
                  <div>
                    Cuốn sách "Tiểu thuyết Việt Nam qua công trình nghiên cứu...
                  </div>
                </div>
              </div>
            </div>
            <div class="flex space-x-2">
              <img
                src="https://via.placeholder.com/50"
                alt=""
                class="w-12 h-12 rounded object-cover"
              />
              <div>
                <div class="font-semibold">
                  Thị trường "sách số": Thách thức và cơ hội -...
                </div>
                <div class="text-sm text-gray-500">
                  <div>[Thời báo Văn học nghệ thuật - 08-05-2024 08:28]</div>
                  <div>
                    Cuốn sách "Tiểu thuyết Việt Nam qua công trình nghiên cứu...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const slug = route.params.slug;
const postStore = usePostStore();
const post = ref({
  page: 1,
  pageSize: 10,
  category_id: null,
  sort: null,
  
});

useAsyncData(async () => {
  try {
    await postStore.getOnePost(slug);
  } catch (error) {
    console.error(error);
  }
});
useAsyncData(async () => {
  try {
    await postStore.getOnePost({
      page: post.page,
      pageSize: post.pageSize,
      category_id: post.category_id,
    });
  } catch (error) {
    console.error(error);
  }
});
</script>
