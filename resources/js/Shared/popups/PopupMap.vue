<script>
import { ref, onMounted } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import VSelect from 'vue3-select';

export default {
    components: {
        flatPickr,
        VSelect
    },
    setup() {
        const coordinates = ref([55.75, 37.62]); // Координаты центра карты (Москва)
        let myMap;
        let polygon;
        const drawing = ref(false); // флаг для отслеживания режима рисования

        function removeActivePopup() {
            document.querySelector('.popup_map').classList.remove('active');
            document.querySelector('main').classList.remove('no_scroll');
            clearMap();
        }

        onMounted(() => {
            loadYandexMapsAPI().then(() => {
                initMap();
                drawing.value = false;
            }).catch(error => console.log('Failed to load Yandex Maps', error));
        });

        function loadYandexMapsAPI() {
            return new Promise((resolve, reject) => {
                if (document.querySelector('script[src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=86a0173b-9f43-47a8-81cb-f70b1cf08265"]')) {
                    resolve();
                    return;
                }else{
                    const script = document.createElement('script');
                    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=86a0173b-9f43-47a8-81cb-f70b1cf08265';
                    script.onload = resolve;
                    script.onerror = reject;
                    document.head.appendChild(script);
                }
            });
        }

        function initMap() {
            ymaps.ready(() => {
                myMap = new ymaps.Map('big_map', {
                    center: coordinates.value,
                    zoom: 8,
                    controls: ['fullscreenControl', 'zoomControl']
                });
            });
        }

        function setupDrawButton() {
            if (!drawing.value) {
                drawing.value = true;
                startDrawing();
            }
        }

        function startDrawing() {
            const canvas = document.getElementById('draw-canvas');
            const ctx2d = canvas.getContext('2d');
            const mapElement = document.getElementById('map');
            let coordinates = [];

            const rect = mapElement.getBoundingClientRect();
            canvas.style.width = rect.width + 'px';
            canvas.style.height = rect.height + 'px';
            canvas.width = rect.width;
            canvas.height = rect.height;

            ctx2d.strokeStyle = '#0000ff';
            ctx2d.lineWidth = 4;
            canvas.style.opacity = 0.7;
            canvas.style.display = 'block';

            ctx2d.clearRect(0, 0, canvas.width, canvas.height);

            canvas.onmousedown = function (e) {
                coordinates = [[e.offsetX, e.offsetY]];
                canvas.onmousemove = function (e) {
                    const last = coordinates[coordinates.length - 1];
                    ctx2d.beginPath();
                    ctx2d.moveTo(last[0], last[1]);
                    ctx2d.lineTo(e.offsetX, e.offsetY);
                    ctx2d.stroke();
                    coordinates.push([e.offsetX, e.offsetY]);
                };
            };

            canvas.onmouseup = function () {
                canvas.onmousemove = null;
                canvas.style.display = 'none';
                drawing.value = false;

                const bounds = myMap.getBounds();
                const geoCoordinates = coordinates.map(([x, y]) => [
                    bounds[0][0] + (1 - y / canvas.height) * (bounds[1][0] - bounds[0][0]),
                    bounds[0][1] + (x / canvas.width) * (bounds[1][1] - bounds[0][1]),
                ]);

                // Создаем новый полигон и добавляем его на карту без удаления предыдущего
                const newPolygon = new ymaps.Polygon([geoCoordinates], {}, {
                    strokeColor: '#0000ff',
                    fillColor: '#8080ff',
                    strokeWidth: 4,
                    opacity: 0.7
                });
                myMap.geoObjects.add(newPolygon);
            };
        }

        function clearMap() {
            myMap.geoObjects.removeAll();
            drawing.value = false;
        }

        return {
            removeActivePopup,
            setupDrawButton,
            clearMap,
            drawing
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
        <div class="popup_create_main" style="position: relative;">
            <div class="popup_map_content" id="big_map" style="width: 100%; height: 100%;"></div>
            <div class="map_actions">
                <button @click="removeActivePopup"><svg _ngcontent-stc-c722="" class="svg-icon _dark-blue _size-30" viewBox="0 0 60.123 60.123"><path d="M57.124 51.893H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zM57.124 33.062H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6zM57.124 14.231H16.92a3 3 0 1 1 0-6h40.203a3 3 0 0 1 .001 6z"></path><circle cx="4.029" cy="11.463" r="4.029"></circle><circle cx="4.029" cy="30.062" r="4.029"></circle><circle cx="4.029" cy="48.661" r="4.029"></circle></svg></button>
                <button @click="setupDrawButton" :class="{drawing: drawing}"><svg _ngcontent-stc-c722="" class="svg-icon _dark-blue _size-30"><path d="M10.19.504c-.875-.04-1.458.43-2.05.978-.59.549-1.183 1.278-1.792 2.149-.86 1.23-1.738 2.756-2.557 4.39C2.791 8.128 2 8.973 2 10c0 .425.138.817.367 1.143-.856 2.092-1.539 4.213-1.85 6.097-.18 1.1-.242 2.12-.109 3.043.134.923.48 1.797 1.2 2.389 1.01.834 2.23 1.022 3.197.72.967-.301 1.706-.917 2.404-1.476.698-.56 1.353-1.075 1.922-1.318.569-.243.978-.296 1.642.043.242.123.637.799 1.057 1.675.21.439.437.907.81 1.338.375.431.986.827 1.696.846.746.019 1.394-.342 1.834-.754.44-.412.747-.881 1.033-1.314.572-.867 1.057-1.452 1.361-1.522.452-.103 1.062.13 1.9.56.84.431 1.856 1.05 3.151.936 1.746-.152 3-1.3 3.502-2.709.252-.705.368-1.468.387-2.261.018-.794-.06-1.62-.195-2.452-.27-1.662-.79-3.349-1.39-4.804-.561-1.365-1.404-2.958-1.586-3.452-.704-1.335-1.462-2.884-2.278-3.966-.511-.45-1.276-.614-1.871-.461-1.192.306-1.88 1.231-2.635 2.125-.756.893-1.507 1.837-2.092 2.312-.293.238-.525.334-.61.346-.083.012-.06.046-.228-.11-.686-.635-.779-1.821-1.037-3.22-.129-.7-.311-1.462-.855-2.123C12.183.97 11.28.554 10.189.504zM10.097 2.5c.704.032.91.189 1.086.402.175.214.323.627.431 1.215.217 1.176.227 3.01 1.645 4.324.514.477 1.242.714 1.877.621.634-.092 1.135-.408 1.582-.771.893-.725 1.644-1.73 2.357-2.574.713-.844 1.46-1.443 1.606-1.48.072-.02-.05-.063.052.027.102.09.336.311.689 1.067.353.756.839 1.71 1.3 2.562.254.492.958 2.11 1.347 3.048.547 1.326 1.026 2.894 1.264 4.364.238 1.47.214 2.84-.1 3.718-.313.879-.71 1.297-1.793 1.391-.494.043-1.195-.277-2.064-.723-.87-.446-1.958-1.026-3.258-.73-1.418.323-2.04 1.542-2.586 2.371-.273.414-.527.765-.73.955-.203.19-.28.216-.416.213-.094-.002-.098.004-.237-.156-.14-.161-.325-.489-.517-.89-.385-.805-.752-1.983-1.951-2.595a3.92 3.92 0 0 0-3.336-.101c-.95.405-1.703 1.05-2.387 1.597-.684.548-1.3.987-1.75 1.127-.45.14-.713.156-1.33-.353-.21-.173-.403-.515-.492-1.133-.09-.617-.056-1.463.103-2.43.27-1.636.898-3.615 1.697-5.586A2 2 0 0 0 6 10c0-.434-.145-.833-.383-1.162.773-1.533 1.596-2.956 2.37-4.06.556-.797 1.09-1.435 1.515-1.829.424-.394.748-.442.596-.449zM4 9c.558 0 1 .442 1 1s-.442 1-1 1-1-.442-1-1 .442-1 1-1z"></path></svg></button>
                <button @click="clearMap" class="cancel-draw"><svg _ngcontent-stc-c722="" class="svg-icon _dark-blue _size-30" viewBox="0 0 212.982 212.982"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"></path></svg></button>
            </div>
            <canvas id="draw-canvas" style="position: absolute; left: 0; top: 0; display: none;"></canvas>
        </div>
    </div>
</template>

