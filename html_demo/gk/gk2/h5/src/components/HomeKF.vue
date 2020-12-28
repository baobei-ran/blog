<template>
  <div style="touch-action: none;">
    <div
      class="home"
      style="width:.8rem;position:fixed;left:8px;"
      :style="{ top: top + 'px', bottom: bottom }"
      id="left-nav"
      @touchmove="touchmove($event)"
    >
      <div @click="open" class="pictrueBox">
        <div class="pictrue">
          <img src="@assets/images/kf.png"
            class="image-kf"
          />
          <span>客服在线</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeKF",
  data: function() {
    return {
      top: "",
      bottom: ""
    };
  },
  methods: {
    touchmove(event) {
      this.bottom = "auto";
      event.preventDefault();
      let top =
        event.touches[0].pageY -
        (document.documentElement.scrollTop || document.body.scrollTop) -
        this.$el.clientHeight;
      if (top > document.body.clientHeight - 150) {
        top = document.body.clientHeight - 150;
      } else if (top < 55) top = 55;
      this.top = top;
    },
    open: function() {
      this.$router.push('/customer/list')
    }
  },
  created() {
    this.bottom = "50px";
  }
};
</script>

<style scoped lang="scss">
.pictrueBox {
  width: .76rem;
  .pictrue {
      width: 100%;
      height: 2.4rem;
      border-radius: 0.1rem;
      background-color: #5597f7;
      padding: .1rem .2rem 0;
      img {
          width: 100%;
          display: block;
          margin-bottom: 6px;
      }
  }
}
</style>
