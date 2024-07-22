<script>
import { ref } from 'vue';
import {useCreateObjectNote, usePopupNotes} from "../../../store/computed";
import { storeToRefs } from 'pinia';
import { ModelSelect } from "vue-search-select"
import VSelect from 'vue3-select';
export default {
    components: {
        VSelect,
        ModelSelect
    },
    setup(){
        const createObjectNoteStore = useCreateObjectNote();
        const { object_note } = storeToRefs(createObjectNoteStore);

        const popupNotesStore = usePopupNotes();
        const { popup_notes, tab } = storeToRefs(popupNotesStore);
        function togglePopupNotes(tabValue){
            popup_notes.value = !popup_notes.value
            tab.value = tabValue
        }
        return {
            object_note,
            togglePopupNotes
        }
    }
}
</script>

<template>
    <div class="popup_main_item_content transition">

        <div class="popup_main_note">
            <div class="popup_main_note_title">
                Личные примечания <span> (Примечания скрыты от коллег)</span>
            </div>
            <div class="popup_note_add" @click="togglePopupNotes(1)" v-tippy.left="'Нажмите чтобы добавить ЛИЧНОЕ примечание или посмотреть историю ранее созданных (Личные примечания доступны только вам)'">
                <div class="popup_note_add_wrapper">
                    <div class="popup_note_add_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M128 63.954c0 2.006-.797 3.821-2.136 5.127-1.308 1.337-3.125 2.133-5.166 2.133H71.302v49.356c0 4.012-3.284 7.292-7.302 7.292-2.009 0-3.827-.828-5.166-2.134-1.308-1.337-2.136-3.152-2.136-5.159V71.214H7.302c-4.05 0-7.302-3.248-7.302-7.26 0-2.006.797-3.853 2.136-5.159a7.279 7.279 0 0 1 5.166-2.134h49.395V7.306c0-4.012 3.284-7.26 7.302-7.26 2.009 0 3.827.828 5.166 2.133a7.238 7.238 0 0 1 2.136 5.127v49.356h49.395A7.276 7.276 0 0 1 128 63.954z"/></svg>
                    </div>
                    Добавить личное примечание
                </div>
                <div v-if="object_note.personal.length > 0">
                    <div class="note_item_content d-flex align-center popup_note" v-for="note in object_note.personal" :key="note.date" >
                        <div class="note_item_account">РЯ</div>
                        <div class="note_item_message">
                            <div class="note_item_mess_label">Янис Руснак</div>
                            <div class="note_item_mess_value">{{note.message}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="popup_main_note">
            <div class="popup_main_note_title">
                Публичные примечания <span> (Примечания доступны вашим коллегам)</span>
            </div>
            <div class="popup_note_add" @click="togglePopupNotes(2)" v-tippy.left="'Нажмите чтобы добавить ПУБЛИЧНОЕ примечание или посмотреть историю ранее созданных (Примечание доступны сотрудникам вашей компании)'">
                <div class="popup_note_add_wrapper">
                    <div class="popup_note_add_btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M128 63.954c0 2.006-.797 3.821-2.136 5.127-1.308 1.337-3.125 2.133-5.166 2.133H71.302v49.356c0 4.012-3.284 7.292-7.302 7.292-2.009 0-3.827-.828-5.166-2.134-1.308-1.337-2.136-3.152-2.136-5.159V71.214H7.302c-4.05 0-7.302-3.248-7.302-7.26 0-2.006.797-3.853 2.136-5.159a7.279 7.279 0 0 1 5.166-2.134h49.395V7.306c0-4.012 3.284-7.26 7.302-7.26 2.009 0 3.827.828 5.166 2.133a7.238 7.238 0 0 1 2.136 5.127v49.356h49.395A7.276 7.276 0 0 1 128 63.954z"/></svg>
                    </div>
                    Добавить публичное примечание
                </div>
                <div v-if="object_note.public.length > 0">
                    <div class="note_item_content d-flex align-center popup_note" v-for="note in object_note.public" :key="note.date" >
                        <div class="note_item_account">РЯ</div>
                        <div class="note_item_message">
                            <div class="note_item_mess_label">Янис Руснак</div>
                            <div class="note_item_mess_value">{{note.message}}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
