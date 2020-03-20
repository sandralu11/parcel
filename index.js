// 引入另一個元件
import main from "./main";

main();

import Vue from "vue";
import App from "./App.vue";

new Vue({ render: createElement => createElement(App) }).$mount("#app");
