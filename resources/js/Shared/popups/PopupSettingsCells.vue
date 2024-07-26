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
        }

        return{
            removeActivePopup
        }
    }
}
</script>

<template>
    <div style="height: 100%;display: flex;flex-direction: column;">
        <div class="popup_right_header d-flex align-center justify-between">
            <div class="tab_radio_info active">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"></path></svg>
                <span>В этом окне вы можете настроить вывод столбцов в таблице, а так же изменить порядок их отображения.</span>
            </div>
            <div class="popup_close" @click="removeActivePopup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#3588F3" width="17.828" height="17.828"><path d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"/></svg>
            </div>
        </div>

        <div class="settings_cells_content">

        </div>

        <div class="footer_settings_cells">
            <div class="btn btn_blue">
                Настройки по умолчанию
            </div>
        </div>
    </div>
</template>

