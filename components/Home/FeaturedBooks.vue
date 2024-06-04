<template>
    <div class="bg-orange-100">
        <div class="px-5 py-7">
            <div class="flex justify-between gap-20 w-full  h-auto mx-auto container md:px-20 px-8">
                <!-- left -->
                <div class="flex flex-col gap-10 w-1/2">
                    <div class="flex flex-col justify-start gap-5">
                        <h1 class="text-3xl font-bold">Sách đặc sắc</h1>
                        <h1 class="text-balck">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quam
                            assumenda voluptates sunt maxime eos nam. Ducimus laborum magni dolorem adipisci quasi,
                            id
                            inventore assumenda reiciendis expedita nobis dicta ratione!</h1>
                    </div>
                    <div class="bg-white rounded-lg h-auto">
                        <div class=" p-5 w-full flex justify-center gap-10">
                            <div class="w-1/3 pt-16">
                                <img class="rounded-lg"
                                    src="https://images.unsplash.com/photo-1585923035139-4f1e0cb749f5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9vayUyMG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
                                    alt="">
                            </div>
                            <div class="w-1/2 flex flex-col gap-5">
                                <div class="flex justify-start gap-4">
                                    <div class=" w-16 h-14">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR4XvFQkfMWEm-2hwoGI7UA8BT3jDzHHJJgR2HeIGECfpVdyZn"
                                            alt="">
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <h1 class="text-xl font-bold">Battle Drive</h1>
                                        <h1 class="text-violet-400">ABCDEFGH</h1>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-5">
                                    <div>
                                        <h1 class="text-xl font-bold">Mô tả</h1>
                                    </div>
                                    <div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptatibus
                                            officia voluptas tempora facilis
                                        </p>
                                    </div>
                                    <div class="grid grid-cols-2 gap-1">
                                        <h1 class="text-[gray]">Tác giả</h1>
                                        <h1 class="text-[gray]">Xuất bản năm</h1>
                                        <h1 class="font-bold">An Khương</h1>
                                        <h1 class="font-bold">2025</h1>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center">
                                    <h1 class="font-bold text-xl">200.000đ</h1>
                                    <button class="bg-rtprimary hover:bg-orange-300 w-1/2 h-11 rounded-lg  text-white">Thuê
                                        Ngay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Right -->
                <div class="w-1/2 grid grid-cols-3 gap-4">
                    <CommonHomeFeaturedBooks/>
                    <CommonHomeFeaturedBooks/>
                    <CommonHomeFeaturedBooks/>
                    <CommonHomeFeaturedBooks/>
                    <CommonHomeFeaturedBooks/>
                    <CommonHomeFeaturedBooks/>
                </div>
            </div>
        </div>
    </div>


</template>
