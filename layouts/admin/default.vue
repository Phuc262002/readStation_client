<template>
    <a-layout style="min-height: 100vh">
        <IncAdminSidebarAdmin :collapsed="collapsed" />
        <a-layout>
            <IncAdminAppHeader :collapsed="changeCollapsed" :collapsedValue="collapsed"/>
            <a-layout-content :style="{
                padding: '0 24px',
                background: '#f1f5f9',
            }">
                <CommonBreadcrum />
                <div
                    :style="{
                        padding: '24px',
                        borderRadius: '8px',
                        background: '#fff',
                        minHeight: '360px',
                    }"
                >
                    <slot />
                </div>
            </a-layout-content>
            <IncAdminAppFooter />
        </a-layout>
    </a-layout>
</template>

<script setup lang="ts">
const collapsed = ref<boolean>(false);

const changeCollapsed = () => {
    collapsed.value = !collapsed.value;
};  
</script>