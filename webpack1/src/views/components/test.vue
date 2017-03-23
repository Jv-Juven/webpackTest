<template lang="html">
    <div :class="myClass" :style="style" v-test-directive="directivesMsg">
        Hello Vue!
    </div>
    <ul v-for="(key, value) in phoneBrand | filterBy '一加' in 'phone'" @click="changeName($index)">
        拼音：{{key}}, <br/>
        中文：{{value.phone}}
    </ul>
    <ul v-for="phone in phones">
        索引：{{$key}} <br>
        <span v-for="(k, v) in phone">
            {{k}}: {{v}} ;<br>
        </span>
    </ul>
</template>

<script>
import TestDirective from '../../directives/testDirective'
export default {
    data: function() {
        return {
            myClass: 'hello',
            directivesMsg: "测试指令",
            style: {
                width: "100px",
                height: "100px",
                borderRadius: "5px",
                background: "rgba(0,0,0,.8)",
            },
            phoneBrand: [
                { phone: "乐视" },
                { phone: "华为" },
                { phone: "中兴" },
                { phone: "朵唯" },
                { phone: "一加" },
                { phone: "魅族" },
            ],
            phones: [
                { leshi: "乐视", phone: "魅族" },
                { huawei: "华为" },
                { zhongxing: "中兴" },
                { duowei: "朵唯" },
                { yijia: "一加" },
                { meizu: "魅族" },
            ]
        }
    },
    computed: {},
    ready: function() {},
    attached: function() {},
    methods: {
        changeName(index) {
            let newItem = {
                phone: "国产手机"
            };
            this.phoneBrand.$set(index, newItem);
            console.log(this.phoneBrand[index]);
        }
    },
    components: {},
    directives: {
        TestDirective
    }
}

</script>
<style lang="less">
</style>
