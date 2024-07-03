<script>
import { ref } from 'vue';
import PopupUserTable from "../popups/PopupUserTable";
export default {
    props:{
        object: Object
    },
    components:{
        PopupUserTable
    },
    setup(){

        const tab = ref(1);
        const taskSelected = ref(1);
        const showedNumber = ref(false);
        const advancedId = ref(null);
        const showUserPopup = ref(false);
        const user = ref(null);

        function selectTab(item){
            tab.value = item;
        }

        function selectTask(item, checkPermission){
            if(checkPermission === true){
                taskSelected.value = item;
            }
        }

        function changeShowNumber(){
            showedNumber.value = !showedNumber.value
        }
        function showAdvancedADV(elem){
            if(advancedId.value == elem){
                advancedId.value = null;
            }else{
                advancedId.value = elem;
            }
        }

        function showPopup(userId, event){
            event.stopPropagation();
            document.querySelector('.popup').classList.add('active')
            user.value = userId;
        }

        return {
            tab,
            selectTab,
            taskSelected,
            selectTask,
            changeShowNumber,
            showedNumber,
            showAdvancedADV,
            advancedId,
            showPopup,
            showUserPopup,
            user
        }
    }
}
</script>

<template>
 <div class="modal_adv_object">
    <div class="modal_adv_object_navigation">
        <div class="modal_tabs_radio">
            <div class="modal_tab_radio" @click="selectTab(1)" :class="{active: tab==1}">
                <div class="tab_radio_name">
                    Реклама обьекта
                    <div class="tab_radio_label" data-v-b3388f7a=""> активно 6 пакетов </div>
                </div>
                <div class="tab_radio_info">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
                    </svg>
                    <span>
                        У вас нет ограничений по объему выгрузки объектов в рекламу
                    </span>
                </div>
            </div>
            <div class="modal_tab_radio" @click="selectTab(2)" :class="{active: tab==2}">
                <div class="tab_radio_name">
                    Проверка договоров - 0
                </div>
                <div class="tab_radio_info">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"/>
                    </svg>
                    <span>
                        Без описания
                    </span>
                </div>
            </div>
        </div>
    </div>
    <div class="modal_adv_object_wrapper">
        <div class="modal_adv_object_content" v-if="tab==1">
            <div class="task_list_header">
                <div class="task_list_block">
                    <div class="task_list_item">
                        <button class="task_list_btn" @click="selectTask(1, true)" :class="{active: taskSelected == 1}">Рекламные пакеты</button>
                        <button class="task_list_btn inactive" @click="selectTask(2, false)" :class="{active: taskSelected == 2}">Премиум</button>
                        <button class="task_list_btn" @click="selectTask(3, true)" :class="{active: taskSelected == 3}">Отчет о рекламе</button>
                    </div>
                </div>
            </div>
            <div class="task_table" v-if="taskSelected == 1"><div class="task_table_content"> Обращений нет </div></div>
            <div class="task_table" v-if="taskSelected == 2"><div class="task_table_content"> Не доступа </div></div>
            <div class="task_table" v-if="taskSelected == 3"><div class="task_table_content"> Отчет по рекламе будет доступен только после выгрузки объекта </div></div>
        </div>
        <div class="modal_adv_object_content" v-if="tab==2">
            <div class="d-flex mb-5">
                <div class="btn_object ml-a" v-tippy.top='`На этом этапе бизнес-процесса нельзя создавать "Проверка Договоров" `'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" xml:space="preserve"><path d="M128 63.954c0 2.006-.797 3.821-2.136 5.127-1.308 1.337-3.125 2.133-5.166 2.133H71.302v49.356c0 4.012-3.284 7.292-7.302 7.292-2.009 0-3.827-.828-5.166-2.134-1.308-1.337-2.136-3.152-2.136-5.159V71.214H7.302c-4.05 0-7.302-3.248-7.302-7.26 0-2.006.797-3.853 2.136-5.159a7.279 7.279 0 0 1 5.166-2.134h49.395V7.306c0-4.012 3.284-7.26 7.302-7.26 2.009 0 3.827.828 5.166 2.133a7.238 7.238 0 0 1 2.136 5.127v49.356h49.395A7.276 7.276 0 0 1 128 63.954z" style="fill: rgb(255, 255, 255);"></path></svg>
                    Создать заявку
                </div>
            </div>
            <div class="adv_pack_list">
                <div class="adv_pack_cell">
                    <div class="adv_pack_item" @click="showAdvancedADV(1)">
                        <div class="adv_pack_info">
                            <div class="adv_text fz-15 _bold ml-3">Заявка</div>
                            <div class="adv_text fz-13 _italic _gray ml-3">Создано: 11.01.2024 в 15:31</div>
                            <div class="adv_text fz-13 _italic _gray ml-3">Изменено: 11.01.2024 в 15:31</div>
                            <div class="adv_text fz-13 ml-3">
                                <span class="adv_text _gray"> id: </span>
                                <span class="adv_text link" @click="showPopup(460658, $event)"> 460658 </span>
                            </div>
                        </div>
                        <div class="adv_pack_btn ml-a" :class="{active: advancedId == 1}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
                        </div>
                    </div>
                    <div class="adv_pack_context" v-if="advancedId == 1">
                        <div class="adv_pack_content_inner">
                            <div class="adv_pack_content_responsible">
                                <div class="adv_responsible">
                                    <img src="/assets/object_responsible.png" alt="">
                                </div>
                                <div class="adv_responsible_info">
                                    <div class="adv_responsible_info_title fz-14">
                                        Агент 1 Тестовый
                                    </div>
                                    <div class="adv_responsible_info_role fz-13">
                                        Агент
                                    </div>
                                    <div class="contact_phone_number fz-13" style="margin-bottom: 10px;">
                                        <div v-if="!showedNumber" v-tippy.top="`Нажми, чтобы c показать номер`">+7 93 <span class="link" @click="changeShowNumber">...показать номер</span></div>
                                        <div v-else class="link">
                                            +7 934 342 6058
                                        </div>
                                    </div>
                                    <div class="adv_responsible_info_btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50"><path d="M 25 4.0703125 C 12.368265 4.0703125 2.0703125 12.921644 2.0703125 24 C 2.0703125 30.432481 5.5907163 36.030749 11.003906 39.6875 C 10.995106 39.903125 11.010706 40.250912 10.728516 41.294922 C 10.378462 42.590119 9.6725023 44.413033 8.2382812 46.46875 L 7.21875 47.929688 L 9 47.929688 C 15.17102 47.929688 18.741544 43.907595 19.294922 43.261719 C 21.134317 43.693171 23.024914 43.929686 25 43.929688 C 37.631735 43.929688 47.929688 35.078356 47.929688 24 C 47.929688 12.921644 37.631735 4.0703125 25 4.0703125 z"></path></svg>
                                        Написать сообщение
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </div>
 <div class="popup" :class="{active: showUserPopup}">
     <div class="popup_content">
         <PopupUserTable :userId="user"/>
     </div>
 </div>

</template>
