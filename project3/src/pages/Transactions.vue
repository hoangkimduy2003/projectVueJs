<template>
    <div>
        Đây là transactions ...
        <div class="item" v-for="transaction in transactions" :key="transaction.id">
            <router-link :to="`/transaction/${transaction.id}`">{{ transaction.name }}</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TransactionScreen",
        data() {
            return {
                transactions:[
                    {
                        id: 1,
                        name: "Transaction 1"
                    },
                    {
                        id: 2,
                        name: "Transaction 2"
                    },
                    {
                        id: 3,
                        name: "Transaction 3"
                    },
                    {
                        id: 4,
                        name: "Transaction 4"
                    }
                ]
            }
        },

    }
</script>

<style  scoped>

</style>