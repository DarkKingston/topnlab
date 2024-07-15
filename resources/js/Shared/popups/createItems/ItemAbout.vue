<script>
import { ref } from 'vue';
import { useCreateObjectDeals } from "../../../store/computed";
import { storeToRefs } from 'pinia';
import VSelect from 'vue3-select';
export default {
    components: {
        VSelect
    },
    setup() {
        const createObjectContactStore = useCreateObjectDeals();
        const { type_sell, auction, contractor, mortgage, pay_commission, give_commission, online_show, code_db, encumbrance, enforcement, passport, surveying, notarised_deal, authorisations, part_summ, unregistered_buildings, mom_capital } = storeToRefs(createObjectContactStore);

        return {
            type_sell,
            auction,
            contractor,
            mortgage,
            pay_commission,
            give_commission,
            online_show,
            code_db,
            encumbrance,
            enforcement,
            passport,
            surveying,
            notarised_deal,
            authorisations,
            part_summ,
            unregistered_buildings,
            mom_capital,
        };
    }
}
</script>

<template>
    <div class="popup_main_item_content transition">
        <div class="popup_main_row" v-if="type_sell.access">
            <div class="popup_main_cell" :class="{ required: type_sell.required}">
                Тип объекта
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="type_sell.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="type_sell.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="type_sell.access">
            <div class="popup_main_cell" :class="{ required: type_sell.required}">
                Вид квартиры
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="type_sell.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="type_sell.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="type_sell.access">
            <div class="popup_main_cell" :class="{ required: type_sell.required}">
                Количество комнат
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="type_sell.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="type_sell.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="type_sell.access">
            <div class="popup_main_cell" :class="{ required: type_sell.required}">
                Этажей в квартире
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="type_sell.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="type_sell.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row d-flex align-center" v-if="online_show.access">
            <div class="popup_main_cell">

            </div>
            <div class="popup_main_cell d-flex justify-start ">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="onlineShow"
                    v-model="online_show.invaluevited"
                >
                <label for="onlineShow" style="gap: 10px">Возможен онлайн показ объекта</label>
            </div>
        </div>
        <div class="popup_main_row" v-if="code_db.access">
            <div class="popup_main_cell" :class="{required: code_db.required}">
                Отчество собственника
            </div>
            <div class="popup_main_cell">
                <input type="text" placeholder="Введите текст" class="input_main" :required="code_db.required" v-model="code_db.value">
            </div>
        </div>

    </div>
</template>
