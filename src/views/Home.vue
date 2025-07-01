<script setup>
import { reactive, onMounted } from "vue";
import httpService from "@/sevices/HttpService.js";

// 화면에 보여질 메모의 배열
const state = reactive({
  memos: [],
});
// 메모 리스트 통신
const getItems = async (params) => {
  const data = await httpService.memoList(params);
  state.memos = data.resultData;
  console.log(state.memos);
};

// 첫 화면
onMounted(() => {
  getItems({});
});
</script>

<template>
  <div class="memo-list">
    <router-link to="/add" class="add btn btn-light"> + 추가하기 </router-link>
    <router-link
      v-for="m in state.memos"
      :to="`/memos/${m.id}`"
      class="item"
      :key="m.id"
    >
      <div class="d-flex pt-3">
        <div class="pb-3 mb-0 w-100">
          <div class="d-flex justify-content-between">
            <b>{{ m.title }}</b>
            <div>
              <span role="button" @click.prevent="remove(m.id)">삭제</span>
            </div>
          </div>
          <div class="mt-2">{{ m.content }}</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.memo-list {
  .item {
    background-color: #f8f9fa;
    border: 1px solid #eee;
    display: block;
    color: #000;
    text-decoration: none;
    padding: 20px 30px;
    margin: 15px 0;

    &:hover {
      border-color: #aaa;
    }
  }
}

.add {
  display: block;
  padding: 25px;
  border: 1px solid #eee;
}
</style>
