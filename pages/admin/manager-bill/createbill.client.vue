<template>
    <div>
        <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-semibold">Thêm hóa đơn</h5>
            </div>
            <CommonBreadcrumAdmin />
        </div>

        <div class="bg-white min-h-[360px] w-full rounded-lg p-5 shadow-sm">
            <div class="flex flex-col gap-5">
                <div class="relative grow">
                    <input type="text"
                        class="w-full border border-gray-300 rounded-md py-2 px-4 pl-10 focus:outline-none focus:border-blue-500"
                        placeholder="Tìm kiếm..." />
                        <div class="text-gray-500 absolute left-2 top-1 text-lg">
                            icon
                        </div>
                   
                </div>
                <div class="flex flex-col gap-3">
                    <h1>Sản phẩm</h1>
                    <div class="">
                        <table class="w-full ">
                            <thead>
                                <tr>
                                    <th class=" text-base font-sm border ">
                                        Mã sản phẩm
                                    </th>
                                    <th class=" text-base font-sm border ">
                                        Mã sản phẩm
                                    </th>
                                    <th class=" text-base font-sm border ">
                                        Mã sản phẩm
                                    </th>
                                    <th class=" text-base font-sm border ">
                                        Mã sản phẩm
                                    </th>
                                    <th class=" text-base font-sm border ">
                                        Mã sản phẩm
                                    </th>
                                    <th class=" text-base font-sm border ">
                                        Mã sản phẩm
                                    </th>
                                    <th class=" text-base font-sm border ">
                                        Mã sản phẩm
                                    </th>
                                
                                </tr>
                            </thead>
                            <tbody class="before:block before:h-3 item-list">
                                <tr>
                                    <td class="text-center">
                                        !23321
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Mã sản phẩm" class="w-full border p-2">
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Mã sản phẩm" class="w-full border p-2">
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Mã sản phẩm" class="w-full border p-2">
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Mã sản phẩm" class="w-full border p-2">
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Mã sản phẩm" class="w-full border p-2">
                                    </td>
                                    <td>
                                        <input type="text" placeholder="Mã sản phẩm" class="w-full border p-2">
                                    </td>
                                    <td>
                                       Xóa
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    </div>
</template>
