import Vue from "vue";
import App from "../components/app";


new Vue({
    el: "#app",
    template: "<App/>", // 加这个才能正常编译，为何？
    components: {
        App
    }
    // render: h => h(Hello) // 为何要加这个？不加会报错：告诉你，只是运行运行时，而没有运行编译
});
