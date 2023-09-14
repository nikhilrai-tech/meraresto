import SignUp from './components/SignUp.vue';
import HomeP from './components/Home.vue';
import AddD from './components/AddD';
import HelloO from './components/Update.vue';
import { createWebHistory,createRouter } from 'vue-router';
import loginview from './components/LoginA';
const routes =[
    {
        name: 'Home',
        component:HomeP,
        path:'/'
    },
    {
        name: 'SignUp',
        component:SignUp,
        path:'/SignUp'
    },
    {
        name: 'Login',
        component:loginview,
        path:'/Login'
    },
    {
        name: 'Add',
        component:AddD,
        path:'/add'
    },
    {
        name: 'Update',
        component:HelloO,
        path:'/update/:id'
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router