<template>
  <a-comment>
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
          :loading="commentStore.isSubmitting"
          type="primary"
          @click="handleSubmit"
        >
          Bình luận
        </a-button>
      </a-form-item>
    </template>
  </a-comment>
  <a-comment
    v-if="commentStore.comment?.comments?.length > 0"
    v-for="comment in commentStore.comment?.comments"
    :key="comment.id"
  >
    <template #actions>
      <span
        @click="handleReply(`${comment.id + comment.created_at.toString()}`, comment.id)"
        >Trả lời</span
      >
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
            :loading="commentStore.isSubmitting"
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
      <p>
        {{ comment.content }}
      </p>
    </template>
    <a-comment v-for="reply in comment?.replies" :key="reply.id">
      <template #actions>
        <span @click="handleReply(`${reply.id + reply.created_at.toString()}`, reply.id)"
          >Trả lời</span
        >
      </template>
      <a-comment
        v-if="
          `${reply.id + reply.created_at.toString()}` === showReply.comment_hash
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
              :loading="commentStore.isSubmitting"
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
        <p>
          {{ reply.content }}
        </p>
      </template>
      <a-comment v-for="replyComment in reply?.replies" :key="replyComment.id">
        <template #author>
          <a>{{ replyComment?.user?.fullname }}</a>
        </template>
        <template #avatar>
          <a-avatar
            :src="replyComment?.user?.avatar"
            :alt="replyComment?.user?.fullname"
          />
        </template>
        <template #content>
          <p>
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
  <p class="text-center mb-5 font-semibold" v-else>
    Bài viết này hiện chưa có bình luận nào. Hãy là người đầu tiên bình luận.
  </p>
</template>
<script lang="ts" setup>
import { ref } from "vue";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const authStore = useAuthStore();
const showReply = ref({
  content: "",
  parent_id: null,
  comment_hash: null,
});
const commentStore = useCommentStore();
const postStore = usePostStore();

type Comment = Record<string, string>;
const comments = ref<Comment[]>([]);
const submitting = ref<boolean>(false);
const value = ref<string>("");
const id = useId();
const handleSubmit = async () => {
  if (!value.value) {
    message.error("Vui lòng nhập nội dung bình luận");
    return;
  }
  await commentStore.createComment({
    post_id: postStore.post?.id,
    content: value.value,
  });
  await commentStore.getComment({ post_id: postStore.post?.id });
  value.value = "";
};

const handleSubmitReply = async () => {
  console.log("🚀 ~ handleSubmitReply ~ showReply:", showReply.value);
  if (!showReply.value.content) {
    message.error("Vui lòng nhập nội dung bình luận");
    return;
  }

  await commentStore.createComment({
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
  showReply.value.content = "";
  showReply.value.parent_id = null;
  if (showReply.value.comment_hash === id) {
    showReply.value.comment_hash = null;
    return;
  }
  showReply.value.comment_hash = id;
  showReply.value.parent_id = parent_id;
};
</script>
