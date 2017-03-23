<style lang="less" media="screen">

@full_width: 750px;
body {
    width: @full_width;
}

</style>

<template>

<div>
    Hello,Vuejs!
</div>

<hello-world></hello-world>

</template>

<script type="text/javascript">
import HelloWorld from '../components/test'
export default {
    ready() {},
    components: {
        HelloWorld
    }
}

</script>
