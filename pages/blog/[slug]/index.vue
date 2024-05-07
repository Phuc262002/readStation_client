<template>
  <div class="lg:px-[100px] px-8">
    <div class="flex gap-[30px]">
      <div class="w-3/4">
        <div
          class="relative h-[462px] w-full bg-[url('/assets/images/VNE-Rainbow-2-3983-1585305448.jpg')] bg-cover bg-center bg-no-repeat rounded-xl"
        >
          <div
            class="absolute h-[166px] w-full bottom-0 left-0 blur-md invert brightness-150 md:filter-none bg-black/50"
          ></div>
          <div
            class="absolute h-[166px] bottom-10 left-10 font-semibold text-4xl"
          >
            <div
              class="bg-white w-fit text-[14px] font-medium px-[10px] rounded-[20px] text-[#6C40FF] h-7 flex justify-center items-center mb-4"
            >
              Artificial Intelligence
            </div>
            <p class="text-white w-2/3 text-[27px] mt-[10px]">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <div class="mt-[10px]">
              <div
                class="flex items-center text-base text-white gap-5 text-[14px]"
              >
                <div class="flex items-center gap-3">
                  <!-- <a-avatar class="" src="https://cdn.pixabay.com/photo/2020/05/09/13/29/photographer-5149664_1280.jpg" /> -->
                  <p class="mr-[-10px]">Oct 19</p>
                </div>
                <div class="h-1 w-1 bg-black rounded-full"></div>
                <p class="ml-[-10px]">10 min read</p>
              </div>
            </div>
          </div>
        </div>

        <div class="my-5">
          Exploring Generative AI in Content Creation Hello there! As a
          marketing manager in the SaaS industry, you might be looking for
          innovative ways to engage your audience. I bet generative AI has
          crossed your mind as an option for creating content. Well, let me
          share from my firsthand experience. Google encourages high-quality
          blogs regardless of whether they're written by humans or created using
          artificial intelligence like ChatGPT. Here's what matters: producing
          original material with expertise and trustworthiness based on Google
          E-E-A-T principles. This means focusing more on people-first writing
          rather than primarily employing AI tools to manipulate search
          rankings. There comes a time when many experienced professionals want
          to communicate their insights but get stuck due to limited writing
          skills – that’s where Generative AI can step in. So, together, we’re
          going explore how this technology could help us deliver valuable
          content without sounding robotic or defaulting into mere
          regurgitations of existing materials (spoiler alert – common
          pitfalls!). Hang tight - it’ll be a fun learning journey!
        </div>
        <div
          class="flex justify-between items-center p-5 border bg-[#3D22CF] w-full h-[70px] rounded-[10px] mb-5"
        >
          <div class="text-white text-sm">
            <p>Like what you see? Share with a friend.</p>
          </div>
          <div class="flex justify-items-end text-white gap-5 mt-[10px]">
            <div>
              <img
                class="w-[30px] h-[30px]"
                src="/assets/icons/facebook.png"
                alt=""
              />
            </div>
            <div>
              <img
                class="w-[30px] h-[30px]"
                src="/assets/icons/twitter.png"
                alt=""
              />
            </div>
            <div>
              <img
                class="w-[30px] h-[30px]"
                src="/assets/icons/linkedin.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <hr class="mb-5">

        <div class="mb-5">Related Articles</div>
        <div class="grid grid-cols-3 gap-4">
          <BlogDetailItem />
          <BlogDetailItem />
          <BlogDetailItem />
        </div>
      </div>

      <div class="w-1/4">
        <div class="p-5 border bg-[#3D22CF] w-full h-fit rounded-[10px] mb-5">
          <div class="flex mb-5">
            <div class="">
              <a-avatar
                class="h-[100px] w-full"
                src="https://moc247.com/wp-content/uploads/2023/12/loa-mat-voi-101-hinh-anh-avatar-meo-cute-dang-yeu-dep-mat_2.jpg"
                shape="square"
              ></a-avatar>
            </div>
            <div class="pt-[70px] ml-5">
              <a-avatar
                src="https://moc247.com/wp-content/uploads/2023/12/loa-mat-voi-101-hinh-anh-avatar-meo-cute-dang-yeu-dep-mat_2.jpg"
                shape="square"
                :size="32"
              ></a-avatar>
            </div>
          </div>
          <div class="text-white">
            <div class="text-xl">Technology</div>
            <div class="text-sm w-2/3 pt-[10px]">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </div>
            <hr class="my-[10px]" />
          </div>
          <div class="text-white text-sm">
            <p>
              Founder of SAAS First - the Best AI and Data-Driven Customer
              Engagement Tool
            </p>
          </div>
        </div>
        <div class="p-5 border bg-[#3D22CF] w-full h-70 rounded-[10px]">
          <div class="text-white text-sm">
            <p>Share with your community!</p>
          </div>
          <div class="flex text-white gap-5 mt-[10px]">
            <div>
              <img
                class="w-[30px] h-[30px]"
                src="/assets/icons/facebook.png"
                alt=""
              />
            </div>
            <div>
              <img
                class="w-[30px] h-[30px]"
                src="/assets/icons/twitter.png"
                alt=""
              />
            </div>
            <div>
              <img
                class="w-[30px] h-[30px]"
                src="/assets/icons/linkedin.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
