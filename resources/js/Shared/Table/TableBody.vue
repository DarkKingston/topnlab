<script>
import Fancybox from "../ui/Fancybox";
import { ref } from 'vue';
import {useCreateObjectSettings, usePresentationStore} from "../../store/computed";
import { Link } from '@inertiajs/inertia-vue3';
import {storeToRefs} from "pinia";

export default {
    components:{
        Fancybox,
        Link
    },
    props:{
        object: Object
    },
    setup(props, { emit }){

        const presentationStore = usePresentationStore();
        const popupSettingsTableStore = useCreateObjectSettings();
        const { settings_table } = storeToRefs(popupSettingsTableStore);

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
        const togglePopup = (user) => {
            emit('toggle-popup', user);
        };

        return{
            toggledContact,
            selectContact,
            active,
            changeShowNumber,
            showedNumber,
            togglePopup,
            statePopup,
            presentationStore,
            settings_table
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
                            <div class="table_status_step_item" v-for="(item, key) in object.STAGE_TREE" :key="key">
                                <div class="table_status_step_descr">{{item.name}}</div>
                            </div>
                        </div>
                    </div>

                    <div style="display:flex; align-items: center;flex-shrink: 0">
                        <button class="btn_table fz-13 btn_next" v-tippy.left="`Нажми, чтобы перейти на следующий этап воронки`">
                            Вперед по воронке
                            <svg viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M224.48535,136.48535l-72,72a12.0001,12.0001,0,0,1-16.9707-16.9707L187.0293,140H40a12,12,0,0,1,0-24H187.0293L135.51465,64.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l72,72A11.99975,11.99975,0,0,1,224.48535,136.48535Z"></path>
                                </g>
                            </svg>
                        </button>
                        <button class="btn_table fz-13 btn_prev" v-tippy.left="`Сброс пройденных этапов`">
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
                    :id="object.ID">
                <label :for="object.ID"></label>
                <div class="table_cell_id">{{ object.ID }}</div>
            </div>
        </td>
        <td v-if="!presentationStore.presentation && settings_table.settings_responsible.value" class="table_info_cell _user_id">
            <div class="table_cell_content">
                <div class="table_cell_user" @click="togglePopup(object)">
                    <div class="link pb0">
                        {{ object.ASSIGNED_BY_NAME }} {{ object.ASSIGNED_BY_LAST_NAME }}
                    </div>
                    <div class="table_cell_user_label">
                        #Стажер
                    </div>
                </div>
                <div class="table_cell_user_info">
                    <div class="table_cell_user_info_name fz-14 fw600">{{ object.ASSIGNED_BY_NAME }} {{ object.ASSIGNED_BY_LAST_NAME }}</div>
                    <div class="table_cell_user_info_action">
                        <div class="table_cell_user_info_item fz-14 _nowrap">
                                <span>
                                    <svg data-v-e42d1d7a="" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50"><path data-v-e42d1d7a="" d="M 25 4.0703125 C 12.368265 4.0703125 2.0703125 12.921644 2.0703125 24 C 2.0703125 30.432481 5.5907163 36.030749 11.003906 39.6875 C 10.995106 39.903125 11.010706 40.250912 10.728516 41.294922 C 10.378462 42.590119 9.6725023 44.413033 8.2382812 46.46875 L 7.21875 47.929688 L 9 47.929688 C 15.17102 47.929688 18.741544 43.907595 19.294922 43.261719 C 21.134317 43.693171 23.024914 43.929686 25 43.929688 C 37.631735 43.929688 47.929688 35.078356 47.929688 24 C 47.929688 12.921644 37.631735 4.0703125 25 4.0703125 z"></path></svg>
                                </span>
                            Написать в чате
                        </div>
                        <div class="table_cell_user_info_item fz-14 _nowrap"  @click="togglePopup(object)">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.56 8.47a8 8 0 0 0-7-7 64.29 64.29 0 0 0-15.06 0 8 8 0 0 0-7 7 64.29 64.29 0 0 0 0 15.06 8 8 0 0 0 7 7 64.29 64.29 0 0 0 15.06 0 8 8 0 0 0 7-7 64.29 64.29 0 0 0 0-15.06zM23 3.4h.3a6 6 0 0 1 5.28 5.3V9H23zM17 29a63.9 63.9 0 0 1-8.3-.39A6 6 0 0 1 7 28.1V24a5 5 0 0 1 10 0zM9 14a3 3 0 1 1 3 3 3 3 0 0 1-3-3zm12 14.78c-.67 0-1.33.1-2 .13V24a7 7 0 0 0-3.78-6.21 5 5 0 1 0-6.44 0A7 7 0 0 0 5 24v2.7a6 6 0 0 1-1.58-3.4 63.65 63.65 0 0 1 0-14.6A6 6 0 0 1 8.7 3.42a61.22 61.22 0 0 1 12.3-.2zm7.58-5.48a6 6 0 0 1-5.28 5.28H23V23h5.6c-.01.1-.01.2-.02.3zm.2-2.3H23v-4h6c0 1.34-.12 2.67-.22 4zM23 15v-4h5.78c.1 1.33.17 2.66.19 4z" data-name="people android app aplication phone"/></svg>
                                </span>
                            Открыть карточку пользователя
                        </div>
                    </div>
                </div>

                <div class="table_cell_btn fz-13 btn_gray color_gray d-flex align-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                            <path d="M 25 4.0703125 C 12.368265 4.0703125 2.0703125 12.921644 2.0703125 24 C 2.0703125 30.432481 5.5907163 36.030749 11.003906 39.6875 C 10.995106 39.903125 11.010706 40.250912 10.728516 41.294922 C 10.378462 42.590119 9.6725023 44.413033 8.2382812 46.46875 L 7.21875 47.929688 L 9 47.929688 C 15.17102 47.929688 18.741544 43.907595 19.294922 43.261719 C 21.134317 43.693171 23.024914 43.929686 25 43.929688 C 37.631735 43.929688 47.929688 35.078356 47.929688 24 C 47.929688 12.921644 37.631735 4.0703125 25 4.0703125 z"></path>
                        </svg>
                    </span>
                    Написать
                </div>
            </div>
        </td>
        <td v-if="settings_table.settings_photo.value" class="table_info_cell _photo">
            <Fancybox v-if="object.IMAGE.length > 0"
                :options="{
                    Carousel: {
                      infinite: true,
                    },
                }"
                v-tippy.right="`Посмотреть`"
            >
                <a v-for="(item, idx) in object.IMAGE" :class="{table_img: idx==0}" :key="idx" data-fancybox="gallery" :href="'https://crm.mirax.md'+item">
                    <img :src="'https://crm.mirax.md'+item" width="200" height="150" />
                    <div class="table_img_shadow" v-if="idx == 0">
                        <div class="table_img_shadow_btn">
                            <svg fill="#0070c9" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="m494.8,241.4l-50.6-49.4c-50.1-48.9-116.9-75.8-188.2-75.8s-138.1,26.9-188.2,75.8l-50.6,49.4c-11.3,12.3-4.3,25.4 0,29.2l50.6,49.4c50.1,48.9 116.9,75.8 188.2,75.8s138.1-26.9 188.2-75.8l50.6-49.4c4-3.8 11.7-16.4 0-29.2zm-238.8,84.4c-38.5,0-69.8-31.3-69.8-69.8 0-38.5 31.3-69.8 69.8-69.8 38.5,0 69.8,31.3 69.8,69.8 0,38.5-31.3,69.8-69.8,69.8zm-195.3-69.8l35.7-34.8c27-26.4 59.8-45.2 95.7-55.4-28.2,20.1-46.6,53-46.6,90.1 0,37.1 18.4,70.1 46.6,90.1-35.9-10.2-68.7-29-95.7-55.3l-35.7-34.7zm355,34.8c-27,26.3-59.8,45.1-95.7,55.3 28.2-20.1 46.6-53 46.6-90.1 0-37.2-18.4-70.1-46.6-90.1 35.9,10.2 68.7,29 95.7,55.4l35.6,34.8-35.6,34.7z"></path> </g> </g></svg>
                        </div>
                    </div>
                </a>
            </Fancybox>
            <div v-else>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3001 3001">
                    <path fill-rule="evenodd" fill="rgb(100%, 100%, 100%)" fill-opacity="1" d="M 1 0 L 3001 0 L 3001 3000 L 1 3000 L 1 0 "/>
                    <path fill-rule="nonzero" fill="rgb(0%, 0%, 0%)" fill-opacity="1" d="M 1562.558594 1007.238281 C 1570.921875 1006.878906 1576.089844 1012.050781 1576.089844 1018.421875 L 1576.089844 1269.300781 L 1773.210938 1323.058594 C 1778.328125 1324.449219 1781.691406 1329.089844 1781.679688 1334.148438 L 1781.730469 1334.148438 L 1781.730469 1605.28125 L 1856.378906 1605.28125 L 1856.378906 1458.011719 C 1856.378906 1451.628906 1861.550781 1446.46875 1867.921875 1446.46875 L 2049.421875 1446.46875 C 2055.789062 1446.46875 2060.960938 1451.628906 2060.960938 1458.011719 L 2060.960938 1658.691406 L 2194.929688 1689.050781 C 2200.558594 1689.820312 2204.898438 1694.648438 2204.898438 1700.480469 L 2204.898438 1969.699219 L 2239.480469 1969.699219 C 2245.851562 1969.699219 2251.019531 1974.871094 2251.019531 1981.238281 C 2251.019531 1987.609375 2245.851562 1992.78125 2239.480469 1992.78125 L 762.523438 1992.78125 C 756.152344 1992.78125 750.984375 1987.609375 750.984375 1981.238281 C 750.984375 1974.871094 756.152344 1969.699219 762.523438 1969.699219 L 797.101562 1969.699219 L 797.101562 1677.800781 C 797.101562 1671.429688 802.269531 1666.261719 808.640625 1666.261719 L 893.527344 1666.261719 L 893.527344 1555.851562 L 893.539062 1555.851562 C 893.53125 1550.539062 897.226562 1545.75 902.632812 1544.578125 L 1070.761719 1507.851562 C 1071.730469 1507.578125 1072.75 1507.429688 1073.808594 1507.429688 C 1080.179688 1507.429688 1085.351562 1512.601562 1085.351562 1518.96875 L 1085.351562 1612.371094 L 1164.359375 1612.371094 L 1164.359375 1278.058594 C 1164.359375 1271.691406 1169.519531 1266.53125 1175.890625 1266.53125 C 1177.320312 1266.53125 1178.691406 1266.789062 1179.949219 1267.261719 L 1310.429688 1302.839844 L 1310.429688 1095.210938 L 1310.441406 1095.210938 C 1310.441406 1090.308594 1313.578125 1085.769531 1318.5 1084.21875 Z M 916.605469 1666.261719 L 938.160156 1666.261719 C 944.53125 1666.261719 949.699219 1671.429688 949.699219 1677.800781 L 949.699219 1969.699219 L 1062.269531 1969.699219 L 1062.269531 1533.289062 L 916.605469 1565.121094 Z M 926.621094 1689.339844 L 820.179688 1689.339844 L 820.179688 1969.699219 L 926.621094 1969.699219 Z M 1085.351562 1635.449219 L 1085.351562 1969.699219 L 1205.488281 1969.699219 L 1205.488281 1635.449219 Z M 1228.570312 1623.910156 L 1228.570312 1969.699219 L 1369.980469 1969.699219 L 1369.980469 1342.910156 L 1319.929688 1329.261719 C 1319.230469 1329.140625 1318.558594 1328.949219 1317.921875 1328.710938 L 1187.429688 1293.121094 L 1187.429688 1612.371094 L 1217.03125 1612.371094 C 1223.398438 1612.371094 1228.570312 1617.539062 1228.570312 1623.910156 Z M 1333.511719 1309.140625 L 1384.550781 1323.058594 C 1389.660156 1324.449219 1393.019531 1329.089844 1393.019531 1334.148438 L 1393.058594 1334.148438 L 1393.058594 1969.699219 L 1553.011719 1969.699219 L 1553.011719 1034.171875 L 1333.511719 1103.648438 Z M 1576.089844 1293.121094 L 1576.089844 1969.699219 L 1758.648438 1969.699219 L 1758.648438 1342.910156 Z M 1781.730469 1628.359375 L 1781.730469 1969.699219 L 1904.589844 1969.699219 L 1904.589844 1628.359375 Z M 1927.671875 1616.820312 L 1927.671875 1969.699219 L 2037.878906 1969.699219 L 2037.878906 1469.539062 L 1879.460938 1469.539062 L 1879.460938 1605.28125 L 1916.128906 1605.28125 C 1922.5 1605.28125 1927.671875 1610.449219 1927.671875 1616.820312 Z M 2060.960938 1682.269531 L 2060.960938 1969.699219 L 2181.820312 1969.699219 L 2181.820312 1709.660156 L 2060.960938 1682.269531 "/>
                </svg>
            </div>
        </td>
        <td v-if="!presentationStore.presentation && settings_table.settings_contacts.value" class="table_info_cell _contacts">
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
                        <div class="table_cell_contact_content fz-1em">
                            <div class="table_cell_content_item fz-14" @click="selectContact('empty')">
                                <div class="gray_circle circle"></div>
                                Не выбрано
                            </div>
                            <div class="table_cell_content_item fz-14" @click="selectContact('cold')">
                                <div class="blue_circle circlebtn fz-12"></div>
                                Сначала Холодные
                            </div>
                            <div class="table_cell_content_item fz-14" @click="selectContact('warm')">
                                <div class="gold_circle circlebtn fz-12"></div>
                                Сначала Теплые
                            </div>
                            <div class="table_cell_content_item fz-14" @click="selectContact('hot')">
                                <div class="red_circle circlebtn fz-12"></div>
                                Сначала Горячие
                            </div>
                        </div>
                    </div>
                    <div class="contact_phone_number">
                        <div v-if="!showedNumber && object.CONTACT_FIELD?.VALUE" v-tippy.top="`Нажми, чтобы c показать номер`">+373 <span class="link" @click="changeShowNumber">...показать номер</span></div>
                        <div v-else class="link" v-tippy.top="`Нажми, чтобы найти клиента с таким же номером`">
                            {{ object.CONTACT_FIELD.VALUE }}
                        </div>
                    </div>
                    <div class="btn-icon-text fz-13" v-tippy.top="`Нажми, чтобы выбрать способ отправки сообщения`">
                        Написать сообщение
                    </div>
                </div>
                <div v-else>
                    <div class="no-access fz-12">
                        Нет доступа
                    </div>
                </div>
            </div>
        </td>
        <td v-if="!presentationStore.presentation && settings_table.settings_adpopup.value" class="table_info_cell _ad">
            <div class="base_table_content">
                <div class="rel_ad" v-tippy.top="`Посмотреть список всех обращений по этому объекту`">
                    Обращений - <span>0</span>
                </div>
                <div class="btn-icon-text fz-13 tt" style="background: #e0e1e2;color: #444;font-size: 10px;font-weight: 700;">
                    В РЕКЛАМУ НЕ ВЫГРУЖАЛСЯ
                </div>
            </div>
        </td>
        <td v-if="settings_table.settings_type_objects.value" class="table_info_cell _realty_type">
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
        <td v-if="settings_table.settings_location.value" class="table_info_cell _location" v-tippy.top="`Посмотреть расположение на карте`">
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
        <td v-if="settings_table.settings_house.value" class="table_info_cell _house">
            <div class="base_table_content">
                <div class="table_label">
                    д. 193а
                </div>
            </div>
        </td>
        <td v-if="settings_table.settings_metro.value" class="table_info_cell _metro">
            <div class="base_table_content">—</div>
        </td>
        <td v-if="settings_table.settings_price.value" class="table_info_cell _price">
            <div class="base_table_content" style="overflow: unset">
                <div class="_fz18 fw600  d-flex align-center">
                    € {{ object.OPPORTUNITY }}
                    <div class="price_arrow" v-if="false" style="min-width: 14px">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19.924 13.617A1 1 0 0 0 19 13h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v10H5a1 1 0 0 0-.707 1.707l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 .217-1.09z" style="fill:#91d637" data-name="Down"/></svg>
                        <div class="price_box">
                            <div class="price_box_wrapper">
                                <div class="price_box_label fz-15">
                                    Изменение цены
                                </div>
                                <table class="price_content fz-13">
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
                                <div class="price_box_stats fz-15">
                                    Стартовая цена <span class="color_green_light fw600">понижена на 43%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="object.UF_CRM_1685705685511">
                    <span> {{ (+object.OPPORTUNITY_ACCOUNT / +object.UF_CRM_1685705685511).toFixed(2) }}</span> €/м²
                </div>
                <div class="color_grey">
                    ипотека
                </div>
            </div>
        </td>
        <td v-if="settings_table.settings_market_price.value" class="table_info_cell _market_price">
            <div class="base_table_content">
                <div class="liquid_label fz-13 _green d-flex align-center">
                    <svg width="16" height="16" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 128 128"
                         style="enable-background:new 0 0 128 128" xml:space="preserve">
                        <g id="row3">
                            <path id="icon:2_2_" d="M38.4 63.3s9.2-6.6 15.3-15.7c5.9-8.7 8.8-15.2 8.8-15.2s2.5-8.5.6-17.7c-1-5 4.3-8 10.7-5.9 5.1 1.6 7.5 13 7.9 15.9 1.9 14.2-4.5 28.9-4.5 28.9H115s13.4-.3 13 8.2c-.5 9.8-16.3 9.4-16.3 9.4s10.5 1.4 10.5 8.8c-.1 7.4-12.8 9.2-12.8 9.2s9.2 1.7 8.6 7.6c-.6 5.5-11.4 7.4-11.4 7.4s6.7 1.8 5.7 8.1c-.8 4.9-8.2 4.6-8.2 4.6l-65.5-.1V63.3zm-2.6-2.7v59.3H5.2L0 60.6h35.8zm-8.9 46.9c0-3-2.4-5.4-5.4-5.4-3 0-5.4 2.4-5.4 5.4 0 3 2.4 5.4 5.4 5.4 3 .1 5.4-2.4 5.4-5.4z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#05A87C"/>
                        </g>
                    </svg>
                    Ликвид
                </div>
                <div class="liquid_price fz-16">
                    —
                </div>
                <div>
                    рыночная цена
                </div>
            </div>
        </td>
        <td v-if="settings_table.settings_commission.value" class="table_info_cell _commission">
            <div class="base_table_content">
                <div class="base_table_ellipsis">
                    <span class="color_grey">ГДК:</span> 5% / 35 000 000 р
                </div>
            </div>
        </td>
        <td v-if="settings_table.settings_floor.value" class="table_info_cell _floor">
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
        <td v-if="settings_table.settings_type_house.value" class="table_info_cell _building_type">
            <div class="base_table_content">
                <div class="fw600 _nowrap">
                    Новый дом
                </div>
                <div class="_nowrap">Кирпичный</div>
            </div>
        </td>
        <td v-if="settings_table.settings_areas.value" class="table_info_cell _areas">
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
        <td v-if="!presentationStore.presentation && settings_table.settings_tasks.value" class="table_info_cell _tasks">
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
        <td v-if="!presentationStore.presentation && settings_table.settings_type_contract.value" class="table_info_cell _dc_contract_type">
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
        <td v-if="settings_table.settings_type_sell.value" class="table_info_cell _sale_type">
            <div class="base_table_content">
                <span>Свободная (прямая)</span>
            </div>
        </td>
        <td v-if="settings_table.settings_complex.value" class="table_info_cell _primaries_id">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_design.value" class="table_info_cell _layout">
            <div class="base_table_content">
                Косметический ремонт
            </div>
        </td>
        <td v-if="!presentationStore.presentation && settings_table.settings_notes.value" class="table_info_cell _notes">
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
        <td v-if="settings_table.settings_description.value" class="table_info_cell _mydescription">
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
        <td v-if="settings_table.settings_communication.value" class="table_info_cell _communications">
            <div class="base_table_content">
                <div>
                    <span class="color_grey">газ:</span> —
                </div>
                <div>
                    <span class="color_grey">отопление:</span> Центральное
                </div>
            </div>
        </td>
        <td v-if="settings_table.settings_additional_params.value" class="table_info_cell _extra-options">
            <div class="base_table_content">
                <div>
                    <span class="color_grey">балкон:</span> есть
                </div>
                <div>
                    <span class="color_grey">санузел:</span> 1 совмещенный
                </div>
            </div>
        </td>
        <td v-if="settings_table.settings_look.value" class="table_info_cell _usage_land">
            <div class="base_table_content">—</div>
        </td>
        <td v-if="settings_table.settings_room.value" class="table_info_cell _use">
            <div class="base_table_content">—</div>
        </td>
        <td v-if="!presentationStore.presentation && settings_table.settings_cadastral_number.value" class="table_info_cell _cadastral_num">
            <div class="base_table_content">—</div>
        </td>
        <td v-if="settings_table.settings_publication.value" class="table_info_cell _show_in_mls">
            <div class="base_table_content">
                <div>в МЛС с 04.06.2024</div>
                <div>Не в фиде</div>
            </div>
        </td>
        <td v-if="!presentationStore.presentation && settings_table.settings_source.value" class="table_info_cell _source_name">
            <div class="base_table_content">
                Холодный звонок
            </div>
        </td>
        <td v-if="settings_table.settings_status.value" class="table_info_cell _deal_state">
            <div class="base_table_content">
                <div class="btn-icon-text fz-13 tt"
                     style="background: rgb(224, 225, 226); color: rgb(68, 68, 68); font-size: 10px; font-weight: 700;"
                     v-tippy.top="'У вас недостаточно прав для изменения статуса'">
                    СБОР ДАННЫХ
                </div>
            </div>
        </td>
        <td v-if="!presentationStore.presentation && settings_table.settings_comments.value" class="table_info_cell _comment_callcenter">
            <div class="base_table_content">
                —
            </div>
        </td>

        <td v-if="settings_table.settings_have_renter.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_form_ownership.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_area_construction.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_object_permission.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_code_db.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_roof.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_lease_term.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_type_ownership.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_reason_withdrawal.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_subject_contract.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_exist_encumbrance.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_building_block.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_ownership.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_basis.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_encumbrance_bank.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_type_layout.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_invite_client_manager.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_area_apartment.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_summ_encumbrance.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_exhaust.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_type_object_right.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_exist_enforcement.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_water_supply.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_rooms_in_sauna.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_share_ownership.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_partner.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_amount_enforcement.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_catering.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_pool.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_leased.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_land_plot.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_name_lessee.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_profit_lessee.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_place.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_area_place.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_facade.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_warehouse_class.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_type.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_corner.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_floor_room.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_number_boxes.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_length.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_coverage.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_pit.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_width.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_approach.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_lifts.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_rampa.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_showers.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_fridge.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_crande_girder.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_crande_girder_tones.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_gate_width.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_bathroom.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_gate_heigth.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_type_gate.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_office_available.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_number_windows.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_number_buildings.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_area_office.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_area_buildings.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_additional_permited_use.value" class="table_info_cell">
            <div class="base_table_content">
                —
            </div>
        </td>
        <td v-if="settings_table.settings_last_call.value" class="table_info_cell">
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
                                    <Link style="padding: 3px 7px; color: #0370c9;" :href="'/object/'+object.ID">{{object.ID}}
                                    </Link>

                                </div>
                                <div class="footer_info_box_item" style="padding: 1px 7px 4px 9px;">
                                    <div class="btn-icon-text fz-13 tt color_red bg_red"
                                         style="font-size: 10px; font-weight: 700;">
                                        ОТКАЗ
                                    </div>
                                </div>
                            </div>
                            <div class="footer_info_box ">
                                <div class="footer_bar_date fz-13 d-flex align-center">
                                    <span class="color_gray" style="margin-right: 2px;">Созд:</span>
                                    {{object.DATE_CREATE}}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#7e7e7e" width="10.033" height="5"><path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z"/></svg>
                                </div>
                                <div class="footer_bar_date fz-13">
                                    <span class="color_gray" style="margin-right: 2px;">Изм:</span>
                                    {{object.DATE_MODIFY}}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="#7e7e7e" width="10.033" height="5"><path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div class="footer_actions">

                            <div class="combo_button">
                                <div class="button_left_side">
                                    <div class="advertising-button fz-14 _default">
                                        Реклама
                                    </div>
                                </div>
                                <div class="button_right_side">
                                    <div class="service-label fz-14">
                                        Сервисы
                                    </div>
                                </div>
                            </div>

                            <div class="footer_bar_btn fz-14 _yellow">
                                Найти покупателя
                            </div>

                            <div class="footer_bar_btn fz-14 _yellow">
                                CMA
                            </div>

                            <div class="combo_button btn_table_blue fz-13">
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
