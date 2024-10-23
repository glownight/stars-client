<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="box">
    <button @click="() => router.push({ path: '/home' })">首页</button>
    <button @click="() => router.push({ path: 'mine' })">个人中心</button>
  </div>
  <el-button type="primary">按钮</el-button>

  <router-view></router-view>
</template>

<style lang="scss" scoped>
.box {
  button {
    font-size: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
}
</style>
