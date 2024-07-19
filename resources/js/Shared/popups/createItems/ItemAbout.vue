<script>
import { ref, computed, reactive, watch } from 'vue';
import { useCreateObjectAbout } from "../../../store/computed";
import { storeToRefs } from 'pinia';
import VSelect from 'vue3-select';
import { quillEditor } from 'vue3-quill'
export default {
    components: {
        VSelect,
        quillEditor
    },
    setup() {
        const createObjectAboutStore = useCreateObjectAbout();
        const { type_object, type_apartments, count_rooms, percentage, floor_in_apartment, floor, all_floor, litter, price, bargain, liquidity, market_price, average_price, total_area, rooms_area, living_area, kitchen_area, hallway_area, ceiling_height, ballcony, bathroom, heating, view_window, renovation, gas, cadastral_number, cadastral_number2, cadastral_number3, cadastral_number4, cadastral_number5, cadastral_number6, cadastral_number7, cadastral_number8, cadastral_number9, cadastral_number10, reclama, description } = storeToRefs(createObjectAboutStore);
        const state = reactive({
            content: '',
            _content: '',
            editorOption: {
                placeholder: 'Введите текст',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                    ]
                },
            },
            disabled: false
        })
        const charCount = computed(() => state._content.length);
        const charTitleCount = computed(() => reclama.value.value.length);
        const noMoreCadastral = ref(false);

        function limitedLength(){
            reclama.value.value = reclama.value.value.length <= 33 ? reclama.value.value : reclama.value.value.substring(0, 33);
        }

        const onEditorBlur = (quill) => {
            console.log('editor blur!', quill)
        }
        const onEditorFocus = (quill) => {
            console.log('editor focus!', quill)
        }
        const onEditorReady = (quill) => {
            console.log('editor ready!', quill)
        }
        const onEditorChange = ({ quill, html, text }) => {
            // console.log('editor change!', quill, html, text);
            // state._content = html;
            if (charCount.value >= description.value.max-1) {
                state._content=text;
                quill.deleteText(description.value.max-1, charCount.value);
            }else{
                state._content=text;
            }
        };

        function calculateArea() {
            const validInput = rooms_area.value.value.replace(/[^0-9+]/g, '');

            if (validInput !== rooms_area.value.value) {
                state.errorMessage = 'Можно вводить только цифры и знак "+"';
                rooms_area.value.value = validInput;
                return;
            } else {
                state.errorMessage = '';
            }

            const parts = validInput.split('+');
            const sum = parts.reduce((acc, part) => acc + (parseFloat(part) || 0), 0);

            living_area.value.value = sum;
        }

        function removeCadastral(type) {
            if(type==2){
                cadastral_number2.value.show = false
            }else if(type==3){
                cadastral_number3.value.show = false
            }else if(type==4){
                cadastral_number4.value.show = false
            }else if(type==5){
                cadastral_number5.value.show = false
            }else if(type==6){
                cadastral_number6.value.show = false
            }else if(type==7){
                cadastral_number7.value.show = false
            }else if(type==8){
                cadastral_number8.value.show = false
            }else if(type==9){
                cadastral_number9.value.show = false
            }else if(type==10){
                cadastral_number10.value.show = false
            }
            // `cadastral_number${type}`.value.show = false;
            noMoreCadastral.value = false;
        }

        function addCadastral() {
            if (!cadastral_number2.value.show) {
                cadastral_number2.value.show = true;
            } else if (!cadastral_number3.value.show) {
                cadastral_number3.value.show = true;
            } else if (!cadastral_number4.value.show) {
                cadastral_number4.value.show = true;
            } else if (!cadastral_number5.value.show) {
                cadastral_number5.value.show = true;
            } else if (!cadastral_number6.value.show) {
                cadastral_number6.value.show = true;
            } else if (!cadastral_number7.value.show) {
                cadastral_number7.value.show = true;
            } else if (!cadastral_number8.value.show) {
                cadastral_number8.value.show = true;
            } else if (!cadastral_number9.value.show) {
                cadastral_number9.value.show = true;
            } else if (!cadastral_number10.value.show) {
                cadastral_number10.value.show = true;
                noMoreCadastral.value = true;
            }
            if(
                cadastral_number2.value.show  &&
                cadastral_number3.value.show  &&
                cadastral_number4.value.show  &&
                cadastral_number5.value.show  &&
                cadastral_number6.value.show  &&
                cadastral_number7.value.show  &&
                cadastral_number8.value.show  &&
                cadastral_number9.value.show  &&
                cadastral_number10.value.show
            ){
                noMoreCadastral.value = true;
            }
        }


        return {
            type_object, type_apartments, count_rooms, percentage, floor_in_apartment, floor, all_floor, litter, price, bargain, liquidity, market_price, average_price, total_area, rooms_area, living_area, kitchen_area, hallway_area, ceiling_height, ballcony, bathroom, heating, view_window, renovation, gas, cadastral_number, cadastral_number2, cadastral_number3, cadastral_number4, cadastral_number5, cadastral_number6, cadastral_number7, cadastral_number8, cadastral_number9, cadastral_number10, reclama, description,
            state, onEditorBlur, onEditorFocus, onEditorReady, onEditorChange, charCount, calculateArea, noMoreCadastral,
            addCadastral,removeCadastral, charTitleCount, limitedLength
        };
    }
}
</script>

