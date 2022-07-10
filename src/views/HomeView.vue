<template>
  <div class="page-wrapper home">
    <div class="swiper-wrapper">
      <swiper ref="mySwiper" :options="swiperOption">
        <swiper-slide>
          <img :src="Banner1" />
        </swiper-slide>
        <swiper-slide>
          <img :src="Banner2" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <section class="intro-wrapper flex">
      <div class="img-sec">
        <img :src="Intro" alt="" />
      </div>
      <div class="text">
        <h5>ABOUT US</h5>
        <p>
          China Metal Crafts (CMC) focuses on metal credit cards, membership
          cards, hotel control cards, business cards, grinder cards, dog tags,
          etc. We are located in the Shenzhen Special Economic Zone of China.
        </p>
        <p>
          We have a dedicated Research & Development team, advanced production
          equipment and high-standard production lines. We produce cards and
          export them all over the world. We have developed unique metals Cards
          which include pure 24K gold, diamond metal cards, LED metal cards,
          wood and gold mixed cards, shell metal cards, environmentally friendly
          metal cards, and some unique and luxurious metal cards are still under
          development to stay ahead in terms of maximizing luxury.
        </p>
        <p>
          We have a dedicated Research & Development team, advanced production
          equipment and high-standard production lines. We produce cards and
          export them all over the world. We have developed unique metals Cards
          which include pure 24K gold, diamond metal cards, LED metal cards,
          wood and gold mixed cards, shell metal cards, environmentally friendly
          metal cards, and some unique and luxurious metal cards are still under
          development to stay ahead in terms of maximizing luxury.
        </p>
        <p>
          Welcome friends from all fields to develop and create a more
          personalized, high quality, world class product to represent you!
        </p>
      </div>
    </section>
    <section class="product-wrapper">
      <h1>
        <p>ELEVATE YOUR IMAGE WITH<br /><span>METAL CARDS</span></p>
      </h1>
      <div class="products">
        <ProductItem v-for="item in 10" :key="'index' + item" />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import { swiper, swiperSlide } from 'vue-awesome-swiper';

import 'swiper/dist/css/swiper.css';

import ProductItem from '@/components/ProductItem.vue';

import Banner1 from '@/assets/images/banner.jpg';
import Banner2 from '@/assets/images/banner2.jpg';
import Intro from '@/assets/images/intro.jpg';

export default {
  name: 'HomeView',
  components: {
    swiper,
    swiperSlide,
    ProductItem,
  },
  data() {
    return {
      Banner1,
      Banner2,
      Intro,
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: false,
        },
        slidesPerview: 4,
        spaceBetween: 0,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.page-wrapper {
  &.home {
    .swiper-wrapper {
      width: 100%;
      height: 844px;
      .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-slide {
          width: 100% !important;
          margin-right: 0 !important;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: 50% 50%;
          }
        }
      }
    }
    .intro-wrapper {
      width: 100%;
      height: 909px;
      justify-content: space-between;
      .img-sec {
        flex: 0 0 63.06%;
        width: 63.06%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: 50% 50%;
        }
      }
      .text {
        flex: 0 0 36.04%;
        width: 36.04%;
        height: 100%;
        text-align: left;
        padding-left: 98px;
        h5 {
          margin: 88px 0 46px;
          font-size: 40px;
          color: rgb(240, 200, 155);
        }
        p {
          width: 82%;
          line-height: 28px;
          margin-bottom: 18px;
          word-break: break-all;
          font-size: 16px;
          color: rgb(34, 33, 32);
        }
      }
    }
    .product-wrapper {
      width: 100%;
      height: 858px;
      background: rgb(67, 66, 63);
      padding-top: 1px;
      h1 {
        margin: 58px 0 56px;
        font: normal normal normal 40px/1.4em avenir-lt-w01_85-heavy1475544,
          avenir-lt-w05_85-heavy, sans-serif;
        p {
          font-size: 40px;
          color: rgb(212, 185, 161);
          span {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>
