<template>
    <div class="w-full space-y-4">
        <div class="bg-white w-full h-fit p-4 rounded-lg">
            <div class="flex pb-1">
                <div>
                    <img
                        class="w-full h-[20px]"
                        F
                        src="https://salt.tikicdn.com/ts/upload/94/36/e7/c5297f3fad0a83fb56f98be877904467.png"
                        alt=""
                    />
                </div>
                <div class="px-1">
                    <img
                        class="w-full h-[20px]"
                        src="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"
                        alt=""
                    />
                </div>
                <div class="flex gap-2 text-sm font-normal">
                    <p>Tác giả:</p>
                    <p class="text-[#0D5CB6]">Robert T. Kiyosaki</p>
                </div>
            </div>
            <div class="font-medium text-xl pb-1">
                <p>Đánh Thức Tiềm Năng Tài Chính</p>
            </div>
            <div class="flex gap-3">
                <p class="text-sm font-medium">4.8</p>
                <CommonRating rating="3.5"/>
                <p class="text-[#787878] text-sm">(105)</p>
                <p class="text-[#787878] text-sm">Đã bán 1614</p>
                <p class="text-[#787878] text-sm">Đã thuê 1614</p>
            </div>
            <div class="flex items-center gap-3">
                <p class="font-semibold text-2xl">84.000</p>
                <p
                    class="flex justify-center items-center bg-[#F5F5FA] h-[18px] rounded-md text-xs font-normal px-1"
                >
                    -42%
                </p>
            </div>
        </div>

        <div class="bg-[#FFFFFF] w-full h-fit p-4 rounded-lg">
            <div class="font-semibold text-base pb-1">
                <div>Thông tin vận chuyển</div>
            </div>
            <div class="flex">
                <div>
                    <IconAddress />
                </div>
                <div class="">
                    <p class="text-sm w-2/3 pb-2 text-[#27272A]">
                        Bạn hãy nhập địa chỉ nhận hàng để được dự báo thời gian
                        & chi phí giao hàng chính xác nhất.
                    </p>
                    <a-button class="text-[#0B74E5]">Nhập địa chỉ</a-button>
                </div>
            </div>
        </div>

        <div class="bg-[#FFFFFF] w-full h-fit p-4 rounded-lg">
            <div class="font-semibold text-base pb-1">
                <div>Thông tin vận chuyển</div>
            </div>
            <div class="flex justify-between">
                <p class="text-sm">Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh</p>
                <p class="text-[#0B74E5]">Đổi</p>
            </div>
        </div>

        <div class="bg-[#FFFFFF] w-full h-fit p-4 rounded-lg">
            <div class="font-semibold text-base pb-1">
                <div>An tâm mua sắm</div>
            </div>
            <div class="flex gap-1 pb-3">
                <img
                    class="w-fit h-[18px]"
                    src="https://salt.tikicdn.com/ts/upload/c5/37/ee/76c708d43e377343e82baee8a0340297.png"
                    alt=""
                />
                <p class="text-sm font-normal">
                    Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh
                </p>
            </div>
            <div class="flex gap-1 pb-3">
                <img
                    class="w-fit h-[18px]"
                    src="https://salt.tikicdn.com/ts/upload/ea/02/b4/b024e431ec433e6c85d4734aaf35bd65.png"
                    alt=""
                />
                <p class="text-sm">Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh</p>
            </div>
            <div class="flex gap-1 pb-4">
                <img
                    class="w-fit h-[18px]"
                    src="https://salt.tikicdn.com/ts/upload/d8/c7/a5/1cd5bd2f27f9bd74b2c340b8e27c4d82.png"
                    alt=""
                />
                <p class="text-sm">Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh</p>
            </div>
        </div>

        <div class="bg-[#FFFFFF] w-full h-fit p-4 rounded-lg">
            <div class="font-semibold text-base pb-1">
                <div>Thông tin chi tiết</div>
            </div>
            <div class="flex gap-9">
                <p class="text-sm w-1/2 text-[#808089]">
                    Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh
                </p>
                <p class="text-sm w-1/2">
                    Công ty cổ phần đầu tư và phát triển giáo dục quốc tế Á Châu
                </p>
            </div>

            <div class="border-b border-gray-200 my-2"></div>
            <div class="flex gap-9">
                <p class="text-sm w-1/2 text-[#808089]">
                    Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh
                </p>
                <p class="text-sm w-1/2">
                    Công ty cổ phần đầu tư và phát triển giáo dục quốc tế Á Châu
                </p>
            </div>
            <div class="border-b border-gray-200 my-2"></div>
            <div class="flex gap-9">
                <p class="text-sm w-1/2 text-[#808089] ">
                    Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh
                </p>
                <p class="text-sm w-1/2">
                    Công ty cổ phần đầu tư và phát triển giáo dục quốc tế Á Châu
                </p>
            </div>
            <div class="border-b border-gray-200 my-2"></div>
            <div class="flex gap-9">
                <p class="text-sm w-1/2 text-[#808089]">
                    Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh
                </p>
                <p class="text-sm w-1/2">
                    Công ty cổ phần đầu tư và phát triển giáo dục quốc tế Á Châu
                </p>
            </div>
            <div class="border-b border-gray-200 my-2"></div>
            <div class="flex gap-9">
                <p class="text-sm w-1/2 text-[#808089]">
                    Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh
                </p>
                <p class="text-sm w-1/2">
                    Công ty cổ phần đầu tư và phát triển giáo dục quốc tế Á Châu
                </p>
            </div>
            <div class="border-b border-gray-200 my-2"></div>
            <div class="flex gap-9">
                <p class="text-sm w-1/2 text-[#808089]">
                    Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh
                </p>
                <p class="text-sm w-1/2">
                    Công ty cổ phần đầu tư và phát triển giáo dục quốc tế Á Châu
                </p>
            </div>
            <div class="border-b border-gray-200 my-2"></div>
            <div class="flex gap-9">
                <p class="text-sm w-1/2 text-[#808089]">
                    Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh
                </p>
                <p class="text-sm w-1/2 ">
                    Công ty cổ phần đầu tư và phát triển giáo dục quốc tế Á Châu
                </p>
            </div>
            <div class="border-b border-gray-200 my-2"></div>
            <div class="flex gap-9">
                <p class="text-sm w-1/2 text-[#808089]">
                    Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh
                </p>
                <p class="text-sm w-1/2">
                    Công ty cổ phần đầu tư và phát triển giáo dục quốc tế Á Châu
                </p>
            </div>
            <div class="border-b border-gray-200 my-2"></div>
            <div class="flex gap-9">
                <p class="text-sm w-1/2 text-[#808089]">
                    Giao đến Q. 1, P. Bến Nghé, Hồ Chí Minh
                </p>
                <p class="text-sm w-1/2">
                    Công ty cổ phần đầu tư và phát triển giáo dục quốc tế Á Châu
                </p>
            </div>
        </div>

        <div class="bg-[#FFFFFF] w-full h-fit p-4 rounded-lg">
            <div class="font-semibold text-base pb-1">
                <div>Mô tả sản phẩm</div>
            </div>
            <div class="">
                <p class="text-sm pb-2 text-[#242424]">
                    Đánh Thức Tiềm Năng Tài Chính
                </p>
                <p class="line-clamp-6">
                    Khi chúng ta đang vươn tới những vì sao, chính bởi những
                    thách thức đặt ra phía trước mà chúng ta có lẽ sẽ phải chung
                    tay để ứng phó: du hành vào vũ trụ không phải với tư cách
                    người Nga, người Trung Quốc hay người Mỹ, mà là những đại
                    diện của nhân loại. Nhưng cho đến nay, mặc dù đã thoát khỏi
                    sự kìm hãm của trọng lực, chúng ta vẫn đang bị giam giữ
                    trong tâm trí của chính mình, bị giới hạn bởi sự nghi ngờ
                    của mình về ‘kẻ khác’, và do đó bởi cuộc cạnh tranh chính
                    yếu về tài nguyên. Phía trước chúng ta còn cả một chặng
                    đường dài.” Người Nga vẫn sẽ lo âu dõi mắt về phía tây, nơi
                    có dải đất vẫn còn là bình nguyên, dễ bị xâm nhập; Ấn Độ và
                    Trung Quốc vẫn sẽ bị cách ngăn bởi dãy Himalaya sừng sững,
                    và địa lý sẽ xác định bản chất của những cuộc xung đột giữa
                    hai nước trong tương lai, bất chấp sự phát triển của công
                    nghệ và quân sự; “Đại gia đình châu Âu” đói khát năng lượng,
                    bị phụ thuộc vào những đường ống dẫn dầu từ Nga, và do đó họ
                    không thực sự có nhiều lựa chọn trên bàn đàm phán; sự suy
                    yếu của Hoa Kỳ trong vị thế một siêu cường số một dường như
                    đã bị thổi phồng quá mức, nếu xét tới những lợi thế địa lý
                    mà nước này đã dày công gây dựng… Và còn rất nhiều dẫn chứng
                    cho thấy vai trò then chốt của các nhân tố địa lý trong bối
                    cảnh chính trị hiện đại. Nhân loại đang trên đường hiện thực
                    hóa giấc mơ vươn vào không gian. Nhưng Tim Marshall vẫn xác
                    quyết rằng: “Các nhân tố địa lý vốn đã góp phần xác định
                    lịch sử đa phần sẽ tiếp tục xác định tương lai của chúng
                    ta”, và rằng: “Địa lý vẫn luôn luôn là một loại nhà tù định
                    nghĩa một quốc gia là gì, hoặc có thể là gì, và là một nhà
                    tù mà các nhà lãnh đạo thế giới thường phải nỗ lực để thoát
                    ra”.
                </p>
                
                <p class="flex justify-center text-[#189EFF] text-sm font-normal  pt-4">Xem thêm</p>
            </div>
        </div>
    </div>
</template>

