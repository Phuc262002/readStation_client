<template>
  <div>
    <h3 class="font-bold">Bài viết đã bình luận</h3>

    <div class="p-5 bg-white mt-5 shadow-lg rounded-xl">
      <a-table
        :columns="columns"
        :data-source="commentStore?.comments?.comments"
        :pagination="false"
      >
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Bài viết </span>
          </template>
        </template>

        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'title'">
            <a>
              {{ record.post?.title }}
            </a>
          </template>
          <!--  -->
          <template v-if="column.key === 'created_at'">
            <a>
              {{ $dayjs(record.post?.created_at).format("DD/MM/YYYY - HH:MM") }}
            </a>
          </template>

          <!--  -->
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <span>
                <a-tooltip placement="top">
                  <template #title>
                    <span>Xem chi tiết</span>
                  </template>
                  <button
                    @click="showModal(record.id)"
                    class="group hover:bg-[#212122]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                  >
                    <div class="flex items-center">
                      <UIcon
                        class="group-hover:text-[#212122]"
                        name="i-icon-park-outline-eyes"
                      />
                    </div>
                  </button>
                </a-tooltip>
              </span>
              <AccountFormPostDetail
                :openModal="openModal"
                :closeModal="closeModal"
                :postDetailId="postDetailId"
              />

              <a-dropdown :trigger="['click']" placement="bottom">
                <button
                  class="group hover:bg-[#131313]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md"
                >
                  <UIcon
                    class="group-hover:text-[#131313]"
                    name="i-solar-menu-dots-bold"
                  />
                </button>
                <template #overlay>
                  <a-menu>
                    <NuxtLink to="">
                      <a-menu-item key="2" class="p-4">
                        <span class="flex items-center gap-2 text-blue-400">
                          <UIcon
                            class="group-hover:text-[green]"
                            name="i-material-symbols-edit-outline"
                          />
                          <span>Sửa</span>
                        </span>
                      </a-menu-item>
                    </NuxtLink>

                    <a-menu-item key="3" class="p-4">
                      <span>
                        <button class="flex items-center gap-1 text-blue-400">
                          <UIcon
                            class="group-hover:text-[red] text-lg"
                            name="i-material-symbols-delete-outline"
                          />
                          <span>Xóa</span>
                        </button>
                      </span>
                    </a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
            </div>
          </template>
          <!--  -->
        </template>
      </a-table>
      <div class="mt-4 flex justify-end">
        <a-pagination
          v-model:current="current"
          :total="commentStore?.comments?.totalResults"
          :pageSize="commentStore?.comments?.pageSize"
          show-less-items
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const commentStore = useCommentClientStore();
const current = ref(1);
useAsyncData(
  async () => {
    try {
      await commentStore.getAllComment({
        page: current.value,
        // pageSize: 1,
      });
    } catch (error) {
      console.log("error", error);
    }
  },
  {
    immediate: true,
    watch: [current],
  }
);
const columns = [
  {
    title: "Bài viết",
    dataIndex: "title",
    key: "title",
    width: "400px",
  },
  {
    title: "Nội dung bình luận",
    dataIndex: "content",
    key: "content",
  },
  {
    title: "Thời gian bình luận",
    key: "created_at",
    dataIndex: "created_at",
  },
  {
    title: "Thao tác",
    key: "action",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
</script>
