import { NuxtLink } from '../../../.nuxt/components';
<template>
    <div class="mx-auto  container h-50">
        <div>
            <div class="h-max bg-[white] w-full border-2 shadow-lg rounded-full flex justify-between py-3 px-10">
                <!-- Logo -->
                <div class=" ">
                    <img class="w-10" src="https://thumbs.dreamstime.com/b/reading-book-logo-designs-164296495.jpg"
                        alt="" />
                </div>
                <!-- Menu -->
                <div class="flex ">
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
                            <NuxtLink to="/"><a-button
                                    class="text-black text-base hover:-translate-y-1 transition-transform"
                                    type="link">Giới thiệu</a-button>
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
                <div class="relative w-1/4">
                    <div class="flex">
                        <input type="text"
                            class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
                            placeholder="Tìm kiếm..." />
                        <div class="absolute right-1/4 mt-2 border-solid border border-gray-300 h-6"></div>
                        <button type="button"
                            class=" absolute right-0 h-full px-4 text-blue-600 rounded-r-md hover:bg-blue-300 transition-colors focus:outline-none">
                            Tìm kiếm
                        </button>
                    </div>
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <!-- Heroicon name: search -->
                        <SearchOutlined class="text-gray-500" />
                    </div>
                </div>

                <!-- Cart && Account -->
                <div class="flex justify-center items-center">
                    <div class="flex justify-center items-center gap-2 mr-4">
                        <div class="text-center">
                            <CommonThemeSelect />
                        </div>
                        <NuxtLink to="/login">
                            <button class="w-36 hover:bg-gray-100 hover:rounded-xl hover:border-2  h-10 ">
                            <div class="flex justify-center items-center gap-3 text-xl">
                                <SmileOutlined />
                                <h2>Tài khoản</h2>
                            </div>
                        </button>
                        </NuxtLink>
                     

                    </div>
                    <div class="border-solid  border border-gray-300 h-8"></div>
                    <div class="ml-3">
                        <button class="w-10 hover:bg-blue-200 hover:rounded-xl  hover:border h-10">
                            <div class="text-2xl flex justify-center items-center">
                                <ShoppingOutlined />
                            </div>

                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
