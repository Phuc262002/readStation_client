<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <div class="flex flex-col">
      <div class="flex items-center text-base h-[90px] bg-white rounded-md">
        <div class="flex items-center text-sm w-full gap-2 font-medium p-4">
          <a-tag
            :bordered="false"
            class="flex items-center p-2 bg-tag-bg-04 text-tag-text-04"
          >
            <Icon
              icon="solar:users-group-rounded-outline"
              class="text-lg w-10 h-10"
            />
          </a-tag>

          <div class="flex-1 text-tag-text-04">
            <p class="font-bold text-base">Tất cả</p>
            <p class="font-bold text-2xl float-right">
              <Icon
                v-if="userStore.isLoading"
                icon="svg-spinners:3-dots-scale"
                class="text-3xl"
              />
              <span v-else>
                {{
                  new Intl.NumberFormat().format(
                    userStore?.userDashboard?.totalUser
                  )
                }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex items-center text-base h-[90px] bg-white rounded-md">
        <div class="flex items-center text-sm w-full gap-2 font-medium p-4">
          <a-tag
            :bordered="false"
            class="flex items-center p-2 bg-tag-bg-04 text-tag-text-04"
          >
            <Icon icon="la:users-cog" class="text-lg w-10 h-10" />
          </a-tag>

          <div class="flex-1 text-tag-text-04">
            <p class="font-bold text-base">Quản trị viên</p>
            <p class="font-bold text-2xl float-right">
              <Icon
                v-if="userStore.isLoading"
                icon="svg-spinners:3-dots-scale"
                class="text-3xl"
              />
              <span v-else>
                {{
                  new Intl.NumberFormat().format(
                    userStore?.userDashboard?.totalAdmin
                  )
                }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col">
      <div class="flex items-center text-base h-[90px] bg-white rounded-md">
        <div class="flex items-center text-sm w-full gap-2 font-medium p-4">
          <a-tag
            :bordered="false"
            class="flex items-center p-2 bg-tag-bg-02 text-tag-text-02"
          >
            <UIcon class="text-lg w-10 h-10" name="i-iconoir-user"
          /></a-tag>

          <div class="flex-1 text-tag-text-02">
            <p class="font-bold text-base">Khách hàng</p>
            <p class="font-bold text-2xl float-right">
              <Icon
                v-if="userStore.isLoading"
                icon="svg-spinners:3-dots-scale"
                class="text-3xl"
              />
              <span v-else>
                {{
                  new Intl.NumberFormat().format(
                    userStore?.userDashboard?.totalGuest
                  )
                }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex items-center text-base h-[90px] bg-white rounded-md">
        <div class="flex items-center text-sm w-full gap-2 font-medium p-4">
          <a-tag
            :bordered="false"
            class="flex items-center p-2 bg-tag-bg-01 text-tag-text-01"
          >
            <Icon icon="ph:student" class="text-lg w-10 h-10" />
          </a-tag>

          <div class="flex-1 text-tag-text-01">
            <p class="font-bold text-base">HS/SV</p>
            <p class="font-bold text-2xl float-right">
              <Icon
                v-if="userStore.isLoading"
                icon="svg-spinners:3-dots-scale"
                class="text-3xl"
              />
              <span v-else>
                {{
                  new Intl.NumberFormat().format(
                    userStore?.userDashboard?.totalStudent
                  )
                }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { UserStatus } from "~/types/admin/user";
import { UserRole } from "~/types/admin/user";
import { Icon } from "@iconify/vue";
const userStore = useUserStore();
</script>
