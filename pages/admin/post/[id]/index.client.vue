<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Bài viết chi tiết</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <!-- Đây là phần code mẫu body -->
    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 space-y-4">
      <div class="flex justify-between gap-4">
        <div class="grow">
          <h1 class="font-bold text-xl">Bài viết số 1</h1>
        </div>
        <div class="flex gap-4">
          <a-tooltip placement="top" color="red">
            <template #title>
              <span>Hủy</span>
            </template>
            <span
              class="group hover:bg-[red]/20 flex items-center justify-center w-10 h-10 rounded-md"
            >
              <UIcon
                class="group-hover:text-[red] text-2xl"
                name="i-material-symbols-close-small-outline"
              />
            </span>
          </a-tooltip>
          <a-tooltip placement="top" color="gold">
            <template #title>
              <span>Sửa</span>
            </template>
            <span
              class="group hover:bg-[#faad14]/20 flex items-center justify-center w-10 h-10 rounded-md"
              ><UIcon
                class="group-hover:text-[#faad14]"
                name="i-material-symbols-edit-rounded"
            /></span>
          </a-tooltip>
        </div>
      </div>
      <div class="flex border border-transparent border-b-gray-300 pb-2">
        <div class="w-1/5">
          <h4 class="font-bold">Tên người viết</h4>
        </div>
        <div class="w-4/5">Huỳnh Tuấn Kiệt</div>
      </div>
      <div class="flex border border-transparent border-b-gray-300 pb-2">
        <div class="w-1/5">
          <h4 class="font-bold">Tên bài viết</h4>
        </div>
        <div class="w-4/5">Bài viết số 1</div>
      </div>
      <div class="flex border border-transparent border-b-gray-300 pb-2">
        <div class="w-1/5">
          <h4 class="font-bold">Hình ảnh</h4>
        </div>
        <div class="w-4/5">
          <img
          width="150px"
            src="https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="flex border border-transparent border-b-gray-300 pb-2">
        <div class="w-1/5">
          <h4 class="font-bold">Trạng thái</h4>
        </div>
        <div class="w-4/5">active</div>
      </div>
      <div class="flex border border-transparent border-b-gray-300 pb-2">
        <div class="w-1/5">
          <h4 class="font-bold">Nội dung</h4>
        </div>
        <div class="w-4/5">Change arrow's visible state and change whether the arrow is pointed at the center of target.</div>
      </div>
      <div class="flex border border-transparent border-b-gray-300 pb-2">
        <div class="w-1/5">
          <h4 class="font-bold">Trạng thái</h4>
        </div>
        <div class="w-4/5">active</div>
      </div>
    </div>
  </div>
</template>
<script></script>
