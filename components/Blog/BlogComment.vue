<template>
  <a-comment v-if="authStore.isLogged">
    <template #avatar>
      <a-avatar
        :src="authStore.authUser?.user?.avatar"
        :alt="authStore.authUser?.user?.fullname"
      />
    </template>
    <template #content>
      <a-form-item>
        <a-textarea v-model:value="value" :rows="4" />
      </a-form-item>
      <a-form-item>
        <a-button
          html-type="submit"
          :loading="comentGeneralStore.isSubmitting"
          type="primary"
          @click="handleSubmit"
        >
          Bình luận
        </a-button>
      </a-form-item>
    </template>
  </a-comment>
  <p class="flex justify-center items-center font-semibold mb-5" v-else>
    Bạn hãy
    <NuxtLink
      to="/login"
      class="m-1 hover:text-orange-600 cursor-pointer text-rtprimary"
    >
      đăng nhập</NuxtLink
    >
    trước khi bình luận nhé!
  </p>

  <a-spin :spinning="isloading">
    <a-comment
      v-if="commentStore.comment?.comments?.length > 0"
      v-for="comment in commentStore.comment?.comments"
      :key="comment.id"
    >
      <template #actions v-if="authStore.isLogged">
        <div
          class="flex items-center gap-2"
          v-if="
            `${comment.id + comment.created_at.toString()}` !==
            showEditComment.comment_hash
          "
        >
          <span
            class="cursor-pointer"
            @click="
              handleReply(
                `${comment.id + comment.created_at.toString()}`,
                comment.id
              )
            "
            >Trả lời</span
          >
          <div
            v-if="comment?.user?.email === authStore.authUser?.user?.email"
            class="h-1 w-1 bg-black rounded-full"
          ></div>
          <div
            class="flex items-center gap-2"
            v-if="comment?.user?.email === authStore.authUser?.user?.email"
          >
            <span
              class="cursor-pointer"
              @click="
                handleEditComment(
                  `${comment.id + comment.created_at.toString()}`,
                  comment.id,
                  comment.content
                )
              "
            >
              Sửa
            </span>
            <div class="h-1 w-1 bg-black rounded-full"></div>

            <a-popconfirm
              title="Bạn có chắc chắn muốn xóa bình luận này không?"
              ok-text="Xóa"
              cancel-text="Hủy"
              @confirm="deleteComment(comment.id)"
              @cancel="() => {}"
            >
              <span class="cursor-pointer text-red-600"> Xóa </span>
            </a-popconfirm>
          </div>
        </div>
      </template>
      <a-comment
        v-if="
          `${comment.id + comment.created_at.toString()}` ===
          showReply.comment_hash
        "
      >
        <template #avatar>
          <a-avatar
            :src="authStore.authUser?.user?.avatar"
            :alt="authStore.authUser?.user?.fullname"
          />
        </template>
        <template #content>
          <a-form-item>
            <a-textarea v-model:value="showReply.content" :rows="4" />
          </a-form-item>
          <a-form-item>
            <a-button
              html-type="submit"
              :loading="comentGeneralStore.isSubmitting"
              type="primary"
              @click="handleSubmitReply"
            >
              Bình luận
            </a-button>
          </a-form-item>
        </template>
      </a-comment>

      <template #author>{{ comment?.user?.fullname }}</template>
      <template #avatar>
        <a-avatar :src="comment?.user?.avatar" :alt="comment?.user?.fullname" />
      </template>
      <template #content>
        <div
          v-if="
            `${comment.id + comment.created_at.toString()}` ===
            showEditComment.comment_hash
          "
        >
          <a-form-item>
            <a-textarea v-model:value="showEditComment.content" :rows="4" />
          </a-form-item>
          <a-form-item>
            <a-button
              class="mr-2"
              type="default"
              @click="handleCloseEditComment"
            >
              Hủy
            </a-button>
            <a-button
              :loading="comentGeneralStore.isSubmitting"
              type="primary"
              @click="updateComment"
            >
              Cập nhật
            </a-button>
          </a-form-item>
        </div>
        <p
          v-if="
            `${comment.id + comment.created_at.toString()}` !==
            showEditComment.comment_hash
          "
        >
          {{ comment.content }}
        </p>
      </template>
      <a-comment v-for="reply in comment?.replies" :key="reply.id">
        <template #actions v-if="authStore.isLogged">
          <div
            class="flex items-center gap-2"
            v-if="
              `${reply.id + reply.created_at.toString()}` !==
              showEditComment.comment_hash
            "
          >
            <span
              class="cursor-pointer"
              @click="
                handleReply(
                  `${reply.id + reply.created_at.toString()}`,
                  reply.id
                )
              "
              >Trả lời</span
            >
            <div
              v-if="reply?.user?.email === authStore.authUser?.user?.email"
              class="h-1 w-1 bg-black rounded-full"
            ></div>
            <div
              class="flex items-center gap-2"
              v-if="reply?.user?.email === authStore.authUser?.user?.email"
            >
              <span
                class="cursor-pointer"
                @click="
                  handleEditComment(
                    `${reply.id + reply.created_at.toString()}`,
                    reply.id,
                    reply.content
                  )
                "
              >
                Sửa
              </span>
              <div class="h-1 w-1 bg-black rounded-full"></div>
              <a-popconfirm
                title="Bạn có chắc chắn muốn xóa bình luận này không?"
                ok-text="Xóa"
                cancel-text="Hủy"
                @confirm="deleteComment(reply.id)"
                @cancel="() => {}"
              >
                <span class="cursor-pointer text-red-600"> Xóa </span>
              </a-popconfirm>
            </div>
          </div>
        </template>
        <a-comment
          v-if="
            `${reply.id + reply.created_at.toString()}` ===
            showReply.comment_hash
          "
        >
          <template #avatar>
            <a-avatar
              :src="authStore.authUser?.user?.avatar"
              :alt="authStore.authUser?.user?.fullname"
            />
          </template>

          <template #content>
            <a-form-item>
              <a-textarea v-model:value="showReply.content" :rows="4" />
            </a-form-item>
            <a-form-item>
              <a-button
                html-type="submit"
                :loading="comentGeneralStore.isSubmitting"
                type="primary"
                @click="handleSubmitReply"
              >
                Bình luận
              </a-button>
            </a-form-item>
          </template>
        </a-comment>
        <template #author>
          <a>{{ reply?.user?.fullname }}</a>
        </template>
        <template #avatar>
          <a-avatar :src="reply?.user?.avatar" :alt="reply?.user?.fullname" />
        </template>
        <template #content>
          <div
            v-if="
              `${reply.id + reply.created_at.toString()}` ===
              showEditComment.comment_hash
            "
          >
            <a-form-item>
              <a-textarea v-model:value="showEditComment.content" :rows="4" />
            </a-form-item>
            <a-form-item>
              <a-button
                class="mr-2"
                type="default"
                @click="handleCloseEditComment"
              >
                Hủy
              </a-button>
              <a-button
                :loading="comentGeneralStore.isSubmitting"
                type="primary"
                @click="updateComment"
              >
                Cập nhật
              </a-button>
            </a-form-item>
          </div>
          <p
            v-if="
              `${reply.id + reply.created_at.toString()}` !==
              showEditComment.comment_hash
            "
          >
            {{ reply.content }}
          </p>
        </template>
        <a-comment
          v-for="replyComment in reply?.replies"
          :key="replyComment.id"
        >
          <template #author>
            <a>{{ replyComment?.user?.fullname }}</a>
          </template>
          <template #avatar>
            <a-avatar
              :src="replyComment?.user?.avatar"
              :alt="replyComment?.user?.fullname"
            />
          </template>
          <template #actions v-if="authStore.isLogged">
            <div
              class="flex items-center gap-2"
              v-if="
                `${replyComment.id + replyComment.created_at.toString()}` !==
                showEditComment.comment_hash
              "
            >
              <div
                class="flex items-center gap-2"
                v-if="
                  replyComment?.user?.email === authStore.authUser?.user?.email
                "
              >
                <span
                  class="cursor-pointer"
                  @click="
                    handleEditComment(
                      `${replyComment.id + replyComment.created_at.toString()}`,
                      replyComment.id,
                      replyComment.content
                    )
                  "
                >
                  Sửa
                </span>
                <div
                  v-if="
                    replyComment?.user?.email ===
                    authStore.authUser?.user?.email
                  "
                  class="h-1 w-1 bg-black rounded-full"
                ></div>
                <a-popconfirm
                  title="Bạn có chắc chắn muốn xóa bình luận này không?"
                  ok-text="Xóa"
                  cancel-text="Hủy"
                  @confirm="deleteComment(replyComment.id)"
                  @cancel="() => {}"
                >
                  <span class="cursor-pointer text-red-600"> Xóa </span>
                </a-popconfirm>
              </div>
            </div>
          </template>
          <template #content>
            <div
              v-if="
                `${replyComment.id + replyComment.created_at.toString()}` ===
                showEditComment.comment_hash
              "
            >
              <a-form-item>
                <a-textarea v-model:value="showEditComment.content" :rows="4" />
              </a-form-item>
              <a-form-item>
                <a-button
                  class="mr-2"
                  type="default"
                  @click="handleCloseEditComment"
                >
                  Hủy
                </a-button>
                <a-button
                  :loading="comentGeneralStore.isSubmitting"
                  type="primary"
                  @click="updateComment"
                >
                  Cập nhật
                </a-button>
              </a-form-item>
            </div>
            <p
              v-if="
                `${replyComment.id + replyComment.created_at.toString()}` !==
                showEditComment.comment_hash
              "
            >
              {{ replyComment.content }}
            </p>
          </template>
          <template #datetime>
            <a-tooltip
              :title="
                dayjs(replyComment?.created_at).format('YYYY-MM-DD HH:mm:ss')
              "
            >
              <span>{{ dayjs(replyComment?.created_at).fromNow() }}</span>
            </a-tooltip>
          </template>
        </a-comment>
        <template #datetime>
          <a-tooltip
            :title="dayjs(reply?.created_at).format('YYYY-MM-DD HH:mm:ss')"
          >
            <span>{{ dayjs(reply?.created_at).fromNow() }}</span>
          </a-tooltip>
        </template>
      </a-comment>
      <template #datetime>
        <a-tooltip
          :title="dayjs(comment?.created_at).format('YYYY-MM-DD HH:mm:ss')"
        >
          <span>{{ dayjs(comment?.created_at).fromNow() }}</span>
        </a-tooltip>
      </template>
    </a-comment>
  </a-spin>

  <p class="text-center mb-5 font-semibold" v-if="commentStore.comment?.comments?.length == 0">
    Bài viết này hiện chưa có bình luận nào. Hãy là người đầu tiên bình luận.
  </p>
  <div class="flex justify-center">
    <a-pagination v-if="commentStore.comment?.comments?.length > 0"
      v-model:current="current"
      :total="commentStore?.comment?.total"
      :pageSize="commentStore?.comment?.pageSize"
      show-less-items
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const isloading = ref(false);
const showEditComment = ref({
  content: "",
  comment_id: null,
  comment_hash: null,
});

