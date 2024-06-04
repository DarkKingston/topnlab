<script>
    import Layout from '../Shared/LayoutLogin';
    import { Link, Head } from '@inertiajs/inertia-vue3';
    export default{
        layout: Layout,
        components:{
            Head,
            Link
        },
        props:{
            title: String
        }
    }
</script>
<script setup>
import { ref } from 'vue';
let changeView = ref(false);
function onChangeView() {
    changeView.value = !changeView.value;
}

function onSubmit(){
    console.log('asd')
}


</script>

<template>
    <Head :title="title"/>
    <header>
        <div class="container">
            <div class="header_logo">
                <img src="https://crm.topnlab.ru/assets/img/project-images/topnlab-logo.png" alt="">
            </div>
        </div>
    </header>
    <main>
        <div class="container">
            <div class="login">
                <div class="login_content">

                    <h2 class="login_title">
                        Вход
                    </h2>

                    <div class="login_form">
                        <div class="login_box">
                            <input type="text" placeholder="Электронная почта">
                        </div>
                        <div class="login_box">
                            <input :type="changeView ? 'text' : 'password'" placeholder="Пароль">
                            <div class="login_eye" :class="{ active: changeView }" @click="onChangeView">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="open">
                                    <path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/>
                                </svg>
                                <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" class="close" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m17.069 6.546 2.684-2.359c.143-.125.32-.187.497-.187.418 0 .75.34.75.75 0 .207-.086.414-.254.562l-16.5 14.501c-.142.126-.319.187-.496.187-.415 0-.75-.334-.75-.75 0-.207.086-.414.253-.562l2.438-2.143c-1.414-1.132-2.627-2.552-3.547-4.028-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 1.815 0 3.536.593 5.071 1.546zm2.318 1.83c.967.943 1.804 2.013 2.475 3.117.092.156.138.332.138.507s-.046.351-.138.507c-2.068 3.403-5.721 6.493-9.864 6.493-1.298 0-2.553-.313-3.73-.849l2.624-2.307c.352.102.724.156 1.108.156 2.208 0 4-1.792 4-4 0-.206-.016-.408-.046-.606zm-4.932.467c-.678-.528-1.53-.843-2.455-.843-2.208 0-4 1.792-4 4 0 .741.202 1.435.553 2.03l1.16-1.019c-.137-.31-.213-.651-.213-1.011 0-1.38 1.12-2.5 2.5-2.5.474 0 .918.132 1.296.362z" fill-rule="nonzero"/>
                                </svg>
                            </div>
                        </div>
                        <Link href="/dashboard" class="login_btn btn color_white bg_black">
                            Войти
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
header{
    border-bottom: 1px solid #E8E8E8;
    padding: 5px 0;
}
main{
    background: #eee;
}
.login{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 27px;
    background: #fff;
    border-radius: 25px;
    width: 440px;
    margin-bottom: 25px;
    padding-top: 37px;
}

.login_title{
    margin-bottom: 5px;
    font-size: 35px;
    font-weight: 600;
    color: #262829;
}

.login_form{
    padding-top: 15px;
}

.login_box{
    margin-bottom: 16px;
    position: relative;
}
.login_btn{
    width: 100%;
}

.login_eye{
    width: 16px;
    height: 12px;
    fill: #555;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 12px;
}
.login_eye.active{
    width: 18px;
    height: 15px;
}
.login_eye .close{
    display: none;
}
.login_eye.active .open{
    display: none;
}

.login_eye.active .close{
    display: block;
}
</style>
