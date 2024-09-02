<script>
import { ref } from 'vue';
export default {
    components: {},
    props:{
        user: Object
    },
    setup(props){
        console.log(props.user)
        const checkbox = ref(false)
        function removeActivePopup(){
            document.querySelector('.popup.active').classList.remove('active')
        }

        return{
            checkbox,
            removeActivePopup,
        }
    }
}
</script>

<template>
    <div>
        <div class="popup_header">
            <div class="popup_label">
                ID сотрудника: {{user?.RESPONSIBLE.ID}}
            </div>
            <div class="popup_close" @click="removeActivePopup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#3588F3" width="17.828" height="17.828"><path d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"/></svg>
            </div>
        </div>
        <div class="popup_info">
            <div class="popup_info_box">
                <div class="popup_info_img">
                    <img v-if="user?.RESPONSIBLE.PHOTO" :src="'https://crm.mirax.md'+user?.RESPONSIBLE.PHOTO" alt="">
                    <img src="https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg" alt="">
                </div>
            </div>
            <div class="popup_info_box">
                <div class="popup_info_name">
                    {{user?.ASSIGNED_BY_NAME}} {{user?.ASSIGNED_BY_LAST_NAME}} {{user?.ASSIGNED_BY_SECOND_NAME}}
                </div>
                <div class="popup_info_state">
<!--                    Заблокирован-->
                </div>
                <div class="popup_info_specialist">
                    {{ user?.ASSIGNED_BY_WORK_POSITION }}
                </div>
                <div class="popup_info_company">
                    Компания:
                    <span>
                        MIRAX
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"  data-name="Right"/></svg>
                    </span>
                    <span>
                        Собственные подразделения
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"  data-name="Right"/></svg>
                    </span>
                    <span>
                        Офисы
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"  data-name="Right"/></svg>
                    </span>
                    <span>
                        Офис 21
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"  data-name="Right"/></svg>
                    </span>
                    <span>
                        Офис 21/1
                    </span>
                </div>
            </div>
        </div>
        <div class="icon_list">
            <div class="icon_list_item">
                <div class="icon_list_item_ico">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="26.Information"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z"/><path d="M15 19h-4v-8H9V9h4v8h2v2zM11 5h2v2h-2z"/></g></svg>
                </div>
                <div class="icon_list_item_content">
                    <div class="icon_list_item_info">
                        Рабочий телефон: <span>{{user?.RESPONSIBLE.WORK_PHONE}}</span>
                    </div>
                    <div class="icon_list_item_info">
                        Почта: <span>{{ user?.ASSIGNED_BY_LOGIN }}</span>
                    </div>
                    <div class="icon_list_item_birthday">
                        <input
                            class="checkbox"
                            type="checkbox"
                            :id="user?.ASSIGNED_BY_LOGIN"
                            v-model="checkbox"
                        >
                        <label :for="user?.ASSIGNED_BY_LOGIN">Уведомлять о дне рождения коллеги</label>
                    </div>
                </div>
            </div>
            <div class="icon_list_item link">
                <div class="icon_list_item_ico">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.137 11.631a.908.908 0 0 1-.17.038A3.016 3.016 0 0 1 8 12a2.962 2.962 0 0 1-.033.328.949.949 0 0 1 .173.042l8.76 4.115a.991.991 0 0 1 .242.18A2.969 2.969 0 0 1 19 16a3.037 3.037 0 1 1-2.911 2.306c-.014-.006-.029 0-.044-.01l-8.756-4.115a.953.953 0 0 1-.134-.1 3 3 0 1 1 0-4.162 1 1 0 0 1 .133-.1L16.045 5.7c.014-.007.029 0 .044-.011A2.93 2.93 0 0 1 16 5a3 3 0 1 1 3 3 2.969 2.969 0 0 1-1.862-.665 1.03 1.03 0 0 1-.242.18z"/></svg>
                </div>
                <div class="icon_list_item_content">
                    Переслать контакты
                </div>
            </div>
            <div class="icon_list_item">
                <div class="icon_list_item_ico">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  viewBox="0 0 24 24" version="1.1">

                        <g id="🔍-System-Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="ic_fluent_text_description_24_filled" fill="#757575" fill-rule="nonzero">
                                <path d="M3,17 L15,17 C15.5522847,17 16,17.4477153 16,18 C16,18.5128358 15.6139598,18.9355072 15.1166211,18.9932723 L15,19 L3,19 C2.44771525,19 2,18.5522847 2,18 C2,17.4871642 2.38604019,17.0644928 2.88337887,17.0067277 L3,17 L15,17 L3,17 Z M3,13 L21,13 C21.5522847,13 22,13.4477153 22,14 C22,14.5128358 21.6139598,14.9355072 21.1166211,14.9932723 L21,15 L3,15 C2.44771525,15 2,14.5522847 2,14 C2,13.4871642 2.38604019,13.0644928 2.88337887,13.0067277 L3,13 L21,13 L3,13 Z M3,9 L21,9 C21.5522847,9 22,9.44771525 22,10 C22,10.5128358 21.6139598,10.9355072 21.1166211,10.9932723 L21,11 L3,11 C2.44771525,11 2,10.5522847 2,10 C2,9.48716416 2.38604019,9.06449284 2.88337887,9.00672773 L3,9 L21,9 L3,9 Z M3,5 L21,5 C21.5522847,5 22,5.44771525 22,6 C22,6.51283584 21.6139598,6.93550716 21.1166211,6.99327227 L21,7 L3,7 C2.44771525,7 2,6.55228475 2,6 C2,5.48716416 2.38604019,5.06449284 2.88337887,5.00672773 L3,5 L21,5 L3,5 Z" id="🎨-Color">

                                </path>
                            </g>
                        </g>
                    </svg>
                </div>
                <div class="icon_list_item_content">
                    <span class="color_grey">О себе:</span> Всем доброго времени суток!
                    Меня зовут Павел Николаевич и со мной Вам будет максимально безопасно
                    и выгодно покупать и продавать недвижимость!
                </div>
            </div>
        </div>
    </div>
</template>

