<template>
    <tr @click="$emit('highlight-row')"
        :class="{ 'table-active': currentRow}">
        <th scope="row">{{ data.id }}</th>
        <td>{{ data.group }}</td>
        <td>{{ data.status }}</td>
        <td>{{ data.type }}</td>
        <td>{{ moment(data.createTime).format() }}</td>
        <td>{{ data.creator }}</td>
        <td>
            <EditData :data="data"
                      :userEdit="user.privilege.includes('edit')"
                      @on-update="updateData" />
            <button class="btn btn-sm btn-danger"
                    v-if="user.privilege.includes('delete')"
                    @click="$emit('delete-row')">Delete</button>
            <button class="btn btn-sm btn-secondary"
                    v-else>Delete</button>
            
        </td>
    </tr>
</template>

<script>
import EditData from "./EditData.vue"
import moment from 'moment'
export default {
    props: {
        data: {
            type: Object,
            required: true
        },
        user: {
            type: Object,
            required: true
        },
        currentRow: {
            type: Boolean,
            required: false
        }
    },
    created: function() {
        this.moment = moment
    },
    data() {
        let openEdit = false
        return {
            openEdit
        }
    },
    components: {
        EditData
    },
    methods: {
        updateData(data) {
            this.$emit("edit-row", data)
            this.openEdit = false
        }
    }
}
</script>

<style scoped>
.dark .table-active {
    color: #eee;
}
</style>