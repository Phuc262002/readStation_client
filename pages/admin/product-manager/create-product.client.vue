<template>
    <div>
        <div class="flex flex-col gap-2 py-4 md:flex-row md:items-center print:hidden">
            <div class="grow">
                <h5 class="text-xl text-[#1e293b] font-semibold">Tạo đơn hàng</h5>
            </div>
            <CommonBreadcrumAdmin />
        </div>

        <!-- Đây là phần code mẫu body -->
        <div class="bg-white min-h-[360px] w-full rounded-lg p-5">
            <div class="flex flex-col gap-10 ">
                <div class="flex flex-col gap-5">
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Mã đơn hàng</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Ngày đặt</label>
                            <a-input type="date" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Ngày nhận</label>
                            <a-input type="date" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                    </div>
                    <div class="flex justify-between">
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">Label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                        <div class="flex flex-col gap-2 w-1/5">
                            <label class="text-sm font-semibold" for="">label</label>
                            <a-input type="text" class="border p-2 rounded-md" />
                        </div>
                    </div>
                </div>
                <div class="flex justify-end">
                    <button class="bg-[#54cc54] w-1/6 p-1 text-white text-xl rounded-lg">Thêm</button>
                </div>
            </div>

        </div>
    </div>
</template>