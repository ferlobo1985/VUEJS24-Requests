<template>
    <div class="row">
        <div v-if="data.loading">
            <app-loader/>
        </div>
        <div 
            v-if="!data.loading"
            class="col-auto mb-4"
            v-for="(user) in data.users"
            :key="user.id"
        >
            <div class="card" style="width: 14rem;">
                <img 
                    class="card-img-top" 
                    :src="'https://placebeard.it/300/300?' + user.id  "
                    alt="Card image cap"
                >
                <div class="card-body">
                    <div class="card-text">
                        <strong>Name:</strong> {{ user.name }}
                    </div>
                    <div class="card-text">
                        <strong>Lastname:</strong> {{ user.lastname }}
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script setup>
    import getUsers from '@/composables/getUsers'
    const { data, loadUsers } = getUsers();
    loadUsers();

    // import axios from 'axios';
    // import { useToast } from 'vue-toast-notification'
    // import { reactive, onMounted } from 'vue';

    // const $toast = useToast();
    // const data = reactive({
    //     loading:true,
    //     user:[]
    // })

    // const loadUsers = async() => {
    //     try{
    //         const response = await axios.get(`http://localhost:3004/users`);
    //         data.users =  response.data;
    //         data.loading = false;
    //     } catch(error){
    //         $toast.error('Sorry, something went wrong')
    //     }
    // }

    // onMounted(()=>{
    //     loadUsers();
    // })

</script>