const authStore = useAuthStore();
const showReply = ref({
  content: "",
  parent_id: null,
  comment_hash: null,
});
const commentStore = usePublicCommentStore();
const comentGeneralStore = useGeneralCommentStore();
const postStore = usePublicPostStore();

type Comment = Record<string, string>;
const comments = ref<Comment[]>([]);
const submitting = ref<boolean>(false);
const value = ref<string>("");
const id = useId();
const current = ref(1);

useAsyncData(
  async () => {
    isloading.value = true;
    await commentStore.getComment({
      post_id: postStore.post?.id,
      page: current.value,
    });
    isloading.value = false;
  },
  {
    immediate: true,
    watch: [current],
  }
);
const handleSubmit = async () => {
  if (!value.value) {
    message.error("Vui lòng nhập nội dung bình luận");
    return;
  }
  await comentGeneralStore.createComment({
    post_id: postStore.post?.id,
    content: value.value,
  });
  await commentStore.getComment({ post_id: postStore.post?.id });
  value.value = "";
};

const handleSubmitReply = async () => {
  if (!showReply.value.content) {
    message.error("Vui lòng nhập nội dung bình luận");
    return;
  }

  await comentGeneralStore.createComment({
    post_id: postStore.post?.id,
    content: showReply.value.content,
    parent_id: showReply.value.parent_id,
  });
  await commentStore.getComment({ post_id: postStore.post?.id });
  showReply.value.content = "";
  showReply.value.parent_id = null;
  showReply.value.comment_hash = null;
};

