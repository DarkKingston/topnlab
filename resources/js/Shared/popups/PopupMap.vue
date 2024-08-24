<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import VSelect from 'vue3-select';
export default {
    props: {

    },
    components: {
        flatPickr,
        VSelect
    },
    setup() {
        const coordinates = ref([46.9622462, 28.8485565]);

        function removeActivePopup() {
            document.querySelector('.popup_map').classList.remove('active');
            document.querySelector('main').classList.remove('no_scroll');
        }

        onMounted(() => {
            setTimeout(() => {
                if (!window.ymaps) {
                    loadYandexMapsAPI().then(initMap).catch(error => console.log('Failed to load Yandex Maps', error));
                } else {
                    initMap();
                }
            }, 10);
        });

        function loadYandexMapsAPI() {
            return new Promise((resolve, reject) => {
                // Проверка, загружен ли уже скрипт Yandex Maps
                if (document.querySelector('script[src="https://api-maps.yandex.ru/2.1/?lang=en_RU&apikey=86a0173b-9f43-47a8-81cb-f70b1cf08265"]')) {
                    resolve(); // Скрипт уже загружен, продолжаем
                    return;
                }

                const script = document.createElement('script');
                script.src = 'https://api-maps.yandex.ru/2.1/?lang=en_RU&apikey=86a0173b-9f43-47a8-81cb-f70b1cf08265';
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }


        function initMap() {
            ymaps.ready(() => {
                const myMap = new ymaps.Map('popup_map_objects', {
                    center: coordinates.value,
                    zoom: 9
                }, {
                    searchControlProvider: 'yandex#search'
                });

                const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                    '<div style="padding: 2px 5px; font-weight: bold; color: #000; background: #FFFFFF; border-radius: 3px;">$[properties.iconContent]</div>'
                );

                let placemark = new ymaps.Placemark(coordinates.value, {
                    hintContent: ''
                }, {
                    iconContentLayout: MyIconContentLayout,
                    iconLayout: 'default#imageWithContent',
                    iconImageHref: "https://www.svgrepo.com/show/255181/location-pin.svg",
                    iconImageSize: [40, 42],
                    iconImageOffset: [-5, -38]
                });

                myMap.geoObjects.add(placemark);


                // Add click event listener to map
                myMap.events.add('click', function (e) {
                    const coords = e.get('coords');
                    coordinates.value = coords;
                    coordinates_value.value.value = coords;

                    // Move placemark to the clicked location
                    placemark.geometry.setCoordinates(coords);
                });
            });
        }

        return {
            removeActivePopup,
            initMap,
            loadYandexMapsAPI
        }
    }
}
</script>

<template>
    <div class="popup_modal">
        <div class="popup_create_header popup_bg_gray">
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
            <div class="popup_close" @click="removeActivePopup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#3588F3" width="17.828" height="17.828"><path d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"/></svg>
            </div>
        </div>
        <div class="popup_create_main">
            <div class="popup_map_content" id="popup_map_objects"></div>
        </div>
    </div>
</template>

