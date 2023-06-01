<template>
  <div>
    Đây là transactions ...
    <div v-if="transactions.length">
      <table>
      <tr v-for="transaction in transactions" :key="transaction.id">
        <td>{{ transaction.id }}</td>
        <td>{{ transaction.name }}</td>
        <td>{{ transaction.price }}</td>
        <td>
          <button>
            <router-link
              :to="{
                name: 'transaction-detail-route',
                params: { id: transaction.id },
              }"
              >Chi tiết</router-link
            >
          </button>
        </td>
      </tr>
    </table>
    </div>
    <div v-else>Loading transactions ... </div>
  </div>
</template>

<script>
export default {
  name: "TransactionScreen",
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    fetch("http://localhost:3000/transactions").then((response) => response.json().then(data => this.transactions = data) )
  },
};
</script>

<style  scoped>
</style>