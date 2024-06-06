<script>
import Fancybox from "../ui/Fancybox";
import { ref } from 'vue';
import PopupUserTable from "../popups/PopupUserTable";
import {usePresentationStore} from "../../store/computed";

export default {
    components:{
        Fancybox,
        PopupUserTable
    },
    props:{
        object: Object
    },
    setup(){
        const presentationStore = usePresentationStore();
        const active = ref(false);
        const showedNumber = ref(false);
        const statePopup = ref(false)
        function toggledContact() {
            active.value = !active.value
        }
        function selectContact(contact){
            console.log(contact)
            active.value = !active.value
        }
        function changeShowNumber(){
            showedNumber.value = !showedNumber.value
        }
        function togglePopup(){
            statePopup.value = !statePopup.value
        }


        return{
            toggledContact,
            selectContact,
            active,
            changeShowNumber,
            showedNumber,
            togglePopup,
            statePopup,
            presentationStore
        }
    }
}
</script>

<template>
    <tr class="table_row_object">
        <td class="table_row_cell"  colspan="120">
            <div class="table_status">
                <div class="table_status_sticky">
                    <div class="table_status_progress">
                        <div class="table_status_steps">
                            <div class="table_status_step_item">
                                <div class="table_status_step_descr">Заключенные договоры</div>
                            </div>
                            <div class="table_status_step_item">
                                <div class="table_status_step_descr">Новые продавцы</div>
                            </div>
                        </div>
                    </div>

                    <div style="display:flex; align-items: center;flex-shrink: 0">
                        <button class="btn_table btn_next" v-tippy.left="`Нажми, чтобы перейти на следующий этап воронки`">
                            Вперед по воронке
                            <svg viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M224.48535,136.48535l-72,72a12.0001,12.0001,0,0,1-16.9707-16.9707L187.0293,140H40a12,12,0,0,1,0-24H187.0293L135.51465,64.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l72,72A11.99975,11.99975,0,0,1,224.48535,136.48535Z"></path>
                                </g>
                            </svg>
                        </button>
                        <button class="btn_table btn_prev" v-tippy.left="`Сброс пройденных этапов`">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" viewBox="0 0 92.794 92.794" xml:space="preserve">
                                    <g>
                                        <path d="M1,44.666l39.697-22.925c0.618-0.356,1.381-0.356,2,0c0.618,0.357,1,1.019,1,1.732v9.599h0.001   c0.279,0.036,28.08,3.903,47.527,30.507l1.211,1.734c0.537,0.772,0.465,1.814-0.176,2.504c-0.639,0.688-1.674,0.842-2.482,0.361   l-1.813-1.071c-0.346-0.206-1.096-0.63-1.142-0.655c-10.483-6.26-20.814-9.434-30.705-9.434c-7.401,0-11.849,1.86-12.419,2.108   l-0.001,10.192c0,0.714-0.382,1.375-1,1.732c-0.31,0.179-0.655,0.268-1,0.268c-0.345,0-0.69-0.089-1-0.268L1,48.13   c-0.618-0.357-1-1.019-1-1.732S0.381,45.022,1,44.666z"/>
                                    </g>
                                </svg>
                        </button>
                    </div>
                </div>
            </div>
        </td>
    </tr>

    <tr class="table_info_object">
        <td class="table_info_cell _check _center">
            <div class="table_cell_content" >
                <input
                    class="checkbox"
                    type="checkbox"
                    :id="object.id">
                <label :for="object.id"></label>
                <div class="table_cell_id">{{ object.id }}</div>
            </div>
        </td>
        <td v-if="!presentationStore.presentation" class="table_info_cell _user_id">
            <div class="table_cell_content">
                <div class="table_cell_user" @click="togglePopup">
                    <div class="link pb0" @click="togglePopup">
                        Пугачева Татьяна
                    </div>
                    <div class="table_cell_user_label">
                        #Стажер
                    </div>
                </div>
                <div class="table_cell_user_info">
                    <div class="table_cell_user_info_name fw600">Пугачева Татьяна</div>
                    <div class="table_cell_user_info_action">
                        <div class="table_cell_user_info_item _nowrap">
                                <span>
                                    <svg data-v-e42d1d7a="" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50"><path data-v-e42d1d7a="" d="M 25 4.0703125 C 12.368265 4.0703125 2.0703125 12.921644 2.0703125 24 C 2.0703125 30.432481 5.5907163 36.030749 11.003906 39.6875 C 10.995106 39.903125 11.010706 40.250912 10.728516 41.294922 C 10.378462 42.590119 9.6725023 44.413033 8.2382812 46.46875 L 7.21875 47.929688 L 9 47.929688 C 15.17102 47.929688 18.741544 43.907595 19.294922 43.261719 C 21.134317 43.693171 23.024914 43.929686 25 43.929688 C 37.631735 43.929688 47.929688 35.078356 47.929688 24 C 47.929688 12.921644 37.631735 4.0703125 25 4.0703125 z"></path></svg>
                                </span>
                            Написать в чате
                        </div>
                        <div class="table_cell_user_info_item _nowrap"  @click="togglePopup">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.56 8.47a8 8 0 0 0-7-7 64.29 64.29 0 0 0-15.06 0 8 8 0 0 0-7 7 64.29 64.29 0 0 0 0 15.06 8 8 0 0 0 7 7 64.29 64.29 0 0 0 15.06 0 8 8 0 0 0 7-7 64.29 64.29 0 0 0 0-15.06zM23 3.4h.3a6 6 0 0 1 5.28 5.3V9H23zM17 29a63.9 63.9 0 0 1-8.3-.39A6 6 0 0 1 7 28.1V24a5 5 0 0 1 10 0zM9 14a3 3 0 1 1 3 3 3 3 0 0 1-3-3zm12 14.78c-.67 0-1.33.1-2 .13V24a7 7 0 0 0-3.78-6.21 5 5 0 1 0-6.44 0A7 7 0 0 0 5 24v2.7a6 6 0 0 1-1.58-3.4 63.65 63.65 0 0 1 0-14.6A6 6 0 0 1 8.7 3.42a61.22 61.22 0 0 1 12.3-.2zm7.58-5.48a6 6 0 0 1-5.28 5.28H23V23h5.6c-.01.1-.01.2-.02.3zm.2-2.3H23v-4h6c0 1.34-.12 2.67-.22 4zM23 15v-4h5.78c.1 1.33.17 2.66.19 4z" data-name="people android app aplication phone"/></svg>
                                </span>
                            Открыть карточку пользователя
                        </div>
                    </div>
                </div>
                <div class="popup" :class="{active: statePopup}">
                    <div class="popup_content">
                        <PopupUserTable :userId="168291"/>
                    </div>
                </div>
                <div class="table_cell_btn btn_gray color_gray d-flex align-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                            <path d="M 25 4.0703125 C 12.368265 4.0703125 2.0703125 12.921644 2.0703125 24 C 2.0703125 30.432481 5.5907163 36.030749 11.003906 39.6875 C 10.995106 39.903125 11.010706 40.250912 10.728516 41.294922 C 10.378462 42.590119 9.6725023 44.413033 8.2382812 46.46875 L 7.21875 47.929688 L 9 47.929688 C 15.17102 47.929688 18.741544 43.907595 19.294922 43.261719 C 21.134317 43.693171 23.024914 43.929686 25 43.929688 C 37.631735 43.929688 47.929688 35.078356 47.929688 24 C 47.929688 12.921644 37.631735 4.0703125 25 4.0703125 z"></path>
                        </svg>
                    </span>
                    Написать
                </div>
            </div>

        </td>
        <td class="table_info_cell _photo">
            <Fancybox
                :options="{
                    Carousel: {
                      infinite: true,
                    },
                }"
                v-tippy.right="`Посмотреть`"
            >
                <a class="table_img" data-fancybox="gallery" href="https://s3.topnlab.ru/files-service/storage/351a609b8063fba90bdc2397595a/0bccd87dc1fa1aa8304a45b272dd0e3d.jpg">
                    <img src="https://s3.topnlab.ru/files-service/storage/351a609b8063fba90bdc2397595a/0bccd87dc1fa1aa8304a45b272dd0e3d.jpg" alt="">
                    <div class="table_img_shadow">
                        <div class="table_img_shadow_btn">
                            <svg fill="#0070c9" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="m494.8,241.4l-50.6-49.4c-50.1-48.9-116.9-75.8-188.2-75.8s-138.1,26.9-188.2,75.8l-50.6,49.4c-11.3,12.3-4.3,25.4 0,29.2l50.6,49.4c50.1,48.9 116.9,75.8 188.2,75.8s138.1-26.9 188.2-75.8l50.6-49.4c4-3.8 11.7-16.4 0-29.2zm-238.8,84.4c-38.5,0-69.8-31.3-69.8-69.8 0-38.5 31.3-69.8 69.8-69.8 38.5,0 69.8,31.3 69.8,69.8 0,38.5-31.3,69.8-69.8,69.8zm-195.3-69.8l35.7-34.8c27-26.4 59.8-45.2 95.7-55.4-28.2,20.1-46.6,53-46.6,90.1 0,37.1 18.4,70.1 46.6,90.1-35.9-10.2-68.7-29-95.7-55.3l-35.7-34.7zm355,34.8c-27,26.3-59.8,45.1-95.7,55.3 28.2-20.1 46.6-53 46.6-90.1 0-37.2-18.4-70.1-46.6-90.1 35.9,10.2 68.7,29 95.7,55.4l35.6,34.8-35.6,34.7z"></path> </g> </g></svg>
                        </div>
                    </div>
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/61/1600x1200">
                    <img src="https://lipsum.app/id/61/200x150" width="200" height="150" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/62/1600x1200">
                    <img src="https://lipsum.app/id/62/200x150" width="200" height="150" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/63/1600x1200">
                    <img src="https://lipsum.app/id/63/200x150" width="200" height="150" />
                </a>
                <a data-fancybox="gallery" href="https://lipsum.app/id/64/1600x1200">
                    <img src="https://lipsum.app/id/64/200x150" width="200" height="150" />
                </a>
            </Fancybox>

        </td>
        <td v-if="!presentationStore.presentation" class="table_info_cell _contacts">
            <div class="contact_box">
                <div v-if="true">
                    <div class="state_contact" :class="{ active: active }">
                        <div class="state_content_current" @click="toggledContact">
                            <div class="blue_circle circle"></div>
                            Собственник
                            <span style="margin-left: 3px;display: flex; align-items: center;">
                                <svg xmlns="http://www.w3.org/2000/svg" width="10.033" height="5"><path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z"/></svg>
                            </span>
                        </div>
                        <div class="table_cell_contact_content">
                            <div class="table_cell_content_item" @click="selectContact('empty')">
                                <div class="gray_circle circle"></div>
                                Не выбрано
                            </div>
                            <div class="table_cell_content_item" @click="selectContact('cold')">
                                <div class="blue_circle circle"></div>
                                Сначала Холодные
                            </div>
                            <div class="table_cell_content_item" @click="selectContact('warm')">
                                <div class="gold_circle circle"></div>
                                Сначала Теплые
                            </div>
                            <div class="table_cell_content_item" @click="selectContact('hot')">
                                <div class="red_circle circle"></div>
                                Сначала Горячие
                            </div>
                        </div>
                    </div>
                    <div class="contact_phone_number">
                        <div v-if="!showedNumber" v-tippy.top="`Нажми, чтобы c показать номер`">+7 93 <span class="link" @click="changeShowNumber">...показать номер</span></div>
                        <div v-else class="link" v-tippy.top="`Нажми, чтобы найти клиента с таким же номером`">
                            +7 934 342 6058
                        </div>
                    </div>
                    <div class="btn-icon-text" v-tippy.top="`Нажми, чтобы выбрать способ отправки сообщения`">
                        Написать сообщение
                    </div>
                </div>
                <div v-else>
                    <div class="no-access">
                        Нет доступа
                    </div>
                </div>
            </div>
        </td>
        <td v-if="!presentationStore.presentation" class="table_info_cell _ad">
            <div class="base_table_content">
                <div class="rel_ad" v-tippy.top="`Посмотреть список всех обращений по этому объекту`">
                    Обращений - <span>0</span>
                </div>
                <div class="btn-icon-text tt" style="background: #e0e1e2;color: #444;font-size: 10px;font-weight: 700;">
                    В РЕКЛАМУ НЕ ВЫГРУЖАЛСЯ
                </div>
            </div>
        </td>
        <td class="table_info_cell _realty_type">
            <div class="base_table_content">
                <div class="table_label">
                    Студия
                </div>
                <div class="table_location">
                    Квартира
                </div>
                <div class="table_type">
                    Стандартная
                </div>
                <div class="table_count link" v-tippy.top="`Такие же объекты в базе данных`">
                    Пересечений нет
                </div>
            </div>
        </td>
        <td class="table_info_cell _location" v-tippy.top="`Посмотреть расположение на карте`">
            <div class="base_table_content link">
                    <div class="base_table_location base_table_ellipsis d-flex align-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M32 5a21 21 0 0 0-21 21c0 17 21 33 21 33s21-16 21-33A21 21 0 0 0 32 5zm0 31a10 10 0 1 1 10-10 10 10 0 0 1-10 10z"/></svg>
                        Краснодарский край
                    </div>
                    <div class="base_table_ellipsis">
                        Орел-Изумруд с.
                    </div>
                    <div class="base_table_ellipsis">
                        р-н Адлерский
                    </div>
                    <div class="base_table_ellipsis">
                        ул. Лазурная долина
                    </div>
                    <div class="base_table_ellipsis">
                        д. 193а
                    </div>
            </div>
        </td>
        <td class="table_info_cell _house">
            <div class="base_table_content">
                <div class="table_label">
                    д. 193а
                </div>
            </div>
        </td>
        <td class="table_info_cell _price">
            <div class="base_table_content" style="overflow: unset">
                <div class="_fz18 fw600  d-flex align-center">
                    ₽ 6 300 000
                    <div class="price_arrow" v-if="true" style="min-width: 14px">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.924 13.617A1 1 0 0 0 19 13h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10H5a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .217-1.09z" style="fill:#91d637" data-name="Down"/></svg>
                        <div class="price_box">
                            <div class="price_box_wrapper">
                                <div class="price_box_label">
                                    Изменение цены
                                </div>
                                <table class="price_content">
                                    <tr class="price_content_item">
                                        <td class="price_content_data">3 июня 24г в 09:48</td>
                                        <td class="price_content_price">15 000 000р.</td>
                                        <td class="price_content_change"><div class="changed color_green_light fw600">-11 300 000р.</div></td>
                                    </tr>
                                    <tr class="price_content_item">
                                        <td class="price_content_data">3 июня 24г в 09:48</td>
                                        <td class="price_content_price">26 300 000р.</td>
                                        <td class="price_content_change"><div class="start fw600">(Стартовая цена)</div></td>
                                    </tr>
                                </table>
                                <div class="price_box_stats">
                                    Стартовая цена <span class="color_green_light fw600">понижена на 43%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <span class="lh18">262 500</span> ₽/м²
                </div>
                <div class="color_grey">
                    ипотека
                </div>
            </div>
        </td>
        <td class="table_info_cell _market_price">
            <div class="base_table_content">
                <div class="liquid_label _green d-flex align-center">
                    <svg width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128"
                         style="enable-background:new 0 0 128 128" xml:space="preserve">
                        <g id="row3">
                            <path id="icon:2_2_" d="M38.4 63.3s9.2-6.6 15.3-15.7c5.9-8.7 8.8-15.2 8.8-15.2s2.5-8.5.6-17.7c-1-5 4.3-8 10.7-5.9 5.1 1.6 7.5 13 7.9 15.9 1.9 14.2-4.5 28.9-4.5 28.9H115s13.4-.3 13 8.2c-.5 9.8-16.3 9.4-16.3 9.4s10.5 1.4 10.5 8.8c-.1 7.4-12.8 9.2-12.8 9.2s9.2 1.7 8.6 7.6c-.6 5.5-11.4 7.4-11.4 7.4s6.7 1.8 5.7 8.1c-.8 4.9-8.2 4.6-8.2 4.6l-65.5-.1V63.3zm-2.6-2.7v59.3H5.2L0 60.6h35.8zm-8.9 46.9c0-3-2.4-5.4-5.4-5.4-3 0-5.4 2.4-5.4 5.4 0 3 2.4 5.4 5.4 5.4 3 .1 5.4-2.4 5.4-5.4z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#05A87C"/>
                        </g>
                    </svg>
                    Ликвид
                </div>
                <div class="liquid_price">
                    —
                </div>
                <div>
                    рыночная цена
                </div>
            </div>
        </td>
        <td class="table_info_cell _commission">
            <div class="base_table_content">
                <div class="base_table_ellipsis">
                    <span class="color_grey">ГДК:</span> 5% / 35 000 000 р
                </div>
            </div>
        </td>
        <td class="table_info_cell _floor">
            <div class="base_table_content">
                <div class="fw600 base_table_ellipsis">
                    Мансарда / 7
                </div>
                <div class="fw600">
                    7 / 9
                </div>
                <div>нет лифта</div>
                <div class="base_table_ellipsis">
                    <span class="color_grey">мусоропровод:</span> нет
                </div>
            </div>
        </td>
        <td class="table_info_cell _building_type">
            <div class="base_table_content">
                <div class="fw600 _nowrap">
                    Новый дом
                </div>
                <div class="_nowrap">Кирпичный</div>
            </div>
        </td>
        <td class="table_info_cell _areas">
            <div class="base_table_content">
                <div>
                    <span>общая:</span> 607м2
                </div>
                <div>
                    <span>жилая:</span> 400 м2
                </div>
                <div>
                    <span>кухни:</span> —
                </div>
                <div>
                    <span>земли:</span> 7 сот.
                </div>
                <div>
                    <span>комнаты:</span> —
                </div>
                <div>
                    <span>потолки:</span> —
                </div>
                <div>
                    <span>прихожая:</span> —
                </div>
            </div>
        </td>
        <td v-if="!presentationStore.presentation" class="table_info_cell _tasks">
            <div class="base_table_content">
                <div class="d-flex align-center link" v-tippy.left="`Создать новую задачу или заметку`">
                    <div class="button_note">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M128 63.954c0 2.006-.797 3.821-2.136 5.127-1.308 1.337-3.125 2.133-5.166 2.133H71.302v49.356c0 4.012-3.284 7.292-7.302 7.292-2.009 0-3.827-.828-5.166-2.134-1.308-1.337-2.136-3.152-2.136-5.159V71.214H7.302c-4.05 0-7.302-3.248-7.302-7.26 0-2.006.797-3.853 2.136-5.159a7.279 7.279 0 0 1 5.166-2.134h49.395V7.306c0-4.012 3.284-7.26 7.302-7.26 2.009 0 3.827.828 5.166 2.133a7.238 7.238 0 0 1 2.136 5.127v49.356h49.395A7.276 7.276 0 0 1 128 63.954z"/></svg>
                    </div>
                    <div class="text_event _nowrap">
                        Добавить задачу
                    </div>
                </div>
            </div>
        </td>
        <td v-if="!presentationStore.presentation" class="table_info_cell _dc_contract_type">
            <div class="base_table_content _yellow-contract" v-if="true">
                <div class="fw600">
                    Возмездный договор
                </div>
            </div>
            <div class="base_table_content _green-contract" v-else-if="false">
                <div class="fw600">Эксклюзивный</div>
                <div>до 06.05.2024</div>
            </div>
            <div class="base_table_content _red-contract" v-else>
                <div class="fw600">
                    Устная договоренность
                </div>
            </div>
        </td>
        <td class="table_info_cell _sale_type">
            <div class="base_table_content">
                <span>Свободная (прямая)</span>
            </div>
        </td>
        <td class="table_info_cell _primaries_id">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td class="table_info_cell _layout">
            <div class="base_table_content">
                Косметический ремонт
            </div>
        </td>
        <td v-if="!presentationStore.presentation" class="table_info_cell _notes">
            <div class="base_table_content">
                <div class="d-flex align-center link mt6" v-tippy.left="`Нажмите чтобы добавить ЛИЧНОЕ примечание или посмотреть историю ранее созданных(личные примечания доступны только вам)`">
                    <div class="button_note">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M128 63.954c0 2.006-.797 3.821-2.136 5.127-1.308 1.337-3.125 2.133-5.166 2.133H71.302v49.356c0 4.012-3.284 7.292-7.302 7.292-2.009 0-3.827-.828-5.166-2.134-1.308-1.337-2.136-3.152-2.136-5.159V71.214H7.302c-4.05 0-7.302-3.248-7.302-7.26 0-2.006.797-3.853 2.136-5.159a7.279 7.279 0 0 1 5.166-2.134h49.395V7.306c0-4.012 3.284-7.26 7.302-7.26 2.009 0 3.827.828 5.166 2.133a7.238 7.238 0 0 1 2.136 5.127v49.356h49.395A7.276 7.276 0 0 1 128 63.954z"/></svg>
                    </div>
                    <div class="text_event _nowrap">
                        Добавить личное примечание
                    </div>
                </div>
                <div class="divider_container">
                    <div class="divider"></div>
                </div>
                <div class="d-flex align-center link mt6" v-tippy.left="`Нажмите чтобы добавить ПУБЛИЧНОЕ примечание или посмотреть историю ранее созданных(Примечание доступны сотрудникам Вашей компании)`">
                    <div class="button_note">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M128 63.954c0 2.006-.797 3.821-2.136 5.127-1.308 1.337-3.125 2.133-5.166 2.133H71.302v49.356c0 4.012-3.284 7.292-7.302 7.292-2.009 0-3.827-.828-5.166-2.134-1.308-1.337-2.136-3.152-2.136-5.159V71.214H7.302c-4.05 0-7.302-3.248-7.302-7.26 0-2.006.797-3.853 2.136-5.159a7.279 7.279 0 0 1 5.166-2.134h49.395V7.306c0-4.012 3.284-7.26 7.302-7.26 2.009 0 3.827.828 5.166 2.133a7.238 7.238 0 0 1 2.136 5.127v49.356h49.395A7.276 7.276 0 0 1 128 63.954z"/></svg>
                    </div>
                    <div class="text_event _nowrap">
                        Добавить публичное примечание
                    </div>
                </div>
            </div>
        </td>
        <td class="table_info_cell _mydescription">
            <div class="base_table_content _hover-cell">
                <div class="multi-ellipsis _four _no-scroll">
                    <span class="color_grey">
                    Описание:
                </span>
                    <span>
                    Продаются офисные помещения в бизнес центре. Офисы расположены на пятом этаже. Продается этаж целиком. Площадь: 570 кв. м. Все помещения сданы в аренду. Арендаторы снимают уже несколько лет. Средняя ставка аренды 800 рублей за кв. м. Помещения с качественным ремонтом. В  здании установлен лифт, видеонаблюдение, охрана.  В здании своя управляющая компания. эксплуатационные расходы составляют 100 рублей за кв. м.Офисы прекрасно подойдут как для размещения арендного бизнеса, так и собственной компании. цена за квадратный метр - 95 000 рублей.Отличная транспортная доступность в разные направления города. Без вознаграждения со стороны покупателя!
                </span>
                </div>
            </div>
        </td>
        <td class="table_info_cell _communications">
            <div class="base_table_content">
                <div>
                    <span class="color_grey">газ:</span> —
                </div>
                <div>
                    <span class="color_grey">отопление:</span> Центральное
                </div>
            </div>
        </td>
        <td class="table_info_cell _extra-options">
            <div class="base_table_content">
                <div>
                    <span class="color_grey">балкон:</span> есть
                </div>
                <div>
                    <span class="color_grey">санузел:</span> 1 совмещенный
                </div>
            </div>
        </td>
        <td class="table_info_cell _usage_land">
            <div class="base_table_content">—</div>
        </td>
        <td class="table_info_cell _use">
            <div class="base_table_content">—</div>
        </td>
        <td v-if="!presentationStore.presentation" class="table_info_cell _cadastral_num">
            <div class="base_table_content">—</div>
        </td>
        <td class="table_info_cell _show_in_mls">
            <div class="base_table_content">
                <div>в МЛС с 04.06.2024</div>
                <div>Не в фиде</div>
            </div>
        </td>
        <td v-if="!presentationStore.presentation" class="table_info_cell _source_name">
            <div class="base_table_content">
                Холодный звонок
            </div>
        </td>
        <td class="table_info_cell _deal_state">
            <div class="base_table_content">
                <div class="btn-icon-text tt"
                     style="background: rgb(224, 225, 226); color: rgb(68, 68, 68); font-size: 10px; font-weight: 700;"
                     v-tippy.top="'У вас недостаточно прав для изменения статуса'">
                    СБОР ДАННЫХ
                </div>
            </div>
        </td>
        <td v-if="!presentationStore.presentation" class="table_info_cell _comment_callcenter">
            <div class="base_table_content">
                —
            </div>
        </td>
    </tr>

    <tr class="table_row_footer">
        <td class="table_row_cell"  colspan="120">
            <div class="table_footer_bar">
                <div class="table_status_sticky">
                    <div class="footer_bar d-flex align-center justify-between w100">
                        <div class="footer_info d-flex align-center">
                            <div class="footer_info_box">
                                <div class="footer_info_box_item" style="margin: 0 10px;">
                                    <span class="color_grey">id:</span>
                                    <span class="link" style="padding: 3px 7px;">54901950</span>
                                </div>
                                <div class="footer_info_box_item" style="padding: 1px 7px 4px 9px;">
                                    <div class="btn-icon-text tt color_red bg_red"
                                         style="font-size: 10px; font-weight: 700;">
                                        ОТКАЗ
                                    </div>
                                </div>
                            </div>
                            <div class="footer_info_box ">
                                <div class="footer_bar_date d-flex align-center">
                                    <span class="color_gray" style="margin-right: 2px;">Созд:</span>
                                    07.11.2023, 12:09
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#7e7e7e" width="10.033" height="5"><path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z"/></svg>
                                </div>
                                <div class="footer_bar_date">
                                    <span class="color_gray" style="margin-right: 2px;">Изм:</span>
                                    07.11.2023, 12:09
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#7e7e7e" width="10.033" height="5"><path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div class="footer_actions">

                            <div class="combo_button">
                                <div class="button_left_side">
                                    <div class="advertising-button _default">
                                        Реклама
                                    </div>
                                </div>
                                <div class="button_right_side">
                                    <div class="service-label">
                                        Сервисы
                                    </div>
                                </div>
                            </div>

                            <div class="footer_bar_btn _yellow">
                                Найти покупателя
                            </div>

                            <div class="footer_bar_btn _yellow">
                                CMA
                            </div>

                            <div class="combo_button btn_table_blue">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#3588F3" width="18" height="4"><circle cx="9" cy="2" r="2"/><circle cx="2" cy="2" r="2"/><circle cx="16" cy="2" r="2"/></svg>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </td>
    </tr>

    <tr class="table_row_separator">
        <td colspan="120" class="table_cell"><div class="table_row_separator"></div></td>
    </tr>
</template>



<style lang="scss">
@import "/resources/css/table.css";

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
.table_cell_user{
    position: relative;
    &_name{
        line-height: inherit;
        color: #0070c9;
        text-decoration: underline;
    }
    &_label{
        color: #777;
        font-style: italic;
    }
}
</style>
