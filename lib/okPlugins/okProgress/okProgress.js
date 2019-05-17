layui.config({
    base: "../../lib/okPlugins/"
}).extend({
    nprogress: "okProgress/nprogress"
}).define(["nprogress"], function (exports) {
    "use strict";
    // 顶部进度条
    NProgress.start();
    window.onload = function () {
        NProgress.done();
    }
    exports("okProgress");
});
