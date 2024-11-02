import { http } from "../utils/http";
import IndexedDB from "../utils/indexedDB";
let stars = new IndexedDB("stars");

// 真实接口
export function getRoomList() {
  return http.httpRequestGet("/room/list", {});
}

// Mock接口
export async function fetchRoom() {
  await stars.openStore("stars", "id", ["name"]);
  const res = await stars.getAllItems("Room").then((res: any) => {
    return {
      code: 200,
      message: "操作成功",
      result: res,
      success: true,
    };
  });
  return res;
}
