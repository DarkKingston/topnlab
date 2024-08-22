<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
export default {
    props: {

    },
    components: {
        flatPickr
    },
    setup() {
        const contract_from_sign = ref(null);
        const contract_to_sign = ref(null);
        const commission = ref(false);

        function removeActivePopup() {
            document.querySelector('.popup_more_filter').classList.remove('active');
            document.querySelector('main').classList.remove('no_scroll');
        }

        return {
            removeActivePopup,
            contract_from_sign,
            commission,
            contract_to_sign,
        }
    }
}
</script>

<template>
    <div class="popup_modal">
        <div class="popup_create_header popup_bg_gray">
            <div class="popup_label">
                Больше фильтров
            </div>
            <div class="popup_close" @click="removeActivePopup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#3588F3" width="17.828" height="17.828"><path d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"/></svg>
            </div>
        </div>
        <div class="popup_create_main">
            <div class="popup_main_row d-flex align-center">
                <div class="popup_main_cell">
                    Готов делиться комиссией
                </div>
                <div class="popup_main_cell d-flex justify-start ml-4">
                    <input
                        class="checkbox"
                        type="checkbox"
                        id="birthdayNotify"
                        v-model="commission"
                    >
                    <label for="birthdayNotify" style="gap: 10px"></label>
                </div>
            </div>
            <div class="popup_main_row d-flex align-center">
                <div class="popup_main_cell">
                    Дата подписания договора
                </div>
                <div class="popup_main_cell d-flex justify-start">
                    <span class="popup_main_cell_box">
                        От
                        <flat-pickr class="popup_birthday fz-16" v-model="contract_from_sign" placeholder="ДД.ММ.ГГГГ"/>
                    </span>
                    <span class="popup_main_cell_box">
                        До
                        <flat-pickr class="popup_birthday fz-16" v-model="contract_to_sign" placeholder="ДД.ММ.ГГГГ"/>
                    </span>
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

