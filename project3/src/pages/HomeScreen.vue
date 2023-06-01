<template>
    <div>
        Đay là home screen
    </div>
</template>

<script>
import { reactive,ref,computed  } from 'vue';
    export default {
        setup(){
            let searchText = ref("Hoang kim");
            const customers = reactive(["something", "Sky albedo", "Hoang kim duy"]);
            const customersFilled = computed(() => 
                customers.filter((customer) => customer.includes(searchText.value))
            );
            
            return {customers, searchText ,customersFilled};
        }
    }
</script>

<style lang="scss" scoped>

</style>