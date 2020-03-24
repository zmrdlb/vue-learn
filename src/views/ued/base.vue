<template>
    <dl>
        <dt>
            排版信息 - typography.less
        </dt>
        <dd>
            <span>默认正文</span>
            <h1>一级标题</h1>
            <h2>二级标题</h2>
            <h3>三级标题</h3>
            <span class="tip">说明文字</span>
            <a href="#">链接</a>
        </dd>
        <dt>
            button - button.less
        </dt>
        <dd>
            <h3>primary button</h3>
            <button class="primary">primary button</button>
            <button class="primary red">primary button (red)</button>
            <button class="primary green">primary button (green)</button>
            <button class="primary yellow">primary button (yellow)</button>
            <button class="primary" disabled>primary disabled (attribute disabled)</button>
            <button class="primary disabled">primary disabled (class disabled)</button>
            <button class="primary lg">primary button (lg 大尺寸)</button>
            <button class="primary sm">primary button (sm 小尺寸)</button>

            <h3>secondary button</h3>
            <button class="secondary">secondary button</button>
            <button class="secondary red">secondary button (red)</button>
            <button class="secondary green">secondary button (green)</button>
            <button class="secondary yellow">secondary button (yellow)</button>
            <button class="secondary" disabled>primary disabled (attribute disabled)</button>
            <button class="secondary disabled">primary disabled (class disabled)</button>
            <button class="secondary lg">primary button (lg 大尺寸)</button>
            <button class="secondary sm">primary button (sm 小尺寸)</button>

            <h3>status button</h3>
            <button class="primary loading">给任何button加loading即可</button>
        </dd>
    </dl>
</template>

<script>
    export default {
        name: 'ued-base'
    }
</script>
