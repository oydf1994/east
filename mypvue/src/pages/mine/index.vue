<template>
  <div>
    <div class="head">
      <img src="../../../static/images/user.png" alt="">
      <h5>East</h5>
      <button>公益 6</button>
    </div>
    <div class="data">
      <van-row>
        <van-col span="8">
          <p class="title">我的抽奖</p>
          <p class="num">82</p>
        </van-col>
        <van-col span="8">
          <p class="title">公益次数</p>
          <p class="num">82</p>
        </van-col>
        <van-col span="8">
          <p class="title">中奖纪录</p>
          <p class="num">82</p>
        </van-col>
      </van-row>
    </div>
    <div class="cell">
      <ul>
        <li>
          <span>能量积分</span>
          <van-icon name="arrow" />
        </li>
        <li>
          <span>官方商城</span>
          <van-icon name="arrow" />
        </li>
        <li>
          <span>我的收藏</span>
          <van-icon name="arrow" />
        </li>
        <li>
          <span>收货地址</span>
          <van-icon name="arrow" />
        </li>
      </ul>
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
  .head img {
    width: 82px;
    height: 82px;
    margin: 0 auto;
    display: block;
    margin-top: 22px;
  }

  .head h5 {
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    text-align: center;
  }

  .head button {
    width: 120px;
    height: 35px;
    background: linear-gradient(180deg, rgba(99, 200, 158, 1) 0%, rgba(96, 181, 146, 1) 100%);
    box-shadow: 0px 8px 23px 0px rgba(0, 0, 0, 0.13);
    border-radius: 50px;
    font-size: 12px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 35px;
    margin-top: 28px;
  }

  .data {
    margin: 0 15px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.09);
    border-radius: 2px;
    margin-top: 26px;
    height: 71px;
  }

  .van-row p {
    text-align: center;
  }

  .van-row .title {
    font-size: 11px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(79, 74, 102, 0.33);
    line-height: 15px;
    padding: 13px 0;
  }

  .van-row .num {
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(52, 51, 57, 1);
    line-height: 20px;
  }

  .cell {
    margin-top: 35px;
  }

  .cell li {
    height: 52px;
    background: #FFFFFF;
    border-bottom: 1px solid rgba(228, 228, 228, 1);
    line-height: 52px;
    position: relative;
  }

  .cell li span {
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(97, 97, 97, 1);
    line-height: 17px;
    letter-spacing: 1px;
    padding-left: 13px;
  }

  ._van-icon {
    position: absolute;
    right: 10px;
    color: #3B3F42;
    top: 6px;
  }

</style>
