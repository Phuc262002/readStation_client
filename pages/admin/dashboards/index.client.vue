<template>
    <div>
        <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-semibold">Dashboards</h5>
            </div>
            <CommonBreadcrumAdmin />
        </div>

        <!-- Đây là phần code mẫu body -->
        <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
            <div class="flex flex-col gap-5">
                <div class="grid grid-cols-4 gap-10">
                    <div class="w-48 h-40 bg-[#D2F4EE] relative rounded-lg">
                        <div class="p-6 flex flex-col gap-5">
                            <button class="w-10 h-10 bg-[#249782] rounded-lg">
                                <!-- Icon -->
                            </button>
                            <h1 class="text-base">User</h1>
                            <span class="text-base">10.000</span>
                        </div>
                    </div>
                    <div class="w-48 h-40 bg-[#FFEDD5] relative rounded-lg">
                        <div class="p-6 flex flex-col gap-5">
                            <button class="w-10 h-10 bg-[#F97316] rounded-lg">
                                <!-- Icon -->
                            </button>
                            <h1 class="text-base">User</h1>
                            <span class="text-base">10.000</span>
                        </div>
                    </div>
                    <div class="w-48 h-40 bg-[#E0F2FE] relative rounded-lg">
                        <div class="p-6 flex flex-col gap-5">
                            <button class="w-10 h-10 bg-[#0EA5E9] rounded-lg">
                                <!-- Icon -->
                            </button>
                            <h1 class="text-base">User</h1>
                            <span class="text-base">10.000</span>
                        </div>
                    </div>
                    <div class="w-48 h-40 bg-[#F3E8FF] relative rounded-lg">
                        <div class="p-6 flex flex-col gap-5">
                            <button class="w-10 h-10 bg-[#A855F7] rounded-lg">
                                <!-- Icon -->
                            </button>
                            <h1 class="text-base">User</h1>
                            <span class="text-base">10.000</span>
                        </div>
                    </div>
                </div>
                <div>
                   <!-- Chart -->
                </div>
                <div>
                    
                </div>
            </div>


        </div>
    </div>
</template>
