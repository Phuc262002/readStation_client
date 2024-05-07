<template>
    <div class="container  mx-auto p-20">
          <aside class="flex">
        
            <div class="w-1/4">
              <h6 class="text-black font-bold text-base uppercase">Thể loại</h6>
              <div class="">
                <ul class="checkbox-container search-list">
                  <li class="inline-grid grid-cols-1">
                   <div>
                      <input type="checkbox" class="custom-control-input" id="customCheck1">
                      <label class="custom-control-label" for="customCheck1">    Trẻ em</label>
                    </div>
                    <div>
                      <input type="checkbox" class="custom-control-input" id="customCheck1">
                      <label class="custom-control-label" for="customCheck2">    Người lớn</label>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h6 class="text-black font-bold text-base uppercase">Tác giả</h6>
              <div class="">
                <ul class="checkbox-container search-list">
                  <li class="inline-grid grid-cols-1">
                   <div>
                      <input type="checkbox" class="custom-control-input" id="customCheck1">
                      <label class="custom-control-label" for="customCheck3"> Nguyễn Kim</label>
                    </div>
                    <div>
                      <input type="checkbox" class="custom-control-input" id="customCheck1">
                      <label class="custom-control-label" for="customCheck4"> Ngô Tất Tố</label>
                    </div>
                  </li>
                </ul>
              </div>
              </div>
              
              
            
           
           
              <h6 class="stext-black font-bold text-base uppercase">Price Range</h6>
              <div class="sidebar-body">
                <ul class="radio-container search-list">
                  <li>
                    <div class="custom-control custom-radio">
                      <input type="radio" class="custom-control-input" id="customCheck50">
                      <label class="custom-control-label" for="customCheck50"> dưới 100k </label>
                    </div>
                  </li>
                 
                </ul>
              </div>
         
          </div>

        
          
            <div class="w-3/4  grid grid-cols-3 gap-4">
                <div class="w-1/3">
                  sản phẩm1 
                </div>
                <div class="w-1/3">
                  sản phẩm 2
                </div>
                <div class="w-1/3">
                  sản phẩm 3 
                </div>
                <a-pagination v-model:current="current" :total="50" show-less-items />
            </div>
            
        
          </aside>
        </div>

</template>

  <script lang="ts" setup>
  import { ref } from 'vue';
  const value = ref([]);
  const selectedKeys1 = ref<string[]>(['2']);
  const selectedKeys2 = ref<string[]>(['1']);
  const openKeys = ref<string[]>(['sub1']);



const current = ref(1);
  </script>
  <style scoped>
  #components-layout-demo-top-side .logo {
    float: left;
    width: 120px;
    height: 31px;
    margin: 16px 24px 16px 0;
    background: rgba(245, 7, 7, 0.3);
  }
  
  .ant-row-rtl #components-layout-demo-top-side .logo {
    float: right;
    margin: 16px 0 16px 24px;
  }
  
  .site-layout-background {
    background: #fff;
  }

  </style>
  