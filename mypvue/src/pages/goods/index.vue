<template>
  <div>
    <div class="Stick van-hairline--bottom">
      <van-row :gutter="10">
        <van-col :span="12" v-for="item in list " :key="item.id">
          <div @click="navigateTo(item.goodsId)" class="div">
            <img :src="item.goodsPic" alt="" class="img">
            <h3>{{item.goodsName}}</h3>
          </div>
        </van-col>
      </van-row>
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
      navigateTo(id) {
        mpvue.navigateTo({
          url: `/pages/details/main?id=${id}`
        })
      },
      gitList() {
        this.$tools.api('/goods/list', {
          pageNumber: 1,
          pageSize: 60
        }, (res) => {
          this.list = res.data
        })
      },
    },
    onPullDownRefresh() {
      this.gitList()
      mpvue.stopPullDownRefresh()
    },

    created() {
      this.gitList()
    },

  }

</script>

<style scoped>
  .Stick {
    /* border-bottom: 1px solid rgba(225, 225, 225, 1); */
    padding-bottom: 27px;
    margin: 0 20px;
  }


  .div .img {
    width: 100%;
    height: 150px;
  }

  .div h3 {
    font-size: 14px;
    font-weight: 500;
    color: rgba(56, 56, 56, 1);
    margin-top: 6px;
    padding-left: 18px;
  }

  .div .merchant {
    font-size: 12px;
    font-weight: 400;
    color: rgba(99, 200, 158, 1);
    margin-top: 4px;
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
    font-weight: 500;
    color: rgba(56, 56, 56, 1);
    line-height: 20px;
  }

  .right p {
    font-size: 12px;
    font-weight: 400;
    color: rgba(97, 97, 97, 1);
    line-height: 17px;
  }

</style>
