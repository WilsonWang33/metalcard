<template>
  <div class="custom-header-wrapper">
    <div class="header flex">
      <img class="logo" :src="LogoImg" alt="" />
      <nav>
        <ul class="flex">
          <li
            v-for="(item, index) in nav"
            :key="'nav' + index"
            :class="{ active: activeNav === index }"
            @click="handleNav(item, index)"
          >
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script lang="javascript">
import LogoImg from '/src/assets/images/logo.png';

export default {
  name: 'CustomHeader',
  props: {},
  data() {
    return {
      LogoImg,
      activeNav: 0,
      currentPath: '/home',
      nav: [
        {
          name: 'Home',
          path: '/home',
        },
        {
          name: 'Products',
          path: '/products',
        },
        {
          name: 'About Us',
          path: '/aboutus',
        },
        {
          name: 'FAQ',
          path: '/faq',
        },
        {
          name: 'Contact',
          path: '/contact',
        },
      ],
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    handleNav(item, index) {
      const { path } = item;
      this.activeNav = index;
      this.currentPath = path;

      const _currentPath = this.$route.path;

      if (_currentPath === item.path) return;

      this.$router.push({ path: item.path });
    }
  },
}
</script>

<style lang="less" scoped>
.custom-header-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 152px;
  background: rgba(255, 255, 255, 0.85);
  z-index: 9999;
  .header {
    width: 980px;
    height: 100%;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    img {
      flex: 0 0 258px;
      width: 258px;
      height: 103px;
    }
    nav {
      margin-top: 39px;
      ul {
        flex: none;
        height: 38px;
        line-height: 38px;
        justify-content: flex-start;
        align-items: center;
        li {
          flex: 0 0 109px;
          width: 109px;
          height: 38px;
          line-height: 38px;
          span {
            display: inline-block;
            width: 100%;
            font: normal normal normal 15px/1.4em raleway, sans-serif;
            color: rgba(161, 160, 158);
            cursor: pointer;
            transition: all 0.33s ease;
          }
          &.active,
          &:hover {
            span {
              color: rgba(188, 153, 121, 1);
            }
          }
        }
      }
    }
  }
}
</style>
