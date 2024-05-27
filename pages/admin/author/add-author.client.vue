<template>
  <div>
    <div
      class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden"
    >
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Thêm tác giả</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex flex-col gap-2 w-full pb-4">
        <label class="text-sm font-semibold" for="">Tên tác giả</label>
        <a-input
          size="large"
          type="text"
          class="border rounded-md"
          placeholder="Tên tác giả"
        />
      </div>

      <div class="grid grid-cols-2 gap-4 pb-4">
        <div class="flex flex-col gap-2 w-[100%]">
          <label class="text-sm font-semibold" for="">Trạng thái</label>
          <a-select
            size="large"
            v-model:value="value"
            show-search
            placeholder="Trạng thái"
            :options="options"
            :filter-option="filterOption"
            @focus="handleFocus"
            @blur="handleBlur"
            @change="handleChange"
          ></a-select>
        </div>
        <div class="flex flex-col gap-2 w-[100%]">
          <label class="text-sm font-semibold" for="">SLug</label>
          <a-input   placeholder="slug" class="border p-2 rounded-md" />
        </div>
      </div>
      <div class="flex flex-col gap-2 w-1/5 pb-4">
        <label class="text-sm font-semibold" for="">Ngày đặt</label>
        <a-input type="date" class="border p-2 rounded-md" />
      </div>
      <!-- <div class="flex flex-col gap-2 w-[80%] pb-4">
        <label class="text-sm font-semibold" for="">Nội dung ngắn</label>
        <a-textarea placeholder="Nhập nội dung ngắn" allow-clear />
      </div> -->
      <div class="flex flex-col gap-2 f-full pb-4">
        <label class="text-sm font-semibold" for="">Nội dung</label>
        <CommonCKEditor
          :value="content"
          @input="(event) => (content = event)"
        />
      </div>

      <div>
        <div>
          <a-upload
            v-model:file-list="fileList"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            list-type="picture"
          >
            <a-button class="flex justify-center gap-2 items-center text-base">
              <upload-outlined></upload-outlined>
              upload
            </a-button>
          </a-upload>
        </div>
      </div>
      <div class="flex items-end gap-4 pt-4">
        <a-button danger type="primary"> Hủy</a-button>
        <a-button type="primary"> Lưu</a-button>
      </div>
    </div>
  </div>
</template>
<script setup>
const content = ref("");

const options = ref([
  {
    value: "CNTT",
    label: "CNTT",
  },
  {
    value: "Y dược",
    label: "Y dược",
  },
]);

watchEffect(() => {
  console.log(content);
});

const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const handleBlur = () => {
  console.log("blur");
};
const handleFocus = () => {
  console.log("focus");
};
const filterOption = (input, option) => {
  return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
};
</script>
