
<template>
    <div class="mx-auto container h-50">
        <div>
            <div class="h-auto bg-[white] w-full border-2 shadow-lg rounded-full flex justify-between py-3 px-10">
                <!-- Logo -->
                <div class=" ">
                    <img class="w-10" src="https://thumbs.dreamstime.com/b/reading-book-logo-designs-164296495.jpg"
                        alt="">
                </div>
                <!-- Menu -->
                <div class="flex pt-1">
                    <ul class="flex">
                        <li>
                            <NuxtLink to="/">
                                <a-button class="text-black text-base hover:-translate-y-1 transition-transform "
                                    type="link">Trang chủ</a-button>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/"><a-button
                                    class="text-black text-base hover:-translate-y-1 transition-transform "
                                    type="link">Cửa hàng</a-button>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/"><a-button
                                    class="text-black text-base hover:-translate-y-1 transition-transform "
                                    type="link">Giới thiệu</a-button>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/"><a-button
                                    class="text-black text-base hover:-translate-y-1 transition-transform "
                                    type="link">Blog</a-button></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/"><a-button
                                    class="text-black text-base hover:-translate-y-1 transition-transform "
                                    type="link">Liên hệ</a-button>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/"><a-button
                                    class="text-black text-base hover:-translate-y-1 transition-transform "
                                    type="link">Về chúng tôi</a-button>
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
                <!-- Search -->
                <div class="relative w-1/4">
                    <div class="flex">
                        <input type="text"
                            class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
                            placeholder="Tìm kiếm...">
                        <div class=" absolute border-solid right-24 mt-2 border border-gray-300 h-7 "></div>
                        <button type="button"
                            class="absolute right-0 h-full  px-4 text-blue-600 rounded-r-md hover:bg-blue-300 transition-colors focus:outline-none">
                            Tìm kiếm
                        </button>
                    </div>
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <!-- Heroicon name: search -->
                        <SearchOutlined class="text-gray-500" />
                    </div>
                </div>


                <!-- Cart && Account -->
                <div class="flex gap-3 items-center">
                    <ul class="flex">
                        <li>
                            <NuxtLink to="/">
                                <a-button class="text-black text-lg mb-1" type="link">
                                    <div class="flex justify-between items-center gap-2">
                                        <SmileOutlined />
                                        <h2>Tài khoản</h2>
                                    </div>
                                </a-button>
                            </NuxtLink>
                        </li>
                        <li>
                            <div class=" border-solid mt-2 border border-gray-300 h-6 "></div>
                        </li>
                        <li>
                            <NuxtLink to="/">
                                <a-button class="text-black text-2xl flex" type="link">
                                        <ShoppingOutlined />                    
                                </a-button>
                            </NuxtLink>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
        <!-- <div>
            <a-select class="w-[100px]" v-model:value="$colorMode.preference">
                <a-select-option value="system">System</a-select-option>
                <a-select-option value="light">Light</a-select-option>
                <a-select-option value="dark">Dark</a-select-option>
                <a-select-option value="sepia">Sepia</a-select-option>
            </a-select>
        </div> -->
    </div>

</template>
