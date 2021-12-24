<template>
  <div id="test">
    <!-- <img
      class="img"
      src="http://gxy.bjfu.edu.cn/gxy_root/resources/home/images/public/logo-bg.jpg"
      alt=""
    /> -->
    <div class="swiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide>
          <img
            src=" http://lxy.bjfu.edu.cn/images/bigpic4.jpg"
            alt=""
            style="width: 100%; height: 460px"
        /></swiper-slide>
        <swiper-slide>
          <img
            src="http://lxy.bjfu.edu.cn/images/bigpic3.jpg"
            alt=""
            style="width: 100%; height:460px"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="http://lxy.bjfu.edu.cn/images/bigpic.jpg"
            alt=""
            style="width: 100%; height: 460px"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src=" http://lxy.bjfu.edu.cn/images/bigpic2.jpg"
            alt=""
            style="width: 100%; height: 460px"
        /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <div class="title">欢迎使用《现代数字信号处理》实验平台</div>

    <!-- <div class="FlipClock">
      <FlipClock></FlipClock>
    </div> -->
    <div id="footer">
      <img
        class="img1"
        src="http://gxy.bjfu.edu.cn/gxy_root/resources/home/images/public/logo-bg.jpg"
      />
    </div>
  </div>
</template>

<script>
import FlipClock from "@/components/FlipClock/FlipClock.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";

import "swiper/dist/css/swiper.css";

export default {
  name: "test",
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        // 显示分页
        pagination: {
          el: ".swiper-pagination",
          clickable: true, //允许分页点击跳转
        },
        // 设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  components: {
    FlipClock,
    swiper,
    swiperSlide,
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log("this is current swiper instance object", this.swiper);
    // this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
#footer {
  position: absolute;
  bottom: -2px;
  text-align: center;
  width: 100%;
  height: 90px; /*脚部的高度*/
  background: #1f1f1f;
  clear: both;
}
.swiper {
  margin-top: -5px;
}
.img {
  width: 100%;
  height: 80px;
  margin: 0;
  padding: 0;
}
.img1 {
  width: 100%;
  height: 100%;
  margin: 0;
  
}
.title {
  margin-bottom: 30px;
  margin-top: 20px;
  text-align: center;
  color: #195196;
  font-size: 56px;
}
</style>