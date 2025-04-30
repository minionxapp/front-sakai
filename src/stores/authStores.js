import custumFetch from "@/api";
import { defineStore } from "pinia";
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useCookies } from "vue3-cookies";



export const useAuthStore = defineStore('user', () => {
    const dialog = ref(false)
    const errorMsg = ref(null)
    const errorAlert = ref(false)
    const router = useRouter()
    const { cookies } = useCookies();

    const currentUser = ref(localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")) : null)



    const LoginUser = async (inputData) => {
        console.log(inputData)
        try {
            const data  = await custumFetch.post('auth/login', {
                email: inputData.email,
                password: inputData.password
            })
            await cookies.set('token', data.data.token, data.data.cookieOption);
            // await cookies.set('tokent', data.data.token);
            currentUser.value = data.data.data
            localStorage.setItem("user",JSON.stringify(data.data.data))
            localStorage.setItem("token",data.data.token)
            dialog.value =false
            router.push({name:'dashboard'})

        } catch (error) {
            console.log(error)
            errorAlert.value = true
            errorMsg.value = error.response.data.message
            console.log(error.response.data.message)
        }
    }
    const LogoutUser = async()=>{
        try {
            localStorage.setItem('user',null)
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            currentUser.value =null
            await custumFetch.get('/auth/logout')
            router.push({name:'logout'})
        } catch (error) {
            console.log(error)
        }
    }
    const RegisterUser = async(inputData)=>{
        try {
            const { data } = await custumFetch.post('/auth/register', {
                email: inputData.email,
                password: inputData.password,
                name: inputData.name
            })
            currentUser.value = data.data
            localStorage.setItem("user",JSON.stringify(data.data))
            dialog.value =false
            // console.log(data)
            router.push({name:'Dashboard'})

        } catch (error) {
            console.log(error)
            errorAlert.value = true
            errorMsg.value = error.response.data.message
        }

    }


    return { dialog, LoginUser, errorAlert, errorMsg,currentUser,LogoutUser,RegisterUser }
})