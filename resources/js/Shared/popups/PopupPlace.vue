<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
    props: {

    },
    components: {

    },
    setup() {
        const country = ref('');
        const region = ref('');
        const city = ref('');

        const obRegion = ref({
            'Moldova': {
                "Chisinau": [
                    "Buiucani",
                    "Botanica",
                    "Durlesti",
                    "Ciocana",
                    "Rascanovca",
                    "Posta veche"
                ],
               "Balti": []
            },
            'Romania': {
                "Bucuresti": [],
                "Brasov": [],
                "Galati": []
            }
        });

        function removeActivePopup() {
            document.querySelector('.popup_place').classList.remove('active');
            document.querySelector('main').classList.remove('no_scroll');
        }

        function setCountry(countryValue){
            country.value = countryValue;
            region.value = '';
        }
        function reselectCountry(){
            country.value = '';
            region.value = '';
            city.value = '';
        }
        function setRegion(regionValue){
            region.value = regionValue;
            city.value = '';
        }

        return {
            removeActivePopup,
            setCountry,
            setRegion,
            country,
            region,
            obRegion,
            reselectCountry,
            city
        }
    }
}
</script>

<template>
    <div class="popup_modal">
        <div class="popup_create_header popup_bg_gray">
            <div class="popup_label">
                <div class="filter_search">
                    <input type="text" class="filter_search_inp" placeholder="Выберите регион или город">
                    <div class="filter_search_icon">
                        <svg data-v-097ba13b="" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="search"><path data-v-097ba13b="" fill="none" d="M0 0h24v24H0V0z"></path><path data-v-097ba13b="" d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                    </div>
                </div>
                <div class="popup_place_breadcrumbs" v-if="country.length > 0">
                    <div class="popup_place_breadcrumb_item" @click="reselectCountry">{{ country }}</div>
                    <div class="popup_place_delimiter" v-if="region">></div>
                    <div class="popup_place_breadcrumb_item" v-if="region">{{ region }}</div>
                    <div class="popup_place_delimiter" v-if="city">></div>
                    <div class="popup_place_delimiter" v-if="city">{{city}}</div>
                </div>
            </div>
            <div class="popup_close" @click="removeActivePopup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#3588F3" width="17.828" height="17.828"><path d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"/></svg>
            </div>
        </div>
        <div class="popup_create_main">
            <div class="popup_wrapper_country" v-if="country.length == 0">
                <div class="popup_country_item" @click="setCountry('Moldova')">Moldova</div>
                <div class="popup_country_item" @click="setCountry('Romania')">Romania</div>
            </div>
            <div class="popup_region_wrapper" v-if="country.length > 0">
                <div class="popup_region_item"
                     v-for="(cities, regionName) in obRegion[country]"
                     :key="regionName"
                     @click="setRegion(regionName)">
                    {{ regionName }}
                </div>
            </div>
        </div>
        <div class="popup_create_footer popup_bg_gray d-flex justify-center">
            <div class="popup_footer_actions d-flex align-center">
                <div class="re_button blue" @click="removeActivePopup">Показать</div>
                <div class="re_button" @click="removeActivePopup">Отмена</div>
            </div>
        </div>
    </div>
</template>

