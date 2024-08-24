<script>
import { Head } from '@inertiajs/inertia-vue3'
import Table from "../Shared/Table.vue";
import Tabs from "../Shared/Tabs.vue";
import PopupCreateObject from "../Shared/popups/PopupCreateObject";
import { ref, watch, onMounted } from 'vue'
import { storeToRefs } from 'pinia';
import VSelect from 'vue3-select';
import {usePresentationStore, usePopupNotes, usePopupSettingsCell, useFilterState} from '../store/computed';
import PopupNotes from "../Shared/popups/PopupNotes";
import PopupSettingsCells from "../Shared/popups/PopupSettingsCells";
import PopupPlace from "../Shared/popups/PopupPlace";
import PopupMoreFilter from "../Shared/popups/PopupMoreFilter";
import PopupMap from "../Shared/popups/PopupMap";
export default {
    props:{
        title: String
    },
    components:{
        Head,
        Table,
        Tabs,
        usePresentationStore,
        usePopupSettingsCell,
        PopupCreateObject,
        useFilterState,
        PopupNotes,
        PopupMoreFilter,
        PopupSettingsCells,
        VSelect,
        PopupMap,
        PopupPlace
    },
    setup(){
        const presentationStore = usePresentationStore();
        const popupNotesStore = usePopupNotes();
        const { popup_notes, tab } = storeToRefs(popupNotesStore);
        const popupSettingsCellStore = usePopupSettingsCell();
        const { popup_settings_cell } = storeToRefs(popupSettingsCellStore);
        const popupFilterStateStore = useFilterState();
        const { filter_state, type_objects, currency } = storeToRefs(popupFilterStateStore);
        const withPhoto = ref(false);
        const likvid = ref(false);
        const nelikvid = ref(false);
        const avglikvid = ref(false);
        watch(() => presentationStore.presentation, (newVal) => {
            localStorage.setItem('presentation', newVal);
        });

        onMounted(() => {
            document.querySelector('main').classList.remove('no_scroll')
            const storedPresentation = localStorage.getItem('presentation');
            if (storedPresentation !== null) {
                presentationStore.presentation = storedPresentation === 'true';
            }
        });


        function createObject(){
            document.querySelector('main').classList.toggle('no_scroll')
            document.querySelector('.popup_create').classList.toggle('active')
        }

        function changePopupSettings(){
            popup_settings_cell.value = !popup_settings_cell.value
            document.querySelector('body').classList.add('no_scroll_bar')
        }

        function changeFilter(){
            filter_state.value = !filter_state.value
        }

        function showPopupPlace(place){
            document.querySelector('.popup_place').classList.add('active');
            document.querySelector('main').classList.add('no_scroll');
        }

        function showPopupMoreFilter(){
            document.querySelector('.popup_more_filter').classList.add('active');
            document.querySelector('main').classList.add('no_scroll');
        }

        function showMap(){
            document.querySelector('.popup_map').classList.add('active');
            document.querySelector('main').classList.add('no_scroll');
        }

        return{
            presentationStore,
            createObject,
            popup_notes,
            tab,
            changePopupSettings,
            popup_settings_cell,
            filter_state,
            changeFilter,
            type_objects,
            currency,
            withPhoto,
            likvid,
            nelikvid,
            avglikvid,
            showPopupPlace,
            showPopupMoreFilter,
            showMap
        }
    }
};
</script>
<template>
    <Head :title="title"/>
    <section class="subheader d-flex align-center justify-between">
        <div class="subheader_box">
            <div class="subheader_item fz-13">
                <div class="subheader_ico">
                    <svg data-name="Layer 1" width="16" height="16" fill="#B74DFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M0 0h7v7H0zM0 9h7v7H0zM9 0h7v7H9zM9 9h7v7H9z"/></svg>
                </div>
                <div class="subheader_title fz-13 tt">
                    ОБЪЕКТЫ КОМПАНИИ
                </div>
                <div class="subheader_arrow">
                    <svg data-name="Layer 1" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M3.81 4.38 8 8.57l4.19-4.19 1.52 1.53L8 11.62 2.29 5.91l1.52-1.53z"/></svg>
                </div>
            </div>
        </div>
        <div class="subheader_box" v-tippy.bottom="'Режим презентации'">
            <input _ngcontent-irg-c739=""
                   type="checkbox"
                   id="relation-mode"
                   class="checkbox-switch ng-untouched ng-valid ng-dirty"
                   v-model="presentationStore.presentation">
            <label _ngcontent-irg-c739="" for="relation-mode" ruipopup="" popupplacement="bottom" class="checkbox-switch__label"></label>
        </div>
    </section>

    <section class="actions">
        <h1 class="actions_title">
            Продавцы, Объекты компании - 27209
        </h1>
        <div class="actions_wrapper">
            <div class="actions_item">
                <div class="btn sky" @click="changeFilter">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="search">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                      </svg>
                    </span>
                    <span v-if="filter_state">Скрыть поиск</span>
                    <span v-else>Поиск</span>
                </div>
            </div>
            <div class="actions_item">
                <div class="btn btn_blue" @click="createObject">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="plus">
                          <g fill="none" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                            <path d="M8 1v14M1 8h14"></path>
                          </g>
                        </svg>
                      </span>
                    Создать обьект
                </div>
            </div>
            <div class="actions_item" v-tippy.top="'Настройка таблицы'">
                <div class="btn sky btn_only_icon" @click="changePopupSettings">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="view-column">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M11 18h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1zm-6 0h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1zM16 6v11c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"></path>
                    </svg>
                </div>
            </div>
        </div>
    </section>

    <section class="filter_settings" v-if="filter_state">
        <div class="filter_settings_row d-flex align-center">
            <div class="filter_select filter_bg_white">
                <v-select
                    :options="type_objects.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="type_objects.selectedOption"
                    placeholder="Тип объекта"
                ></v-select>
            </div>
            <div class="filter_select _price">
                <v-select
                    :options="currency.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="currency.selectedOption"
                ></v-select>
            </div>
            <div class="filter_input d-flex align-center">
                <input type="number" placeholder="от" class="input_main">
            </div>
            <div class="filter_input d-flex align-center">
                <input type="number" placeholder="до" class="input_main">
            </div>
            <div class="filter_checkbox">
                <input
                    class="checkbox"
                    type="checkbox"
                    v-model="withPhoto"
                    id="withPhoto">
                <label for="withPhoto">С фото</label>
            </div>
        </div>

        <div class="filter_settings_row d-flex align-center">
            <div class="filter_btn_region" @click="showPopupPlace('country')">
                Регион
            </div>
            <div class="filter_search">
                <input type="text" class="filter_search_inp" placeholder="Город, улица, метро, район, ЖК, id карточки, тел. клиента и т.д.">
                <div class="filter_search_icon">
                    <svg data-v-097ba13b="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="search"><path data-v-097ba13b="" fill="none" d="M0 0h24v24H0V0z"></path><path data-v-097ba13b="" d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                </div>
            </div>
            <div class="filter_btn_more filter_btn_region" @click="showPopupMoreFilter">
                Еще фильтры
            </div>
            <div class="filter_show">
                Показать
            </div>
            <div class="filter_map filter_btn_region" @click="showMap">
                <div class="filter_map_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M25.046 8.483a10 10 0 0 0-7.911-5.425 11.364 11.364 0 0 0-2.27 0 10.003 10.003 0 0 0-7.911 5.425 10.806 10.806 0 0 0 1.48 11.893l6.794 8.26a1 1 0 0 0 1.544 0l6.793-8.26a10.806 10.806 0 0 0 1.481-11.893zM16 17a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4z" /></svg>
                </div>
                На карте
            </div>
        </div>
        <div class="filter_settings_row d-flex align-center filter_likvid_wrapper">
            <div class="filter_checkbox tt">
                <input
                    class="checkbox"
                    type="checkbox"
                    v-model="likvid"
                    id="likvid">
                <label for="likvid">Ликвид</label>
            </div>
            <div class="filter_checkbox tt">
                <input
                    class="checkbox"
                    type="checkbox"
                    v-model="nelikvid"
                    id="nelikvid">
                <label for="nelikvid">Неликвид</label>
            </div>
            <div class="filter_checkbox tt">
                <input
                    class="checkbox"
                    type="checkbox"
                    v-model="avglikvid"
                    id="avglikvid">
                <label for="avglikvid">Средняя лик-сть</label>
            </div>
        </div>
    </section>

    <div class="popup popup_place">
        <div class="popup_content big">
            <PopupPlace/>
        </div>
    </div>


    <div class="popup popup_more_filter">
        <div class="popup_content big">
            <PopupMoreFilter/>
        </div>
    </div>


    <div class="popup popup_map">
        <div class="popup_content map">
            <PopupMap/>
        </div>
    </div>

    <section class="table">
        <Tabs/>
        <Table/>
        <div class="popup popup_create">
            <div class="popup_content big">
                <PopupCreateObject/>
            </div>
        </div>
        <div class="popup" :class="{active: popup_notes}">
            <div class="popup_content popup_right">
                <PopupNotes :tab="tab"/>
            </div>
        </div>
        <div class="settings" :class="{active: popup_settings_cell}">
            <div class="popup_content popup_right" style="box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); width: 365px; position:fixed;">
                <PopupSettingsCells/>
            </div>
        </div>
    </section>