<template>
    <div class="popup_main_item_content transition">
        <div class="popup_main_row" v-if="type_object.access">
            <div class="popup_main_cell" :class="{ required: type_object.required}">
                Тип объекта
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="type_object.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="type_object.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="type_apartments.access">
            <div class="popup_main_cell" :class="{ required: type_apartments.required}">
                Вид квартиры
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="type_apartments.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="type_apartments.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="count_rooms.access">
            <div class="popup_main_cell" :class="{ required: count_rooms.required}">
                Количество комнат
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="count_rooms.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="count_rooms.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="percentage.access">
            <div class="popup_main_cell" :class="{ required: percentage.required}">
                Доля в квартире
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="percentage.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="percentage.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="floor_in_apartment.access">
            <div class="popup_main_cell" :class="{ required: floor_in_apartment.required}">
                Этажей в квартире
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="floor_in_apartment.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="floor_in_apartment.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="floor.access">
            <div class="popup_main_cell" :class="{ required: floor.required}">
                Этаж / всего этажей
            </div>
            <div class="popup_main_cell d-flex align-center" style="gap: 10px">
                <v-select
                    :options="floor.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="floor.selectedOption"
                    placeholder="Не выбрано"
                    style="width: 50%;"
                ></v-select>
                <v-select
                    :options="all_floor.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="all_floor.selectedOption"
                    placeholder="Не выбрано"
                    style="width: 50%;"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="litter.access">
            <div class="popup_main_cell" :class="{ required: litter.required}">
                Мусоропровод
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="litter.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="litter.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="price.access">
            <div class="popup_main_cell" :class="{ required: price.required}">
                Стоимость
            </div>
            <div class="popup_main_cell d-flex align-center popup_main_price">
                <input type="text" style="width: 80%;" placeholder="Введите стоимость" class="input_main" :required="price.required" v-model="price.value">
                <v-select
                    :options="price.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="price.selectedOption"
                    placeholder="Не выбрано"
                    style="width: 20%;"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row d-flex align-center" v-if="bargain.access">
            <div class="popup_main_cell">

            </div>
            <div class="popup_main_cell d-flex justify-start ">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="bargain"
                    v-model="bargain.value"
                >
                <label for="bargain" style="gap: 10px">Возможен торг</label>
            </div>
        </div>
        <div class="popup_main_row" v-if="liquidity.access">
            <div class="popup_main_cell" :class="{ required: liquidity.required}">
                Ликвидность объекта
            </div>
            <div class="popup_main_cell">
                 <v-select
                    :options="liquidity.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="liquidity.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="market_price.access">
            <div class="popup_main_cell" :class="{ required: market_price.required}">
                Рыночная цена объекта
            </div>
            <div class="popup_main_cell d-flex align-center popup_main_input_with_label">
                <input type="text" placeholder="Введите стоимость" class="input_main" :required="market_price.required" v-model="market_price.value">
                <div class="popup_main_input_label fz-14 fw-600">€</div>
            </div>
        </div>
        <div class="popup_main_row ">
            <div class="popup_main_cell" :class="{ required: average_price.required}">
                Среднерыночная цена (считается автоматически)
            </div>
            <div class="popup_main_cell  d-flex align-center popup_main_input_with_label">
                <input type="text" :disabled="!average_price.access" :class="{disabled: !average_price.access}" placeholder="Введите стоимость" class="main_input" :required="average_price.required" v-model="average_price.value">
                <div class="popup_main_input_label fz-14 fw-600">€</div>
            </div>
        </div>
        <div class="popup_main_row" v-if="total_area.access">
            <div class="popup_main_cell" :class="{ required: total_area.required}">
                Площадь общая
            </div>
            <div class="popup_main_cell  d-flex align-center popup_main_input_with_label">
                <input type="text" :disabled="!total_area.access" :class="{disabled: !total_area.access}" placeholder="Введите площадь" class="main_input" :required="total_area.required" v-model="total_area.value">
                <div class="popup_main_input_label fz-14 fw-600">м<sup>2</sup></div>
            </div>
        </div>
        <div class="popup_main_row" v-if="rooms_area.access">
            <div class="popup_main_cell" :class="{ required: total_area.required}">
                Площадь комнат
            </div>
            <div class="popup_main_cell  d-flex align-center popup_main_input_with_label" style="padding-bottom: 0;">
                <input type="text" @input="calculateArea" :disabled="!rooms_area.access" :class="{disabled: !rooms_area.access}" placeholder="20+12+23" class="main_input" :required="rooms_area.required" v-model="rooms_area.value">
                <div class="popup_main_input_label fz-14 fw-600">м<sup>2</sup></div>
            </div>
        </div>
        <div class="popup_main_row">
            <div class="popup_main_cell"></div>
            <div class="popup_main_cell  d-flex align-center popup_main_input_with_label popup_main_input_bottom_label fz-13 fw-400" style="padding-top: 0;">
                Через знак "+", если несколько
            </div>
        </div>
        <div class="popup_main_row" v-if="living_area.access">
            <div class="popup_main_cell" :class="{ required: living_area.required}">
                Площадь жилая
            </div>
            <div class="popup_main_cell  d-flex align-center popup_main_input_with_label">
                <input type="text" :disabled="!living_area.access" :class="{disabled: !living_area.access}" placeholder="Введите площадь" class="main_input" :required="living_area.required" v-model="living_area.value">
                <div class="popup_main_input_label fz-14 fw-600">м<sup>2</sup></div>
            </div>
        </div>
        <div class="popup_main_row" v-if="kitchen_area.access">
            <div class="popup_main_cell" :class="{ required: kitchen_area.required}">
                Площадь кухни
            </div>
            <div class="popup_main_cell  d-flex align-center popup_main_input_with_label">
                <input type="text" :disabled="!kitchen_area.access" :class="{disabled: !kitchen_area.access}" placeholder="Введите площадь" class="main_input" :required="kitchen_area.required" v-model="kitchen_area.value">
                <div class="popup_main_input_label fz-14 fw-600">м<sup>2</sup></div>
            </div>
        </div>
        <div class="popup_main_row" v-if="hallway_area.access">
            <div class="popup_main_cell" :class="{ required: hallway_area.required}">
                Площадь прихожей
            </div>
            <div class="popup_main_cell  d-flex align-center popup_main_input_with_label">
                <input type="text" :disabled="!hallway_area.access" :class="{disabled: !hallway_area.access}" placeholder="Введите площадь" class="main_input" :required="hallway_area.required" v-model="hallway_area.value">
                <div class="popup_main_input_label fz-14 fw-600">м<sup>2</sup></div>
            </div>
        </div>
        <div class="popup_main_row" v-if="ceiling_height.access">
            <div class="popup_main_cell" :class="{ required: ceiling_height.required}">
                Высота потолков
            </div>
            <div class="popup_main_cell  d-flex align-center popup_main_input_with_label">
                <input type="text" :disabled="!ceiling_height.access" :class="{disabled: !ceiling_height.access}" placeholder="Введите площадь" class="main_input" :required="ceiling_height.required" v-model="ceiling_height.value">
                <div class="popup_main_input_label fz-14 fw-600">м</div>
            </div>
        </div>
        <div class="popup_main_row" v-if="ballcony.access">
            <div class="popup_main_cell" :class="{ required: ballcony.required}">
                Балкон / лоджия
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="ballcony.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="ballcony.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="bathroom.access">
            <div class="popup_main_cell" :class="{ required: bathroom.required}">
                Санузел
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="bathroom.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="bathroom.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="heating.access">
            <div class="popup_main_cell" :class="{ required: heating.required}">
                Отопление
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="heating.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="heating.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="view_window.access">
            <div class="popup_main_cell" :class="{ required: view_window.required}">
                Вид из окон
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="view_window.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="view_window.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="renovation.access">
            <div class="popup_main_cell" :class="{ required: renovation.required}">
                Ремонт
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="renovation.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="renovation.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row" v-if="gas.access">
            <div class="popup_main_cell" :class="{ required: gas.required}">
                Газ
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="gas.options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="gas.selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_line"></div>
        <div class="popup_main_row" v-if="cadastral_number.access">
            <div class="popup_main_cell" :class="{ required: cadastral_number.required}">
                Кадастровый номер
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">

                <input type="text" name="email_main" v-model="cadastral_number.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email" @click="addCadastral" :class="{inactive: noMoreCadastral}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#00000099" d="M128 63.954c0 2.006-.797 3.821-2.136 5.127-1.308 1.337-3.125 2.133-5.166 2.133H71.302v49.356c0 4.012-3.284 7.292-7.302 7.292-2.009 0-3.827-.828-5.166-2.134-1.308-1.337-2.136-3.152-2.136-5.159V71.214H7.302c-4.05 0-7.302-3.248-7.302-7.26 0-2.006.797-3.853 2.136-5.159a7.279 7.279 0 0 1 5.166-2.134h49.395V7.306c0-4.012 3.284-7.26 7.302-7.26 2.009 0 3.827.828 5.166 2.133a7.238 7.238 0 0 1 2.136 5.127v49.356h49.395A7.276 7.276 0 0 1 128 63.954z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="cadastral_number2.access && cadastral_number2.show">
            <div class="popup_main_cell" :class="{ required: cadastral_number2.required}">
                Кадастровый номер №2
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">
                <input type="text" name="email_main" v-model="cadastral_number2.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email"  @click="removeCadastral('2')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="cadastral_number3.access && cadastral_number3.show">
            <div class="popup_main_cell" :class="{ required: cadastral_number3.required}">
                Кадастровый номер №3
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">
                <input type="text" name="email_main" v-model="cadastral_number3.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email"  @click="removeCadastral('3')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="cadastral_number4.access && cadastral_number4.show">
            <div class="popup_main_cell" :class="{ required: cadastral_number4.required}">
                Кадастровый номер №4
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">
                <input type="text" name="email_main" v-model="cadastral_number4.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email"  @click="removeCadastral('4')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="cadastral_number5.access && cadastral_number5.show">
            <div class="popup_main_cell" :class="{ required: cadastral_number5.required}">
                Кадастровый номер №5
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">
                <input type="text" name="email_main" v-model="cadastral_number5.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email"  @click="removeCadastral('5')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="cadastral_number6.access && cadastral_number6.show">
            <div class="popup_main_cell" :class="{ required: cadastral_number6.required}">
                Кадастровый номер №6
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">
                <input type="text" name="email_main" v-model="cadastral_number6.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email"  @click="removeCadastral('6')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="cadastral_number7.access && cadastral_number7.show">
            <div class="popup_main_cell" :class="{ required: cadastral_number7.required}">
                Кадастровый номер №7
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">
                <input type="text" name="email_main" v-model="cadastral_number7.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email"  @click="removeCadastral('7')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="cadastral_number8.access && cadastral_number8.show">
            <div class="popup_main_cell" :class="{ required: cadastral_number8.required}">
                Кадастровый номер №8
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">
                <input type="text" name="email_main" v-model="cadastral_number8.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email"  @click="removeCadastral('8')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="cadastral_number9.access && cadastral_number9.show">
            <div class="popup_main_cell" :class="{ required: cadastral_number9.required}">
                Кадастровый номер №9
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">
                <input type="text" name="email_main" v-model="cadastral_number9.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email"  @click="removeCadastral('9')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="cadastral_number10.access && cadastral_number10.show">
            <div class="popup_main_cell" :class="{ required: cadastral_number10.required}">
                Кадастровый номер №10
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">
                <input type="text" name="email_main" v-model="cadastral_number10.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email"  @click="removeCadastral('10')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="reclama.access">
            <div class="popup_main_cell" style="text-align: left" :class="{ required: reclama.required}">
                Рекламный заголовок
            </div>
            <div class="popup_main_cell d-flex align-center justify-end">
                <span :class="{max_limit: charTitleCount >= reclama.max}">{{ charTitleCount }}</span>/{{ reclama.max }}
            </div>
        </div>
        <div class="popup_main_row" v-if="reclama.access">
            <div class="popup_main_cell" style="width: 0; padding: 0;" :class="{ required: reclama.required}">

            </div>
            <div class="popup_main_cell  d-flex align-center" style="padding-top: 0;">
                <input type="text" @input="limitedLength" :disabled="!reclama.access" :class="{disabled: !reclama.access}" placeholder="Укажите рекламный загаловок для порталов" class="main_input" :required="reclama.required" v-model="reclama.value">
            </div>
        </div>
        <div class="modal__field-wrap">
            <label class="d-flex align-center justify-between">
                <div class="popup_main_cell" style="white-space: nowrap" :class="{ required: floor.required}">
                    Описание для рекламы и сайта
                </div>
                <div class="popup_main_cell">
                    <span :class="{max_limit: charCount >= description.max}">{{ charCount }}</span>/{{ description.max }}
                </div>
            </label>
            <quill-editor
                v-model:value="state.content"
                :options="state.editorOption"
                :disabled="state.disabled"
                @blur="onEditorBlur($event)"
                @focus="onEditorFocus($event)"
                @ready="onEditorReady($event)"
                @change="onEditorChange($event)"
            />
        </div>

    </div>
</template>
