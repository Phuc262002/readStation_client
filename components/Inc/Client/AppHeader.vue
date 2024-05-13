import { NuxtLink } from '../../../.nuxt/components';
<template>
    <div class="dark:bg-[#0f172a]">
        <div class="mx-auto container md:px-20 px-8">
            <div class="h-50 py-5">
                <div class="h-max bg-[white] w-full border-2 shadow-lg rounded-full flex justify-between py-3 px-10">
                    <!-- Logo -->
                    <div class=" ">
                        <img class="w-10" src="https://thumbs.dreamstime.com/b/reading-book-logo-designs-164296495.jpg"
                            alt="" />
                    </div>
                    <!-- Menu -->
                    <div class="md:block hidden">
                        <ul class="flex">
                            <li>
                                <NuxtLink to="/">
                                    <a-button class="text-black text-base hover:-translate-y-1 transition-transform"
                                        type="link">Trang chủ</a-button>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/shop"><a-button
                                        class="text-black text-base hover:-translate-y-1 transition-transform"
                                        type="link">Cửa hàng</a-button>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/blog"><a-button
                                        class="text-black text-base hover:-translate-y-1 transition-transform"
                                        type="link">Blog</a-button></NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/"><a-button
                                        class="text-black text-base hover:-translate-y-1 transition-transform"
                                        type="link">Giới thiệu</a-button>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="/"><a-button
                                        class="text-black text-base hover:-translate-y-1 transition-transform"
                                        type="link">Liên hệ</a-button>
                                </NuxtLink>
                            </li>
                            <!-- <li>
                                <NuxtLink to="/"><a-button
                                        class="text-black text-base hover:-translate-y-1 transition-transform"
                                        type="link">Về chúng tôi</a-button>
                                </NuxtLink>
                            </li> -->
                        </ul>
                    </div>
                    <!-- Search -->
                    <div class="relative w-1/4 md:block hidden">
                        <div class="flex">
                            <input type="text"
                                class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
                                placeholder="Tìm kiếm..." />
                            <div class="absolute right-1/4 mt-2 border-solid border border-gray-300 h-6"></div>
                            <button type="button"
                                class="absolute right-0 h-full px-4 text-blue-600 rounded-r-md hover:bg-blue-300 transition-colors focus:outline-none">
                                Tìm kiếm
                            </button>
                        </div>
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <!-- Heroicon name: search -->
                            <SearchOutlined class="text-gray-500" />
                        </div>
                    </div>

                    <!-- Cart && Account -->
                    <div class="md:flex justify-center items-center hidden">
                        <div class="flex justify-center items-center gap-2 mr-4">
                            <div class="text-center">
                                <CommonThemeSelect />
                            </div>
                            <NuxtLink to="/login">
                                <button class="w-32 hover:bg-gray-100 hover:rounded-xl h-10">
                                    <div class="flex justify-center items-center gap-3 text-base">
                                        <SmileOutlined />
                                        <h2>Tài khoản</h2>
                                    </div>
                                </button>
                            </NuxtLink>
                        </div>
                        <div class="border-solid border border-gray-300 h-8"></div>
                        <div class="ml-3">
                           <NuxtLink to="/cart">
                                <button class="relative w-10 hover:bg-blue-100 hover:rounded-xl h-10">
                                    <div class="text-2xl flex justify-center items-center">
                                        <ShoppingOutlined />
                                    </div>
                                    <div
                                        class="absolute top-0 right-0 bg-red-500 text-white w-4 h-4 rounded-full flex justify-center items-center text-xs">
                                        1
                                    </div>
                                </button>
                            </NuxtLink>
                        </div>
                    </div>
                    <!-- Mobie Menu -->
                    <div class="md:hidden block" >
                        <button>
                            <AppMobieHeader/>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
