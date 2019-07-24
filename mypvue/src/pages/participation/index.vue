<template>
  <div>
    <p>4435 人参与者</p>
    <div class="list">
      <img src="../../../static/images/user.png" alt="" v-for="item in 20" :key="item">
    </div>
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
    methods: {},
    onPullDownRefresh() {
      wx.stopPullDownRefresh()
    },

    created() {}
  }

</script>

<style scoped>
  p {
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
    line-height: 17px;
    letter-spacing: 1px;
    margin: 12px 0;
    text-align: center;
  }

  .list {
    margin: 0 11px;
  }

  img {
    width: 35px;
    height: 35px;
  }

</style>
