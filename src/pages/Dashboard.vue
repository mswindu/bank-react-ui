<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    :pagination.sync="pagination"
    :total-items="totalDesserts"
    :loading="loading"
    class="elevation-1"
  >
    <template 
      slot="items" 
      slot-scope="props"
    >
      <td class="text-xs-left">{{ props.item.uuid }}</td>
      <td class="text-xs-left">{{ props.item.currency }}</td>
      <td class="text-xs-left">{{ props.item.balance }}</td>
      <td class="text-xs-left">{{ props.item.type }}</td>
    </template>
  </v-data-table>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        totalDesserts: 0,
        desserts: [],
        loading: true,
        pagination: {},
        headers: [
          { text: 'uuid', align: 'left', sortable: false, value: 'uuid' },
          { text: 'Валюта', align: 'left', sortable: false, value: 'currency' },
          { text: 'Баланс', align: 'left', sortable: false, value: 'balance' },
          { text: 'Тип счета', align: 'left', sortable: false, value: 'type' }
        ]
      }
    },
    watch: {
      pagination: {
        handler () {
          this.getDataFromApi()
            .then(data => {
              this.desserts = data.items
              this.totalDesserts = data.total
            })
        },
        deep: true
      }
    },
    mounted () {
      this.getDataFromApi()
        .then(data => {
          this.desserts = data.items
          this.totalDesserts = data.total
        })
    },
    methods: {
      getDataFromApi () {
        this.loading = true
        return new Promise((resolve, reject) => {
          const { sortBy, descending, page, rowsPerPage } = this.pagination

          let items = []

          axios.get('http://localhost:9000/accounts')
          .then(res => {
            console.log(res.data)
            items = res.data
          })
          .catch(err => {
            console.log(err)
          })

          const total = items.length

          if (this.pagination.sortBy) {
            items = items.sort((a, b) => {
              const sortA = a[sortBy]
              const sortB = b[sortBy]

              if (descending) {
                if (sortA < sortB) return 1
                if (sortA > sortB) return -1
                return 0
              } else {
                if (sortA < sortB) return -1
                if (sortA > sortB) return 1
                return 0
              }
            })
          }

          if (rowsPerPage > 0) {
            items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
          }

          setTimeout(() => {
            this.loading = false
            resolve({
              items,
              total
            })
          }, 500)
        })
      }      
    }
  }
</script>
