<script setup lang="ts">
import { h, getCurrentInstance } from "vue";
import { ElMessage } from "element-plus";

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
</script>

<template>
  首页<el-button :plain="true" @click="open">Show message</el-button>
  <el-button :plain="true" @click="openVn">VNode</el-button>
  <div class="text">
    kakdklakaadafafafwafawfffffffffffffffffffffwawdadwwdwdwwdwdwwddwddd
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/scss/home/index.scss";
</style>
