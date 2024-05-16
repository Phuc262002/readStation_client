<template>
    <a-layout-header
        class="!bg-white !px-6 flex items-center right-0 justify-between fixed h-[4.375rem] transition-all ease-linear"
        :class="props.collapsedValue ? 'left-20' : 'left-[theme(padding.sidebar)]'"
    >
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
        <div class="flex items-center gap-5">
            <CommonThemeSelect />
            <div>Header</div>
        </div>
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
