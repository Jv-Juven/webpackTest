function Test () {}
module.exports = Test;
Test.prototype.apply = function (compiler) {
    compiler.plugin('done', function () {
        console.log("Test插件在运行");
    });
}
