<template>
  <div>
    <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
      <div class="grow">
        <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả tác giả</h5>
      </div>
      <CommonBreadcrumAdmin />
    </div>

    <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
      <div class="flex justify-between pb-4">
        <div class="relative w-1/4 md:block hidden">
          <div class="flex">
            <input type="text"
              class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
              placeholder="Tìm kiếm..." />
          </div>
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <UIcon class="text-gray-500" name="i-material-symbols-search" />
          </div>
        </div>
        <div class="">
          <a-button type="primary" @click="showModalAdd">Thêm tác giả</a-button>
          <a-modal v-model:open="openModalAdd" title="Thêm tác giả" :footer="null" style="width: 70% ;">
            <form @submit.prevent="onSubmit">
              <div class="bg-white py-2">
                <div class="grid grid-cols-2 gap-4 pb-4">
                  <div class="flex flex-col gap-2 w-[100%]">
                    <label class="text-sm font-semibold" for="">Tên tác giả</label>
                    <a-input placeholder="Tên tác giả" class="border p-2 rounded-md"
                      v-model:value="ValueAuthor.author" />
                  </div>
                  <div class="flex flex-col gap-2 w-[100%]">
                    <label class="text-sm font-semibold" for="">Ngày, tháng, năm sinh</label>
                    <a-input placeholder="Ngày, tháng, năm sinh" class="border p-2 rounded-md" type="date"
                      v-model:value="ValueAuthor.dob" />
                  </div>
                </div>
                <div class="grid grid-cols-2 gap-4 pb-4">
                  <div class="flex flex-col gap-2 w-[100%]">
                    <label class="text-sm font-semibold" for="">Trạng thái</label>
                    <a-select size="large" v-model:value="ValueAuthor.statusValue" show-search placeholder="Trạng thái"
                      :options="optionsStatus"></a-select>
                  </div>
                  <!-- <div class="flex flex-col gap-2 w-[100%]">
                    <label class="text-sm font-semibold" for="">SLug</label>
                    <a-input placeholder="slug" class="border p-2 rounded-md" v-model:value="slug" />
                  </div> -->
                </div>
                <div class="flex flex-col gap-2 f-full pb-4">
                  <label class="text-sm font-semibold" for="">Nội dung</label>
                  <CommonCKEditor v-model:value="ValueAuthor.description" />
                </div>
                <div class="mt-1">
                  <CommonUploadImg :value="file" @input="(event) => (file = event)" />
                </div>
                <div class="flex justify-end items-end gap-4">
                  <a-button @click="onCancel" type="primary" danger html-type="button" class="mt-4">Hủy</a-button>
                  <a-button type="primary" html-type="submit" class="mt-4">Lưu</a-button>
                </div>
              </div>
            </form>
          </a-modal>
        </div>
      </div>

      <a-table :columns="columns" :data-source="AuthorStore?.AuthorAdmin?.authors">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span> Mã tác giả </span>
          </template>
        </template>

        <template #bodyCell="{ column, record, index }">
          <template v-if="column.key === '#'">
            <a>
              {{ index + 1 }}
            </a>
          </template>
          <template v-if="column.key === 'avatar'">
            <div class="flex justify-start gap-4 items-center">
              <a-avatar :src="record.avatar" :size="80" />
              <span>
                {{ record.author }}
              </span>
            </div>
          </template>
          <template v-if="column.key === 'status'">
            <span>
              <a-tag :color="record.status === 'active' ? 'green' : 'volcano'">
                {{ record.status }}
              </a-tag>
            </span>
          </template>
          <template v-if="column.key === 'is_featured'">
            <span>
              <a-tag :color="record.is_featured ? 'green' : 'gray'">
                <span>
                  <template v-if="record.is_featured">
                    <UIcon class="flex items-center w-5 h-5" name="i-material-symbols-check-box-outline" />
                  </template>
                  <template v-else>
                    <UIcon class="flex items-center w-5 h-5" name="i-material-symbols-cancel-presentation-outline" />
                  </template>
                </span>
              </a-tag>
            </span>

          </template>
          <template v-else-if="column.key === 'action'">
            <div class="flex text-[16px] gap-4">
              <!-- Xem chi tiết -->
              <a-tooltip placement="top" color="gold">
                <template #title>
                  <span>Xem chi tiết</span>
                </template>
                <button @click="showModaDetail(record?.id)"
                  class="group hover:bg-[#faad14]/20 bg-[#e4e1e1] flex items-center justify-center w-8 h-8 rounded-md">
                  <UIcon class="group-hover:text-[#faad14]" name="i-icon-park-outline-eyes" />
                </button>
                <a-modal v-model:open="openModalDetail" title="Xem chi tiết" style="width: 70%;">
       
                    <div class="bg-white py-2">
                      <div class="grid grid-cols-2 gap-4 pb-4">
                        <div class="flex flex-col gap-2 w-[100%]">
                          <label class="text-sm font-semibold" for="">Tên tác giả</label>
                          <a-input placeholder="Tên tác giả" class="border p-2 rounded-md"
                            v-model:value="ValueAuthor.author" />
                        </div>
                        <div class="flex flex-col gap-2 w-[100%]">
                          <label class="text-sm font-semibold" for="">Ngày, tháng, năm sinh</label>
                          <a-input placeholder="Ngày, tháng, năm sinh" class="border p-2 rounded-md" type="date"
                            v-model:value="ValueAuthor.dob" />
                        </div>
                      </div>
                      <div class="grid grid-cols-2 gap-4 pb-4">
                        <div class="flex flex-col gap-2 w-[100%]">
                          <label class="text-sm font-semibold" for="">Trạng thái</label>
                          <a-select size="large" v-model:value="ValueAuthor.statusValue" show-search
                            placeholder="Trạng thái" :options="optionsStatus"></a-select>
                        </div>
                      </div>
                      <div class="flex flex-col gap-2 f-full pb-4">
                        <label class="text-sm font-semibold" for="">Nội dung</label>
                        <CommonCKEditor v-model:value="ValueAuthor.description" />
                      </div>
                      <div class="mt-1">
                        <CommonUploadImg :value="file" @input="(event) => (file = event)" />
                      </div>
                    </div>
                </a-modal>
              </a-tooltip>
              <!-- Sửa tác giả -->
              <a-tooltip placement="top" color="green">
                <template #title>
                  <span>Sửa</span>
                </template>
                <span
                  class="group hover:bg-[green]/20 bg-[#e4e1e1] cursor-pointer flex items-center justify-center w-8 h-8 rounded-md">
                  <div>
                    <button class="flex items-center" @click="showModalEdit">
                      <UIcon class="group-hover:text-[green]" name="i-material-symbols-edit-outline" />
                    </button>
                    <a-modal style="width: 70%;" v-model:open="openModalEdit" title="Sửa">
                      <form @submit.prevent="onSubmit">
                        <div class="bg-white py-2">
                          <div class="grid grid-cols-2 gap-4 pb-4">
                            <div class="flex flex-col gap-2 w-[100%]">
                              <label class="text-sm font-semibold" for="">Tên tác giả</label>
                              <a-input placeholder="Tên tác giả" class="border p-2 rounded-md"
                                v-model:value="ValueAuthor.author" />
                            </div>
                            <div class="flex flex-col gap-2 w-[100%]">
                              <label class="text-sm font-semibold" for="">Ngày, tháng, năm sinh</label>
                              <a-input placeholder="Ngày, tháng, năm sinh" class="border p-2 rounded-md" type="date"
                                v-model:value="ValueAuthor.dob" />
                            </div>
                          </div>
                          <div class="grid grid-cols-2 gap-4 pb-4">
                            <div class="flex flex-col gap-2 w-[100%]">
                              <label class="text-sm font-semibold" for="">Trạng thái</label>
                              <a-select size="large" v-model:value="ValueAuthor.statusValue" show-search
                                placeholder="Trạng thái" :options="optionsStatus"></a-select>
                            </div>
                            <!-- <div class="flex flex-col gap-2 w-[100%]">
                    <label class="text-sm font-semibold" for="">SLug</label>
                    <a-input placeholder="slug" class="border p-2 rounded-md" v-model:value="slug" />
                  </div> -->
                          </div>
                          <div class="flex flex-col gap-2 f-full pb-4">
                            <label class="text-sm font-semibold" for="">Nội dung</label>
                            <CommonCKEditor v-model:value="ValueAuthor.description" />
                          </div>
                          <div class="mt-1">
                            <CommonUploadImg :value="file" @input="(event) => (file = event)" />
                          </div>
                          <div class="flex justify-end items-end gap-4">
                            <a-button @click="onCancel" type="primary" danger html-type="button"
                              class="mt-4">Hủy</a-button>
                            <a-button type="primary" html-type="submit" class="mt-4">Lưu</a-button>
                          </div>
                        </div>
                      </form>
                    </a-modal>
                  </div>
                </span>
              </a-tooltip>
              <!-- Xóa tác giả -->
              <a-tooltip placement="top" color="red">
                <template #title>
                  <span>Xóa</span>
                </template>
                <span
                  class="group hover:bg-[red]/20 bg-[#e4e1e1] flex items-center justify-center cursor-pointer w-8 h-8 rounded-md">
                  <button @click="showDeleteConfirm(record?.id)" class="flex items-center">
                    <UIcon class="group-hover:text-[red]" name="i-material-symbols-delete-outline" />
                  </button>
                  <contextHolder />
                </span>
              </a-tooltip>
            </div>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const baseStore = useBaseStore();
