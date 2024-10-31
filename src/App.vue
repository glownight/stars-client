<script setup lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();
const count = store.state.count;
</script>

<template>
  <div class="container">
    <button @click="() => router.push({ path: '/home' })">首页</button>
    <button @click="() => router.push({ path: 'mine' })">个人中心</button>
    {{ count }}
  </div>
  <el-button type="primary">按钮</el-button>

  <router-view></router-view>
</template>

<style lang="scss" scoped>
.container {
  background-color: $bg-color;
}
</style>
