<template>
  <div>
    <div class="head">
      <img src="../../../static/images/user.png" alt="">
      <h5>East</h5>
    </div>
    <div class="cell">
      <ul>
        <li>
          <span>抽奖记录</span>
          <van-icon name="arrow" />
        </li>
        <li>
          <span>中奖纪录</span>
          <van-icon name="arrow" />
        </li>
        <li>
          <span>收货地址</span>
          <van-icon name="arrow" />
        </li>
        <li>
          <span>商务合作</span>
          <van-icon name="arrow" />
        </li>
        <li>
          <span>在线客服</span>
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
    font-weight: 500;
    color: rgba(79, 74, 102, 0.33);
    line-height: 15px;
    padding: 13px 0;
  }

  .van-row .num {
    font-size: 14px;
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
