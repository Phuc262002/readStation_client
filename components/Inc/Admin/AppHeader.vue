<template>
    <a-layout-header class="!bg-white !px-6 flex items-center justify-between">
        <div>
            <menu-unfold-outlined
                v-if="props.collapsedValue"
                class="trigger p-3 rounded-lg hover:bg-[#f1f5f9]"
                @click="changeCollapsed"
            />
            <menu-fold-outlined
                v-else
                class="trigger p-3 rounded-lg hover:bg-[#f1f5f9]"
                @click="changeCollapsed"
            />
        </div>
        <div class="">Header</div>
    </a-layout-header>
</template>

<script lang="ts" setup>
const props = defineProps<{
    collapsed: any;
    collapsedValue: any;
}>();

const changeCollapsed = () => {
    props.collapsed();
};
</script>
