<template>
  <div>
    新闻id: {{$route.params.id}}<br/>
    query type: {{$route.query.type || '无'}}
  </div>
</template>

<script>
export default {
  name: 'news-detail'
}
</script>

<style lang="less" module>

</style>
