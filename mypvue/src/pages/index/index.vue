<template>
  <div>
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo">获取用户信息</button>
    <ul>
      <li>{{user.avatarUrl}}</li>
      <li>{{user.city}}</li>
      <li>{{user.country}}</li>
      <li>{{user.gender}}</li>
      <li>{{user.language}}</li>
      <li>{{user.nickName}}</li>
      <li>{{user.province}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {}
      }
    },
    components: {},
    methods: {
      bindGetUserInfo(e) {
        console.log(e)
        this.user = e.mp.detail.userInfo
      },
      authorize() {
        let that = this
        wx.getSetting({
          success(res) {
            if (!res.authSetting['scope.userInfo']) {
              wx.authorize({
                scope: 'scope.userInfo',
                success(res) {
                  console.log(res)
                  that.user = res.userInfo
                  // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                }
              })
            }
          }
        })
      }
    },
    onPullDownRefresh() {
      wx.stopPullDownRefresh()
    },

    created() {
    }
  }

</script>

<style scoped>

</style>
