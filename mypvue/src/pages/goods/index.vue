<template>
  <div>
    <div class="Stick van-hairline--bottom">
      <ul>
        <li @click="navigateTo(1)" v-for="item in list " :key="item.id">
          <img :src="item.banner[0]" alt="" class="img">
          <h3>奖品：{{item.name}} ×1</h3>
          <p class="merchant">抽奖助手官方商城 赞助</p>
          <p class="time">07月16日 18:00 自动开奖</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {},
        list: []
      }
    },
    components: {},
    methods: {
      navigateTo() {
        mpvue.navigateTo({
          url: '/pages/details/main?id=111'
        })
      }
    },
    onPullDownRefresh() {
      mpvue.stopPullDownRefresh()
    },

    created() {
      this.$tools.api('/goods/list', {}, (res) => {
        this.list = res.data
      })
    }
  }

</script>

<style scoped>
  .head {
    height: 55px;
    background: #63C89E;
    display: flex;
    position: relative;
    align-items: center;
  }

  .head img {
    width: 23px;
    margin-left: 15px;
    margin-right: 9px;
    height: 29px;
  }

  .head span {
    font-size: 12px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 17px;
    letter-spacing: 1px;
  }

  .head van-icon {
    color: rgba(255, 255, 255, 1);
    position: absolute;
    right: 21px;
    top: 19px;
  }

  .Stick {
    /* border-bottom: 1px solid rgba(225, 225, 225, 1); */
    padding-bottom: 27px;
    margin: 0 20px;
  }

  .Stick li {
    height: 240px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.09);
    border-radius: 2px;
    position: relative;
    margin: 0 auto;
    margin-top: 15px;
  }

  .Stick li .img {
    width: 100%;
    height: 150px;
  }

  .Stick li h3 {
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(56, 56, 56, 1);
    margin-top: 6px;
    padding-left: 18px;
  }

  .Stick .merchant {
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(99, 200, 158, 1);
    margin-top: 4px;
    padding-left: 18px;

  }

  .Stick .time {
    font-size: 9px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
    margin-top: 6px;
    padding-left: 18px;

  }

  .fun {
    position: absolute;
    height: 56px;
    width: 110px;
    display: flex;
    align-items: center;
    right: 0;
    bottom: 16px;
    justify-content: flex-end;

  }

  .fun .like {
    width: 30px;
    height: 30px;
    margin-right: 20px;
  }

  .fun .collect {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }

  .hairline {
    margin-top: 27px;
  }

  .list {
    margin: 0 15px;
  }

  .list li {
    height: 124px;
    border-top: 1px solid rgba(225, 225, 225, 1);
    display: flex;
    align-items: center;
  }

  .left img {
    width: 84px;
    height: 84px;
  }

  .right {
    padding-left: 18px;
  }

  .right h3 {
    font-size: 14px;
    font-family: PingFangSC-Medium;
    font-weight: 500;
    color: rgba(56, 56, 56, 1);
    line-height: 20px;
  }

  .right p {
    font-size: 12px;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    color: rgba(97, 97, 97, 1);
    line-height: 17px;
  }

</style>