const handleReply = (id: any, parent_id: any) => {
  handleCloseEditComment();
  showReply.value.content = "";
  showReply.value.parent_id = null;
  if (showReply.value.comment_hash === id) {
    showReply.value.comment_hash = null;
    return;
  }
  showReply.value.comment_hash = id;
  showReply.value.parent_id = parent_id;
};
const handleEditComment = (id: any, comment_id: any, content: any) => {
  showReply.value.content = "";
  showReply.value.parent_id = null;
  showReply.value.comment_hash = null;

  showEditComment.value.content = "";
  showEditComment.value.comment_id = null;
  if (showEditComment.value.comment_hash === id) {
    showEditComment.value.comment_hash = null;
    return;
  }
  showEditComment.value.comment_hash = id;
  showEditComment.value.comment_id = comment_id;
  showEditComment.value.content = content;
};
const handleCloseEditComment = () => {
  showEditComment.value.content = "";
  showEditComment.value.comment_id = null;
  showEditComment.value.comment_hash = null;
};
const updateComment = async () => {
  

  if (!showEditComment.value.content) {
    message.error("Vui lòng nhập nội dung bình luận");
    return;
  }
  await comentGeneralStore.updateComment({
    comment_id: showEditComment.value.comment_id,
    content: showEditComment.value.content,
  });
  await commentStore.getComment({ post_id: postStore.post?.id });
  showEditComment.value.content = "";
  showEditComment.value.comment_id = null;
  showEditComment.value.comment_hash = null;
};
const deleteComment = async (comment_id: any) => {
  await comentGeneralStore.deleteComment(comment_id);
  await commentStore.getComment({ post_id: postStore.post?.id });
};
</script>
