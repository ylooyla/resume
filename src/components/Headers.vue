<template>
    <div class="header">
        <h1>个人信息</h1>
        <div class="header-item">
            <i class="iconfont icon-avatar"><span>姓名：吴创胜</span></i>
            <i class="iconfont icon-sex"><span>性别：男</span></i>
        </div>
        <div class="header-item">
            <i class="iconfont icon-phone"><span>电话：137 8394 8534</span></i>
            <i class="iconfont icon-mail"
                ><span>邮箱：1062608214@qq.com</span></i
            >
        </div>
    </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    components: {},
    setup() {
        return {}
    }
})
</script>
<style lang="scss" scoped>
.header {
    margin-bottom: 40px;
    .header-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        .iconfont {
            cursor: pointer;
            text-align: left;
            width: 300px;

            span {
                padding-left: 10px;
            }
        }
    }
}
</style>
