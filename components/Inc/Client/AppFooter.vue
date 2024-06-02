<template>
    <div class="bg-[#f8f7fa] dark:bg-[#0f172a]">
        <div class="bg-[#282828] dark:bg-zink-700 overflow-hidden">
            <div class="mx-auto container md:px-20 px-8 py-14">
                <div class="flex justify-between md:flex-row flex-col">
                    <!-- Logo -->
                        <!-- <div class="w-1/2">
                            <img class="w-60" src="../../../assets/images/logo_footer.svg" alt="" />
                        </div> -->
                        <div class="w-1/2 flex justify-start items-center">
                            <img class="w-[170px]" src="../../../assets/images/Readstation.svg" alt="" />
                        </div>
                    <!-- ReadStation -->
                    <div class="w-1/4 flex flex-col gap-3">
                        <h1 class="text-xl font-medium uppercase tesxt-white">ReadStation</h1>
                        <ul class="flex flex-col gap-2">
                            <Nuxt-link to="/rules">
                                <li
                                    class="text-white text-base hover:-translate-y-1 transition-transform hover:text-blue-500">
                                    Điều khoản và dịch vụ
                                </li>
                            </Nuxt-link>
                            <Nuxt-link to="/privacy-policy">
                                <li
                                    class="text-white text-base hover:-translate-y-1 transition-transform hover:text-blue-500">
                                    Chính sách bảo mật
                                </li>
                            </Nuxt-link>
                        </ul>
                    </div>
                    <!-- Phương Thức Thanh Toán -->
                    <div class="w-1/4 flex flex-col gap-5">
                        <h1 class="text-xl font-medium uppercase text-white">Phương Thức Thanh Toán</h1>
                        <div class="flex justify-start gap-5 items-center">
                            <img class="w-14 rounded-md hover:-translate-y-1 hover:scale-110 duration-300"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Old_Visa_Logo.svg/1280px-Old_Visa_Logo.svg.png"
                                alt="" />

                            <img class="w-14 rounded-md hover:-translate-y-1 hover:scale-110 duration-300"
                                src="https://static-00.iconduck.com/assets.00/mastercard-icon-2048x1313-j69pg4er.png"
                                alt="" />

                            <img class="w-16 rounded-md hover:-translate-y-1 hover:scale-110 duration-300"
                                src="https://static.ybox.vn/2021/9/4/1631756121713-1631085786958-Thi%E1%BA%BFt%20k%E1%BA%BF%20kh%C3%B4ng%20t%C3%AAn%20-%202021-09-08T002253.248.png"
                                alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <a-layout-footer style="text-align: center;" class="text-white">
                ©2024 Created by ReadStation
            </a-layout-footer>
        </div>

    </div>
</template>
