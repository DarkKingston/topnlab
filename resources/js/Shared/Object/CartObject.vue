<script>
import { ref, onMounted } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
export default {
    props:{
        object: Object
    },
    components:{
        Link
    },
    setup(){

        const copied = ref(false);
        const tabResponsible = ref(1);
        const tabNav = ref(2);
        const toggledText = ref(false);
        const showedNumber = ref(false);
        function clipboardCopy(id){
            copied.value = !copied.value;
            navigator.clipboard.writeText(id);
            setTimeout(() => {
                copied.value = !copied.value;
            }, 1000)
        }
        function changeTabNav(tab){
            tabNav.value = tab
        }
        onMounted(() => {
            document.querySelector('main').classList.add('no_scroll')
            const slider = new Swiper ('.gallery-slider', {
                slidesPerView: 1,
                centeredSlides: true,
                loop: false,
                spaceBetween: 15,
                loopedSlides: 6,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            const thumbs = new Swiper ('.gallery-thumbs', {
                slidesPerView: 'auto',
                spaceBetween: 4,
                centeredSlides: true,
                loop: false,
                slideToClickedSlide: true,
            });
            slider.controller.control = thumbs;
            thumbs.controller.control = slider;

            Fancybox.bind('[data-fancybox="slider"]', {
                Toolbar: false,
                animated: false,
                hideScrollbar: false,
                click: false,
            });

            if (!window.ymaps) {
                loadYandexMapsAPI().then(initMap).catch(error => console.log('Failed to load Yandex Maps', error));
            } else {
                initMap();
            }
        });

        function loadYandexMapsAPI() {
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://api-maps.yandex.ru/2.1/?lang=en_RU&apikey=86a0173b-9f43-47a8-81cb-f70b1cf08265';
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }
        function initMap() {
            ymaps.ready(() => {
                const myMap = new ymaps.Map('object_map', {
                    center: [46.9622462, 28.8485565],
                    zoom: 10,
                }, {
                    searchControlProvider: 'yandex#search'
                });

                const myGeoObjects = new ymaps.Clusterer({}, {
                    preset: "twirl#redStretchyIcon",
                    strokeWidth: 4,
                    geodesic: true
                });

                const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="padding: 2px 5px; font-weight: bold; color: #000; background: #FFFFFF; border-radius: 3px;">$[properties.iconContent]</div>'
                );

                const placemark = new ymaps.Placemark([46.9622462, 28.8485565], {
                    hintContent: 'дом 120 м² 3.3 сотки'
                }, {
                    iconContentLayout: MyIconContentLayout,
                    iconLayout: 'default#imageWithContent',
                    iconImageHref: "https://www.svgrepo.com/show/255181/location-pin.svg",
                    iconImageSize: [40, 42],
                    iconImageOffset: [-5, -38]
                });
                myGeoObjects.add(placemark);

                myMap.geoObjects.add(myGeoObjects);
                const bounds = myGeoObjects.getBounds();

                if (myGeoObjects.getGeoObjects().length === 1) {
                    myMap.setBounds([[bounds[1][0] - 0.02, bounds[1][1] - 0.02], [bounds[1][0] + 0.02, bounds[1][1] + 0.02]], { checkZoomRange: true });
                } else {
                    myMap.setBounds(bounds, { checkZoomRange: true });
                }
            });
        }

        function changeShowNumber(){
            showedNumber.value = !showedNumber.value
        }

        function changeResponsible(tab){
            tabResponsible.value = tab;
        }

        function toggleText(){
            toggledText.value = !toggledText.value
        }

        return {
            copied,
            clipboardCopy,
            changeShowNumber,
            showedNumber,
            changeResponsible,
            tabResponsible,
            changeTabNav,
            tabNav,
            toggledText,
            toggleText
        }
    }
}
</script>

<template>
    <div class="cart_object">
        <div class="cart_object_notifications">
            <div class="cart_object_notify_item">
                <div class="cart_object_notify_item_wrapper">
                    <div class="cart_object_notify_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="m23.89 3.72-2-1.19a3.84 3.84 0 0 0-5.25 1.34l-10 16.85a2.91 2.91 0 0 0-.41 1.66L6.59 29a1 1 0 0 0 .49.81 1 1 0 0 0 .51.14 1 1 0 0 0 .43-.1L14 27a2.92 2.92 0 0 0 1.26-1.15L24.63 10l.6-1a3.84 3.84 0 0 0-1.34-5.28zm-4 .28a1.88 1.88 0 0 1 .93.25l2 1.19A1.84 1.84 0 0 1 23.51 8l-.09.15L18.26 5l.09-.15A1.84 1.84 0 0 1 19.93 4zm-5.33 19.05-.33-.52a1 1 0 0 0-.77-.45L11.73 22l-.94-1.46A1 1 0 0 0 10 20h-.6l7.84-13.24 5.16 3.06zm-1.43 2.12-4.62 2.22-.27-5.12a.83.83 0 0 1 0-.35l1.14.08.94 1.46a1 1 0 0 0 .77.45l1.73.12.59.92a1.18 1.18 0 0 1-.28.22z"/>
                        </svg>
                    </div>
                    <div class="cart_object_notify_text">
                        Заполните ВСЕ обязательные поля.
                    </div>
                    <div class="cart_object_notify_link color_link">Заполнить</div>
                </div>
            </div>
            <div class="cart_object_notify_item">
                <div class="cart_object_notify_item_wrapper">
                    <div class="cart_object_notify_icon">
                        <svg class="bi bi-info-lg" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                        </svg>
                    </div>
                    <div class="cart_object_notify_text">
                        По объекту есть 2 пересечений.
                    </div>
                    <div class="cart_object_notify_link color_link">Посмотреть</div>
                </div>
            </div>
        </div>

        <div class="cart_object_status">
            <div class="table_status_progress">
                <div class="table_status_steps">
                    <div class="table_status_step_item fz-13">
                        <div class="table_status_step_descr fz-14">Заключенные договоры</div>
                    </div>
                    <div class="table_status_step_item _red fz-13">
                        <div class="table_status_step_descr fz-14">Новые продавцы</div>
                    </div>
                </div>
            </div>
            <div style="display: flex; align-items: center; flex-shrink: 0;">
                <button class="btn_table btn_next">
                    Вперед по воронке
                    <svg viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_iconCarrier">
                            <path d="M224.48535,136.48535l-72,72a12.0001,12.0001,0,0,1-16.9707-16.9707L187.0293,140H40a12,12,0,0,1,0-24H187.0293L135.51465,64.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l72,72A11.99975,11.99975,0,0,1,224.48535,136.48535Z">
                            </path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>

        <div class="cart_object_header">
            <div class="cart_object_header_box">
                <div class="cart_object_header_title fz-24">
<!--                    <span>-->
<!--                        Продается-->
<!--                    </span>-->
<!--                    <span class="cart_object_name cart_object_separator">-->
<!--                        дом-->
<!--                    </span>-->
<!--                    <span class="cart_object_name cart_object_separator">-->
<!--                       120 м²-->
<!--                    </span>-->
<!--                    <span class="cart_object_name">-->
<!--                       3.3 сотки-->
<!--                    </span>-->
                    {{object.TITLE}}
                </div>
                <div class="cart_object_addresses">
                    {{object?.UF_CRM_1685299014085}}
                </div>
            </div>
            <div class="cart_object_header_box">

                <div class="cart_object_dates">
                    <div class="cart_object_date_item fz-13">
                        Создано: {{object.DATE_CREATE}}
                    </div>
                    <div class="cart_object_date_item fz-13">
                        Изменено: {{object.DATE_CREATE}}
                    </div>
                    <div class="cart_object_date_realty_id fz-13" @click="clipboardCopy(object.ID)">
                        id объекта: {{object.ID}}
                        <span>
                            <svg height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" fill="white">
                                <path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"/>
                                <path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                            </svg>
                        </span>
                        <div class="cart_object_dates_popup fz-13" :class="{active : copied}">
                            id объекта скопировано
                            <span>
                                <svg id="Layer_1" viewBox="0 0 30 30" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path d="M13.44,20.56c-0.265,0-0.52-0.105-0.707-0.293l-4.453-4.453c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0  l3.746,3.746l10.8-10.8C22.039,4.691,18.718,3,15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12  c0-2.18-0.59-4.218-1.606-5.98L14.147,20.267C13.96,20.454,13.706,20.56,13.44,20.56z"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cart_object_info">
            <div class="cart_object_info_main">

                <div class="cart_object_info_preview">
                    <div class="cart_preview_actions">
                        <div class="combo_button">
                            <div class="button_left_side" v-tippy.top="`У вас недостаточно прав`">
                                <div class="advertising-button _default"> Реклама </div>
                            </div>
                            <div class="button_right_side" v-tippy.top="`Услуг не заказано`">
                                <div class="service-label"> Сервисы </div>
                            </div>
                        </div>
                        <div class="cart_preview_action_item" v-tippy.top="`В базе данных есть покупатели под этот обьект`">
                            <button class="btn_table btn_combo fz-13 btn_next" >
                                Покупателей 0
                            </button>
                        </div>
                        <div class="footer_bar_btn fz-14 _yellow" v-tippy.top="`Недостаточно прав для этой операции`"> CMA </div>
                        <div class="combo_button btn_table_blue fz-13" v-tippy.top="`В карточке заполнены не все обязательные поля`">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#3588F3" width="18" height="4">
                                <circle cx="9" cy="2" r="2"></circle>
                                <circle cx="2" cy="2" r="2"></circle>
                                <circle cx="16" cy="2" r="2"></circle>
                            </svg>
                        </div>
                    </div>

                    <div class="cart_object_slider">
                        <div class="swiper-container gallery-slider">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, idx) in object.IMAGE" :key="idx" data-fancybox="slider" :href="'https://crm.mirax.md/'+item">
                                    <span class="blur"></span><img :src="'https://crm.mirax.md/'+item" :alt="object.TITLE">
                                </div>
                            </div>
                            <div class="swiper-button-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z" style="fill:#3588f3"/></svg>
                            </div>
                            <div class="swiper-button-next">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z" style="fill:#3588f3"/></svg>
                            </div>
                            <div class="slider_info">
                                <div class="slider_info_wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_2" data-name="Layer 2"><path class="cls-1" d="M32 44a10 10 0 1 0-10-10 10 10 0 0 0 10 10z"/><path class="cls-1" d="M9.51 56h45A5.51 5.51 0 0 0 60 50.49V20.18A4.18 4.18 0 0 0 55.82 16H48.3a1.81 1.81 0 0 1-1.51-.81L43.3 10a4.39 4.39 0 0 0-3.65-2h-15.3a4.39 4.39 0 0 0-3.65 2l-3.5 5.19a1.81 1.81 0 0 1-1.5.81H8.18A4.18 4.18 0 0 0 4 20.18v30.31A5.51 5.51 0 0 0 9.51 56zM52 20a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm-20 0a14 14 0 1 1-14 14 14 14 0 0 1 14-14zM54.82 12A1.18 1.18 0 0 0 56 10.82v-.61A2.22 2.22 0 0 0 53.78 8h-4.15a.74.74 0 0 0-.74.74A3.26 3.26 0 0 0 52.15 12z"/></g></svg>
                                    <span>6 фото</span>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-container gallery-thumbs">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="(item, idx) in object.IMAGE" :key="idx"><img :src="'https://crm.mirax.md/'+item" :alt="object.TITLE"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart_object_info_contract">
                    <div class="cart_contract">
                        Устная договоренность
                    </div>
                </div>
                <div class="cart_object_info_params">
                    <div class="cart_object_param_title">
                        Заголовок не задан
                    </div>
                    <table>
                        <tr class="cart_object_data">
                            <td class="cart_object_data_item">
                                <div class="cart_object_data_item_wrapper">
                                    <div class="cart_object_data_item_price blue"> € {{object.OPPORTUNITY}} </div>
                                    <div class="cart_object_data_item_name"><span>350 000</span> €/м²</div>
                                </div>
                            </td>
                            <td class="cart_object_data_item">
                                <div class="cart_object_data_item_wrapper">
                                    <div class="cart_object_data_item_price"><span>30</span> м²</div>
                                    <div class="cart_object_data_item_name">ОБЩАЯ</div>
                                </div>
                            </td>
                            <td class="cart_object_data_item">
                                <div class="cart_object_data_item_wrapper">
                                    <div class="cart_object_data_item_price"><span>10</span> м²</div>
                                    <div class="cart_object_data_item_name">КУХНЯ</div>
                                </div>
                            </td>
                            <td class="cart_object_data_item">
                                <div class="cart_object_data_item_wrapper">
                                    <div class="cart_object_data_item_price">22 из 25</div>
                                    <div class="cart_object_data_item_name">ЭТАЖ</div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
            <div class="cart_object_info_sidebar">
                <div class="cart_responsible_nav">
                    <div class="cart_responsible_nav_item" @click="changeResponsible(1)" :class="{active : tabResponsible == 1}"> Ответственный и исполнитель </div>
                    <div class="cart_responsible_nav_item" @click="changeResponsible(2)" :class="{active : tabResponsible == 2}"> Собственник </div>
                </div>
                <div class="cart_object_responsible" v-if="tabResponsible == 1">
                    <div class="cart_object_responsible_wrapper">
                        <div class="cart_responsible_img">
                            <img src="https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg" alt="">
                        </div>
                        <div class="cart_responsible_info">
                            <div class="cart_responsible_info_name">
                                {{ object.ASSIGNED_BY_NAME }} {{ object.ASSIGNED_BY_LAST_NAME }}
                            </div>
                            <div class="cart_responsible_info_role">
                                #Стажер
                            </div>
                            <div class="contact_phone_number">
                                <div v-if="!showedNumber" v-tippy.top="`Нажми, чтобы c показать номер`">373 <span class="link" @click="changeShowNumber">...показать номер</span></div>
                                <div v-else class="link">
                                    {{ object?.ASSIGNED_BY_PHONE }}
                                </div>
                            </div>
                            <div class="cart_responsible_info_mess fz-14" >
                                Написать сообщение
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart_object_responsible" v-if="tabResponsible == 2">
                    <div class="cart_object_responsible_wrapper">
                        <div class="cart_object_responsible_customer">
                            C
                        </div>
                        <div class="cart_responsible_info">
                            <div class="cart_responsible_contact">
                                Недостаточно прав для просмотра контактной информации
                            </div>
                        </div>
                    </div>
                </div>

                <nav class="notes_tabs">
                    <div class="notes_tabs_nav_item" @click="changeTabNav(1)" :class="{active : tabNav == 1}">
                        Личные примечания - 0
                    </div>
                    <div class="notes_tabs_nav_item" @click="changeTabNav(2)" :class="{active : tabNav == 2}">
                        Публичные - 1
                    </div>
                </nav>

                <div class="cart_object_responsible" >
                    <div class="notes_tabs_content">
                        <div class="notes_wrap" v-if="tabNav == 1">
                            <div class="notes_wrapper_items">
                                <div class="notes_log_notify">
                                    <div class="notes_log_notify-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" style="width: 15px;height: 15px;"> <g id="famous_places"> <g id="Pyramid"> </g> <g id="Colloseum"> </g> <g id="Mount_Fuji"> </g> <g id="Great_Wall_of_China"> </g> <g id="Stonehenge"> </g> <g id="Golden_Gate_Bridge"> </g> <g id="Christ_the_Redeemer"> </g> <g id="Statue_of_Liberty"> </g> <g id="Taj_Mahal"> </g> <g id="Eiffel_tower"> </g> </g> <g id="camping"> <g id="mug"> </g> <g id="hook"> </g> <g id="Swiss_knife"> </g> <g id="flashlight"> </g> <g id="lantern"> </g> <g id="campfire"> </g> <g id="beanie"> </g> <g id="rope"> </g> <g id="boot"> </g> <g id="axe"> </g> </g> <g id="hotel_1_"> <g id="towel"> </g> <g id="phone"> </g> <g id="pool"> </g> <g id="food_service"> </g> <g id="wifi"> <g> <g> <path fill="#3588F3" d="M158.361,432.796c-43.647,0-79.158-35.509-79.158-79.157s35.51-79.158,79.158-79.158      s79.158,35.511,79.158,79.158S202.008,432.796,158.361,432.796z"/> </g> <g> <path fill="#3588F3" d="M415.044,371.392c-9.804,0-17.753-7.949-17.753-17.753c0-131.747-107.184-238.931-238.93-238.931      c-9.804,0-17.753-7.949-17.753-17.753s7.948-17.753,17.753-17.753c151.325,0,274.435,123.112,274.435,274.436      C432.796,363.443,424.848,371.392,415.044,371.392z"/> </g> <g> <path fill="#3588F3" d="M355.869,371.392c-9.804,0-17.753-7.949-17.753-17.753c0-99.118-80.638-179.756-179.755-179.756      c-9.804,0-17.753-7.949-17.753-17.753c0-9.804,7.948-17.753,17.753-17.753c118.695,0,215.26,96.565,215.26,215.261      C373.621,363.443,365.673,371.392,355.869,371.392z"/> </g> <g> <path fill="#3588F3" d="M296.694,371.392c-9.804,0-17.753-7.949-17.753-17.753c0-66.488-54.093-120.581-120.58-120.581      c-9.804,0-17.753-7.949-17.753-17.753c0-9.804,7.948-17.753,17.753-17.753c86.066,0,156.085,70.02,156.085,156.086      C314.446,363.443,306.497,371.392,296.694,371.392z"/> </g> </g> </g> <g id="bed"> </g> <g id="door"> </g> <g id="key"> </g> <g id="do_not_disturb"> </g> <g id="bell"> </g> </g> <g id="winter"> <g id="snowman"> </g> <g id="snow_mountain"> </g> <g id="reindeer"> </g> <g id="winter_tree"> </g> <g id="lift"> </g> <g id="beanie__x26__google"> </g> <g id="ski"> </g> <g id="snowboard"> </g> <g id="snowboading"> </g> <g id="skiing"> </g> </g> <g id="general_travelling"> <g id="dinner_set"> </g> <g id="polaroid"> </g> <g id="camera"> </g> <g id="calendar"> </g> <g id="calendar_single"> </g> <g id="shopping_bag"> </g> <g id="watch"> </g> <g id="alarm_clock"> </g> <g id="credit_card"> </g> <g id="road_sign"> </g> <g id="hotel"> </g> <g id="money"> </g> <g id="sunglass"> </g> <g id="cocktail"> </g> <g id="compass"> </g> <g id="tent"> </g> <g id="backpack"> </g> <g id="map"> </g> <g id="ticket_1_"> </g> <g id="passport"> </g> <g id="luggage"> </g> <g id="globe"> </g> <g id="suitcase"> </g> </g> <g id="vehicles"> <g id="trailer"> </g> <g id="airplane"> </g> <g id="yatch"> </g> <g id="taxi"> </g> <g id="hot_air_ballon"> </g> <g id="bus"> </g> <g id="train"> </g> </g> <g id="summer"> <g id="postcard"> </g> <g id="bikini"> </g> <g id="flipflop"> </g> <g id="plane_around_the_globe"> </g> <g id="binocular"> </g> <g id="beach_table"> </g> <g id="sun_hat"> </g> <g id="beach_bag"> </g> <g id="sea__x26__wave"> </g> <g id="beach"> </g> <g id="beach_ball"> </g> <g id="jetski"> </g> <g id="sandcastle"> </g> <g id="lifeguard_male"> </g> <g id="lifeguard_female"> </g> <g id="lighthouse"> </g> <g id="hammok"> </g> <g id="beach_chair__x26__umbrella"> </g> <g id="lifeguard"> </g> <g id="suncream"> </g> <g id="starfish"> </g> <g id="beach_bar"> </g> <g id="bucket__x26__shovel"> </g> <g id="palm_tree"> </g> <g id="shark_warning"> </g> <g id="surfboard"> </g> <g id="swimming_trunks"> </g> <g id="coconut_drink"> </g> <g id="beach_chair__x26__towel"> </g> <g id="coconut_tree"> </g> </g> </svg>
                                        Примечания, написанные в этом окне, будут доступны вашим коллегам
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="notes_wrap"  v-if="tabNav == 2">
                            <div class="notes_wrapper_items">
                                <div class="notes_log_notify">
                                    <div class="notes_log_notify-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" style="width: 15px;height: 15px;"> <g id="famous_places"> <g id="Pyramid"> </g> <g id="Colloseum"> </g> <g id="Mount_Fuji"> </g> <g id="Great_Wall_of_China"> </g> <g id="Stonehenge"> </g> <g id="Golden_Gate_Bridge"> </g> <g id="Christ_the_Redeemer"> </g> <g id="Statue_of_Liberty"> </g> <g id="Taj_Mahal"> </g> <g id="Eiffel_tower"> </g> </g> <g id="camping"> <g id="mug"> </g> <g id="hook"> </g> <g id="Swiss_knife"> </g> <g id="flashlight"> </g> <g id="lantern"> </g> <g id="campfire"> </g> <g id="beanie"> </g> <g id="rope"> </g> <g id="boot"> </g> <g id="axe"> </g> </g> <g id="hotel_1_"> <g id="towel"> </g> <g id="phone"> </g> <g id="pool"> </g> <g id="food_service"> </g> <g id="wifi"> <g> <g> <path fill="#3588F3" d="M158.361,432.796c-43.647,0-79.158-35.509-79.158-79.157s35.51-79.158,79.158-79.158      s79.158,35.511,79.158,79.158S202.008,432.796,158.361,432.796z"/> </g> <g> <path fill="#3588F3" d="M415.044,371.392c-9.804,0-17.753-7.949-17.753-17.753c0-131.747-107.184-238.931-238.93-238.931      c-9.804,0-17.753-7.949-17.753-17.753s7.948-17.753,17.753-17.753c151.325,0,274.435,123.112,274.435,274.436      C432.796,363.443,424.848,371.392,415.044,371.392z"/> </g> <g> <path fill="#3588F3" d="M355.869,371.392c-9.804,0-17.753-7.949-17.753-17.753c0-99.118-80.638-179.756-179.755-179.756      c-9.804,0-17.753-7.949-17.753-17.753c0-9.804,7.948-17.753,17.753-17.753c118.695,0,215.26,96.565,215.26,215.261      C373.621,363.443,365.673,371.392,355.869,371.392z"/> </g> <g> <path fill="#3588F3" d="M296.694,371.392c-9.804,0-17.753-7.949-17.753-17.753c0-66.488-54.093-120.581-120.58-120.581      c-9.804,0-17.753-7.949-17.753-17.753c0-9.804,7.948-17.753,17.753-17.753c86.066,0,156.085,70.02,156.085,156.086      C314.446,363.443,306.497,371.392,296.694,371.392z"/> </g> </g> </g> <g id="bed"> </g> <g id="door"> </g> <g id="key"> </g> <g id="do_not_disturb"> </g> <g id="bell"> </g> </g> <g id="winter"> <g id="snowman"> </g> <g id="snow_mountain"> </g> <g id="reindeer"> </g> <g id="winter_tree"> </g> <g id="lift"> </g> <g id="beanie__x26__google"> </g> <g id="ski"> </g> <g id="snowboard"> </g> <g id="snowboading"> </g> <g id="skiing"> </g> </g> <g id="general_travelling"> <g id="dinner_set"> </g> <g id="polaroid"> </g> <g id="camera"> </g> <g id="calendar"> </g> <g id="calendar_single"> </g> <g id="shopping_bag"> </g> <g id="watch"> </g> <g id="alarm_clock"> </g> <g id="credit_card"> </g> <g id="road_sign"> </g> <g id="hotel"> </g> <g id="money"> </g> <g id="sunglass"> </g> <g id="cocktail"> </g> <g id="compass"> </g> <g id="tent"> </g> <g id="backpack"> </g> <g id="map"> </g> <g id="ticket_1_"> </g> <g id="passport"> </g> <g id="luggage"> </g> <g id="globe"> </g> <g id="suitcase"> </g> </g> <g id="vehicles"> <g id="trailer"> </g> <g id="airplane"> </g> <g id="yatch"> </g> <g id="taxi"> </g> <g id="hot_air_ballon"> </g> <g id="bus"> </g> <g id="train"> </g> </g> <g id="summer"> <g id="postcard"> </g> <g id="bikini"> </g> <g id="flipflop"> </g> <g id="plane_around_the_globe"> </g> <g id="binocular"> </g> <g id="beach_table"> </g> <g id="sun_hat"> </g> <g id="beach_bag"> </g> <g id="sea__x26__wave"> </g> <g id="beach"> </g> <g id="beach_ball"> </g> <g id="jetski"> </g> <g id="sandcastle"> </g> <g id="lifeguard_male"> </g> <g id="lifeguard_female"> </g> <g id="lighthouse"> </g> <g id="hammok"> </g> <g id="beach_chair__x26__umbrella"> </g> <g id="lifeguard"> </g> <g id="suncream"> </g> <g id="starfish"> </g> <g id="beach_bar"> </g> <g id="bucket__x26__shovel"> </g> <g id="palm_tree"> </g> <g id="shark_warning"> </g> <g id="surfboard"> </g> <g id="swimming_trunks"> </g> <g id="coconut_drink"> </g> <g id="beach_chair__x26__towel"> </g> <g id="coconut_tree"> </g> </g> </svg>
                                        Примечания, написанные в этом окне, будут доступны вашим коллегам
                                    </div>
                                </div>
                                <div class="notes_log_day">
                                    <div class="notes_log_day_text">
                                        Вчера
                                    </div>
                                </div>
                                <div class="notes_log_item">
                                    <div class="notes_log_message">
                                        <div class="notes_log_message_avatar">
                                            <img src="https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg" alt="">
                                        </div>
                                        <div class="notes_log_message_content">
                                            <div class="notes_log_message_content_name">
                                                <div class="link">{{ object.ASSIGNED_BY_NAME }} {{ object.ASSIGNED_BY_LAST_NAME }}</div>
                                                <span>22:55</span>
                                            </div>
                                            <div class="notes_log_message_content_text">
                                                <p>Статус квартира</p>
                                                <p>полная сумма в договоре</p>
                                                <p>обременение сбера 5.800тр</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="notes_send_area">
                            <div class="notes_send_area_wrapper">
                                <input type="text" class="notes_send_input" placeholder="Введите текст...">
                                <div class="notes_send_btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m20.447 11.105-16-8A1 1 0 0 0 3.152 4.53L7.82 12l-4.668 7.47a1 1 0 0 0 1.3 1.425l16-8a1 1 0 0 0 0-1.79zM6.731 17.517 9.554 13H12a1 1 0 0 0 0-2H9.554L6.731 6.483 17.764 12z" style="fill:#3588F3"/></svg>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="cart_object_params">
            <div class="cart_object_params_block">
                <div class="cart_object_params_title">
                    Условия
                </div>
                <div class="cart_object_params_single_rows">
                    <div class="cart_object_params_single_row">
                        <div class="single_text">
                            Текущий статус:
                        </div>
                        <div class="single_status table_head_cell_content_item_label color_green bg_green tt">
                            В РАБОТЕ
                        </div>
                    </div>
                </div>
                <div class="cart_object_params_columns">
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Тип продажи</div>
                            <div class="cart_object_param_value">Свободная (прямая)</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Ипотека</div>
                            <div class="cart_object_param_value">да</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Готов делиться комиссией</div>
                            <div class="cart_object_param_value">50% от моей комиссии</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Источник</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Публикация в МЛС</div>
                            <div class="cart_object_param_value">Публикуется в МЛС</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Возможен онлайн показ объекта</div>
                            <div class="cart_object_param_value">Да</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Код в БД</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Наличие обременения</div>
                            <div class="cart_object_param_value">да</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Банк обременения</div>
                            <div class="cart_object_param_value">Сбербанк</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Наличие техпаспорта</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Межевание</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Нотариальная сделка</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Наличие доверенности</div>
                            <div class="cart_object_param_value">нет</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Разбивка суммы</div>
                            <div class="cart_object_param_value">да</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Наличие неоформленных построек</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                </div>
                <div class="cart_object_params_inserted mb-4">
                    <div class="cart_object_params_inserted_item">
                        <span class="cart_object_inserted_name">Сумма обременения</span>:
                        <span class="cart_object_param_value">
                            5800000
                        </span>
                    </div>
                    <div class="cart_object_params_inserted_item">
                        <span class="cart_object_inserted_name">Наличие исполнительных производств</span>:
                        <span class="cart_object_param_value">
                            нет
                        </span>
                    </div>
                    <div class="cart_object_params_inserted_item">
                        <span class="cart_object_inserted_name">Разбивка (сумма)</span>:
                        <span class="cart_object_param_value">
                            5800000
                        </span>
                    </div>
                    <div class="cart_object_params_inserted_item">
                        <span class="cart_object_inserted_name">Был ли использован мат. капитал при покупке</span>:
                        <span class="cart_object_param_value">
                            —
                        </span>
                    </div>
                </div>
            </div>

            <div class="cart_object_params_block">
                <div class="cart_object_params_title">
                    ОПИСАНИЕ ОБЪЕКТА
                </div>
                <div class="cart_param_description">
                    <div class="cart_param_description_text">
                       <div class="cart_param_description_text_value" :class="{active: toggledText}">
                           <p>Срочная продажа! Полноценная однокомнатная квартира: просторная кухня-гостиная и выделенная спальня, санузел совмещенный. Квартира с ремонтом, и, полностью укомплектована мебелью и техникой. Из панорамных окон открывается красивый вид на реку и зелень. </p>
                           <p>Квартира расположена в современном жилом комплексе, на первых этажах которого есть все необходимое для жизни: магазины, кафе, аптека, салоны красоты и многое другое. </p>
                           <p>Двор оборудован детскими площадками и прогулочными зонами. </p>
                           <p>Продается в связи с переездом по семейным обстоятельствам. Отдаем ниже рынка. В нашем ЖК за такую цену продаются без ремонта.</p>
                           <p>Статус квартира, один собственник. В собственности более 5 лет</p>
                           <p>Срочно!</p>
                       </div>
                        <div class="cart_param_descr_btn">
                            <div class="cart_param_descr_btn_content" @click="toggleText">
                                <span v-if="!toggledText">Подробнее</span>
                                <span v-else>Скрыть</span>
                                <svg xmlns="http://www.w3.org/2000/svg" :class="{active: toggledText}" width="24" height="24" ><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cart_object_params_block">
                <div class="cart_object_params_title">
                    ОБ ОБЪЕКТЕ
                </div>
                <div class="cart_object_params_columns">
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Тип объекта</div>
                            <div class="cart_object_param_value">Квартира</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Количество комнат</div>
                            <div class="cart_object_param_value">1 ком.</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Этажей в квартире</div>
                            <div class="cart_object_param_value">1 этаж</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Этаж</div>
                            <div class="cart_object_param_value">22 из 25</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Площадь общая</div>
                            <div class="cart_object_param_value">30 м²</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Площадь комнат</div>
                            <div class="cart_object_param_value">20 м²</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Площадь жилая</div>
                            <div class="cart_object_param_value">20 м²</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Площадь кухни</div>
                            <div class="cart_object_param_value">10 м²</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Площадь прихожей</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Высота потолков</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Балкон/лоджия</div>
                            <div class="cart_object_param_value">Нет</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Санузел</div>
                            <div class="cart_object_param_value">1 совмещенный</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Отопление</div>
                            <div class="cart_object_param_value">Центральное</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Планировка</div>
                            <div class="cart_object_param_value">Изолированная</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Вид из окон</div>
                            <div class="cart_object_param_value">Во двор и на улицу</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Ремонт</div>
                            <div class="cart_object_param_value">Евроремонт</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Газ</div>
                            <div class="cart_object_param_value">Нет</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Кадастровый №</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Пригласил Клиент-менеджер</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Партнер</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cart_object_params_block">
                <div class="cart_object_params_title">
                    О ЗДАНИИ
                </div>
                <div class="cart_object_params_columns">
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Корпус</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">От города</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Направление / шоссе</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Тип дома</div>
                            <div class="cart_object_param_value">Монолитный</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Серия дома</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Лифт</div>
                            <div class="cart_object_param_value">2 лифта</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Мусоропровод</div>
                            <div class="cart_object_param_value">нет</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Новый дом</div>
                            <div class="cart_object_param_value">нет</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Год постройки/капремонта</div>
                            <div class="cart_object_param_value">2016/—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Квартал постройки</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cart_object_params_block">
                <div class="cart_object_params_title">
                    ДОГОВОР
                </div>
                <div class="cart_object_params_columns">
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Тип договора</div>
                            <div class="cart_object_param_value">Устная договоренность</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Предмет договора</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Первичка</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cart_object_params_block">
                <div class="cart_object_params_title">
                    СЛУЖЕБНЫЕ ПОЛЯ
                </div>
                <div class="cart_object_params_columns">
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Выводить в фид / выгрузка на сайт</div>
                            <div class="cart_object_param_value">Нет</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Выгрузить в закрытую базу Cian.ru</div>
                            <div class="cart_object_param_value">Нет</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Причина снятия</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                    <div class="cart_object_params_columns_item">
                        <div class="cart_object_params_columns_item_inner">
                            <div class="cart_object_param_name">Дата последнего прозвона</div>
                            <div class="cart_object_param_value">—</div>
                        </div>
                    </div>
                </div>
                <div class="cart_object_params_inserted mb-4">
                    <div class="cart_object_params_inserted_item">
                        <span class="cart_object_inserted_name">Комментарий для колл-центра</span>:
                        <span class="cart_object_param_value">
                            Статус квартира полная сумма в договоре обременение сбера 5.800тр
                        </span>
                    </div>
                </div>
            </div>

            <div class="cart_object_map" id="object_map">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.gallery {
    width: 100%;
    max-width: 620px;
    margin: 40px auto;

    &-slider {
        width: 100%;
        height: auto;
        margin: 0 0 10px 0;

        .swiper-slide {
            width: auto;
            height: 525px;

            img {
                display: block;
                width: auto;
                height: 100%;
                margin: 0 auto;
            }
        }
    }

    &-thumbs {
        width: 100%;
        padding: 0;
        overflow: hidden;
        border-radius: 5px;

        .swiper-slide {;
            width: 96px;
            height: 72px;
            outline: none;
            cursor: pointer;
            overflow: hidden;
            border-radius: 5px;
            opacity: .7;

            &-active {
                opacity: 1;
            }

            img {
                width: auto;
                height: 100%;
            }
        }
    }
}
</style>
