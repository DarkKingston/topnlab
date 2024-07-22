<script>
import { ref } from 'vue';
import { useCreateObjectContract} from "../../../store/computed";
import { storeToRefs } from 'pinia';
import { ModelSelect } from "vue-search-select"
import VSelect from 'vue3-select';
export default {
    components: {
        VSelect,
        ModelSelect
    },
    setup() {
        const createObjectContractStore = useCreateObjectContract();
        const { contract_service, type_property, subject_contract, object_right, basis, type_right, right_land, individual_mentioned, primary, deffered_payments, indefinite_contract, fix_price } = storeToRefs(createObjectContractStore);


        return{
            contract_service,
            type_property,
            subject_contract,
            object_right,
            basis,
            type_right,
            right_land,
            individual_mentioned,
            primary,
            deffered_payments,
            indefinite_contract,
            fix_price
        }
    }
}
</script>

<template>
    <div class="popup_main_item_content transition">

        <div class="popup_main_row" v-if="contract_service.access">
            <div class="popup_main_cell" :class="{ required: contract_service.required}">
                Договор на оказание услуг
            </div>
            <div class="popup_main_cell">
                <v-select :options="contract_service.options" label="title">
                    <template #option="{ title, additional }">
                        <h3 style="margin: 0; font-size: 15px;">{{ title }}</h3>
                        <em style="white-space: break-spaces; font-size: 13px;">{{ additional.subtitle }}</em>
                    </template>
                </v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="type_property.access">
            <div class="popup_main_cell" :class="{ required: type_property.required}">
                Вид собственности
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="type_property.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="type_property.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="object_right.access">
            <div class="popup_main_cell" :class="{ required: object_right.required}">
                Предмет договора
            </div>
            <div class="popup_main_cell">
                <textarea v-model="object_right.value" :required="object_right.required"></textarea>
            </div>
        </div>

        <div class="popup_main_row" v-if="subject_contract.access">
            <div class="popup_main_cell" :class="{ required: subject_contract.required}">
                Предмет договора
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="subject_contract.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="subject_contract.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="basis.access">
            <div class="popup_main_cell" :class="{ required: basis.required}">
                На основании (чего...)
            </div>
            <div class="popup_main_cell">
                <textarea v-model="basis.value" :required="basis.required"></textarea>
            </div>
        </div>

        <div class="popup_main_row" v-if="type_right.access">
            <div class="popup_main_cell" :class="{ required: type_right.required}">
                Вид права на объект
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="type_right.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="type_right.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="right_land.access">
            <div class="popup_main_cell" :class="{ required: right_land.required}">
                Вид права на з/у
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="right_land.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="right_land.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="individual_mentioned.access">
            <div class="popup_main_cell" :class="{ required: individual_mentioned.required}">
                Кол-во физлиц, упомянутых в договоре
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="individual_mentioned.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="individual_mentioned.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="primary.access">
            <div class="popup_main_cell" :class="{ required: primary.required}">
                Первичка
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="primary.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="primary.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="deffered_payments.access">
            <div class="popup_main_cell" :class="{ required: deffered_payments.required}">
                Отсрочка платежа
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="deffered_payments.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="deffered_payments.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="indefinite_contract.access">
            <div class="popup_main_cell" :class="{ required: indefinite_contract.required}">
                Бессрочный договор (если да, поставьте дату окончания договора 2036 г.)
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="indefinite_contract.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="indefinite_contract.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="fix_price.access">
            <div class="popup_main_cell" :class="{ required: fix_price.required}">
                Фиксированная сумма в договоре (если да, комиссия должна быть указана в руб.)
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="fix_price.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="fix_price.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>


    </div>
</template>
