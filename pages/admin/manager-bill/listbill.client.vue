<template>
    <div>
        <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-semibold">Tất cả hóa đơn</h5>
            </div>
            <CommonBreadcrumAdmin />
        </div>

        <div class=" min-h-auto w-full rounded-lg shadow-sm">
            <div class="flex justify-between gap-4">
                <div class="w-1/4 bg-white auto flex flex-col p-5 gap-5 rounded-lg">
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col">
                            <h1 class="text-xl font-bold">Invoice List</h1>
                        </div>
                        <div class="flex items-center gap-2">
                            <div class="relative grow">
                                <input type="text"
                                    class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
                                    placeholder="Tìm kiếm..." />
                                <SearchOutlined class="text-gray-500 absolute left-2 top-1 text-lg" />
                            </div>
                            <button type="button"
                                class=" rounded-lg flex items-center justify-center size-[37.5px] p-0 text-sky-500 btn bg-sky-100 hover:text-white hover:bg-sky-600 focus:text-white focus:bg-sky-600 focus:ring focus:ring-sky-100 active:text-white active:bg-sky-600 active:ring active:ring-sky-100 dark:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500 dark:hover:text-white dark:focus:bg-sky-500 dark:focus:text-white dark:active:bg-sky-500 dark:active:text-white dark:ring-sky-400/20">
                                <IoIosOptions class="text-lg font-semibold" />
                            </button>
                        </div>
                    </div>
                    <div class="border-t p-5">
                        <div class="float-right">
                            <span
                                class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">Paid</span>
                        </div>
                        <h6 class="text-base font-semibold">#TW15090251</h6>
                        <div class="flex">
                            <div class="grow">
                                <h6 class="mt-3 mb-1 text-16 text-base font-semibold">Paula Keenan</h6>
                                <p class="text-slate-500 dark:text-zink-200 text-base">$873.96</p>
                            </div>
                            <p class="self-end mb-0 text-slate-500 dark:text-zink-200 shrink-0 flex items-center gap-2">
                                <IoMdCalendar class="text-base" />
                                <span class="align-middle text-base">21 Jan, 2024</span>
                            </p>
                        </div>
                    </div>
                    <div class="border-t p-5">
                        <div class="float-right">
                            <span
                                class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">Paid</span>
                        </div>
                        <h6 class="text-base font-semibold">#TW15090251</h6>
                        <div class="flex">
                            <div class="grow">
                                <h6 class="mt-3 mb-1 text-16 text-base font-semibold">Paula Keenan</h6>
                                <p class="text-slate-500 dark:text-zink-200 text-base">$873.96</p>
                            </div>
                            <p class="self-end mb-0 text-slate-500 dark:text-zink-200 shrink-0 flex items-center gap-2">
                                <IoMdCalendar class="text-base" />
                                <span class="align-middle text-base">21 Jan, 2024</span>
                            </p>
                        </div>
                    </div>
                    <div class="border-t p-5">
                        <div class="float-right">
                            <span
                                class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">Paid</span>
                        </div>
                        <h6 class="text-base font-semibold">#TW15090251</h6>
                        <div class="flex">
                            <div class="grow">
                                <h6 class="mt-3 mb-1 text-16 text-base font-semibold">Paula Keenan</h6>
                                <p class="text-slate-500 dark:text-zink-200 text-base">$873.96</p>
                            </div>
                            <p class="self-end mb-0 text-slate-500 dark:text-zink-200 shrink-0 flex items-center gap-2">
                                <IoMdCalendar class="text-base" />
                                <span class="align-middle text-base">21 Jan, 2024</span>
                            </p>
                        </div>
                    </div>


                </div>
                <div class="w-3/4  bg-white h-auto rounded-lg">
                    <div class="flex flex-col p-5 gap-4">
                        <div>
                            <div class="flex flex-col gap-5 md:items-center md:flex-row">
                                <div class="grow">
                                    <h6 class="mb-1 text-xl font-bold">#TW15090257</h6>
                                    <ul class="flex items-center gap-3">
                                        <li class="text-slate-500 dark:text-zink-200 text-sm">Create: 10 July, 2023</li>
                                        <li class="text-slate-500 dark:text-zink-200 text-sm">Due: 10 July, 2023</li>
                                    </ul>
                                </div>
                                <div class="flex items-center gap-2">
                                    <button type="button"
                                        class=" flex  gap-2 items-center w-full bg-blue-500 p-2 rounded-lg text-white">
                                        <IoIosSave class="text-xl" /><span class="align-middle">Save & Print</span>
                                    </button>
                                    <a-dropdown>
                                        <a class="ant-dropdown-link" @click.prevent>
                                            <button
                                                class="flex items-center justify-center rounded-lg w-10 h-10 dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                                                id="categoryNotes1" data-bs-toggle="dropdown">
                                                <IoIosMore />
                                            </button>

                                        </a>
                                        <template #overlay>
                                            <a-menu>
                                                <NuxtLink>
                                                    <a-menu-item>
                                                        <a href="" class="w-6">Sửa</a>
                                                    </a-menu-item>
                                                </NuxtLink>
                                                <NuxtLink>
                                                    <a-menu-item>
                                                        <a href="" class="w-40">Xóa</a>
                                                    </a-menu-item>
                                                </NuxtLink>
                                            </a-menu>
                                        </template>
                                    </a-dropdown>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-100 h-auto rounded-lg p-8 flex flex-col gap-3">
                            <div class="grid grid-cols-1 gap-5 xl:grid-cols-12">
                                <div class="text-center xl:col-span-2 ltr:xl:text-left rtl:xl:text-right">
                                    <div
                                        class="flex items-center justify-center mx-auto rounded-md size-16 bg-slate-100 dark:bg-zink-600 xl:mx-0">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi41IChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMDk0N0MyMDY4QjcxMUVFOTYxN0Q1OTIxQkQxNzgwRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMDk0N0MyMTY4QjcxMUVFOTYxN0Q1OTIxQkQxNzgwRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYwOTQ3QzFFNjhCNzExRUU5NjE3RDU5MjFCRDE3ODBEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYwOTQ3QzFGNjhCNzExRUU5NjE3RDU5MjFCRDE3ODBEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iIlVCAAACB1JREFUeNrsXGts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"
                                            alt="" class="h-8">
                                    </div>
                                    <h5 class="mt-4 mb-1 text-xl font-bold">Themesdesign</h5>
                                    <p class="text-slate-500 text-left">IT Software Company</p>
                                </div><!--end col-->
                                <div class="text-right  xl:col-start-10 xl:col-span-3">
                                    <p class="mb-1 text-slate-500 dark:text-zink-200">Legal Registration No: <span
                                            class="font-semibold">2155420</span></p>
                                    <p class="mb-1 truncate text-slate-500 dark:text-zink-200">Email: <span
                                            class="font-semibold">tailwick@themesdesign.com</span></p>
                                    <p class="mb-1 text-slate-500 dark:text-zink-200">Website: <a
                                            href="https://themesdesign.in/" target="_blank"
                                            class="font-semibold underline text-custom-500">www.themesdesign.in</a></p>
                                    <p class="text-slate-500 dark:text-zink-200">Contact No: <span
                                            class="font-semibold">+(01) 123 678
                                            9654</span></p>
                                </div><!--end col-->
                            </div>
                            <div class=" flex justify-between items-center gap-5 mt-5 px-6">
                                <div class="flex flex-col gap-1 items-center">
                                    <h1 class="text-sm font-bold">#TW15090254</h1>
                                    <span class="text-gray-500">Invoice No</span>
                                </div>
                                <div class="flex flex-col gap-1 items-center">
                                    <h1 class="text-sm font-bold">10 July, 2023</h1>
                                    <span class="text-gray-500">Create Date</span>
                                </div>
                                <div class="flex flex-col gap-1 items-center">
                                    <span
                                class="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">Paid</span>
                                    <span class="text-gray-500">Payment Status</span>
                                </div>
                                <div class="flex flex-col gap-1 items-center">
                                    <h1 class="text-sm font-bold">$873.96</h1>
                                    <span class="text-gray-500">Total Amount</span>
                                </div>
                                
                            </div>
                            <div class="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
                                        <div>
                                            <p class="mb-2 text-sm uppercase text-slate-500 dark:text-zink-200">Shipping Address</p>
                                            <h6 class="mb-1 text-base font-bold">Paula Keenan</h6>
                                            <p class="mb-1 text-slate-500 dark:text-zink-200">176 Arvid Crest Sheastad, IA</p>
                                            <p class="mb-1 text-slate-500 dark:text-zink-200">+(211) 0123 456 897</p>
                                        </div><!--end col-->
                                        <div>
                                            <p class="mb-2 text-sm uppercase text-slate-500 dark:text-zink-200">Billing Address</p>
                                            <h6 class="mb-1 text-base font-bold">Paula Keenan</h6>
                                            <p class="mb-1 text-slate-500 dark:text-zink-200">176 Arvid Crest Sheastad, IA</p>
                                            <p class="mb-1 text-slate-500 dark:text-zink-200">+(211) 0123 456 897</p>
                                            <p class="mb-1 text-slate-500 dark:text-zink-200">TAX No. 5415421</p>
                                        </div><!--end col-->
                                    </div><!--end grid-->

                                    <div class="mt-6 overflow-x-auto">
                                        <table class="w-full whitespace-nowrap">
                                            <thead class="">
                                                <tr>
                                                    <th class=" w-1/5 font-semibold text-slate-500 dark:text-zink-200 border-b border-slate-200 dark:border-zink-500">#</th>
                                                    <th class=" w-1/5 font-semibold text-slate-500 dark:text-zink-200 border-b border-slate-200 dark:border-zink-500">Item Name</th>
                                                    <th class=" w-1/5 font-semibold text-slate-500 dark:text-zink-200 border-b border-slate-200 dark:border-zink-500">Rate</th>
                                                    <th class=" w-1/5 font-semibold text-slate-500 dark:text-zink-200 border-b border-slate-200 dark:border-zink-500">Quantity</th>
                                                    <th class=" w-1/5 font-semibold text-slate-500 dark:text-zink-200 border-b border-slate-200 dark:border-zink-500">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="px-3.5 py-2.5 text-center  border-b border-slate-200 dark:border-zink-500 text-sm font-bold">1</td>
                                                    <td class="px-3.5 py-2.5 text-left  border-b border-slate-200 dark:border-zink-500">
                                                        <h6 class="mb-1 text-sm font-bold">Webadmin - Premium Admin & Dashboard</h6>
                                                        <p class="text-slate-500 dark:text-zink-200">Build with Bootstrap, React JS, Angular, Vue etc.</p>
                                                    </td>
                                                    <td class="px-3.5 py-2.5 text-center  border-b border-slate-200 dark:border-zink-500 font-semibold">$24.00</td>
                                                    <td class="px-3.5 py-2.5 text-center  border-b border-slate-200 dark:border-zink-500 font-semibold">2</td>
                                                    <td class="px-3.5 py-2.5 text-center  border-b border-slate-200 dark:border-zink-500 font-semibold">$48</td>
                                                </tr>
                                                <tr>
                                                    <td class="px-3.5 py-2.5 text-center  border-b border-slate-200 dark:border-zink-500 text-sm font-bold">1</td>
                                                    <td class="px-3.5 py-2.5 text-left  border-b border-slate-200 dark:border-zink-500">
                                                        <h6 class="mb-1 text-sm font-bold">Webadmin - Premium Admin & Dashboard</h6>
                                                        <p class="text-slate-500 dark:text-zink-200">Build with Bootstrap, React JS, Angular, Vue etc.</p>
                                                    </td>
                                                    <td class="px-3.5 py-2.5 text-center  border-b border-slate-200 dark:border-zink-500 font-semibold">$24.00</td>
                                                    <td class="px-3.5 py-2.5 text-center  border-b border-slate-200 dark:border-zink-500 font-semibold">2</td>
                                                    <td class="px-3.5 py-2.5 text-center  border-b border-slate-200 dark:border-zink-500 font-semibold">$48</td>
                                                </tr>
                                            </tbody>
                                            <tbody class="before:block before:h-3">
                                                <tr>
                                                    <td colspan="3"></td>
                                                    <td class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                        Sub Total
                                                    </td>
                                                    <td class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                        $292
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3"></td>
                                                    <td class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                        Estimated Tax (18%)
                                                    </td>
                                                    <td class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                        $52.56
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3"></td>
                                                    <td class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                        Item Discounts (15%)
                                                    </td>
                                                    <td class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                        -$43.8
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3"></td>
                                                    <td class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                        Shipping Charge
                                                    </td>
                                                    <td class="border-b border-slate-200 px-3.5 py-2.5 text-slate-500 dark:border-zink-500 dark:text-zink-200">
                                                        $29
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colspan="3"></td>
                                                    <td class=" font-semibold text-base border-b border-slate-200 px-3.5 py-2.5  dark:border-zink-500">
                                                        Total Amount
                                                    </td>
                                                    <td class=" font-semibold text-base border-b border-slate-200 px-3.5 py-2.5  dark:border-zink-500">
                                                        $329.76
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div class="my-5">
                                        <p class="mb-2 text-sm uppercase text-slate-500 dark:text-zink-200">Payments Details</p>
                                        <p class="mb-1 text-slate-500 dark:text-zink-200">Payment Method: Credit Card</p>
                                        <p class="mb-1 text-slate-500 dark:text-zink-200">Card Holder: Paula Keenan</p>
                                        <p class="mb-1 text-slate-500 dark:text-zink-200">Card Number: xxxx xxxx xxxx 1402</p>
                                        <p class="mb-0 text-slate-500 dark:text-zink-200">Total Amount: $755.96</p>
                                    </div>

                                    <div class="px-4 py-3 text-sm border rounded-md border-sky-200 text-sky-500 bg-sky-50 dark:bg-sky-400/20 dark:border-sky-500/50">
                                        <span class="font-bold">NOTES:</span> All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed quoted fee noted above.
                                    </div>
                        </div>
                        
                    </div>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>
import { IoIosOptions } from 'vue3-icons/io'
import { IoMdCalendar } from 'vue3-icons/io'
import { IoIosMore } from 'vue3-icons/io'
import { IoIosSave } from 'vue3-icons/io'
</script>