</template>


<style scoped>

.actions{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 30px;
}
.actions_wrapper{
    display: flex;
    align-items: center;
    gap: 15px;
}

.checkbox-switch {
    display: none;
}
.checkbox-switch__label {
    outline: 0;
    display: flex;
    width: 50px;
    height: 20px;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background: #A5A5A5;
    border-radius: 2em;
    transition: all 0.4s ease;
}
.checkbox-switch__label::-moz-selection {
    background: none;
}
.checkbox-switch__label::selection {
    background: none;
}
.checkbox-switch__label:after, .checkbox-switch__label:before {
    position: relative;
    display: block;
    content: "";
    width: 22px;
    height: 22px;
    margin-top: -1px;
}
.checkbox-switch__label:after {
    left: 0;
}
.checkbox-switch__label:before {
    display: none;
}
.checkbox-switch__label:after {
    border-radius: 25px;
    background: #fff;
    border: 2px solid #A5A5A5;
    transition: left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease, margin 0.3s ease;
}
.checkbox-switch__label:hover:after {
    will-change: padding;
}
.checkbox-switch__label:active {
    box-shadow: inset 0 0 0 2em #e8eae9;
}
.checkbox-switch__label:active:after {
    padding-right: 0.8em;
}
.checkbox-switch__label._status {
    background: #3588F3;
}
.checkbox-switch__label._status._offline {
    background: #E23D4B;
}
.checkbox-switch__label._status:after {
    border: 2px solid #E23D4B;
}
.checkbox-switch:checked + .checkbox-switch__label {
    background: #3588F3;
}
.checkbox-switch:checked + .checkbox-switch__label._sota {
    background: #f68219;
}
.checkbox-switch:checked + .checkbox-switch__label._sota:after {
    border: 2px solid #f68219;
}
.checkbox-switch:checked + .checkbox-switch__label:after {
    left: 55%;
    border: 2px solid #3588F3;
}
.checkbox-switch:checked + .checkbox-switch__label:active:after {
    margin-left: -0.8em;
}
</style>
