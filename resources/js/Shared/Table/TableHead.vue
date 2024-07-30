<script setup>
import { ref } from 'vue';
import {useCreateObjectSettings, usePresentationStore} from "../../store/computed";
import {storeToRefs} from "pinia";

const presentationStore = usePresentationStore();
const popupSettingsTableStore = useCreateObjectSettings();
const { settings_table } = storeToRefs(popupSettingsTableStore);
const activeClass = ref(null);

function activeTab(event) {
    if (activeClass.value) {
        activeClass.value.classList.remove('active');
    }

    const target = event.currentTarget;
    if (target !== activeClass.value) {
        target.classList.add('active');
        activeClass.value = target;
    } else {
        activeClass.value = null;
    }
}
</script>

<template>
    <thead>
        <tr class="table_head">
            <th class="table_head_cell _check">
                <div class="d-flex align-center h100">
                    <input
                        class="checkbox"
                        type="checkbox"
                        id="all"
                    style="width: 0;">
                    <label for="all"></label>
                </div>
            </th>
            <th v-if="!presentationStore.presentation && settings_table.settings_responsible.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Ответственный
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_photo.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Фото
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                    </div>
                </div>
            </th>
            <th v-if="!presentationStore.presentation && settings_table.settings_contacts.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Контакты
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                        <div class="table_head_cell_content">
                            <div class="table_head_cell_content_item">
                                <div class="blue_circle circle"></div>
                                Сначала Холодные
                            </div>
                            <div class="table_head_cell_content_item">
                                <div class="gold_circle circle"></div>
                                Сначала Теплые
                            </div>
                            <div class="table_head_cell_content_item">
                                <div class="red_circle circle"></div>
                                Сначала Горячие
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th v-if="!presentationStore.presentation && settings_table.settings_adpopup.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Реклама
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                        <div class="table_head_cell_content">
                            <div class="table_head_cell_content_item">
                                По количеству обращении
                            </div>
                            <div class="table_head_cell_content_item">
                                По сроку экспозиции
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_type_objects.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Тип объекта
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                        <div class="table_head_cell_content">
                            <div class="table_head_cell_content_item">
                                Сначала Квартира
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала Комната
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала Дом/Дача/Таунхаус
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала Коммерция
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала Зем. Участок
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала Гараж
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_location.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Расположение
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                        <div class="table_head_cell_content">
                            <div class="table_head_cell_content_item">
                                Сортировка по Региону
                            </div>
                            <div class="table_head_cell_content_item">
                                Сортировка по Нас. пункту
                            </div>
                            <div class="table_head_cell_content_item">
                                Сортировка по Району
                            </div>
                            <div class="table_head_cell_content_item">
                                Сортировка по Улице
                            </div>
                            <div class="table_head_cell_content_item">
                                Сортировка по Дому
                            </div>
                            <div class="table_head_cell_content_item">
                                Сортировка по Шоссе
                            </div>
                            <div class="table_head_cell_content_item">
                                Сортировка по «от МКАД/КАД»
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_house.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Дом
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_metro.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_metro.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_price.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Цена
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                        <div class="table_head_cell_content">
                            <div class="table_head_cell_content_item">
                                Сначала Дешевые
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала Дорогие
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала с изменением цены
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_market_price.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Рыночная цена
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                        <div class="table_head_cell_content">
                            <div class="table_head_cell_content_item">
                                В начале ликвидные
                            </div>
                            <div class="table_head_cell_content_item">
                                В начале неликвид
                            </div>
                            <div class="table_head_cell_content_item">
                                В начале средней лик-ти
                            </div>
                            <div class="table_head_cell_content_item">
                                В начале не определенные
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_commission.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Комиссия
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                        <div class="table_head_cell_content">
                            <div class="table_head_cell_content_item">
                                Сортировка по Моей комиссии
                            </div>
                            <div class="table_head_cell_content_item">
                                Сортировка по ГДК
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_floor.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Этаж
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_type_house.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Тип Дома
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_areas.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Площади
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                        <div class="table_head_cell_content">
                            <div class="table_head_cell_content_item">
                                Сортировка по Общей
                            </div>
                            <div class="table_head_cell_content_item">
                                Сортировка по Жилой
                            </div>
                            <div class="table_head_cell_content_item">
                                Сортировка по Кухне
                            </div>
                            <div class="table_head_cell_content_item">
                                Сортировка по Земли
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th v-if="!presentationStore.presentation && settings_table.settings_tasks.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Задачи
                    </div>
                </div>
            </th>
            <th v-if="!presentationStore.presentation && settings_table.settings_type_contract.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Тип Договора
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_type_sell.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Тип продажи
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                        <div class="table_head_cell_content">
                            <div class="table_head_cell_content_item">
                                Сначала Альтернатива
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала Прямая продажа
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала Переуступка
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_complex.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Комплекс
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_design.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Интерьер
                    </div>
                </div>
            </th>
            <th v-if="!presentationStore.presentation && settings_table.settings_notes.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Примечания
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_description.value"  class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Описание
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_communication.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Коммуникации
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_additional_params.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Доп. параметры
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_look.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Вид раз. исп.
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_room.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Помещение
                    </div>
                </div>
            </th>
            <th v-if="!presentationStore.presentation && settings_table.settings_cadastral_number.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Кадастровый номер
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_publication.value" class="table_head_cell" @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Публикация
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                        <div class="table_head_cell_content">
                            <div class="table_head_cell_content_item">
                                Сортировка по МЛС
                            </div>
                            <div class="table_head_cell_content_item">
                                Сортировка по В фиде
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th v-if="!presentationStore.presentation && settings_table.settings_source.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Источник
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_status.value" class="table_head_cell" @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Статус
                    </div>
                    <div class="table_head_cell_sort">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" version="1.1" id="Capa_1" viewBox="0 0 96.154 96.154" xml:space="preserve" style="&#10;    width: 20px;&#10;    height: 20px;&#10;">
                            <g>
                                <path d="M0.561,20.971l45.951,57.605c0.76,0.951,2.367,0.951,3.127,0l45.956-57.609c0.547-0.689,0.709-1.716,0.414-2.61   c-0.061-0.187-0.129-0.33-0.186-0.437c-0.351-0.65-1.025-1.056-1.765-1.056H2.093c-0.736,0-1.414,0.405-1.762,1.056   c-0.059,0.109-0.127,0.253-0.184,0.426C-0.15,19.251,0.011,20.28,0.561,20.971z"/>
                            </g>
                          </svg>
                        <div class="table_head_cell_content">
                            <div class="table_head_cell_content_item">
                                Сначала <span class="table_head_cell_content_item_label color_green bg_green tt "> в работе</span>
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала <span class="table_head_cell_content_item_label color_green bg_green tt "> в рекламе</span>
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала <span class="table_head_cell_content_item_label color_orange bg_orange tt "> авансы</span>
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала <span class="table_head_cell_content_item_label color_blue bg_blue tt "> Сделки</span>
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала <span class="table_head_cell_content_item_label color_red bg_red tt "> Отказы</span>
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала <span class="table_head_cell_content_item_label color_green bg_green tt "> отложено</span>
                            </div>
                            <div class="table_head_cell_content_item">
                                Сначала <span class="table_head_cell_content_item_label color_gray bg_gray tt "> сбор данных</span>
                            </div>
                        </div>
                    </div>
                </div>
            </th>
            <th v-if="!presentationStore.presentation && settings_table.settings_comments.value" class="table_head_cell">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        Комментарий для КЦ
                    </div>
                </div>
            </th>

            <th v-if="settings_table.settings_have_renter.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_have_renter.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_form_ownership.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_form_ownership.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_area_construction.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_area_construction.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_object_permission.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_object_permission.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_code_db.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_code_db.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_roof.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_roof.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_lease_term.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_lease_term.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_type_ownership.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_type_ownership.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_reason_withdrawal.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_reason_withdrawal.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_subject_contract.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_subject_contract.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_exist_encumbrance.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_exist_encumbrance.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_building_block.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_building_block.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_ownership.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_ownership.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_basis.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_basis.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_encumbrance_bank.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_encumbrance_bank.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_type_layout.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_type_layout.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_invite_client_manager.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_invite_client_manager.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_area_apartment.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_area_apartment.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_summ_encumbrance.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_summ_encumbrance.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_exhaust.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_exhaust.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_type_object_right.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_type_object_right.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_exist_enforcement.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_exist_enforcement.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_water_supply.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_water_supply.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_rooms_in_sauna.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_rooms_in_sauna.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_share_ownership.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_share_ownership.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_partner.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_partner.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_amount_enforcement.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_amount_enforcement.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_catering.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_catering.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_pool.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_pool.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_leased.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_leased.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_land_plot.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_land_plot.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_name_lessee.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_name_lessee.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_profit_lessee.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_profit_lessee.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_area_place.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_area_place.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_facade.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_facade.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_warehouse_class.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_warehouse_class.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_type.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_type.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_corner.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_corner.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_floor_room.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_floor_room.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_number_boxes.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_number_boxes.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_length.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_length.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_coverage.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_coverage.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_pit.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_pit.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_width.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_width.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_approach.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_approach.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_lifts.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_lifts.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_rampa.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_rampa.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_showers.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_showers.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_fridge.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_fridge.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_crande_girder.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_crande_girder.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_crande_girder_tones.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_crande_girder_tones.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_gate_width.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_gate_width.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_bathroom.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_bathroom.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_gate_heigth.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_gate_heigth.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_type_gate.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_type_gate.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_office_available.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_office_available.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_number_windows.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_number_windows.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_number_buildings.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_number_buildings.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_area_office.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_area_office.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_area_buildings.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_area_buildings.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_additional_permited_use.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_additional_permited_use.label }}
                    </div>
                </div>
            </th>
            <th v-if="settings_table.settings_last_call.value" class="table_head_cell"  @click="activeTab($event)">
                <div class="d-flex align-center h100">
                    <div class="table_head_cell_title">
                        {{ settings_table.settings_last_call.label }}
                    </div>
                </div>
            </th>
        </tr>
    </thead>
