<template>
  <div class="modal-overlay">
    <div class="modal-bg">
      <vue-resizable
        class="resizable"
        ref="resizableComponent"
        :dragSelector="dragSelector"
        :active="handlers"
        :fit-parent="fit"
        :width="width"
        :height="height"
        :left="left"
        :top="top"
        @mount="eHandler"
        @drag:move="eHandler"
        @drag:start="eHandler"
        @drag:end="eHandler">
        <div class="block">
          <div class="drag-container">drag top bar</div>
          <div class="box">
            <slot></slot>
          </div>
          <!-- close btn -->
          <div class="close" @click="$emit('close-modal')">close</div>
          <!-- close btn END -->
        </div>
      </vue-resizable>
    </div>
    
  </div>
  
</template>

<script>
import VueResizable from "vue-resizable";
export default {
  name: "DragPopup",
  components: { VueResizable },
  props: {
      width: Number,
      height: Number,
  },
  data() {
    return {
      handlers: ["r", "rb", "b", "lb", "l", "lt", "t", "rt"],
      left: 0,
      top: 100,
      fit: true,
      dragSelector: ".drag-container"
    };
  },
  mounted() {
      this.left = (window.innerWidth - this.width) / 2
      // this.top = 100
  },
  methods: {
    eHandler(data) {
      this.left = data.left;
      this.top = data.top;
      this.event = data.eventName;
    }
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
  z-index: 999;
}
.block {
  height: 100%;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
  color: #212529;
}
.modal-bg {
  display: inline-block;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
.resizable {
  padding: 0;
  min-width: 500px;
  min-height: 500px;
}
.close {
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
}
.drag-container {
  width: 100%;
  height: 2rem;
  background: red;
  text-align: center;
  cursor: pointer;
  position:absolute;
  top: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.box {
  width: 100%;
}
</style>