<script>
import { ref, onMounted } from 'vue';
import { useCreateObjectAddress} from "../../../store/computed";
import { storeToRefs } from 'pinia';
import { ModelSelect } from "vue-search-select"
import VSelect from 'vue3-select';
import {loadYandexMapsAPI} from "../../../store/serviceMap";

export default {
    components: {
        VSelect,
        ModelSelect
    },
    setup() {
        const createObjectAddressStore = useCreateObjectAddress();
        const { region, area_region, township, street, number_house, enclosure, litera, structure, apartment, street_additional, number_house_additional, enclosure_additional, litera_additional, structure_additional, apartment_additional, name_township, km_city, coordinates_value } = storeToRefs(createObjectAddressStore);
        const stateAdditionalAddress = ref(false);
        const coordinates = ref([46.9622462, 28.8485565]);

        function showAdditionalAddress(){
            stateAdditionalAddress.value = !stateAdditionalAddress.value;
        }

        onMounted(() => {
            loadYandexMapsAPI()
                .then((ymaps) => {
                    initMap(ymaps);
                })
                .catch(error => console.log('Failed to load Yandex Maps', error));
        });



        function initMap(ymaps) {
            const myMap = new ymaps.Map('popup_address', {
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
        }

        return{
            region,
            area_region,
            township,
            street,
            number_house,
            enclosure,
            litera,
            structure,
            apartment,
            showAdditionalAddress,
            stateAdditionalAddress,
            street_additional,
            number_house_additional,
            enclosure_additional,
            litera_additional,
            structure_additional,
            apartment_additional,
            name_township,
            km_city
        }
    }
}
</script>

<template>
    <div class="popup_main_item_content transition">
        <div class="popup_main_row" v-if="region.access">
            <div class="popup_main_cell" :class="{ required: region.required}">
                Регион
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="region.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="region.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="area_region.access">
            <div class="popup_main_cell" :class="{ required: area_region.required}">
                Район региона
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="area_region.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="area_region.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="township.access">
            <div class="popup_main_cell" :class="{ required: township.required}">
                Населенный пункт
            </div>
            <div class="popup_main_cell">
                <model-select
                    :options="township.options"
                    v-model="township.selectedOption"
                    placeholder="Не выбрано"
                >
                </model-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="street.access">
            <div class="popup_main_cell" :class="{ required: street.required}">
                Улица
            </div>
            <div class="popup_main_cell">
                <model-select
                    :options="street.options"
                    v-model="street.selectedOption"
                    placeholder="Не выбрано"
                >
                </model-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="number_house.access && enclosure.access">
            <div class="popup_main_cell">

            </div>
            <div class="popup_main_cell d-flex align-center" style="gap: 20px; padding-bottom: 0;">
                <div class="popup_main_cell_item w100">
                    <div class="popup_main_cell" :class="{ required: number_house.required}" style="text-align: left; padding-bottom: 0;">
                        № дома
                    </div>
                    <div class="popup_main_cell" style="width: 100%;">
                        <input type="text" style="width: 100%;" placeholder="Укажите № дома" class="input_main" :required="number_house.required" v-model="number_house.value">
                    </div>
                </div>
                <div class="popup_main_cell_item w100">
                    <div class="popup_main_cell" :class="{ required: enclosure.required}" style="text-align: left; padding-bottom: 0;">
                        Корпус
                    </div>
                    <div class="popup_main_cell" style="width: 100%;">
                        <input type="text" style="width: 100%;" placeholder="Укажите корпус" class="input_main" :required="enclosure.required" v-model="enclosure.value">
                    </div>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="litera.access && structure.access && apartment.access">
            <div class="popup_main_cell">

            </div>
            <div class="popup_main_cell d-flex align-center" style="gap: 10px; padding-top: 0;">
                <div class="popup_main_cell_item three">
                    <div class="popup_main_cell" :class="{ required: litera.required}" style="text-align: left; padding-bottom: 0;">
                        Литера
                    </div>
                    <div class="popup_main_cell" style="width: 100%;">
                        <input type="text" style="width: -webkit-fill-available;" placeholder="Литера" class="input_main" :required="litera.required" v-model="litera.value">
                    </div>
                </div>
                <div class="popup_main_cell_item three">
                    <div class="popup_main_cell" :class="{ required: structure.required}" style="text-align: left; padding-bottom: 0;">
                        Строение
                    </div>
                    <div class="popup_main_cell" style="width: 100%;">
                        <input type="text" style="width: -webkit-fill-available;" placeholder="№ строения" class="input_main" :required="structure.required" v-model="structure.value">
                    </div>
                </div>
                <div class="popup_main_cell_item three">
                    <div class="popup_main_cell" :class="{ required: apartment.required}" style="text-align: left; padding-bottom: 0;">
                        Квартира
                    </div>
                    <div class="popup_main_cell" style="width: 100%;">
                        <input type="text" style="width: -webkit-fill-available;" placeholder="№ квартиры" class="input_main" :required="apartment.required" v-model="apartment.value">
                    </div>
                </div>
            </div>
        </div>

        <div class="popup_main_row">
            <div class="popup_main_cell">

            </div>
            <div class="popup_main_cell d-flex justify-start" style="padding-top: 0;">
                <div class="popup_btn_research" v-tippy.top="'Для того чтобы заработали пересечения по адресу необходимо заполнить обязательные поля `Количество комнат` и `Этаж`'">
                    Пересечений по адресу не найдены
                </div>
            </div>
        </div>
        <div class="popup_additional_address_wrapper">
            <div class="popup_additional_address" @click="showAdditionalAddress" :class="{active: stateAdditionalAddress}">
                Дополнительный адрес для рекламы
                <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg></span>
            </div>
        </div>
        <div class="tab_radio_info" :class="{active: stateAdditionalAddress}">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"></path></svg>
            <span> У вас нет ограничений по объему выгрузки объектов в рекламу </span>
        </div>
        <div class="popup_main_row" v-if="street_additional.access && stateAdditionalAddress">
            <div class="popup_main_cell" :class="{ required: street_additional.required}">
                Улица
            </div>
            <div class="popup_main_cell">
                <model-select
                    :options="street_additional.options"
                    v-model="street_additional.selectedOption"
                    placeholder="Не выбрано"
                >
                </model-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="number_house_additional.access && enclosure_additional.access && stateAdditionalAddress">
            <div class="popup_main_cell">

            </div>
            <div class="popup_main_cell d-flex align-center" style="gap: 20px; padding-bottom: 0;">
                <div class="popup_main_cell_item w100">
                    <div class="popup_main_cell" :class="{ required: number_house_additional.required}" style="text-align: left; padding-bottom: 0;">
                        № дома
                    </div>
                    <div class="popup_main_cell" style="width: 100%;">
                        <input type="text" :disabled="street_additional.selectedOption.value" :class="{disabled: !street_additional.selectedOption.value}" style="width: 100%;" placeholder="Укажите № дома" class="main_input" :required="number_house_additional.required" v-model="number_house_additional.value">
                    </div>
                </div>
                <div class="popup_main_cell_item w100">
                    <div class="popup_main_cell" :class="{ required: enclosure_additional.required}" style="text-align: left; padding-bottom: 0;">
                        Корпус
                    </div>
                    <div class="popup_main_cell" style="width: 100%;">
                        <input type="text" :disabled="street_additional.selectedOption.value" :class="{disabled: !street_additional.selectedOption.value}" style="width: 100%;" placeholder="Укажите корпус" class="main_input" :required="enclosure_additional.required" v-model="enclosure_additional.value">
                    </div>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="litera_additional.access && structure_additional.access && apartment_additional.access && stateAdditionalAddress">
            <div class="popup_main_cell">

            </div>
            <div class="popup_main_cell d-flex align-center" style="gap: 10px; padding-top: 0;">
                <div class="popup_main_cell_item three">
                    <div class="popup_main_cell" :class="{ required: litera_additional.required}" style="text-align: left; padding-bottom: 0;">
                        Литера
                    </div>
                    <div class="popup_main_cell" style="width: 100%;">
                        <input type="text" :disabled="street_additional.selectedOption.value" :class="{disabled: !street_additional.selectedOption.value}" style="width: -webkit-fill-available;" placeholder="Литера" class="main_input" :required="litera_additional.required" v-model="litera_additional.value">
                    </div>
                </div>
                <div class="popup_main_cell_item three">
                    <div class="popup_main_cell" :class="{ required: structure_additional.required}" style="text-align: left; padding-bottom: 0;">
                        Строение
                    </div>
                    <div class="popup_main_cell" style="width: 100%;">
                        <input type="text" :disabled="street_additional.selectedOption.value" :class="{disabled: !street_additional.selectedOption.value}" style="width: -webkit-fill-available;" placeholder="№ строения" class="main_input" :required="structure_additional.required" v-model="structure_additional.value">
                    </div>
                </div>
                <div class="popup_main_cell_item three">
                    <div class="popup_main_cell" :class="{ required: apartment_additional.required}" style="text-align: left; padding-bottom: 0;">
                        Квартира
                    </div>
                    <div class="popup_main_cell" style="width: 100%;">
                        <input type="text" :disabled="street_additional.selectedOption.value" :class="{disabled: !street_additional.selectedOption.value}" style="width: -webkit-fill-available;" placeholder="№ квартиры" class="main_input" :required="apartment_additional.required" v-model="apartment_additional.value">
                    </div>
                </div>
            </div>
        </div>

        <div class="blue_line" v-if="stateAdditionalAddress"></div>

        <div class="popup_main_row" v-if="name_township.access" style="margin-top: 1.25rem;">
            <div class="popup_main_cell" :class="{required: name_township.required}" style="padding-top: 0rem;">
                Название комплекса/поселка
            </div>
            <div class="popup_main_cell" style="padding-top: 0rem;">
                <input type="text" placeholder="Введите название" class="input_main" :required="name_township.required" v-model="name_township.value">
            </div>
        </div>
        <div class="popup_main_row" v-if="km_city.access">
            <div class="popup_main_cell" :class="{ required: km_city.required}">
                От города
            </div>
            <div class="popup_main_cell  d-flex align-center popup_main_input_with_label">
                <input type="text" :disabled="!km_city.access" :class="{disabled: !km_city.access}" placeholder="Введите площадь" class="main_input" :required="km_city.required" v-model="km_city.value">
                <div class="popup_main_input_label fz-14 fw-600">км</div>
            </div>
        </div>

        <div class="popup_line"></div>

        <div class="tab_radio_info active">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"></path></svg>
            <span> Если булавка на карте стоит не правильно, то вы можете перетащить его вручную. Но ВАЖНО понимать, что при выгрузке объекта в рекламу, будет передаваться в том числе и расположение булавки на карте, поэтому следует указывать точное расположение во избежании блокировки со стороны рекламных площадок. </span>
        </div>

        <div class="cart_object_map" id="popup_address">
        </div>

    </div>
</template>
