<script>
import { ref, onMounted } from 'vue';
import { useCreateObjectFields} from "../../../store/computed";
import { storeToRefs } from 'pinia';
import { ModelSelect } from "vue-search-select"
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import VSelect from 'vue3-select';
export default {
    components: {
        VSelect,
        flatPickr,
        ModelSelect
    },
    setup() {
        const createObjectFieldsStore = useCreateObjectFields();
        const { status, no_export, site, bd_close, comment_call_center, remove_status, call } = storeToRefs(createObjectFieldsStore);


        return{
            status,
            no_export,
            site,
            bd_close,
            comment_call_center,
            remove_status,
            call
        }
    }
}
</script>

<template>
    <div class="popup_main_item_content transition">
        <div class="popup_main_row" >
            <div class="popup_main_cell" :class="{ required: status.required}">
                Статус
            </div>
            <div class="popup_main_cell" v-tippy.top="'Значени поля СТАТУС можно изменять только через движение карточки по бизнес-процессу'">
                <v-select
                    :options="status.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="status.selectedOption"
                    :class="{disabled: !status.access}"
                    :disabled="!status.access"
                    placeholder="Сбор данных"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row d-flex align-center" v-if="no_export.access">
            <div class="popup_main_cell">

            </div>
            <div class="popup_main_cell d-flex justify-start ">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="no_export"
                    v-model="no_export.value"
                >
                <label for="no_export" style="gap: 10px">Не выгружать в МЛС</label>
            </div>
        </div>
        <div class="popup_main_row d-flex align-center">
            <div class="popup_main_cell">

            </div>
            <div class="popup_main_cell d-flex justify-start"  v-tippy.top="'Эту опцию можно включить только после того, как вы заполнитевсе обязательные поля в карточке'">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="site"
                    :class="{disabled: !site.access}"
                    :disabled="!site.access"
                    v-model="site.value"
                >
                <label for="site" style="gap: 10px">Выводить в фид / выгрузка на сайт</label>
            </div>
        </div>
        <div class="popup_main_row d-flex align-center" v-if="bd_close.access">
            <div class="popup_main_cell">

            </div>
            <div class="popup_main_cell d-flex justify-start ">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="bd_close"
                    v-model="bd_close.value"
                >
                <label for="bd_close" style="gap: 10px">Выгрузить в закрытую базу Cian.ru</label>
            </div>
        </div>

        <div class="popup_main_row" v-if="comment_call_center.access">
            <div class="popup_main_cell" :class="{ required: comment_call_center.required}">
                Комментарий для колл-центра
            </div>
            <div class="popup_main_cell">
                <textarea v-model="comment_call_center.value" :required="comment_call_center.required" placeholder="Введите коментарий"></textarea>
                <span class="comment_label">Комментарий, оставленный в этом поле, увидят операторы колл-центра</span>
            </div>
        </div>

        <div class="popup_main_row" v-if="remove_status.access">
            <div class="popup_main_cell" :class="{ required: remove_status.required}">
                Причина снятия
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="remove_status.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="remove_status.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="call.access">
            <div class="popup_main_cell" :class="{ required: call.required}">
                Дата последнего прозвона
            </div>
            <div class="popup_main_cell d-flex align-start">
                <flat-pickr class="popup_birthday fz-16" :required="call.required" v-model="call.value" placeholder="ДД.ММ.ГГГГ"/>
            </div>
        </div>

    </div>
</template>
