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
  async save(item) {
    console.log("save - item: ", item);
    const res = await axios.post("/memo", item); // res는 axios가 만든 response 객체이고
    console.log("save - res.data: ", res.data);
    return res.data; // data 속성은 BE가 응답 때 보내준 데이터가 들어있다.
  }

  // 메모 삭제
  async deleteMemo(params) {
    console.log("deleteMemo params: ", params);
    const res = await axios.delete("/memo", { params });
    console.log("delete res.data: ", res.data);
    return res.data;
  }

  // 메모 상세 페이지
  async findById(id) {
    console.log("findById - id", id);
    const res = await axios.get(`/memo/${id}`);
    console.log("findById - res.data: ", res);
  }

  // 메모 수정
  async modList(item) {
    console.log("modList - item: ", item);
    const res = await axios.post("/memo", item);
    console.log("modList - res.data: ", res.data);
    return res.data;
  }
}

// 객체화, 이 주소값이 import 되었을 때 반환됨
export default new HttpService();
