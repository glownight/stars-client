<script setup lang="ts">
import { h, getCurrentInstance } from "vue";
import { ElMessage } from "element-plus";

import IndexedDB from "@/utils/indexedDB";
import { fetchRoom } from "@/api/index";

import Header from "@/components/Header.vue";
import LatestArticlesList from "./components/LatestArticlesList.vue";

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
  <!-- 首页<el-button :plain="true" @click="open">Show message</el-button> -->
  <!-- <el-button :plain="true" @click="addData('Room')">添加数据</el-button>
  <el-button :plain="true" @click="deleteData('Room', 8)">删除数据</el-button>
  <el-button :plain="true" @click="getAllData('Room')">查询所有数据</el-button>
  <el-button :plain="true" @click="getData('Room', 4)" -->
  <!-- >查询某一条数据</el-button -->

  <!-- <el-button :plain="true" @click="openVn">Show message</el-button>

  <div class="text">
    kakdklakaadafafafwafawfffffffffffffffffffffwawdadwwdwdwwdwdwwddwddd
  </div> -->

  <Header />
  <div class="latest-articles-preview">
    <div class="title">📖唯有我们觉醒之际，天才会破晓|《瓦尔登湖》</div>
    <div class="tags">分类： <span>随笔</span></div>
    <div class="latest-articles-content">
      <p>
        "一片瓦尔登湖。我们不需要社交。不需要千篇一律的活法。而是按照自己心之所向。去做自己觉得是真理的事。"
      </p>
      <p>“心灵的空虚，灵魂的空白才是真正的孤独。”</p>
    </div>
    <div class="more-read">继续阅读全文 »</div>
    <div class="info">2024年10月31日 03:24 | <span>留言（5）</span></div>
  </div>
  <div class="content">
    <LatestArticlesList></LatestArticlesList>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/home/index.scss";
.latest-articles-preview {
  padding: 0 2em;
  display: flex;
  flex-direction: column;
  width: 80%;
  .title {
    font-size: 2.88em;
    color: #7d6d6d;
    font-weight: 500;
    letter-spacing: -0.03em;
    margin: 0.4em 0px 0.2em;
    padding: 0px 0px 0.2em;
    border-bottom: 1px solid rgb(111, 92, 92);
    cursor: pointer;
  }
  .tags {
    display: flex;
    justify-content: end;
    span {
      color: orange;
      cursor: pointer;
    }
  }
  .latest-articles-content {
    min-height: 50px;
    // max-height: 300px;
    color: #ccc;
  }
  .more-read {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    color: green;
    min-height: 3em;
    border-bottom: 1px solid rgb(111, 92, 92);
    cursor: pointer;
  }
  .info {
    font-size: 0.5em;
    span {
      color: gray;
      cursor: pointer;
    }
  }
}
.content {
  width: 60%;
  padding: 0 1.2em;
}
</style>
