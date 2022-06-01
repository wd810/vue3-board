<template>
  <button class="btn btn-sm btn-warning"
          v-if="userEdit"
          @click="openPopup = true">Edit</button>
  <button class="btn btn-sm btn-secondary"
          v-else>Edit</button>
  <drag-popup v-show="openPopup" 
              @close-modal="openPopup = false"
              :width="600"
              :height="500">
      <h5>Edit Data</h5>
      <form @submit.prevent="updateData">
            <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Group</label>
                
                <div class="col-sm-10">
                    <select class="form-select" v-model="value.group">
                        <option v-for="option in group" :key="option" :value="option">{{ option }}</option>
                    </select>   
                </div>
            </div>
            
            <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Status</label>
                <div class="col-sm-10">
                    <select class="form-select" v-model="value.status">
                        <option v-for="option in status" :key="option" :value="option">{{ option }}</option>
                    </select>   
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Type</label>
                <div class="col-sm-10">
                    <select class="form-select" v-model="value.type">
                        <option v-for="option in type" :key="option" :value="option">{{ option }}</option>
                    </select>   
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Message</label>
                <div class="col-sm-10">
                  <textarea v-model="value.message" placeholder="message going to send"></textarea>
                </div>
            </div>
            <div class="row">{{value}}</div>
            <button class="btn btn-primary">Update</button>
      </form>
  </drag-popup>
</template>

<script>
import DragPopup from "./DragPopup.vue"
export default {
    name: "EditData",
    components: {
      DragPopup
    },
    props: {
      data: {
        type: Object,
        required: true,
      },
      userEdit: {
        type: Boolean,
        required: true
      }
    },
    data() {
      const value = {group: "", status: "", type: "", message: ""}
      const group = ["Telegram", "Discord"]
      const status = ["Waiting", "Confirmed"]
      const type = ["Scheduled", "Pending"]
      let openPopup = false
      return {
        value,
        group,
        status,
        type,
        openPopup
      }
    },
    mounted() {
      // console.log("data need to edit: ", this.data)
      this.value = this.data
    },
    methods: {
      updateData() {
        this.$emit("on-update", this.value)
        this.openPopup = false
        // clear form after submission
        // this.value = {group: "", status: "", type: "", message: ""}
      }
    }
}
</script>

<style scoped>
textarea {
  width: 100%;
  padding: 0.6rem 1rem;
}
</style>