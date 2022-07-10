<template>
  <div class="product-item">
    <div class="">
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  computed: {},
  watch: {
    product: {
      handler(n) {
        if (n) {
          console.log(n);
        }
      },
      immediate: true,
      deep: true,
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped></style>
