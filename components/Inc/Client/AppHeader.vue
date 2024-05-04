<template>
    <div class="h-[60px] items-center justify-around flex bg-teal-200">
        <div>Client</div>
        <div>
            <ul class="flex gap-10">
                <li>
                    <NuxtLink to="/admin">
                        <a-button type="link">Admin</a-button>
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/"
                        ><a-button type="link">Client</a-button></NuxtLink
                    >
                </li>
                <li>
                    <NuxtLink to="/login"
                        ><a-button type="link">Login</a-button></NuxtLink
                    >
                </li>
            </ul>
        </div>
        <div>
            <a-select class="w-[100px]" v-model:value="$colorMode.preference">
                <a-select-option value="system">System</a-select-option>
                <a-select-option value="light">Light</a-select-option>
                <a-select-option value="dark">Dark</a-select-option>
                <a-select-option value="sepia">Sepia</a-select-option>
            </a-select>
        </div>
    </div>
</template>
