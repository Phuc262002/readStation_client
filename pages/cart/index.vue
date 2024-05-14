<template>
    <div class="md:px-20 px-8 md:container md:mx-auto md:py-10 py-5">
        <div>
            <CommonBreadcrum />
        </div>
        <div class=" flex justify-between h-auto gap-2 my-10">
            <!-- Left -->
            <div class="w-3/4">
                <div class="bg-white h-auto">
                    <div class="p-5 w-full flex flex-col gap-5">
                        <div class="bg-slate-100 rounded-lg h-12">
                            <div class="flex justify-between items-center text-base font-semibold p-3  w-full">
                                <h1 class="w-3/5">Sản phẩm</h1>
                                <h1 class="w-1/4 flex justify-center items-center">Giá</h1>
                                <h1 class="w-1/4 flex justify-center items-center">Số lượng</h1>
                                <h1 class="w-1/4 flex justify-center items-center">Tổng cộng</h1>
                                <h1 class="w-1/4 flex justify-center items-center"></h1>
                            </div>

                        </div>
                        <!--  -->
                        <div class="flex justify-between items-center hover:shadow hover:rounded-lg">
                            <div class="flex justify-start gap-1 items-center w-3/5 pl-3">
                                <div>
                                    <img class="w-24"
                                        src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTkq--XPUpG5wMjalO5g75ViJHb50FvEtpKNjOU1olwD9t5-53kn5HORepp_dR8ZlPWEsu1ZWPlsZUiVXq1Cp8KKQDIFdwa-mUgwZWqZh2NULBviHRQ9ly_zRdx4mu5SfcmIX5HNA&usqp=CAc"
                                        alt="">
                                </div>
                                <div class="flex flex-col gap-2">
                                    <div class="text-base font-bold">Thiên Long</div>
                                    <div class="flex justify-between items-center gap-4">
                                        <div>
                                            <span class="font-bold">Size : </span><span>Large</span>
                                        </div>
                                        <div>
                                            <span class="font-bold">Color :</span><span> Black</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class=" text-base font-bold w-1/4 flex justify-center items-center">$100</div>
                            <div class="flex justify-center items-center gap-2 w-1/4 text-center">
                                <button class="border bg-slate-100 w-10 h-10 rounded-lg text-xl cursor">
                                    -
                                </button>
                                <input class="w-7 h-10 text-center" min="0" value="0">
                                <button class="border bg-slate-100 w-10 h-10 rounded-lg text-xl cursor">
                                    +
                                </button>
                            </div>
                            <div class="text-base font-bold w-1/4 flex justify-center items-center text-[#8231D3]">$100
                            </div>
                            <div class=" w-1/4 text-center">
                        
                            </div>
                        </div>
                      



                    </div>

                </div>
            </div>
            <!-- Right -->
            <div class="w-1/4">
                <div class="bg-white rounded-xl">
                    <div class="card-body p-6 w-full">
                        <h6 class="mb-4 text-xl font-semibold ">Order Summary</h6>
                        <div class="overflow-x-auto flex flex-col gap-3">
                            <table class="w-full ">
                                <tbody class="table-total">
                                    <tr class="flex justify-between ">
                                        <td class="py-2 text-[black] font-semibold dark:text-zink-200">
                                            Subtotal :
                                        </td>
                                        <td class="py-2 text-[black] font-semibold dark:text-zink-200 cart-subtotal">
                                            $488
                                        </td>
                                    </tr>
                                    <tr class="flex justify-between">
                                        <td class="py-2 text-[black] font-semibold dark:text-zink-200">
                                            Discount :
                                        </td>
                                        <td class="py-2 text-[black] font-semibold dark:text-zink-200 cart-tax">
                                            $-20
                                        </td>
                                    </tr>
                                    <tr class="flex justify-between">
                                        <td class="py-2 text-[black] font-semibold dark:text-zink-200">
                                            Shipping Charge :
                                        </td>
                                        <td class="py-2 text-[black] font-semibold dark:text-zink-200 cart-tax">
                                            $30
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="flex flex-col gap-3">
                                <a-select class="w-full" size="large" v-model:value="value1">
                                    <a-select-option value="value1">
                                        <div class="flex justify-start gap-2 items-center text-green-500">
                                            <span><img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAABHNCSVQICAgIfAhkiAAAAVpJREFUOE+lk0FOAkEQRV91AgyuuIHNCYSFYSmcQDyBsIQVnkBvgCtYAjfAE4A7WOkR2hvACtFkykyDjCMhdmKvZjpVv/+v/0vsYjhFuOZwdIWRG2Ltg1TS+4AvxVGIqmKXQw0oDy8xNE6A6gTk9gfSGmWMaAXkKhXFE4IFLg53J0E9AK1DocRVcmfOVdsruxyMdw/qs6t160fjO800q9bVOmKXgzlGHlAsSo98VGe7aSHSz1SfZqp3mWJDw1125kmzZyr6iJgSMbOjYYcy9Y3KHNESRu7QeIXKDKT0P9CkW2iTi6Z8bKb7hywi54HypeclZo5OXK3b8sYUopY37WVUYrt5zQCHy9877Z3HeteTfMeUMT4l939HikxO1+Qjy+d7E2UEuiJfLCcgnu1i4MKY/s7p8b/D6JRYmvvwp4MKlx++pexAvzfk0LjG0CQmMSpdvxBc1TcKxcoXgL2fY8em2T4AAAAASUVORK5CYII="
                                                    alt=""></span>
                                            <h1>Select Coupon</h1>
                                        </div>
                                    </a-select-option>
                                    <a-select-option value="Coupon 1">
                                        <div class="flex justify-start gap-2 items-center  text-green-500">
                                            <span><img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAABHNCSVQICAgIfAhkiAAAAVpJREFUOE+lk0FOAkEQRV91AgyuuIHNCYSFYSmcQDyBsIQVnkBvgCtYAjfAE4A7WOkR2hvACtFkykyDjCMhdmKvZjpVv/+v/0vsYjhFuOZwdIWRG2Ltg1TS+4AvxVGIqmKXQw0oDy8xNE6A6gTk9gfSGmWMaAXkKhXFE4IFLg53J0E9AK1DocRVcmfOVdsruxyMdw/qs6t160fjO800q9bVOmKXgzlGHlAsSo98VGe7aSHSz1SfZqp3mWJDw1125kmzZyr6iJgSMbOjYYcy9Y3KHNESRu7QeIXKDKT0P9CkW2iTi6Z8bKb7hywi54HypeclZo5OXK3b8sYUopY37WVUYrt5zQCHy9877Z3HeteTfMeUMT4l939HikxO1+Qjy+d7E2UEuiJfLCcgnu1i4MKY/s7p8b/D6JRYmvvwp4MKlx++pexAvzfk0LjG0CQmMSpdvxBc1TcKxcoXgL2fY8em2T4AAAAASUVORK5CYII="
                                                    alt=""></span>
                                            <h1>Coupon 1</h1>
                                        </div>
                                    </a-select-option>
                                    <a-select-option value="Coupon 2">
                                        <div class="flex justify-start gap-2 items-center  text-green-500">
                                            <span><img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAABHNCSVQICAgIfAhkiAAAAVpJREFUOE+lk0FOAkEQRV91AgyuuIHNCYSFYSmcQDyBsIQVnkBvgCtYAjfAE4A7WOkR2hvACtFkykyDjCMhdmKvZjpVv/+v/0vsYjhFuOZwdIWRG2Ltg1TS+4AvxVGIqmKXQw0oDy8xNE6A6gTk9gfSGmWMaAXkKhXFE4IFLg53J0E9AK1DocRVcmfOVdsruxyMdw/qs6t160fjO800q9bVOmKXgzlGHlAsSo98VGe7aSHSz1SfZqp3mWJDw1125kmzZyr6iJgSMbOjYYcy9Y3KHNESRu7QeIXKDKT0P9CkW2iTi6Z8bKb7hywi54HypeclZo5OXK3b8sYUopY37WVUYrt5zQCHy9877Z3HeteTfMeUMT4l939HikxO1+Qjy+d7E2UEuiJfLCcgnu1i4MKY/s7p8b/D6JRYmvvwp4MKlx++pexAvzfk0LjG0CQmMSpdvxBc1TcKxcoXgL2fY8em2T4AAAAASUVORK5CYII="
                                                    alt=""></span>
                                            <h1>Coupon 2</h1>
                                        </div>
                                    </a-select-option>
                                    <a-select-option value="Coupon 3">
                                        <div class="flex justify-start gap-2 items-center  text-green-500">
                                            <span><img
                                                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAOCAYAAADABlfOAAAABHNCSVQICAgIfAhkiAAAAVpJREFUOE+lk0FOAkEQRV91AgyuuIHNCYSFYSmcQDyBsIQVnkBvgCtYAjfAE4A7WOkR2hvACtFkykyDjCMhdmKvZjpVv/+v/0vsYjhFuOZwdIWRG2Ltg1TS+4AvxVGIqmKXQw0oDy8xNE6A6gTk9gfSGmWMaAXkKhXFE4IFLg53J0E9AK1DocRVcmfOVdsruxyMdw/qs6t160fjO800q9bVOmKXgzlGHlAsSo98VGe7aSHSz1SfZqp3mWJDw1125kmzZyr6iJgSMbOjYYcy9Y3KHNESRu7QeIXKDKT0P9CkW2iTi6Z8bKb7hywi54HypeclZo5OXK3b8sYUopY37WVUYrt5zQCHy9877Z3HeteTfMeUMT4l939HikxO1+Qjy+d7E2UEuiJfLCcgnu1i4MKY/s7p8b/D6JRYmvvwp4MKlx++pexAvzfk0LjG0CQmMSpdvxBc1TcKxcoXgL2fY8em2T4AAAAASUVORK5CYII="
                                                    alt=""></span>
                                            <h1>Coupon 3</h1>
                                        </div>
                                    </a-select-option>
                                </a-select>
                                <div class="flex flex-col gap-3">
                                    <h1>Promo Code</h1>
                                    <div class="flex justify-center gap-3">
                                        <div>
                                            <a-input size="large" placeholder="Promo code" />
                                        </div>
                                        <div>
                                            <button
                                                class="w-20 border boder-1 h-10 rounded-md border-green-500 border-1 font-semibold hover:text-[green] text-green-500">Apply</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-between">
                                    <h1 class="font-semibold">Total : </h1>
                                    <span class="text-[#8231D3] text-base font-extrabold">$498</span>
                                </div>
                            </div>
                            <div>
                                <button
                                    class="w-full bg-[#8231D3] text-white font-semibold rounded-md h-10 mt-4">Proceed to
                                    Checkout</button>
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