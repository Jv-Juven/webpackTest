module.exports = async () => {

    var asyncFn = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("Hello es7!");
                console.log("加入了webpack-dev-server");
                resolve();
            }, 1000);
        });
    }
    let pro = await asyncFn();
    console.log("同步方法");
    console.log("");
}
