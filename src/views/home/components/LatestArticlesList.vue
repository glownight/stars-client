<script setup lang="ts"></script>

<template>
  <div class="latest-articles-list">
    <div class="title">最新文章</div>
    <div class="content">
      <li>2024年10月25日 » 科技爱好者周刊（第 322 期）：内容行业的内幕</li>
      <li>2024年10月18日 » 科技爱好者周刊（第 321 期）：傅盛回忆录</li>
      <li>2024年10月11日 » 科技爱好者周刊（第 320 期）：乒乓仓</li>
      <li>2024年10月10日 » 后面试时代与 AI 刷题</li>
      <li>2024年09月27日 » 科技爱好者周刊（第 319 期）：如何拍出爆款视频</li>
      <li>2024年09月20日 » 科技爱好者周刊（第 318 期）：创业咖啡馆的记忆</li>
      <li>
        2024年09月13日 » 科技爱好者周刊（第 317 期）：驴子、老虎和狮子的寓言
      </li>
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
    }
  }
}
</style>
