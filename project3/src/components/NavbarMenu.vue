<template>
    <div>
        <router-link :to="{name: 'home-route'}" >OverView</router-link>
        <router-link :to="{name: 'transactions-route'}" >Transactions</router-link>
        <router-link to="/">Budgets</router-link>
        <router-link to="/">Reports</router-link>
        <router-link to="/">Setting</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>