const AuthorStore = useAuthorStore();
const file = ref("");
const [modal, contextHolder] = Modal.useModal();
const uploadFile = async () => {
  console.log(file._rawValue.target.files[0]);
  const formData = new FormData();
  formData.append("image", file._rawValue.target.files[0]);
  const dataUpload = await baseStore.uploadImg(formData);
  console.log(dataUpload);
  return dataUpload.data._rawValue.data.link;
};




const statusValue = ref(null);
const optionsStatus = ref([
  {
    value: "active",
    label: "Active",
  },
  {
    value: "InActive",
    label: "InActive",
  },
  {
    value: "Deleted",
    label: "Deleted",
  },
]);
// const optionsIs_Featured = ref([
//   {
//     value: "true",
//     label: "True",
//   },
//   {
//     value: "false",
//     label: "False",
//   },
// ]);

const ValueAuthor = ref({
  author: "",
  dob: "",
  statusValue: "",
  description: "",
  avatar: ""
});
const isLoading = ref(false);
const getDataAuthor = async () => {
  isLoading.value = true;
  await AuthorStore.getAllAuthor();
  isLoading.value = false;
};
const getAuthorById = async (id : string) => {
  isLoading.value = true;
  await AuthorStore.getAuthorById(id);
  isLoading.value = false;
};
const showModaDetail = (id: string) => {
  getAuthorById(id)
  openModalDetail.value = true;
};
console.log("🚀 ~ showModaDetail ~ showModaDetail:", showModaDetail)

