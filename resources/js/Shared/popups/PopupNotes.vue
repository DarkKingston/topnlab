<script>
import { ref, computed } from 'vue';
import {usePopupNotes, useCreateObjectNote} from "../../store/computed";
import {storeToRefs} from "pinia";
export default {
    components: {},
    props:{
        tab: Number
    },
    setup(){
        const noteVal = ref('');
        const popupNotesStore = usePopupNotes();
        const { popup_notes, tab } = storeToRefs(popupNotesStore);
        const popupObjectNotesStore = useCreateObjectNote();
        const { object_note } = storeToRefs(popupObjectNotesStore);

        function toggleTab(tabVal){
            tab.value = tabVal
        }

        function removeActivePopup(){
            popup_notes.value = false
        }

        function formatDate(date) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
            const year = date.getFullYear();
            return `${day}.${month}.${year}`;
        }

        const currentDate = new Date();
        const formattedDate = formatDate(currentDate);
        const yesterdayDate = new Date(currentDate);
        yesterdayDate.setDate(currentDate.getDate() - 1);
        const formattedYesterday = formatDate(yesterdayDate);

        function sendNotes(){
            if(tab.value == 1){
                object_note.value.personal.push(
                    {
                        date: formattedDate,
                        message: noteVal.value
                    }
                )
            }else if(tab.value == 2){
                object_note.value.public.push(
                    {
                        date: formattedDate,
                        message: noteVal.value
                    }
                )
            }
            noteVal.value = '';
        }

        const groupedNotesPrivate = computed(() => {
            const notes = tab.value === 1 ? object_note.value.personal : [];
            const grouped = {};

            notes.forEach(note => {
                const noteDate = note.date.split('T')[0];
                if (!grouped[noteDate]) {
                    grouped[noteDate] = [];
                }
                grouped[noteDate].push(note);
            });

            return Object.keys(grouped).map(date => {
                if (date === formattedDate) {
                    return { date: 'Сегодня', notes: grouped[date] };
                } else if (date === formattedYesterday) {
                    return { date: 'Вчера', notes: grouped[date] };
                } else {
                    return { date: date, notes: grouped[date] };
                }
            });
        });
        const groupedNotesPublic = computed(() => {
            const notes = tab.value === 2 ? object_note.value.public : [];
            const grouped = {};

            notes.forEach(note => {
                const noteDate = note.date.split('T')[0];
                if (!grouped[noteDate]) {
                    grouped[noteDate] = [];
                }
                grouped[noteDate].push(note);
            });

            return Object.keys(grouped).map(date => {
                if (date === formattedDate) {
                    return { date: 'Сегодня', notes: grouped[date] };
                } else if (date === formattedYesterday) {
                    return { date: 'Вчера', notes: grouped[date] };
                } else {
                    return { date: date, notes: grouped[date] };
                }
            });
        });

        return{
            toggleTab,
            removeActivePopup,
            tab,
            noteVal,
            sendNotes,
            groupedNotesPublic,
            groupedNotesPrivate
        }
    }
}
</script>

