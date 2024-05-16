<template>
    <div>
        <IncClientAppHeader/>
        <div class="min-h-[90vh] bg-[#f8f7fa] dark:bg-[#0f172a] pt-24">
            <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
                <slot />
            </div>
        </div>
        <IncClientAppFooter />
    </div>
</template>