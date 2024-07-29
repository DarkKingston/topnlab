<script>
import { ref, computed } from 'vue';
import {usePopupSettingsCell, useCreateObjectSettings} from "../../store/computed";
import {storeToRefs} from "pinia";
import draggable from "vuedraggable";
export default {
    components: {
        draggable
    },
    setup(){
        const popupSettingsCellStore = usePopupSettingsCell();
        const { popup_settings_cell } = storeToRefs(popupSettingsCellStore);
        const popupSettingsTableStore = useCreateObjectSettings();
        const { settings_table } = storeToRefs(popupSettingsTableStore);
        const searchQuery = ref('');

        function removeActivePopup(){
            popup_settings_cell.value = !popup_settings_cell.value
            document.querySelector('body').classList.remove('no_scroll_bar')
        }

        const filteredSettings = computed(() => {
            if (!settings_table.value) return [];
            return Object.values(settings_table.value).filter(setting =>
                setting.label.toLowerCase().includes(searchQuery.value.toLowerCase())
            ).sort((a, b) => a.order - b.order);
        });

        function changeOnDefaultValue(){
            if (!settings_table.value) return [];
            return Object.values(settings_table.value).map((item) => {
                item.value = item.default;
            })
        }

        return{
            removeActivePopup,
            searchQuery,
            filteredSettings,
            changeOnDefaultValue
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
                <input type="text" placeholder="Поиск по названию столбца" v-model="searchQuery">
                <div class="search_ico">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M21.15 19.74a12 12 0 1 0-1.41 1.41l10.55 10.56 1.41-1.41zM12 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10z" data-name="49-Search"/></svg>
                </div>
            </div>
        </div>

        <draggable v-model="filteredSettings" :options="{ handle: '.drag-handle' }" class="settings_cells_content">
            <template #item="{ element }" >
                <div class="popup_main_cell d-flex justify-start">
                    <input
                        class="checkbox"
                        type="checkbox"
                        v-model="element.value"
                        :id="element.label"
                    >
                    <label :for="element.label" style="gap: 10px">
                        <span class="drag-handle"></span> {{ element.label }}
                    </label>
                </div>
            </template>
        </draggable>

        <div class="footer_settings_cells">
            <div class="btn btn_blue" @click="changeOnDefaultValue">
                Настройки по умолчанию
            </div>
        </div>
    </div>
</template>

