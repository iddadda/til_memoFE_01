import axios from "axios";
import { isRuntimeOnly } from "vue";
axios.defaults.baseURL = "http://localhost:8080/api";

class HttpService {
  // 메모 리스트
  async memoList(params) {
    console.log("memoList - params: ", params);
    const res = await axios.get("/memo", { params });
    console.log("memoList - res.data", res.data);
    return res.data;
  }

  // 메모 추가

  // 메모 삭제

  // 메모 상세 페이지

  // 메모 수정
}

export default new HttpService();
