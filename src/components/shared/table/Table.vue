<template>
    <div class="divTable">
    <table :id="tableId" :class="classObject">
        <thead>
            <tr>
                <th v-for="head in heads" :key="head" :style="widthColumn">
                    {{head}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows">
                <td v-for="nmProp in heads" :key="nmProp">     
                        {{row[nmProp]}}
                </td>
            </tr>
        </tbody>
        <tfoot>
            <tr></tr>          
        </tfoot>
    </table>
    <b-pagination v-if="pagination" :aria-controls="tableId" :align="paginationAlign" :total-rows="totalRows" 
            v-model="currentPage" :per-page="perPage" @input="paginar()">
        </b-pagination>
    </div>
</template>

<script>
export default {
    data() {
        return { 
                currentPage: 1
            }
    },

    props: {
        heads: Array,
        rows: Array,
        bordered: { type: Boolean, default: false },
        hover: { type: Boolean, default: true },
        tableId: { type: String, default: "tblMain" },
        pagination: { type: Boolean, default: true },
        sorting: { type: Boolean, default: true },
        paginationAlign: { type: String, default: "center" },
        totalRows:{ type: Number, required: true }, 
        perPage:{ type: Number, default: 10 }, 
    },

    computed: {
        
         classObject: function () {
                return {'table-bordered': this.bordered, 'table-hover': this.hover }
        },
        widthColumn: function(){
            return `width: ${(100 / this.heads.length)}%`;
        }
    },

    methods: {
        paginar(){
            this.$emit('paginarLista', { currentPage: this.currentPage, perPage: this.perPage });            
        }
    }
}
</script>

<style scoped>
    .divTable{
        padding: 10px;    
        
    }

    table{
        margin: 0 auto 15px auto; 
        width: 100%;        
    }
    
</style>
