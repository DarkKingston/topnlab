<script>
import { ref, onMounted } from 'vue';
import { useCreateObjectBuild} from "../../../store/computed";
import { storeToRefs } from 'pinia';
import { ModelSelect } from "vue-search-select"
import VSelect from 'vue3-select';
export default {
    components: {
        VSelect,
        ModelSelect
    },
    setup() {
        const createObjectBuildStore = useCreateObjectBuild();
        const { builder, complex, corpus, type_home, series_home, lift, new_house, year_build, year_rennovation, area_buildings, building_block } = storeToRefs(createObjectBuildStore);


        return{
            builder,
            complex,
            corpus,
            type_home,
            series_home,
            lift,
            new_house,
            year_build,
            year_rennovation,
            area_buildings,
            building_block
        }
    }
}
</script>

<template>
    <div class="popup_main_item_content transition">
        <div class="popup_main_row" v-if="builder.access">
            <div class="popup_main_cell" :class="{ required: builder.required}">
                Застройщик
            </div>
            <div class="popup_main_cell">
                <model-select
                    :options="builder.options"
                    v-model="builder.selectedOption"
                    placeholder="Не выбрано"
                >
                </model-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="complex.access">
            <div class="popup_main_cell" :class="{ required: complex.required}">
                Комплекс
            </div>
            <div class="popup_main_cell">
                <model-select
                    :options="complex.options"
                    v-model="complex.selectedOption"
                    placeholder="Не выбрано"
                >
                </model-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="corpus.access">
            <div class="popup_main_cell" :class="{ required: corpus.required}">
                Корпус
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="corpus.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="corpus.selectedOption"
                    :class="{disabled: !complex.selectedOption || !builder.selectedOption}"
                    :disabled="!complex.selectedOption || !builder.selectedOption"
                    class="select_box"
                    v-tippy.top="'Для того чтобы указать корпус, необзодимо сначала заполнить поля `Застройщик` и `Комплекс`'"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="type_home.access">
            <div class="popup_main_cell" :class="{ required: type_home.required}">
                Тип дома
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="type_home.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="type_home.selectedOption"
                    class="select_box"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="series_home.access">
            <div class="popup_main_cell" :class="{required: series_home.required}">
                Серия дома
            </div>
            <div class="popup_main_cell">
                <input type="text" placeholder="Укажите серию" class="input_main" :required="series_home.required" v-model="series_home.value">
            </div>
        </div>

        <div class="popup_main_row" v-if="lift.access">
            <div class="popup_main_cell" :class="{ required: lift.required}">
                Лифт
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="lift.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="lift.selectedOption"
                    class="select_box"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="new_house.access">
            <div class="popup_main_cell" :class="{ required: new_house.required}">
                Новый дом
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="new_house.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="new_house.selectedOption"
                    class="select_box"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="year_build.access">
            <div class="popup_main_cell" :class="{ required: year_build.required}">
                Год постройки
            </div>
            <div class="popup_main_cell  d-flex align-center popup_main_input_with_label">
                <input type="text" :disabled="!year_build.access" :class="{disabled: !year_build.access}" placeholder="Укажите год" class="main_input" :required="year_build.required" v-model="year_build.value">
                <div class="popup_main_input_label fz-14 fw-600">год</div>
            </div>
        </div>

        <div class="popup_main_row" v-if="year_rennovation.access">
            <div class="popup_main_cell" :class="{ required: year_rennovation.required}">
                Год кап. ремонта
            </div>
            <div class="popup_main_cell  d-flex align-center popup_main_input_with_label">
                <input type="text" :disabled="!year_rennovation.access" :class="{disabled: !year_rennovation.access}" placeholder="Укажите год" class="main_input" :required="year_rennovation.required" v-model="year_rennovation.value">
                <div class="popup_main_input_label fz-14 fw-600">год</div>
            </div>
        </div>

        <div class="popup_main_row" v-if="area_buildings.access">
            <div class="popup_main_cell" :class="{ required: area_buildings.required}">
                Указать площадь з/у для строительства многоквартирного дома (первичный рынок)
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="area_buildings.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="area_buildings.selectedOption"
                    class="select_box"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>

        <div class="popup_main_row" v-if="building_block.access">
            <div class="popup_main_cell" :class="{required: building_block.required}">
                Квартал постройки
            </div>
            <div class="popup_main_cell">
                <input type="text" placeholder="Введите текст" class="input_main" :required="building_block.required" v-model="building_block.value">
            </div>
        </div>

    </div>
</template>
