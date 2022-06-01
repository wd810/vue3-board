<template>
  <button class="btn btn-primary" 
          v-if="userAdd"
          @click="openPopup = true">Add a List</button>
  <button class="btn btn-secondary" 
          v-else>Add a List</button>
  <drag-popup v-show="openPopup" 
              @close-modal="openPopup = false"
              :width="600"
              :height="500">
      <h5>Add Data</h5>
      <form @submit.prevent="addData">
            <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Group</label>
                
                <div class="col-sm-10">
                    <select class="form-select" v-model="value.group">
                      <option value="" disabled hidden>Select Group</option>
                      <option v-for="option in group" :key="option" :value="option">{{ option }}</option>
                    </select>   
                </div>
            </div>
            
            <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Status</label>
                <div class="col-sm-10">
                    <select class="form-select" v-model="value.status">
                        <option value="" disabled hidden>Select Status</option>
                        <option v-for="option in status" :key="option" :value="option">{{ option }}</option>
                    </select>   
                </div>
            </div>

            <div class="row mb-3">
                <label for="colFormLabel" class="col-sm-2 col-form-label">Type</label>
                <div class="col-sm-10">
                    <select class="form-select" v-model="value.type">
                        <option value="" disabled hidden>Select Type</option>
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
            <div class="row mb-3">{{value}}</div>
            <button class="btn btn-primary">Add</button>
      </form>
  </drag-popup>
</template>

<script>
import DragPopup from "./DragPopup.vue"
export default {
    name: "CreateData",
    components: {
      DragPopup,
    },
    props: {
      userAdd: Boolean,
    },
    data() {
      let openPopup = false
      const value = {group: "", status: "", type: "", message: ""}
      const group = ["Telegram", "Discord"]
      const status = ["Waiting", "Confirmed"]
      const type = ["Scheduled", "Pending"]
      return {
        value,
        group,
        status,
        type,
        openPopup
      }
    },
    methods: {
      addData() {
        this.$emit("on-submit", this.value)
        // clear form after submission
        this.openPopup = false
        this.value = {group: "", status: "", type: "", message: ""}
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