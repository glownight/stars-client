<script setup lang="ts">
import { h, getCurrentInstance } from "vue";
import { ElMessage } from "element-plus";

import IndexedDB from "@/utils/indexedDB";
import { fetchRoom } from "@/api/index";

const open = () => {
  ElMessage("This is a message.");
};
const { proxy }: any = getCurrentInstance();

const openVn = () => {
  proxy.$message({
    message: h("p", { style: "line-height: 1; font-size: 14px" }, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};

// // 数据库相关操作
// const starsDB = new IndexDB("stars");
// starsDB.openStore("Room", "id", ["name"]);

// // 增和改
// function addData(storeName: string) {
//   starsDB.updateItem(storeName, {
//     id: 1,

//     name: "wdwsf张三",
//   });
// }

// // 删除
// function deleteData(storeName: string, key: number | string) {
//   starsDB.deleteItem(storeName, key);
// }

// // 查询所有数据
// function getAllData(storeName: string) {
//   starsDB.getAllItems(storeName);
// }

// // 查询某一条数据
// function getData(storeName: string, key: number | string) {
//   starsDB.getItem(storeName, key);
// }

//
function getRoomList() {
  fetchRoom().then((res: any) => {
    console.log("Mock接口", res);
  });
}
getRoomList();
</script>

<template>
  首页<el-button :plain="true" @click="open">Show message</el-button>
  <!-- <el-button :plain="true" @click="addData('Room')">添加数据</el-button>
  <el-button :plain="true" @click="deleteData('Room', 8)">删除数据</el-button>
  <el-button :plain="true" @click="getAllData('Room')">查询所有数据</el-button>
  <el-button :plain="true" @click="getData('Room', 4)" -->
  <!-- >查询某一条数据</el-button -->
  >
  <el-button :plain="true" @click="openVn">Show message</el-button>

  <div class="text">
    kakdklakaadafafafwafawfffffffffffffffffffffwawdadwwdwdwwdwdwwddwddd
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/home/index.scss";
</style>
