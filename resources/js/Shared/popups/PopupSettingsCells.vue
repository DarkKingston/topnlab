<script>
import { ref } from 'vue';
import {usePopupSettingsCell} from "../../store/computed";
import {storeToRefs} from "pinia";
export default {
    components: {},

    setup(){
        const popupSettingsCellStore = usePopupSettingsCell();
        const { popup_settings_cell } = storeToRefs(popupSettingsCellStore);
        function removeActivePopup(){
            popup_settings_cell.value = !popup_settings_cell.value
            document.querySelector('body').classList.remove('no_scroll_bar')
        }

        return{
            removeActivePopup
        }
    }
}
</script>

<template>
    <div style="height: 100%;display: flex;flex-direction: column;">
        <div class="settings_header">
            <div class="d-flex align-start justify-between">
                <div class="tab_radio_info active" style="padding: 15px 20px 15px 18px;">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"></path></svg>
                    <span>В этом окне вы можете настроить вывод столбцов в таблице, а так же изменить порядок их отображения.</span>
                </div>
                <div class="popup_close" @click="removeActivePopup" style="padding: 0 20px 0 2px;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#3588F3" width="17.828" height="17.828"><path d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"/></svg>
                </div>
            </div>
            <div class="settings_search">
                <input type="text" placeholder="Поиск по названию столбца">
                <div class="search_ico">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M21.15 19.74a12 12 0 1 0-1.41 1.41l10.55 10.56 1.41-1.41zM12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" data-name="49-Search"/></svg>
                </div>
            </div>
        </div>

        <div class="settings_cells_content">

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="progress_bar_stage"
                >
                <label for="progress_bar_stage" style="gap: 10px">Прогресс-бар этапов воронки</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_photo"
                >
                <label for="settings_photo" style="gap: 10px">Фото</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_responsible"
                >
                <label for="settings_responsible" style="gap: 10px">Ответственный</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_contacts"
                >
                <label for="settings_contacts" style="gap: 10px">Контакты</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_adpopup"
                >
                <label for="settings_adpopup" style="gap: 10px">Реклама</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_type_objects"
                >
                <label for="settings_type_objects" style="gap: 10px">Тип объекта</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_location"
                >
                <label for="settings_location" style="gap: 10px">Расположение</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_house"
                >
                <label for="settings_house" style="gap: 10px">Дом</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_metro"
                >
                <label for="settings_metro" style="gap: 10px">Метро</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_price"
                >
                <label for="settings_price" style="gap: 10px">Цена</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_market_price"
                >
                <label for="settings_market_price" style="gap: 10px">Рыночная цена</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_commission"
                >
                <label for="settings_commission" style="gap: 10px">Комиссия</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_floor"
                >
                <label for="settings_floor" style="gap: 10px">Этаж</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_type_house"
                >
                <label for="settings_type_house" style="gap: 10px">Тип дома</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_areas"
                >
                <label for="settings_areas" style="gap: 10px">Площади</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_tasks"
                >
                <label for="settings_tasks" style="gap: 10px">Задачи</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_type_contract"
                >
                <label for="settings_type_contract" style="gap: 10px">Тип договора</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_type_sell"
                >
                <label for="settings_type_sell" style="gap: 10px">Тип продажи</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_complex"
                >
                <label for="settings_complex" style="gap: 10px">Комплекс</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_design"
                >
                <label for="settings_design" style="gap: 10px">Интерьер</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_notes"
                >
                <label for="settings_notes" style="gap: 10px">Примечания</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_description"
                >
                <label for="settings_description" style="gap: 10px">Описание</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_communication"
                >
                <label for="settings_communication" style="gap: 10px">Коммуникации</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_additional_params"
                >
                <label for="settings_additional_params" style="gap: 10px">Доп. параметры</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_look"
                >
                <label for="settings_look" style="gap: 10px">Вид раз. исп.</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_room"
                >
                <label for="settings_room" style="gap: 10px">Помещение</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_cadastral_number"
                >
                <label for="settings_cadastral_number" style="gap: 10px">Кадастровый номер</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_publication"
                >
                <label for="settings_publication" style="gap: 10px">Публикация</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_source"
                >
                <label for="settings_source" style="gap: 10px">Источник</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_status"
                >
                <label for="settings_status" style="gap: 10px">Статус</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_comments"
                >
                <label for="settings_comments" style="gap: 10px">Комментарий для КЦ</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_have_renter"
                >
                <label for="settings_have_renter" style="gap: 10px">Наличие арендаторов</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_form_ownership"
                >
                <label for="settings_form_ownership" style="gap: 10px">Форма собственности</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_area_construction"
                >
                <label for="settings_area_construction" style="gap: 10px">Указать площадь з/у для строительства многоквартирного дома (первичный рынок)</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_object_permission"
                >
                <label for="settings_object_permission" style="gap: 10px">Объект права</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_code_db"
                >
                <label for="settings_code_db" style="gap: 10px">Код в БД</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_roof"
                >
                <label for="settings_roof" style="gap: 10px">Крыша</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_lease_term"
                >
                <label for="settings_lease_term" style="gap: 10px">Срок аренды</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_type_ownership"
                >
                <label for="settings_type_ownership" style="gap: 10px">Тип владения</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_reason_withdrawal"
                >
                <label for="settings_reason_withdrawal" style="gap: 10px">Причина снятия</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_subject_contract"
                >
                <label for="settings_subject_contract" style="gap: 10px">Предмет договора</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_exist_encumbrance"
                >
                <label for="settings_exist_encumbrance" style="gap: 10px">Наличие обременения</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_building_block"
                >
                <label for="settings_building_block" style="gap: 10px">Квартал постройки</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_ownership"
                >
                <label for="settings_ownership" style="gap: 10px">Право собственности</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_basis"
                >
                <label for="settings_basis" style="gap: 10px">На основании (чего...)</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_encumbrance_bank"
                >
                <label for="settings_encumbrance_bank" style="gap: 10px">Банк обременения</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_type_layout"
                >
                <label for="settings_type_layout" style="gap: 10px">Вид планировки</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_invite_client-manager"
                >
                <label for="settings_invite_client-manager" style="gap: 10px">Пригласил Клиент-менеджер</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_area_apartment"
                >
                <label for="settings_area_apartment" style="gap: 10px">Площадь з/у для строительства многоквартирного дома (кв.м)</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_summ_encumbrance"
                >
                <label for="settings_summ_encumbrance" style="gap: 10px">Сумма обременения</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_exhaust"
                >
                <label for="settings_exhaust" style="gap: 10px">Вытяжка</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_type_object_right"
                >
                <label for="settings_type_object_right" style="gap: 10px">Вид права на объект</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_exist_enforcement"
                >
                <label for="settings_exist_enforcement" style="gap: 10px">Наличие исполнительных производств</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_water_supply"
                >
                <label for="settings_water_supply" style="gap: 10px">Водоснабжение</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_rooms_in_sauna"
                >
                <label for="settings_rooms_in_sauna" style="gap: 10px">Кол-во номеров в сауне</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_share_ownership"
                >
                <label for="settings_share_ownership" style="gap: 10px">Доля собственности на объект (через /)</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_partner"
                >
                <label for="settings_partner" style="gap: 10px">Партнер</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_amount_enforcement"
                >
                <label for="settings_amount_enforcement" style="gap: 10px">Сумма по исполнительному производству</label>
            </div>

            <div class="popup_main_cell d-flex justify-start" style="width: unset; padding-left: 15px;">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="settings_catering"
                >
                <label for="settings_catering" style="gap: 10px">Общепит</label>
            </div>

        </div>

        <div class="footer_settings_cells">
            <div class="btn btn_blue">
                Настройки по умолчанию
            </div>
        </div>
    </div>
</template>

