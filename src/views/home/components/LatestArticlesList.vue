<script setup lang="ts"></script>

<template>
  <div class="latest-articles-list">
    <div class="title">最新文摘</div>
    <div class="content">
      <li>📖 最黑暗的时刻出现在黎明之前。|《牧羊少年奇幻之旅》</li>
      <li>📖 只要活着，一切都会有希望。 |《堂吉诃德》</li>
      <li>📖要跳要舞，只要音乐没有停。｜《舞！舞！舞！》</li>
      <li>📖灵魂是由思想来染色的 |《沉思录》</li>
      <li>📖不要给自己留下了什么遗憾 |《麦田里的守望者》</li>
      <li>🎬剩下的路你要自己走，不要回头|《千与千寻》</li>
      <li>🎬劝少年们珍惜时光。|《死亡诗社》</li>
      <li class="more">更多文章……</li>
    </div>
  </div>
</template>

<style scoped lang="scss">
.latest-articles-list {
  height: 5em;
  margin: 1em;
  //   padding: 1em;
  //   border-bottom: 1px solid #55661e;
  display: flex;
  flex-direction: column;
  align-items: start;
  font-weight: bold;
  .title {
    // display: flex;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    // text-align: center;
    color: #ccc;
    border-bottom: 1px solid rgb(111, 92, 92);
  }
  .content {
    padding: 1em;
    li {
      margin-bottom: 1em;
      cursor: pointer;
    }
    .more {
      font-weight: 900;
      color: #9d8d8d;
    }
  }
}
</style>