</template>



<style lang="scss" scoped>
.checkbox {
    position: absolute;
    z-index: -1;
    opacity: 0;
    & + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
        cursor: pointer;
    }
    & + label::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 2px solid #D3D5E0;
        border-radius: 2px;
        margin-top: 3px;
        margin-bottom: 3px;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }
    &:checked + label::before {
        border-color: #127cda;
        background-color: #127cda;
        background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNjAsMjUwIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg4LjUzMzMzLDguNTMzMzMpIj48cGF0aCBkPSJNMjYuOTgwNDcsNS45OTAyM2MtMC4yNTk4LDAuMDA3NzQgLTAuNTA2MzgsMC4xMTYzMiAtMC42ODc1LDAuMzAyNzNsLTE1LjI5Mjk3LDE1LjI5Mjk3bC02LjI5Mjk3LC02LjI5Mjk3Yy0wLjI1MDgyLC0wLjI2MTI0IC0wLjYyMzI3LC0wLjM2NjQ3IC0wLjk3MzcxLC0wLjI3NTExYy0wLjM1MDQ0LDAuMDkxMzYgLTAuNjI0MTEsMC4zNjUwMyAtMC43MTU0NywwLjcxNTQ3Yy0wLjA5MTM2LDAuMzUwNDQgMC4wMTM4OCwwLjcyMjg5IDAuMjc1MTEsMC45NzM3MWw3LDdjMC4zOTA1MywwLjM5MDM3IDEuMDIzNTMsMC4zOTAzNyAxLjQxNDA2LDBsMTYsLTE2YzAuMjk1NzYsLTAuMjg3NDkgMC4zODQ2OSwtMC43MjcwNyAwLjIyMzkzLC0xLjEwNjkxYy0wLjE2MDc1LC0wLjM3OTg1IC0wLjUzODIxLC0wLjYyMjA0IC0wLjk1MDUsLTAuNjA5ODh6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+");
        background-size: 22px 16px;
    }
    &:not(:disabled):not(:checked) + label:hover::before {
        border-color: var(--primary-hover);
    }
    &:not(:disabled):active + label::before {
        background-color: var(--primary);
        border: 1px solid #ECEBED;
    }
    &:focus + label::before {
        box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
    }
    &:focus:not(:checked) + label::before {
        border-color: var(--primary);
    }
    &:disabled + label::before {
        background-color: #e9ecef;
        border: 1px solid #ECEBED;
    }
}