useAsyncData(async () => {
  await getDataAuthor();
});

const onDelete = async (id: string) => {
  await AuthorStore.deleteAuthor(id);
  getDataAuthor()
};

const showDeleteConfirm = (id: string) => {
  modal.confirm({
    title: "Are you sure delete this task?",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      onDelete(id);
    },
    onCancel() {
      console.log("Cancel");
    },
  });
}
const columns = [
  {
    title: "#",
    dataIndex: "#",
    key: "#",
  },
  {
    title: "Tác giả",
    dataIndex: "avatar",
    key: "avatar",
  },
  {
    title: "Ngày, tháng, năm sinh",
    dataIndex: "dob",
    key: "dob",
  },
  {
    title: "Nổi bật",
    dataIndex: "is_featured",
    key: "is_featured",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
  },
];



const openModalEdit = ref<boolean>(false);
const openModalAdd = ref<boolean>(false);
const openModalDetail = ref<boolean>(false);
const showModalAdd = () => {
  openModalAdd.value = true;
};
const showModalEdit = () => {
  openModalEdit.value = true;
};

const onCancel = () => {
  openModalAdd.value = false;
};
const onSubmit = async () => {
  const url = await uploadFile();
  await AuthorStore.createAuthor({
    author: ValueAuthor.value.author,
    dob: ValueAuthor.value.dob,
    statusValue: ValueAuthor.value.statusValue,
    description: ValueAuthor.value.description,
    avatar: url
  })
  getDataAuthor()
  openModalAdd.value = false;
};


</script>
