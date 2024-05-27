<template>
    <div class="md:py-10 h-auto mx-auto md:px-20 px-8 container">
        <div class=" flex justify-between h-auto gap-5 ">
            <!-- Left -->
            <div class="w-3/4">
                <div class="bg-white h-auto shadow-lg rounded-lg">
                    <div class="p-5 w-full flex flex-col gap-5">
                        <div class="bg-slate-100 rounded-lg h-12">
                            <div class="flex justify-between items-center text-base font-semibold p-3 w-full">
                                <h1 class="w-2/6">Sản phẩm</h1>
                                <h1 class="flex justify-center items-center">Giá bìa</h1>
                                <h1 class="flex justify-center items-center">Phần trăm cọc</h1>
                                <h1 class="flex justify-center items-center">Cọc tạm tính</h1>
                                <h1 class="flex justify-center items-center">Phí dịch vụ</h1>
                                <h1 class="flex justify-center items-center">Tổng tạm tính</h1>
                                <h1 class="h-full flex justify-center items-center"></h1>
                            </div>

                        </div>
                        <!--  -->
                        <div class="flex justify-between items-center">
                            <div class="flex justify-start items-center w-2/6">
                                <div class="min-w-[100px] min-h-[100px]">
                                    <img class="w-24  rounded-md"
                                        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkq--XPUpG5wMjalO5g75ViJHb50FvEtpKNjOU1olwD9t5-53kn5HORepp_dR8ZlPWEsu1ZWPlsZUiVXq1Cp8KKQDIFdwa-mUgwZWqZh2NULBviHRQ9ly_zRdx4mu5SfcmIX5HNA&usqp=CAc"
                                        alt="" />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <div class="text-base font-bold">Cho tôi xin một vé đi tuổi thơ</div>
                                    <div class="text-[14px]">
                                        <div>
                                            <span class="font-bold">Tác giả : </span><span>Nguyễn Nhật Ánh</span>
                                        </div>
                                        <div>
                                            <span class="font-bold">Phiên bản :</span><span> Bìa cứng</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="text-base font-bold flex justify-center">200.000đ</div>
                            <div class="text-base font-bold flex items-center pl-3">
                                10%
                            </div>
                            <div class=" w-1/6 text-base font-bold flex justify-center ">
                                20.000đ
                            </div>
                            <div class="text-base font-bold flex justify-center pr-6">
                                5.000đ
                            </div>
                            <div class=" text-base font-bold text-center flex justify-center">
                                225.000đ
                            </div>
                            <div class="text-center text-2xl text-red-400 flex justify-center ">
                                <UIcon class="text-2xl" name="i-material-symbols-delete-outline-rounded" />
                            </div>
                        </div>
                        <div class="border-solid border border-gray-100 w-full"></div>
                    </div>

                </div>
            </div>
            <!-- Right -->
            <div class="w-1/4 ">
                <div class="bg-white shadow-lg rounded-lg">
                    <div class="p-6 w-full">
                        <div class="flex flex-col gap-5">
                            <div class="text-xl font-semibold">Thông tin đơn hàng</div>
                            <div class="border-solid border border-gray-100 w-full"></div>
                            <div class="flex justify-between items-center">
                                <h1 class=" text-base text-gray-400">Tổng tiền</h1>
                                <h1 class="text-xl font-bold text-[red]">220.000đ</h1>
                            </div>
                            <div class="border-solid border border-gray-100 w-full"></div>
                            <div class="flex flex-col gap-2 ">
                                <p class="text-xs">Phí vận chuyển sẽ được tính ở trang thanh toán.</p>
                                <p class="text-xs">Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</p>
                            </div>
                            <div class="w-full">
                                <nuxt-link to="/account/checkout">
                                    <button class="bg-[red] text-white uppercase text-sm w-full h-8 rounded-lg ">Thanh
                                        toán
                                    </button>
                                </nuxt-link>

                            </div>
                            <div class="flex justify-center">
                                <Nuxt-link to="/shop">
                                    <button
                                        class="flex justify-center text-sm items-center gap-2 hover:text-yellow-500 ">
                                        <UIcon class="text-xl" name="i-material-symbols-turn-left-rounded" />
                                        <h1>Tiếp tục thuê sách </h1>
                                    </button>
                                </Nuxt-link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const value1 = ref("value1");

</script>