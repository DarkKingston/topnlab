<script>
import { Link, Head } from '@inertiajs/inertia-vue3';
import {ref} from "vue";
export default {
    components:{
        Link,
        Head
    },
    setup(){
        let tabs = ref([false, false])

        function changeTab(idx){
            for(let i=0; i<tabs.value.length; i++){
                if(idx != i){
                    tabs.value[i] = false;
                }
            }
            tabs.value[idx] = !tabs.value[idx]
        }
        function handleClickOutside() {
            tabs.value = [false, false];
        }

        return {
            handleClickOutside,
            changeTab,
            tabs
        }
    }
}
</script>

<template>
    <header v-click-outside="handleClickOutside">
        <div class="header_wrapper">
            <div class="header_menu">
                <div class="header_item" @click="changeTab(0)">
                    <div class="header_item_label">
                        Обьекты
                    </div>
                    <div class="header_item_content" :class="{ active : tabs[0] }">
                        <div class="header_item_content_title">
                            <span>Мои собственники</span>
                        </div>
                        <div class="header_item_content_menu">
                            <Link :href="route('dashboard')" class="header_item_content_item">Продавцы</Link>
                            <Link :href="route('dashboard')" class="header_item_content_item">Арендодатели</Link>
                        </div>
                    </div>
                </div>
                <div class="header_item" @click="changeTab(1)">
                    <div class="header_item_label">
                        Заявки
                    </div>
                    <div class="header_item_content" :class="{active:tabs[1]}">
                        <div class="header_item_content_title">
                            <span>Мои заявки</span>
                        </div>
                        <div class="header_item_content_menu">
                            <Link :href="route('test')" class="header_item_content_item">Покупатели</Link>
                            <Link :href="route('test')" class="header_item_content_item">Арендаторы</Link>
                            <Link :href="route('test')" class="header_item_content_item">Клиенты ЦРП</Link>
                            <Link :href="route('test')" class="header_item_content_item">Проверка договоров</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div class="header_actions">
                <div class="header_chat header_actions_item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z" fill="#fff"></path> </g></svg>
                </div>
                <div class="header_search header_actions_item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </div>
                <div class="header_notification header_actions_item">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M11.7258 7.34056C12.1397 7.32632 12.4638 6.97919 12.4495 6.56522C12.4353 6.15125 12.0882 5.8272 11.6742 5.84144L11.7258 7.34056ZM7.15843 11.562L6.40879 11.585C6.40906 11.5938 6.40948 11.6026 6.41006 11.6114L7.15843 11.562ZM5.87826 14.979L6.36787 15.5471C6.38128 15.5356 6.39428 15.5236 6.40684 15.5111L5.87826 14.979ZM5.43951 15.342L5.88007 15.949C5.89245 15.94 5.90455 15.9306 5.91636 15.9209L5.43951 15.342ZM9.74998 17.75C10.1642 17.75 10.5 17.4142 10.5 17C10.5 16.5858 10.1642 16.25 9.74998 16.25V17.75ZM11.7258 5.84144C11.3118 5.8272 10.9647 6.15125 10.9504 6.56522C10.9362 6.97919 11.2602 7.32632 11.6742 7.34056L11.7258 5.84144ZM16.2415 11.562L16.9899 11.6113C16.9905 11.6025 16.9909 11.5938 16.9912 11.585L16.2415 11.562ZM17.5217 14.978L16.9931 15.5101C17.0057 15.5225 17.0187 15.5346 17.0321 15.5461L17.5217 14.978ZM17.9605 15.341L17.4836 15.9199C17.4952 15.9294 17.507 15.9386 17.5191 15.9474L17.9605 15.341ZM13.65 16.25C13.2358 16.25 12.9 16.5858 12.9 17C12.9 17.4142 13.2358 17.75 13.65 17.75V16.25ZM10.95 6.591C10.95 7.00521 11.2858 7.341 11.7 7.341C12.1142 7.341 12.45 7.00521 12.45 6.591H10.95ZM12.45 5C12.45 4.58579 12.1142 4.25 11.7 4.25C11.2858 4.25 10.95 4.58579 10.95 5H12.45ZM9.74998 16.25C9.33577 16.25 8.99998 16.5858 8.99998 17C8.99998 17.4142 9.33577 17.75 9.74998 17.75V16.25ZM13.65 17.75C14.0642 17.75 14.4 17.4142 14.4 17C14.4 16.5858 14.0642 16.25 13.65 16.25V17.75ZM10.5 17C10.5 16.5858 10.1642 16.25 9.74998 16.25C9.33577 16.25 8.99998 16.5858 8.99998 17H10.5ZM14.4 17C14.4 16.5858 14.0642 16.25 13.65 16.25C13.2358 16.25 12.9 16.5858 12.9 17H14.4ZM11.6742 5.84144C8.65236 5.94538 6.31509 8.53201 6.40879 11.585L7.90808 11.539C7.83863 9.27613 9.56498 7.41488 11.7258 7.34056L11.6742 5.84144ZM6.41006 11.6114C6.48029 12.6748 6.08967 13.7118 5.34968 14.4469L6.40684 15.5111C7.45921 14.4656 8.00521 13.0026 7.9068 11.5126L6.41006 11.6114ZM5.38865 14.4109C5.23196 14.5459 5.10026 14.6498 4.96265 14.7631L5.91636 15.9209C6.0264 15.8302 6.195 15.6961 6.36787 15.5471L5.38865 14.4109ZM4.99895 14.735C4.77969 14.8942 4.58045 15.1216 4.43193 15.3617C4.28525 15.5987 4.14491 15.9178 4.12693 16.2708C4.10726 16.6569 4.24026 17.0863 4.63537 17.3884C4.98885 17.6588 5.45464 17.75 5.94748 17.75V16.25C5.78415 16.25 5.67611 16.234 5.60983 16.2171C5.54411 16.2004 5.53242 16.1861 5.54658 16.1969C5.56492 16.211 5.59211 16.2408 5.61004 16.2837C5.62632 16.3228 5.62492 16.3484 5.62499 16.3472C5.62513 16.3443 5.62712 16.3233 5.6414 16.2839C5.65535 16.2454 5.67733 16.1997 5.70749 16.151C5.73748 16.1025 5.77159 16.0574 5.80538 16.0198C5.84013 15.981 5.86714 15.9583 5.88007 15.949L4.99895 14.735ZM5.94748 17.75H9.74998V16.25H5.94748V17.75ZM11.6742 7.34056C13.835 7.41488 15.5613 9.27613 15.4919 11.539L16.9912 11.585C17.0849 8.53201 14.7476 5.94538 11.7258 5.84144L11.6742 7.34056ZM15.4932 11.5127C15.3951 13.0024 15.9411 14.4649 16.9931 15.5101L18.0503 14.4459C17.3105 13.711 16.9199 12.6744 16.9899 11.6113L15.4932 11.5127ZM17.0321 15.5461C17.205 15.6951 17.3736 15.8292 17.4836 15.9199L18.4373 14.7621C18.2997 14.6488 18.168 14.5449 18.0113 14.4099L17.0321 15.5461ZM17.5191 15.9474C17.5325 15.9571 17.5599 15.9802 17.5949 16.0193C17.629 16.0573 17.6634 16.1026 17.6937 16.1514C17.7241 16.2004 17.7463 16.2463 17.7604 16.285C17.7748 16.3246 17.7769 16.3457 17.777 16.3485C17.7771 16.3497 17.7756 16.3238 17.792 16.2844C17.81 16.241 17.8375 16.211 17.856 16.1968C17.8702 16.1859 17.8585 16.2002 17.7925 16.217C17.7259 16.234 17.6174 16.25 17.4535 16.25V17.75C17.9468 17.75 18.4132 17.6589 18.7669 17.3885C19.1628 17.0859 19.2954 16.6557 19.2749 16.2693C19.2562 15.9161 19.1151 15.5972 18.9682 15.3604C18.8194 15.1206 18.6202 14.8936 18.4018 14.7346L17.5191 15.9474ZM17.4535 16.25H13.65V17.75H17.4535V16.25ZM12.45 6.591V5H10.95V6.591H12.45ZM9.74998 17.75H13.65V16.25H9.74998V17.75ZM8.99998 17C8.99998 18.5008 10.191 19.75 11.7 19.75V18.25C11.055 18.25 10.5 17.7084 10.5 17H8.99998ZM11.7 19.75C13.2089 19.75 14.4 18.5008 14.4 17H12.9C12.9 17.7084 12.3449 18.25 11.7 18.25V19.75Z" fill="#fff"></path> </g></svg>
                </div>
                <div class="header_profile header_actions_item">
                    <div class="header_profile_img">
                        РЯ
                        <div class="header_profile_online"></div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main>
        <slot />
    </main>
