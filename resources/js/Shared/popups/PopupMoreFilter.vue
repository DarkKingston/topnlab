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
        const contract_from_sign = ref(null);
        const contract_to_sign = ref(null);
        const commission = ref(false);
        const selectedTypeDocument = ref(null);
        const selectedTypeSell = ref(null);
        const selectedStatus = ref(null);
        const selectedState = ref(null);
        const selectedSource = ref(null);
        const from_city_km = ref(null);
        const import_id = ref(null);
        const selectedDirection = ref(null);
        const mortgage = ref(false);
        const number_contract = ref('');
        const overdue_contracts = ref(false);
        const type_document = ref([
            { id: 1, title: 'Возмездный договор' },
            { id: 2, title: 'Нет договора' },
            { id: 3, title: 'Устная договоренность' },
            { id: 4, title: 'Эксклюзивный' },
        ]);
        const type_sell = ref([
            { id: 1, title: 'Альтернатива (встречная)' },
            { id: 2, title: 'Свободная (прямая)' },
            { id: 3, title: 'Переуступка прав собственности (цессия)' }
        ]);
        const direction = ref([
            { id: 1, title: 'Направление 1' },
            { id: 2, title: 'Направление 2' },
            { id: 3, title: 'Направление 3' }
        ]);
        const state = ref([
            { id: 1, title: 'В рекламе' },
            { id: 2, title: 'Без рекламы' },
            { id: 3, title: 'Без коммиссии от собственника' },
            { id: 4, title: 'Не в МЛС' },
            { id: 5, title: 'Текущий этап просрочен' },
            { id: 6, title: 'Без активных задач' }
        ]);
        const sources = ref([
            { id: 1, title: '2 Гис (Агент)' },
            { id: 2, title: 'ABC Data' },
            { id: 3, title: 'CallTouch.Чат' },
            { id: 4, title: 'dombonus (Авто)' },
            { id: 5, title: 'Hr.Соц сеть' },
            { id: 6, title: 'Inst.Соц сеть' }
        ]);
        const statuses = ref([
            { id: 1, title: 'Сбор данных' },
            { id: 2, title: 'В рекламе' },
            { id: 3, title: 'В работе' },
            { id: 4, title: 'Аванс/Задаток' },
            { id: 5, title: 'Отложено' },
            { id: 6, title: 'Сделка' },
            { id: 7, title: 'Отказ' }
        ]);
        const last_update = ref({
            from: null,
            to: null
        })
        const created_at = ref({
            from: null,
            to: null
        })


        function removeActivePopup() {
            document.querySelector('.popup_more_filter').classList.remove('active');
            document.querySelector('main').classList.remove('no_scroll');
        }

        return {
            removeActivePopup,
            contract_from_sign,
            commission,
            contract_to_sign,
            selectedTypeDocument,
            type_document,
            overdue_contracts,
            number_contract,
            type_sell,
            selectedTypeSell,
            mortgage,
            selectedState,
            selectedSource,
            state,
            selectedDirection,
            direction,
            sources,
            statuses,
            selectedStatus,
            last_update,
            from_city_km,
            import_id,
            created_at
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
                        id="commission"
                        v-model="commission"
                    >
                    <label for="commission" style="gap: 10px"></label>
                </div>
            </div>
            <div class="popup_main_row">
                <div class="popup_main_cell">
                    Тип договора
                </div>
                <div class="popup_main_cell ml-4">
                    <v-select
                        :options="type_document"
                        label="title"
                        :reduce="document => document.id"
                        v-model="selectedTypeDocument"
                        placeholder="Не выбрано"
                    ></v-select>
                </div>
            </div>
            <div class="popup_main_row d-flex align-center">
                <div class="popup_main_cell">
                    Дата подписания договора
                </div>
                <div class="popup_main_cell d-flex justify-start ml-4">
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
            <div class="popup_main_row d-flex align-center">
                <div class="popup_main_cell">
                    Просроченные договоры
                </div>
                <div class="popup_main_cell d-flex justify-start ml-4">
                    <input
                        class="checkbox"
                        type="checkbox"
                        id="overdue_contracts"
                        v-model="overdue_contracts"
                    >
                    <label for="overdue_contracts" style="gap: 10px"></label>
                </div>
            </div>
            <div class="popup_main_row d-flex align-center">
                <div class="popup_main_cell">
                    № договора
                </div>
                <div class="popup_main_cell d-flex justify-start ml-4">
                    <input type="text" class="input_main" v-model="number_contract">
                </div>
            </div>
            <div class="popup_main_row">
                <div class="popup_main_cell">
                    Тип продажи
                </div>
                <div class="popup_main_cell ml-4">
                    <v-select
                        :options="type_sell"
                        label="title"
                        :reduce="sell => sell.id"
                        v-model="selectedTypeSell"
                        placeholder="Не выбрано"
                    ></v-select>
                </div>
            </div>
            <div class="popup_main_row d-flex align-center">
                <div class="popup_main_cell">
                    Только с ипотекой
                </div>
                <div class="popup_main_cell d-flex justify-start ml-4">
                    <input
                        class="checkbox"
                        type="checkbox"
                        id="mortgage"
                        v-model="mortgage"
                    >
                    <label for="mortgage" style="gap: 10px"></label>
                </div>
            </div>
            <div class="popup_main_row">
                <div class="popup_main_cell">
                    Состояния
                </div>
                <div class="popup_main_cell ml-4">
                    <v-select
                        :options="state"
                        label="title"
                        :reduce="item => item.id"
                        v-model="selectedState"
                        placeholder="Не выбрано"
                    ></v-select>
                </div>
            </div>
            <div class="popup_main_row">
                <div class="popup_main_cell">
                    Источник
                </div>
                <div class="popup_main_cell ml-4">
                    <v-select
                        :options="sources"
                        label="title"
                        :reduce="item => item.id"
                        v-model="selectedSource"
                        placeholder="Не выбрано"
                    ></v-select>
                </div>
            </div>
            <div class="popup_main_row">
                <div class="popup_main_cell">
                    Статус
                </div>
                <div class="popup_main_cell multiple ml-4">
                    <v-select
                        multiple
                        :options="statuses"
                        label="title"
                        :reduce="item => item.id"
                        v-model="selectedStatus"
                        placeholder="Не выбрано"
                    ></v-select>
                </div>
            </div>
            <div class="popup_main_row d-flex align-center">
                <div class="popup_main_cell">
                    Последнее изменение
                </div>
                <div class="popup_main_cell d-flex justify-start ml-4">
                    <span class="popup_main_cell_box">
                        От
                        <flat-pickr class="popup_birthday fz-16" v-model="last_update.from" placeholder="ДД.ММ.ГГГГ"/>
                    </span>
                    <span class="popup_main_cell_box">
                        До
                        <flat-pickr class="popup_birthday fz-16" v-model="last_update.to" placeholder="ДД.ММ.ГГГГ"/>
                    </span>
                </div>
            </div>
            <div class="popup_main_row d-flex align-center">
                <div class="popup_main_cell">
                    Дата создания
                </div>
                <div class="popup_main_cell d-flex justify-start ml-4">
                    <span class="popup_main_cell_box">
                        От
                        <flat-pickr class="popup_birthday fz-16" v-model="created_at.from" placeholder="ДД.ММ.ГГГГ"/>
                    </span>
                    <span class="popup_main_cell_box">
                        До
                        <flat-pickr class="popup_birthday fz-16" v-model="created_at.to" placeholder="ДД.ММ.ГГГГ"/>
                    </span>
                </div>
            </div>
            <div class="popup_main_row">
                <div class="popup_main_cell">
                    Направление/шоссе
                </div>
                <div class="popup_main_cell ml-4">
                    <v-select
                        :options="direction"
                        label="title"
                        :reduce="item => item.id"
                        v-model="selectedDirection"
                        placeholder="Не выбрано"
                    ></v-select>
                </div>
            </div>
            <div class="popup_main_row d-flex align-center">
                <div class="popup_main_cell">
                    От города не более, км
                </div>
                <div class="popup_main_cell d-flex justify-start ml-4">
                    <input type="text" class="input_main" v-model="from_city_km">
                </div>
            </div>
            <div class="popup_main_row d-flex align-center">
                <div class="popup_main_cell">
                    ID из фида для импорта
                </div>
                <div class="popup_main_cell d-flex justify-start ml-4">
                    <input type="text" class="input_main" v-model="import_id">
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

