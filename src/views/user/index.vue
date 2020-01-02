<template>
  <div>
    <div>
      用户名： {{username}}
    </div>
    <div>
      密码：{{password}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'user',
  data () {
    return JSON.parse(sessionStorage.getItem('userinfo'))
  },
  mounted () {
    console.log('user-index mounted')
  }
}
</script>
