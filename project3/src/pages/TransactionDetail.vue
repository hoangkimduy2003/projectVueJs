<template>
    <div v-if="transaction">
     <h1>{{ $route.params.id }}</h1>
     <h1>{{ transaction.name }}</h1>
     <h1>{{ transaction.price }}</h1>
    </div>
    <div v-else>Loading id: {{ $route.params.id }}</div>
</template>

<script>
    export default {
        data() {
            return {
                transaction: null,
            }
        },
        created(){
            fetch("http://localhost:3000/transactions/"+ this.$route.params.id)
            .then(reponse => reponse.json())
            .then(data=> this.transaction = data)
            .then(() => console.log(this.transaction));
        }
    }
</script>

<style lang="scss" scoped>

</style>