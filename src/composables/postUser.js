import axios from "axios";
import { useToast } from "vue-toast-notification";
import { ref } from "vue";

const postUser = ( user ) => {
    const $toast = useToast();
    const loading = ref(false);

    const addUser = () => {
        loading.value = true;
    
        axios({
            method: "POST",
            url: "http://localhost:3004/users",
            data: user,
        })
        .then(() => {
            $toast.success("Great dude !!!");
        })
        .catch((error) => {
            $toast.error("Sorry, something went wrong");
        })
        .finally(()=>{
            loading.value = false;
        })
    };
    return {loading, addUser}
}
export default postUser;