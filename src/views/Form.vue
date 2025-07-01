<script setup>
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import httpService from "@/services/HttpService";

const route = useRoute();
const router = useRouter();
const state = reactive({
  memo: {
    id: 0,
    title: "",
    content: "",
    createdAt: "",
  },
});
// pathvariable 에서 id 가져오는 함수
const findById = async () => {
  const data = await httpService.findById(route.params.id);
  state.memo = data.resultData;
};
// id가 있으면 메모 조회되도록
onMounted(() => {
  if (route.params.id) {
    findById();
  }
});

// const submit = async () => {};
</script>

<template>
  <form class="detail" @submit.prevent="submit">
    <div class="mb-3" v-if="state.memo.createdAt">
      등록일시: {{ state.memo.createdAt }}
    </div>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        type="text"
        id="title"
        class="form-control p-3"
        v-model="state.memo.title"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea
        id="content"
        class="form-control p-3"
        v-model="state.memo.content"
      ></textarea>
    </div>
    <button type="submit" class="btn btn-primary w-100 py-3">저장</button>
  </form>
</template>

<style scoped></style>
