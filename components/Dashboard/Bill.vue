<template>
  <div class="space-y-1 cursor-pointer">
    <div class="flex justify-between">
      <p>{{ props.dashboard?.invoice_code }}</p>
      <a-tag :bordered="false" class="bg-tag-bg-09 text-tag-text-09 m-0">{{
        props.dashboard?.status
      }}</a-tag>
    </div>
    <div class="flex justify-between items-center text-sm">
      <p>Người nhận: {{ props.dashboard?.user?.fullname }}</p>
      <p>Tổng tiền: {{ props.dashboard?.total }} đ</p>
      <p>
        {{ dayjs(props.dashboard?.created_at).format(" DD/MM/YYYY - HH:mm") }}
      </p>
    </div>
  </div>
  <hr class="my-2" />
</template>
<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const props = defineProps(["dashboard"]);
</script>
