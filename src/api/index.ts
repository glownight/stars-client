import http from "../utils/http";

function getRoomList() {
  return http.httpRequestGet("/room/list", {});
}
