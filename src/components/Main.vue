<template>
  <div class="row">
    <!-- left part -->
    <div class="col-sm-9">
      <!-- Add data btn -->
      <CreateData @on-submit="submit"
                  :userAdd="currentUser.privilege.includes('add')"/>
      <!-- data list -->
      <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Group</th>
                <th scope="col">Status</th>
                <th scope="col">Type</th>
                <th scope="col">Create Time</th>
                <th scope="col">Creator</th>
                <th scope="col">Operations</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="fakeList.length <= 0">
                    <td colspan="7"><p> No Data to Display</p></td>
                </tr>
                <TableRow
                    v-else
                    v-for="(item, index) in fakeList" 
                    :key="index" 
                    :data="item"
                    :user="currentUser"
                    :currentRow="currentRow.id == item.id"
                    @delete-row="deleteRow(index)"
                    @edit-row="editRow(data)"
                    @highlight-row="selectRow(item)"/>
            </tbody>
        </table>
      </div>
      <!-- table box END -->
    </div>
    <!-- right part: display message details here -->
    <div class="col-sm-3">
      <Message :message="currentRow.message"/>
    </div>
  </div>
</template>

<script>
import CreateData from "./CreateData.vue"
import TableRow from "./TableRow.vue"
import Message from "./Message.vue"
import { computed } from "vue"
import { useStore } from "vuex"
export default {
    name: "Main",
    components: {
        CreateData,
        TableRow,
        Message,
    },
    setup() {
        const store = useStore()
        let currentUser = computed(function() {
            return store.state.currentUser
        })
        return {
            currentUser
        }
    },
    data() {
        let openCreate = false
        const fakeList = [
                {
                    id: "1",
                    message: "message 1",
                    group: "all telegram",
                    status: "waiting",
                    type: "scheduled",
                    createTime: "2022",
                    creator: "lll"
                },
                {
                    id: "2",
                    message: "message 2",
                    group: "all telegram",
                    status: "waiting",
                    type: "scheduled",
                    createTime: "2022",
                    creator: "lll"
                }
            ]
        let currentRow = fakeList[0]
        return {
            openCreate,
            fakeList,
            currentRow
        }
    },
    methods: {
        selectRow(item) {
          this.currentRow = item
        },
        deleteRow(index) {
            this.fakeList.splice(index, 1)
            this.currentRow = this.fakeList.length > 0 ? this.fakeList[0] : {}
        },
        editRow(data, index) {
            this.fakeList[index] = data
        },
        submit(data) {
            data.creator = this.currentUser.name
            const date = new Date()
            data.createTime = date
            data.id = String(this.fakeList.length + 1) + String(date.getUTCDate())
            this.fakeList.push(data)
            this.openCreate = false
        }
    }
}
</script>

<style scoped>
.dark .table {
    color: #eee;
}
.table tr {
    cursor: default;
}
</style>