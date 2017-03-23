export default {
    update(value) {
        console.log("this", this);
        console.log("指令绑定", value);
        console.log("this.className:", this.el.className);
        console.log("this.vm:", this.vm);
        console.log("this.expression:", this.expression);
        console.log("this.arg:", this.arg);
        console.log("this.name:", this.name);
    },
}