<template>
    <div style="height: 100%;display: flex;flex-direction: column;">
        <div class="popup_right_header d-flex align-center justify-between">
            <div class="popup_tabs d-flex align-center">
                <div class="popup_tab_item" :class="{active: tab==1}" @click="toggleTab(1)">
                    Личные примечания
                </div>
                <div class="popup_tab_item" :class="{active: tab==2}" @click="toggleTab(2)">
                    Публичные
                </div>
            </div>
            <div class="popup_close" @click="removeActivePopup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#3588F3" width="17.828" height="17.828"><path d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"/></svg>
            </div>
        </div>
        <div class="popup_notes_log" v-if="tab==1">
            <div class="notes_log_notification">
                <div class="notes_notification_text d-flex align-start">
                    <svg data-v-b3388f7a="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" style="width: 15px; height: 15px;"><g id="famous_places" data-v-b3388f7a=""><g id="Pyramid" data-v-b3388f7a=""></g> <g id="Colloseum" data-v-b3388f7a=""></g> <g id="Mount_Fuji" data-v-b3388f7a=""></g> <g id="Great_Wall_of_China" data-v-b3388f7a=""></g> <g id="Stonehenge" data-v-b3388f7a=""></g> <g id="Golden_Gate_Bridge" data-v-b3388f7a=""></g> <g id="Christ_the_Redeemer" data-v-b3388f7a=""></g> <g id="Statue_of_Liberty" data-v-b3388f7a=""></g> <g id="Taj_Mahal" data-v-b3388f7a=""></g> <g id="Eiffel_tower" data-v-b3388f7a=""></g></g> <g id="camping" data-v-b3388f7a=""><g id="mug" data-v-b3388f7a=""></g> <g id="hook" data-v-b3388f7a=""></g> <g id="Swiss_knife" data-v-b3388f7a=""></g> <g id="flashlight" data-v-b3388f7a=""></g> <g id="lantern" data-v-b3388f7a=""></g> <g id="campfire" data-v-b3388f7a=""></g> <g id="beanie" data-v-b3388f7a=""></g> <g id="rope" data-v-b3388f7a=""></g> <g id="boot" data-v-b3388f7a=""></g> <g id="axe" data-v-b3388f7a=""></g></g> <g id="hotel_1_" data-v-b3388f7a=""><g id="towel" data-v-b3388f7a=""></g> <g id="phone" data-v-b3388f7a=""></g> <g id="pool" data-v-b3388f7a=""></g> <g id="food_service" data-v-b3388f7a=""></g> <g id="wifi" data-v-b3388f7a=""><g data-v-b3388f7a=""><g data-v-b3388f7a=""><path fill="#3588F3" d="M158.361,432.796c-43.647,0-79.158-35.509-79.158-79.157s35.51-79.158,79.158-79.158      s79.158,35.511,79.158,79.158S202.008,432.796,158.361,432.796z" data-v-b3388f7a=""></path></g> <g data-v-b3388f7a=""><path fill="#3588F3" d="M415.044,371.392c-9.804,0-17.753-7.949-17.753-17.753c0-131.747-107.184-238.931-238.93-238.931      c-9.804,0-17.753-7.949-17.753-17.753s7.948-17.753,17.753-17.753c151.325,0,274.435,123.112,274.435,274.436      C432.796,363.443,424.848,371.392,415.044,371.392z" data-v-b3388f7a=""></path></g> <g data-v-b3388f7a=""><path fill="#3588F3" d="M355.869,371.392c-9.804,0-17.753-7.949-17.753-17.753c0-99.118-80.638-179.756-179.755-179.756      c-9.804,0-17.753-7.949-17.753-17.753c0-9.804,7.948-17.753,17.753-17.753c118.695,0,215.26,96.565,215.26,215.261      C373.621,363.443,365.673,371.392,355.869,371.392z" data-v-b3388f7a=""></path></g> <g data-v-b3388f7a=""><path fill="#3588F3" d="M296.694,371.392c-9.804,0-17.753-7.949-17.753-17.753c0-66.488-54.093-120.581-120.58-120.581      c-9.804,0-17.753-7.949-17.753-17.753c0-9.804,7.948-17.753,17.753-17.753c86.066,0,156.085,70.02,156.085,156.086      C314.446,363.443,306.497,371.392,296.694,371.392z" data-v-b3388f7a=""></path></g></g></g> <g id="bed" data-v-b3388f7a=""></g> <g id="door" data-v-b3388f7a=""></g> <g id="key" data-v-b3388f7a=""></g> <g id="do_not_disturb" data-v-b3388f7a=""></g> <g id="bell" data-v-b3388f7a=""></g></g> <g id="winter" data-v-b3388f7a=""><g id="snowman" data-v-b3388f7a=""></g> <g id="snow_mountain" data-v-b3388f7a=""></g> <g id="reindeer" data-v-b3388f7a=""></g> <g id="winter_tree" data-v-b3388f7a=""></g> <g id="lift" data-v-b3388f7a=""></g> <g id="beanie__x26__google" data-v-b3388f7a=""></g> <g id="ski" data-v-b3388f7a=""></g> <g id="snowboard" data-v-b3388f7a=""></g> <g id="snowboading" data-v-b3388f7a=""></g> <g id="skiing" data-v-b3388f7a=""></g></g> <g id="general_travelling" data-v-b3388f7a=""><g id="dinner_set" data-v-b3388f7a=""></g> <g id="polaroid" data-v-b3388f7a=""></g> <g id="camera" data-v-b3388f7a=""></g> <g id="calendar" data-v-b3388f7a=""></g> <g id="calendar_single" data-v-b3388f7a=""></g> <g id="shopping_bag" data-v-b3388f7a=""></g> <g id="watch" data-v-b3388f7a=""></g> <g id="alarm_clock" data-v-b3388f7a=""></g> <g id="credit_card" data-v-b3388f7a=""></g> <g id="road_sign" data-v-b3388f7a=""></g> <g id="hotel" data-v-b3388f7a=""></g> <g id="money" data-v-b3388f7a=""></g> <g id="sunglass" data-v-b3388f7a=""></g> <g id="cocktail" data-v-b3388f7a=""></g> <g id="compass" data-v-b3388f7a=""></g> <g id="tent" data-v-b3388f7a=""></g> <g id="backpack" data-v-b3388f7a=""></g> <g id="map" data-v-b3388f7a=""></g> <g id="ticket_1_" data-v-b3388f7a=""></g> <g id="passport" data-v-b3388f7a=""></g> <g id="luggage" data-v-b3388f7a=""></g> <g id="globe" data-v-b3388f7a=""></g> <g id="suitcase" data-v-b3388f7a=""></g></g> <g id="vehicles" data-v-b3388f7a=""><g id="trailer" data-v-b3388f7a=""></g> <g id="airplane" data-v-b3388f7a=""></g> <g id="yatch" data-v-b3388f7a=""></g> <g id="taxi" data-v-b3388f7a=""></g> <g id="hot_air_ballon" data-v-b3388f7a=""></g> <g id="bus" data-v-b3388f7a=""></g> <g id="train" data-v-b3388f7a=""></g></g> <g id="summer" data-v-b3388f7a=""><g id="postcard" data-v-b3388f7a=""></g> <g id="bikini" data-v-b3388f7a=""></g> <g id="flipflop" data-v-b3388f7a=""></g> <g id="plane_around_the_globe" data-v-b3388f7a=""></g> <g id="binocular" data-v-b3388f7a=""></g> <g id="beach_table" data-v-b3388f7a=""></g> <g id="sun_hat" data-v-b3388f7a=""></g> <g id="beach_bag" data-v-b3388f7a=""></g> <g id="sea__x26__wave" data-v-b3388f7a=""></g> <g id="beach" data-v-b3388f7a=""></g> <g id="beach_ball" data-v-b3388f7a=""></g> <g id="jetski" data-v-b3388f7a=""></g> <g id="sandcastle" data-v-b3388f7a=""></g> <g id="lifeguard_male" data-v-b3388f7a=""></g> <g id="lifeguard_female" data-v-b3388f7a=""></g> <g id="lighthouse" data-v-b3388f7a=""></g> <g id="hammok" data-v-b3388f7a=""></g> <g id="beach_chair__x26__umbrella" data-v-b3388f7a=""></g> <g id="lifeguard" data-v-b3388f7a=""></g> <g id="suncream" data-v-b3388f7a=""></g> <g id="starfish" data-v-b3388f7a=""></g> <g id="beach_bar" data-v-b3388f7a=""></g> <g id="bucket__x26__shovel" data-v-b3388f7a=""></g> <g id="palm_tree" data-v-b3388f7a=""></g> <g id="shark_warning" data-v-b3388f7a=""></g> <g id="surfboard" data-v-b3388f7a=""></g> <g id="swimming_trunks" data-v-b3388f7a=""></g> <g id="coconut_drink" data-v-b3388f7a=""></g> <g id="beach_chair__x26__towel" data-v-b3388f7a=""></g> <g id="coconut_tree" data-v-b3388f7a=""></g></g></svg>
                    Примечания, написанные в этом окне будут доступны только ВАМ
                </div>
            </div>
            <div v-for="group in groupedNotesPrivate" :key="group.date">
                <div class="notes_log_day">
                    {{ group.date }}
                </div>
                <div v-for="note in group.notes" :key="note.date + note.message" class="note_item">
                    <div class="note_item_content d-flex align-center">
                        <div class="note_item_account">РЯ</div>
                        <div class="note_item_message">
                            <div class="note_item_mess_label">Янис Руснак</div>
                            <div class="note_item_mess_value">{{note.message}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="popup_notes_log" v-if="tab==2">
            <div class="notes_log_notification">
                <div class="notes_notification_text d-flex align-start">
                    <svg data-v-b3388f7a="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" style="width: 15px; height: 15px;"><g id="famous_places" data-v-b3388f7a=""><g id="Pyramid" data-v-b3388f7a=""></g> <g id="Colloseum" data-v-b3388f7a=""></g> <g id="Mount_Fuji" data-v-b3388f7a=""></g> <g id="Great_Wall_of_China" data-v-b3388f7a=""></g> <g id="Stonehenge" data-v-b3388f7a=""></g> <g id="Golden_Gate_Bridge" data-v-b3388f7a=""></g> <g id="Christ_the_Redeemer" data-v-b3388f7a=""></g> <g id="Statue_of_Liberty" data-v-b3388f7a=""></g> <g id="Taj_Mahal" data-v-b3388f7a=""></g> <g id="Eiffel_tower" data-v-b3388f7a=""></g></g> <g id="camping" data-v-b3388f7a=""><g id="mug" data-v-b3388f7a=""></g> <g id="hook" data-v-b3388f7a=""></g> <g id="Swiss_knife" data-v-b3388f7a=""></g> <g id="flashlight" data-v-b3388f7a=""></g> <g id="lantern" data-v-b3388f7a=""></g> <g id="campfire" data-v-b3388f7a=""></g> <g id="beanie" data-v-b3388f7a=""></g> <g id="rope" data-v-b3388f7a=""></g> <g id="boot" data-v-b3388f7a=""></g> <g id="axe" data-v-b3388f7a=""></g></g> <g id="hotel_1_" data-v-b3388f7a=""><g id="towel" data-v-b3388f7a=""></g> <g id="phone" data-v-b3388f7a=""></g> <g id="pool" data-v-b3388f7a=""></g> <g id="food_service" data-v-b3388f7a=""></g> <g id="wifi" data-v-b3388f7a=""><g data-v-b3388f7a=""><g data-v-b3388f7a=""><path fill="#3588F3" d="M158.361,432.796c-43.647,0-79.158-35.509-79.158-79.157s35.51-79.158,79.158-79.158      s79.158,35.511,79.158,79.158S202.008,432.796,158.361,432.796z" data-v-b3388f7a=""></path></g> <g data-v-b3388f7a=""><path fill="#3588F3" d="M415.044,371.392c-9.804,0-17.753-7.949-17.753-17.753c0-131.747-107.184-238.931-238.93-238.931      c-9.804,0-17.753-7.949-17.753-17.753s7.948-17.753,17.753-17.753c151.325,0,274.435,123.112,274.435,274.436      C432.796,363.443,424.848,371.392,415.044,371.392z" data-v-b3388f7a=""></path></g> <g data-v-b3388f7a=""><path fill="#3588F3" d="M355.869,371.392c-9.804,0-17.753-7.949-17.753-17.753c0-99.118-80.638-179.756-179.755-179.756      c-9.804,0-17.753-7.949-17.753-17.753c0-9.804,7.948-17.753,17.753-17.753c118.695,0,215.26,96.565,215.26,215.261      C373.621,363.443,365.673,371.392,355.869,371.392z" data-v-b3388f7a=""></path></g> <g data-v-b3388f7a=""><path fill="#3588F3" d="M296.694,371.392c-9.804,0-17.753-7.949-17.753-17.753c0-66.488-54.093-120.581-120.58-120.581      c-9.804,0-17.753-7.949-17.753-17.753c0-9.804,7.948-17.753,17.753-17.753c86.066,0,156.085,70.02,156.085,156.086      C314.446,363.443,306.497,371.392,296.694,371.392z" data-v-b3388f7a=""></path></g></g></g> <g id="bed" data-v-b3388f7a=""></g> <g id="door" data-v-b3388f7a=""></g> <g id="key" data-v-b3388f7a=""></g> <g id="do_not_disturb" data-v-b3388f7a=""></g> <g id="bell" data-v-b3388f7a=""></g></g> <g id="winter" data-v-b3388f7a=""><g id="snowman" data-v-b3388f7a=""></g> <g id="snow_mountain" data-v-b3388f7a=""></g> <g id="reindeer" data-v-b3388f7a=""></g> <g id="winter_tree" data-v-b3388f7a=""></g> <g id="lift" data-v-b3388f7a=""></g> <g id="beanie__x26__google" data-v-b3388f7a=""></g> <g id="ski" data-v-b3388f7a=""></g> <g id="snowboard" data-v-b3388f7a=""></g> <g id="snowboading" data-v-b3388f7a=""></g> <g id="skiing" data-v-b3388f7a=""></g></g> <g id="general_travelling" data-v-b3388f7a=""><g id="dinner_set" data-v-b3388f7a=""></g> <g id="polaroid" data-v-b3388f7a=""></g> <g id="camera" data-v-b3388f7a=""></g> <g id="calendar" data-v-b3388f7a=""></g> <g id="calendar_single" data-v-b3388f7a=""></g> <g id="shopping_bag" data-v-b3388f7a=""></g> <g id="watch" data-v-b3388f7a=""></g> <g id="alarm_clock" data-v-b3388f7a=""></g> <g id="credit_card" data-v-b3388f7a=""></g> <g id="road_sign" data-v-b3388f7a=""></g> <g id="hotel" data-v-b3388f7a=""></g> <g id="money" data-v-b3388f7a=""></g> <g id="sunglass" data-v-b3388f7a=""></g> <g id="cocktail" data-v-b3388f7a=""></g> <g id="compass" data-v-b3388f7a=""></g> <g id="tent" data-v-b3388f7a=""></g> <g id="backpack" data-v-b3388f7a=""></g> <g id="map" data-v-b3388f7a=""></g> <g id="ticket_1_" data-v-b3388f7a=""></g> <g id="passport" data-v-b3388f7a=""></g> <g id="luggage" data-v-b3388f7a=""></g> <g id="globe" data-v-b3388f7a=""></g> <g id="suitcase" data-v-b3388f7a=""></g></g> <g id="vehicles" data-v-b3388f7a=""><g id="trailer" data-v-b3388f7a=""></g> <g id="airplane" data-v-b3388f7a=""></g> <g id="yatch" data-v-b3388f7a=""></g> <g id="taxi" data-v-b3388f7a=""></g> <g id="hot_air_ballon" data-v-b3388f7a=""></g> <g id="bus" data-v-b3388f7a=""></g> <g id="train" data-v-b3388f7a=""></g></g> <g id="summer" data-v-b3388f7a=""><g id="postcard" data-v-b3388f7a=""></g> <g id="bikini" data-v-b3388f7a=""></g> <g id="flipflop" data-v-b3388f7a=""></g> <g id="plane_around_the_globe" data-v-b3388f7a=""></g> <g id="binocular" data-v-b3388f7a=""></g> <g id="beach_table" data-v-b3388f7a=""></g> <g id="sun_hat" data-v-b3388f7a=""></g> <g id="beach_bag" data-v-b3388f7a=""></g> <g id="sea__x26__wave" data-v-b3388f7a=""></g> <g id="beach" data-v-b3388f7a=""></g> <g id="beach_ball" data-v-b3388f7a=""></g> <g id="jetski" data-v-b3388f7a=""></g> <g id="sandcastle" data-v-b3388f7a=""></g> <g id="lifeguard_male" data-v-b3388f7a=""></g> <g id="lifeguard_female" data-v-b3388f7a=""></g> <g id="lighthouse" data-v-b3388f7a=""></g> <g id="hammok" data-v-b3388f7a=""></g> <g id="beach_chair__x26__umbrella" data-v-b3388f7a=""></g> <g id="lifeguard" data-v-b3388f7a=""></g> <g id="suncream" data-v-b3388f7a=""></g> <g id="starfish" data-v-b3388f7a=""></g> <g id="beach_bar" data-v-b3388f7a=""></g> <g id="bucket__x26__shovel" data-v-b3388f7a=""></g> <g id="palm_tree" data-v-b3388f7a=""></g> <g id="shark_warning" data-v-b3388f7a=""></g> <g id="surfboard" data-v-b3388f7a=""></g> <g id="swimming_trunks" data-v-b3388f7a=""></g> <g id="coconut_drink" data-v-b3388f7a=""></g> <g id="beach_chair__x26__towel" data-v-b3388f7a=""></g> <g id="coconut_tree" data-v-b3388f7a=""></g></g></svg>
                    Примечания, написанные в этом окне будут доступны вашим коллегам
                </div>
            </div>
            <div v-for="group in groupedNotesPublic" :key="group.date">
                <div class="notes_log_day">
                    {{ group.date }}
                </div>
                <div v-for="note in group.notes" :key="note.date + note.message" class="note_item">
                    <div class="note_item_content d-flex align-center">
                        <div class="note_item_account">РЯ</div>
                        <div class="note_item_message">
                            <div class="note_item_mess_label">Янис Руснак</div>
                            <div class="note_item_mess_value">{{note.message}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer_send_note">
            <div class="send_note_area">
                <div class="notes_send_area_wrapper">
                    <input type="text" class="notes_send_input" placeholder="Введите текст..." v-model="noteVal">
                    <div class="notes_send_btn" @click="sendNotes">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-v-b3388f7a=""><path d="m20.447 11.105-16-8A1 1 0 0 0 3.152 4.53L7.82 12l-4.668 7.47a1 1 0 0 0 1.3 1.425l16-8a1 1 0 0 0 0-1.79zM6.731 17.517 9.554 13H12a1 1 0 0 0 0-2H9.554L6.731 6.483 17.764 12z" style="fill:#3588F3;" data-v-b3388f7a=""></path></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

