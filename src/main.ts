import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import ElementPlus, { ElMessage } from "element-plus";

import "element-plus/dist/index.css";
import "@/assets/global.css";

const app = createApp(App);
app.config.globalProperties.$message = ElMessage;
app.use(router);
app.use(store);
app.use(ElementPlus);
app.mount("#app");
