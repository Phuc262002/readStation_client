<template>
    <div class="container mx-auto">
        <UTabs :items="items" class="w-full">
            <template #default="{ item, index, selected }">
              <div class="flex items-center gap-2 relative truncate" @click="">
                
                <UIcon :name="item.icon" class="w-4 h-4 flex-shrink-0" />
        
                <span class="truncate">{{ index + 1 }}. {{ item.label }}</span>
        
                <span v-if="selected" class="absolute -right-4 w-2 h-2 rounded-full bg-primary-500 dark:bg-primary-400" />
              </div>
            </template>
          </UTabs>
      <a-table :columns="columns" :data-source="filteredOrders">
        <template #headerCell="{ column }">
          <template v-if="column.key === 'name'">
            <span>
              <smile-outlined />
              Name
            </span>
          </template>
        </template>
  
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a>
              {{ record.name }}
            </a>
          </template>
          <template v-else-if="column.key === 'tags'">
            <span>
              <a-tag
                v-for="tag in record.tags"
                :key="tag"
                :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"
              >
                {{ tag.toUpperCase() }}
              </a-tag>
            </span>
          </template>
          <template v-else-if="column.key === 'action'">
            <a-dropdown :trigger="['click']">
                <a class="ant-dropdown-link" @click.prevent>
                  Click me
                  <DownOutlined />
                </a>
                <template #overlay>
                  <a-menu>
                    <a-menu-item key="0">
                      <a href="http://www.alipay.com/">1st menu item</a>
                    </a-menu-item>
                    <a-menu-item key="1">
                      <a href="http://www.taobao.com/">2nd menu item</a>
                    </a-menu-item>
                    <a-menu-divider />
                    <a-menu-item key="3">3rd menu item</a-menu-item>
                  </a-menu>
                </template>
              </a-dropdown>
          </template>
        </template>
      </a-table>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed } from 'vue';
  import { SmileOutlined, DownOutlined } from '@ant-design/icons-vue';
  import { Button, Input, Table, Tag, Divider } from 'ant-design-vue';
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
    },
    {
      title: 'Action',
      key: 'action',
    },
  ];
  
  const data = ref([
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]);
  
  const searchQuery = ref('');
  const currentStatus = ref('All Orders');
  const statuses = ['All Orders', 'Pending', 'Delivered', 'Cancelled'];
  
  const filteredOrders = computed(() => {
    return data.value.filter(order => {
      const matchesQuery = order.name.toLowerCase().includes(searchQuery.value.toLowerCase());
      const matchesStatus = currentStatus.value === 'All Orders' || order.tags.includes(currentStatus.value.toLowerCase());
      return matchesQuery && matchesStatus;
    });
  });
  
  const filterOrders = status => {
    currentStatus.value = status;
  };

  const items = [{
  label: 'Getting Started',
  icon: 'i-heroicons-information-circle',
  content: 'This is the content shown for Tab1'
}, {
  label: 'Installation',
  icon: 'i-heroicons-arrow-down-tray',
  content: 'And, this is the content for Tab2'
}, {
  label: 'Theming',
  icon: 'i-heroicons-eye-dropper',
  content: 'Finally, this is the content for Tab3'
}]
  </script>
  
  <style scoped>
  /* Thêm kiểu nếu cần */
  </style>
  