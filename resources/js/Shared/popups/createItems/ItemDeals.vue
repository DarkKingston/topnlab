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
                Тип продажи
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
        <div class="popup_main_row" v-if="auction.access">
            <div class="popup_main_cell" :class="{ required: auction.required}">
                Продажа по методике “Аукцион“
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="auction.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="auction.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="contractor.access">
            <div class="popup_main_cell" :class="{ required: contractor.required}">
                От подрядчика
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="contractor.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="contractor.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="mortgage.access">
            <div class="popup_main_cell" :class="{ required: mortgage.required}">
                Возможна ипотека
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="mortgage.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="mortgage.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="pay_commission.access">
            <div class="popup_main_cell" :class="{ required: pay_commission.required}">
                Собственник платит мне комиссию
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="pay_commission.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="pay_commission.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="give_commission.access">
            <div class="popup_main_cell" :class="{ required: give_commission.required}">
                Готов делиться комиссией со встречным агентом
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="give_commission.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="give_commission.selectedOption"
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
        <div class="popup_main_row" v-if="encumbrance.access">
            <div class="popup_main_cell" :class="{ required: encumbrance.required}">
                Наличие обременения
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="encumbrance.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="encumbrance.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="enforcement.access">
            <div class="popup_main_cell" :class="{ required: enforcement.required}">
                Наличие исполнительных производств
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="enforcement.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="enforcement.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="passport.access">
            <div class="popup_main_cell" :class="{ required: passport.required}">
                Наличие техпаспорта
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="passport.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="passport.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="surveying.access">
            <div class="popup_main_cell" :class="{ required: surveying.required}">
                Межевание
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="surveying.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="surveying.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="notarised_deal.access">
            <div class="popup_main_cell" :class="{ required: notarised_deal.required}">
                Нотариальная сделка
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="notarised_deal.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="notarised_deal.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="authorisations.access">
            <div class="popup_main_cell" :class="{ required: authorisations.required}">
                Наличие доверенности
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="authorisations.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="authorisations.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="part_summ.access">
            <div class="popup_main_cell" :class="{ required: part_summ.required}">
                Разбивка суммы
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="part_summ.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="part_summ.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="unregistered_buildings.access">
            <div class="popup_main_cell" :class="{ required: unregistered_buildings.required}">
                Наличие неоформленных построек
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="unregistered_buildings.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="unregistered_buildings.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="mom_capital.access">
            <div class="popup_main_cell" :class="{ required: mom_capital.required}">
                Был ли использован мат. капитал при покупке
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="mom_capital.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="mom_capital.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

    </div>
</template>
