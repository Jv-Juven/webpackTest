require("../css/index.less");
console.log("index.js");
var es7 = require("./es7.js");
es7();
let $ = require("../../static/js/jquery-3.2.0.js");
$(() => {
    console.log("jquery-3");
});