</template>

<style scoped>
header{
    display: flex;
    justify-content: space-between;
    min-width: 1024px;
    min-height: 50px;
    width: 100%;
    background: #222;
    color: #fff;
}
.header_profile{
    position: relative;
}
.header_profile_img{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 45px;
    width: 45px;
    border-radius: 50%;
    pointer-events: none;
    background: #00bfff;
}
.header_profile_online{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 14px;
    height: 14px;
    top: auto;
    left: auto;
    border-radius: 50%;
    right: 0;
    bottom: 0;
    border: 2px solid #5B5F62;
    background-color: #3588F3;
    z-index: 1;
}
.header_menu{
    display: flex;
    align-items: center;
}
.header_item{
    position: relative;
    padding: 15px 20px;
    cursor: pointer;
}
.header_item_content{
    display: none;
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    min-width: 150px;
    padding: 10px 0;
    cursor: auto;
    outline: none;
    min-width: -moz-max-content;
    min-width: max-content;
    margin: 0em;
    background: #FFFFFF;
    font-size: 1em;
    text-shadow: none;
    text-align: left;
    box-shadow: 0 0 8px 1px rgba(80, 86, 141, 0.5);
    z-index: 11;
    will-change: transform, opacity;
    border-radius: 5px;
}
.header_item_content_menu{
    display: flex;
    flex-direction: column;
}
.header_item_content::before{
    content: '';
    position: absolute;
    top: -6px;
    left: 20px;
    width: 12px;
    height: 12px;
    transform: rotate(45deg);
    background: #fff;
    border-top: 1px solid #eee;
    border-left: 1px solid #eee;
}
.header_item_content.active{
    display: block;
}
.header_item_content_item{
    width: 100%;
    padding: 6px 20px;
    font-family: "Open Sans", Roboto, Arial, sans-serif;
    font-size: 14px;
    line-height: 20px;
    white-space: nowrap;
    color: #222222;
}

.header_item_content_item:hover {
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
    z-index: 13;
}

.header_item:hover::after{
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 6px;
    background: #3588F3;
    visibility: visible;
    opacity: 1;
    pointer-events: none;
}

.header_item_content_title{
    position: relative;
    display: block;
    text-align: center;
    margin: 10px 0;
    border-bottom: none;
}

.header_item_content_title span{
    position: relative;
    z-index: 5;
    padding: 0 5px;
    font-size: 13px;
    line-height: 1;
    background-color: #ffffff;
    color: #b6b9cb;
}

.header_item_content_title::after{
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    height: 1px;
    background: #E8E9EE;
}
.header_wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
}
.header_actions{
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
.header_actions .header_actions_item svg{
    width: 20px;
    height: 20px;
}
.header_actions .header_notification svg{
    width: 25px;
    height: 25px;
}
.header_actions .header_actions_item{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px 25px;
    cursor: pointer;
}

</style>