.table_head_cell{
    display: table-cell;
    z-index: 30;
    position: relative;
    padding: 3px 7px;
    vertical-align: middle;
    font-weight: 400;
    text-align: left;
    white-space: nowrap;
    background-color: #fff;
    border-width: 0 1px 1px 1px;
    border-color: #EBEDEF;
    border-style: solid;
    color: #636363;
    cursor: pointer;
    font-size: 13px;
}
.table_head_cell._check {
    position: sticky;
    left: 0;
    max-width: 35px;
    width: 100%;
    background-color: #fff;
    z-index: 40;
    border-left: none;
}
.table_head_cell.active .table_head_cell_content{
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    cursor: auto;
    outline: none;
    min-width: -moz-max-content;
    min-width: max-content;
    margin: 0em;
    padding: 0em 0em;
    background: #FFFFFF;
    font-size: 1em;
    text-shadow: none;
    text-align: left;
    box-shadow: 0 0 8px 1px rgba(80, 86, 141, 0.5);
    z-index: 11;
    will-change: transform, opacity;
    border-radius: 5px;
    overflow: hidden;
}
.table_head_cell.active .table_head_cell_content_item{
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    border: none;
    height: auto;
    text-align: left;
    border-top: none;
    line-height: 1em;
    color: rgba(0, 0, 0, 0.87);
    padding: 0.6rem 1.5rem;
    font-size: 14px;
    text-transform: none;
    font-weight: normal;
    box-shadow: none;
}

.table_head_cell_content_item .circle{
    width: 12px;
    height: 12px;
    font-size: 12px;
    cursor: default;
    border-radius: 50%;
    margin-right: 0.78571429rem;
}

.table_head_cell_content_item .blue_circle{
    background: #1eb0db;
}
.table_head_cell_content_item .gold_circle{
    background: #f9ba16;
}
.table_head_cell_content_item .red_circle{
    background: #e55360;
}

.table_head_cell_content_item:hover{
    background: rgba(0, 0, 0, 0.05);
    color: rgba(0, 0, 0, 0.95);
    z-index: 13;
}

.table_head_cell .table_head_cell_sort{
    display: flex;
    justify-content: center;
    width: 6px;
    height: 6px;
    fill: #000;
    margin-left: 5px;
    align-items: center;
}
.table_head_cell_content{
    display: none;
}
.table_head_cell_content_item_label{
    display: inline-block;
    font-size: 10px;
    font-weight: 700;
    line-height: 16px;
    white-space: nowrap;
    text-transform: uppercase;
    vertical-align: baseline;
    border-radius: 3px;
    padding: 1px 4px;
    margin-left: 4px;
}
</style>
