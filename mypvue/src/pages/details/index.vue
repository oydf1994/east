<template>
  <div>
    <div class="swiper">
      <swiper :autoplay="autoplay" :interval="interval" :duration="duration">
        <swiper-item v-for="item in form.banner" :key="item">
          <image :src="item" class="slide-image" />
        </swiper-item>
      </swiper>
    </div>
    <div class="message">
      <h3> 奖品：{{form.name}} ×1</h3>
      <p> 07月16日 18:00 自动开奖</p>
    </div>
    <div class="introduce">
      <img :src="item" alt="" v-for="item in form.details">
    </div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" open-type="contact" />
      <van-goods-action-icon icon="share" text="分享" open-type="share" />
      <van-goods-action-icon icon="friends-o" text="参与人员" @click="navigateTo" />
      <van-goods-action-button text="参与抽奖" type="primary " size="mini" @click="lottery" />
    </van-goods-action>
  </div>
</template>

<script>
  import Toast from '../../../static/vant/toast/toast';
  export default {
    data() {
      return {
        imgUrls: [
          'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
        ],
        autoplay: true,
        flag: true,
        show: false,
        form: {},
        interval: 2000,
        duration: 1000
      }
    },
    components: {},
    onLoad: function (options) {
      this.get(options.id)
    },
    onReachBottom() {
      mpvue.showLoading({
        title: '',
      })
      setTimeout(() => {
        mpvue.hideLoading();
      }, 2000)
    },
    methods: {
      onClose() {
        this.show = false
      },
      //点击抽奖
      lottery() {
        Toast.loading({
          mask: true,
          message: ''
        });
        setTimeout(() => {
          Toast.clear()
          this.flag = !this.flag
        }, 2000)
      },
      navigateTo() {
        mpvue.navigateTo({
          url: '/pages/participation/main'
        })
      },
      share() {
        this.show = true
      },
      get(id) {
        console.log(id)
        this.$tools.api('/goods/get', {
          id: id
        }, (res) => {
          this.form = res.data
          console.log(this.form)
        })
      }
    },
    onShareAppMessage() {
      var that = this;
      // 设置转发内容
      // var shareObj = {
      //   title: "转发的标题",
      //   path: '路径', // 默认是当前页面，必须是以‘/’开头的完整路径
      //   imgUrl: '', //转发时显示的图片路径，支持网络和本地，不传则使用当前页默认截图。
      //   success: (res) => { // 转发成功之后的回调　
      //     console.log(res)
      //     if (res.errMsg == 'shareAppMessage:ok') {
      //       console.log('转发成功')
      //     }
      //   },
      //   fail: (res) => { // 转发失败之后的回调
      //     console.log(res)
      //     if (res.errMsg == 'shareAppMessage:fail cancel') {
      //       // 用户取消转发
      //     } else if (res.errMsg == 'shareAppMessage:fail') {
      //       // 转发失败，其中 detail message 为详细失败信息
      //     }
      //   },
      //   complete: () => {
      //     // 转发结束之后的回调（转发成不成功都会执行）
      //   }
      // };
      // return shareObj;
    },
    created() {}
  }

</script>

<style scoped>
  swiper {
    height: 215px;
  }

  .swiper image {
    width: 100%;
    height: 215px;
  }

  .message {
    padding: 12px 0;
    padding-left: 20px;
  }

  .message h3 {
    font-size: 14px;
    font-weight: 500;
    color: rgba(56, 56, 56, 1);
    line-height: 20px;
  }

  .message p {
    font-size: 12px;
    font-weight: 400;
    color: rgba(97, 97, 97, 1);
    line-height: 17px;
    margin-top: 6px;
    margin-bottom: 11px;
  }

  .sponsor {
    display: flex;
    align-items: center;
    position: relative;
    border-top: 1px solid #D5D5DB;
    padding-top: 18px;
  }

  .sponsor span {
    font-size: 12px;
    font-weight: 500;
    color: rgba(99, 200, 158, 1);
    line-height: 17px;
    letter-spacing: 1px;
  }

  .sponsor img {
    width: 24px;
    position: absolute;
    right: 23px;
    height: 24px;
  }

  .introduce {
    border-bottom: 1px solid #D5D5DB;

  }

  .introduce img {
    width: 100%;
  }

  .introduce h5 {
    font-size: 12px;
    font-weight: 500;
    color: rgba(69, 69, 83, 1);
    line-height: 17px;
    letter-spacing: 1px;
  }

  .introduce p {
    font-size: 13px;
    font-weight: 400;
    color: rgba(140, 140, 153, 1);
    line-height: 24px;
  }

  .award {
    position: relative;
  }

  .join {
    width: 110px;
    height: 110px;
    background: linear-gradient(360deg, rgba(57, 162, 118, 0.8) 0%, rgba(99, 200, 158, 1) 100%);
    box-shadow: 0px 2px 13px 0px rgba(94, 160, 237, 0.16);
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 12px;
    margin-top: 38px;
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    line-height: 110px;
    letter-spacing: 1px;
    text-align: center;
  }

  .await {
    width: 52px;
    height: 52px;
    background: linear-gradient(360deg, rgba(57, 162, 118, 0.8) 0%, rgba(99, 200, 158, 1) 100%);
    box-shadow: 0px 2px 13px 0px rgba(94, 160, 237, 0.16);
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 12px;
    margin-top: 38px;
    font-size: 11px;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    line-height: 52px;
    position: absolute;
    left: 23px;
  }

  .join2 {
    width: 110px;
    height: 110px;
    background: linear-gradient(360deg, rgba(57, 162, 118, 0.8) 0%, rgba(99, 200, 158, 1) 100%);
    box-shadow: 0px 2px 13px 0px rgba(94, 160, 237, 0.16);
    border-radius: 50%;
    margin: 0 auto;
    margin-bottom: 12px;
    margin-top: 38px;
    line-height: 105px;
    text-align: center;
  }

  .join2 span {
    font-size: 16px;
    font-weight: 600;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    position: relative;
    top: -10px;
  }

  .join2 .div {
    width: 34px;
    height: 30px;
    margin: 0 auto;

  }

  .join2 img {
    width: 34px;
    height: 30px;
  }

  .point {
    font-size: 12px;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
    line-height: 17px;
    letter-spacing: 1px;
    position: absolute;
    left: 90px;
    top: 53px;
  }

  .text {
    font-size: 12px;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
    line-height: 17px;
    letter-spacing: 1px;
    text-align: center;
  }

  .portrait {
    margin-top: 16px;
    text-align: center;
    margin-bottom: 30px;
  }

  .portrait img {
    width: 30px;
    height: 30px;
    margin-right: 5px;
  }

  .share {
    width: 345px;
    height: 51px;
    background: rgba(103, 103, 103, 1);
    box-shadow: 0px 2px 13px 0px rgba(94, 160, 237, 0.16);
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 51px;
  }

  .slide-text {
    font-size: 11px;
    font-weight: 400;
    color: rgba(155, 155, 155, 1);
    line-height: 15px;
    letter-spacing: 1px;
    margin: 12px 0;
    text-align: center;
  }

  .van-row img {
    width: 40px;
    margin-top: 15px;
    height: 40px;
  }

  .van-row ._van-col {
    text-align: center;
  }

  .van-row .van-row p {
    font-size: 12px;
    font-weight: 400;
    color: rgba(127, 131, 137, 1);
    line-height: 17px;
    margin-top: 5px;
    margin-bottom: 10px;
  }

</style>
