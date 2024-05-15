<template>
   <a-layout-sider v-model:collapsed="props.collapsed" :trigger="null" collapsible class="!fixed h-full !bg-white dark:!bg-[#132337] !border-r border-r-[#e2e8f0]">
            <div class="bg-red-400 h-8 m-4" />
            <a-menu
                v-model:selectedKeys="selectedKeys"
                :theme="$colorMode.value === 'dark' ? 'dark' : 'light'"
                mode="inline"
                class="!border-0 dark:!bg-[#132337] dark:!text-white"
            >
                <a-menu-item key="1">
                    <pie-chart-outlined />
                    <span>Option 1</span>
                </a-menu-item>
                <a-menu-item key="2">
                    <desktop-outlined />
                    <span>Option 2</span>
                </a-menu-item>
                <a-sub-menu key="sub1">
                    <template #title>
                        <span>
                            <user-outlined />
                            <span>User</span>
                        </span>
                    </template>
                    <a-menu-item key="3">Tom</a-menu-item>
                    <a-menu-item key="4">Bill</a-menu-item>
                    <a-menu-item key="5">Alex</a-menu-item>
                </a-sub-menu>
                <a-sub-menu key="sub2">
                    <template #title>
                        <span>
                            <team-outlined />
                            <span>Team</span>
                        </span>
                    </template>
                    <a-menu-item key="6">Team 1</a-menu-item>
                    <a-menu-item key="8">Team 2</a-menu-item>
                </a-sub-menu>
                <a-menu-item key="9">
                    <file-outlined />
                    <span>File</span>
                </a-menu-item>
            </a-menu>
        </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from "vue";
const props = defineProps<{
    collapsed: boolean;
}>();
const selectedKeys = ref<string[]>(["1"]);
</script>