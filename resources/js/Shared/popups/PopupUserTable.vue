<script>
import { ref } from 'vue';
export default {
    components: {},
    props:{
        userId: Number
    },
    setup(){
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
                id сотрудника: {{userId}}
            </div>
            <div class="popup_close" @click="removeActivePopup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#3588F3" width="17.828" height="17.828"><path d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"/></svg>
            </div>
        </div>
        <div class="popup_info">
            <div class="popup_info_box">
                <div class="popup_info_img">
                    <img src="https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg" alt="">
                </div>
            </div>
            <div class="popup_info_box">
                <div class="popup_info_name">
                    Пугачева Татьяна Николаевна
                </div>
                <div class="popup_info_state">
                    Заблокирован
                </div>
                <div class="popup_info_specialist">
                    Агент
                </div>
                <div class="popup_info_company">
                    Компания:
                    <span>
                        АЯКС
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
                        Рабочий телефон: <span>+7 918 349 3245</span>
                    </div>
                    <div class="icon_list_item_info">
                        Почта: <span>vasilyev_pn@ayax.ru</span>
                    </div>
                    <div class="icon_list_item_birthday">
                        <input
                            class="checkbox"
                            type="checkbox"
                            :id="userId"
                            v-model="checkbox"
                        >
                        <label :for="userId">Уведомлять о дне рождения коллеги</label>
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


<style scoped lang="scss">
.popup_label{
    font-size: 24px;
    color: #222222;
    line-height: 1;
}
.popup_info{
    padding: 28px 20px 28px 20px;
    display: flex;
    align-items: flex-start;
}
.popup_info_img{
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;
}
.popup_info_company{
    display: flex;
    flex-wrap: wrap;
    background: #EEEEEE;
    border-radius: 5px;
    line-height: 21px;
    padding: 4px 6px;
}
.popup_info_company span{
    display: flex;
    align-items: center;
    margin-left: 3px;
}
.popup_info_company svg{
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    margin-left: 4px;
    fill: #afacac;
}

.popup_info_name{
    margin-bottom: 10px;
    font-size: 17px;
    color: #222222;
    font-weight: 600;
    line-height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.popup_info_state{
    font-size: 13px;
    color: #E23D4B;
    margin-bottom: 8px;
    line-height: 16px;
}

.popup_info_specialist{
    font-size: 13px;
    color: #777;
    margin-bottom: 8px;
    line-height: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.icon_list_item{
    display: flex;
    padding: 30px 0;
    border-bottom: 8px solid #E8ECF8;
}
.icon_list_item:last-child{
    border-bottom: none;
}
.icon_list_item:first-child{
    border-top: 8px solid #E8ECF8;
}
.icon_list_item_ico{
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    width: 58px;
    padding-top: 1px;
}

.icon_list_item_ico svg{
    width: 20px;
    height: 20px;
    fill: #757575;
}

.icon_list_item_content{
    font-size: 14px;
    color: #222222;
    line-height: 13px;
    flex: 1;
    padding-top: 2px;
}
.icon_list_item_birthday{
    display: flex;
    align-items: center;
}
.icon_list_item_birthday label{
    display: flex;
    align-items: center;
    gap: 5px;
}
.checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;

& + label {
      display: inline-flex;
      align-items: center;
      user-select: none;
      cursor: pointer;
  }
& + label::before {
      content: '';
      display: inline-block;
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 2px solid #D3D5E0;
      border-radius: 2px;
      margin-top: 3px;
      margin-bottom: 3px;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
  }
&:checked + label::before {
     border-color: #127cda;
     background-color: #127cda;
     background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNjAsMjUwIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg4LjUzMzMzLDguNTMzMzMpIj48cGF0aCBkPSJNMjYuOTgwNDcsNS45OTAyM2MtMC4yNTk4LDAuMDA3NzQgLTAuNTA2MzgsMC4xMTYzMiAtMC42ODc1LDAuMzAyNzNsLTE1LjI5Mjk3LDE1LjI5Mjk3bC02LjI5Mjk3LC02LjI5Mjk3Yy0wLjI1MDgyLC0wLjI2MTI0IC0wLjYyMzI3LC0wLjM2NjQ3IC0wLjk3MzcxLC0wLjI3NTExYy0wLjM1MDQ0LDAuMDkxMzYgLTAuNjI0MTEsMC4zNjUwMyAtMC43MTU0NywwLjcxNTQ3Yy0wLjA5MTM2LDAuMzUwNDQgMC4wMTM4OCwwLjcyMjg5IDAuMjc1MTEsMC45NzM3MWw3LDdjMC4zOTA1MywwLjM5MDM3IDEuMDIzNTMsMC4zOTAzNyAxLjQxNDA2LDBsMTYsLTE2YzAuMjk1NzYsLTAuMjg3NDkgMC4zODQ2OSwtMC43MjcwNyAwLjIyMzkzLC0xLjEwNjkxYy0wLjE2MDc1LC0wLjM3OTg1IC0wLjUzODIxLC0wLjYyMjA0IC0wLjk1MDUsLTAuNjA5ODh6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+");
     background-size: 22px 16px;
 }
&:not(:disabled):not(:checked) + label:hover::before {
     border-color: var(--primary-hover);
 }
&:not(:disabled):active + label::before {
     background-color: var(--primary);
     border: 1px solid #ECEBED;
 }
&:focus + label::before {
     box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
 }
&:focus:not(:checked) + label::before {
     border-color: var(--primary);
 }
&:disabled + label::before {
     background-color: #e9ecef;
     border: 1px solid #ECEBED;
 }
}
.icon_list_item_info{
    margin-bottom: 23px;
    padding-right: 20px;
    line-height: 18px;
    color: #5E5E5E;
}
.icon_list_item_info span{
    color: #222222;
}
.icon_list_item.link .icon_list_item_content{
    color: #3588F3;
}
.icon_list_item.link:hover .icon_list_item_content{
    text-decoration: none;
}
.icon_list_item.link:hover{
    color: #3588F3;
    background: #F5F6FA;
}
.icon_list_item.link .icon_list_item_ico svg{
    fill: #3588F3;
}
</style>
