<script>
import { ref } from 'vue';
import { useCreateObjectContact } from "../../../store/computed";
import { storeToRefs } from 'pinia';
import flatPickr from 'vue-flatpickr-component';
import 'flatpickr/dist/flatpickr.css';
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput';
import VSelect from 'vue3-select';
export default {
    components: {
        flatPickr,
        MazPhoneNumberInput,
        VSelect
    },
    setup() {
        const createObjectContactStore = useCreateObjectContact();
        const { name, last_name, parent_name, birthday, phone, email, partner, source } = storeToRefs(createObjectContactStore);
        const countryCode = ref('MD');
        const noMorePhone = ref(false);
        const noMoreEmail = ref(false);

        function addPhone() {
            if (!phone.value.second.show) {
                phone.value.second.show = true;
            } else if (!phone.value.third.show) {
                phone.value.third.show = true;
                noMorePhone.value = true;
            }
            if(phone.value.second.show && phone.value.third.show){
                noMorePhone.value = true;
            }
        }

        function removePhone(type) {
            phone.value[type].show = false;
            noMorePhone.value = false;
        }

        function removeEmail(type) {
            email.value[type].show = false;
            noMoreEmail.value = false;
        }

        function addEmail() {
            if (!email.value.second.show) {
                email.value.second.show = true;
            } else if (!email.value.third.show) {
                email.value.third.show = true;
                noMoreEmail.value = true;
            }
            if(email.value.second.show && email.value.third.show){
                noMoreEmail.value = true;
            }
        }

        const options = ref([
            { id: 1, title: '2 Гис (Агент)' },
            { id: 2, title: 'Авито (агент)' },
            { id: 3, title: 'Агрегатор (агент)' },
            { id: 4, title: 'Баннер (агент)' },
            { id: 5, title: 'Гугл карты (агент)' },
            { id: 6, title: 'Домклик (агент)' },
            { id: 7, title: 'Квиз (агент)' },
            { id: 8, title: 'Квиз 2. Сочи' },
            { id: 9, title: 'Квиз Ростов' },
            { id: 10, title: 'Квиз. Southmedia. Сочи' },
            { id: 11, title: 'Лидогенерация ЖК СОЧИ. Холодные' },
            { id: 12, title: 'Партнеры' },
            { id: 13, title: 'Пешеходы' },
            { id: 14, title: 'Повторное обращение' },
            { id: 15, title: 'Расклейка (агент)' },
            { id: 16, title: 'Рекомендация' },
            { id: 17, title: 'Соцсети (агент)' },
            { id: 18, title: 'Соцсети: Instagram (Агент)' },
            { id: 19, title: 'Соцсети: Telegram (Агент)' },
            { id: 20, title: 'Соцсети: VK (Агент)' },
            { id: 21, title: 'Сочи лидогенерация. Southmedia' },
            { id: 22, title: 'Сочи Холод' },
            { id: 23, title: 'Холодный звонок' },
            { id: 24, title: 'Циан (агент)' },
            { id: 25, title: 'Юла (Агент)' },
            { id: 26, title: 'Яндекс Карты (Агент)' }
        ]);
        const selectedOption = ref(null);


        return {
            name,
            last_name,
            parent_name,
            birthday,
            phone,
            email,
            countryCode,
            addPhone,
            removePhone,
            noMorePhone,
            addEmail,
            removeEmail,
            partner,
            noMoreEmail,
            selectedOption,
            source,
            options
        };
    }
}
</script>

<template>
    <div class="popup_main_item_content transition">
        <div class="popup_main_row" v-if="name.access">
            <div class="popup_main_cell" :class="{required: name.required}">
                Имя собственника
            </div>
            <div class="popup_main_cell">
                <input type="text" placeholder="Введите имя" class="input_main" :required="name.required" v-model="name.value">
            </div>
        </div>
        <div class="popup_main_row" v-if="last_name.access">
            <div class="popup_main_cell" :class="{required: last_name.required}">
                Фамилия собственника
            </div>
            <div class="popup_main_cell">
                <input type="text" placeholder="Введите фамилию" class="input_main" :required="last_name.required" v-model="last_name.value">
            </div>
        </div>
        <div class="popup_main_row" v-if="parent_name.access">
            <div class="popup_main_cell" :class="{required: parent_name.required}">
                Отчество собственника
            </div>
            <div class="popup_main_cell">
                <input type="text" placeholder="Введите отчество" class="input_main" :required="parent_name.required" v-model="parent_name.value">
            </div>
        </div>
        <div class="popup_main_row d-flex align-center" v-if="birthday.access">
            <div class="popup_main_cell" :class="{required: birthday.required}">
                Дата рождения
            </div>
            <div class="popup_main_cell d-flex justify-start">
                <flat-pickr class="popup_birthday fz-16" :required="birthday.required" v-model="birthday.value" placeholder="ДД.ММ.ГГГГ"/>
            </div>
            <div class="popup_main_cell d-flex justify-start ml-4">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="birthdayNotify"
                    v-model="birthday.notify"
                >
                <label for="birthdayNotify" style="gap: 10px">Уведомить о дне рождения</label>
            </div>
        </div>
        <div class="popup_main_row" v-if="phone.access">
            <div class="popup_main_cell" :class="{ required: phone.main.required}">
                Телефон
            </div>
            <div class="popup_main_cell d-flex justify-start align-center" style="gap: 5px">
                <MazPhoneNumberInput
                    v-model="phone.main.value"
                    v-model:country-code="countryCode"
                    show-code-on-list
                    country-locale="ro-RO"
                    :preferred-countries="['MD', 'RO', 'RU']"
                    @update="phone.main.value = $event"
                    :translations="{
                        countrySelector: {
                          placeholder: 'Код страны',
                          error: 'Выбрать страну',
                          searchPlaceholder: 'Найти страну',
                        },
                        phoneInput: {
                          placeholder: 'Номер телефона',
                          example: 'Пример:',
                        },
                    }"
                />
                <div class="popup_add_phone" @click="addPhone" :class="{inactive: noMorePhone}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#00000099" d="M128 63.954c0 2.006-.797 3.821-2.136 5.127-1.308 1.337-3.125 2.133-5.166 2.133H71.302v49.356c0 4.012-3.284 7.292-7.302 7.292-2.009 0-3.827-.828-5.166-2.134-1.308-1.337-2.136-3.152-2.136-5.159V71.214H7.302c-4.05 0-7.302-3.248-7.302-7.26 0-2.006.797-3.853 2.136-5.159a7.279 7.279 0 0 1 5.166-2.134h49.395V7.306c0-4.012 3.284-7.26 7.302-7.26 2.009 0 3.827.828 5.166 2.133a7.238 7.238 0 0 1 2.136 5.127v49.356h49.395A7.276 7.276 0 0 1 128 63.954z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="phone.access && phone.second.show">
            <div class="popup_main_cell" :class="{ required: phone.second.required}">
                Телефон №2
            </div>
            <div class="popup_main_cell d-flex justify-start align-center" style="gap: 5px">
                <MazPhoneNumberInput
                    v-model="phone.second.value"
                    v-model:country-code="countryCode"
                    show-code-on-list
                    country-locale="ru-RU"
                    :preferred-countries="['MD', 'RO', 'RU']"
                    @update="phone.second.value = $event"
                    :translations="{
                        countrySelector: {
                          placeholder: 'Код страны',
                          error: 'Выбрать страну',
                          searchPlaceholder: 'Найти страну',
                        },
                        phoneInput: {
                          placeholder: 'Номер телефона',
                          example: 'Пример:',
                        },
                    }"
                />
                <div class="popup_add_phone"  @click="removePhone('second')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="phone.access && phone.third.show">
            <div class="popup_main_cell" :class="{ required: phone.third.required}">
                Телефон №3
            </div>
            <div class="popup_main_cell d-flex justify-start align-center" style="gap: 5px">
                <MazPhoneNumberInput
                    v-model="phone.third.value"
                    v-model:country-code="countryCode"
                    show-code-on-list
                    country-locale="ru-RU"
                    :preferred-countries="['MD', 'RO', 'RU']"
                    @update="phone.third.value = $event"
                    :translations="{
                        countrySelector: {
                          placeholder: 'Код страны',
                          error: 'Выбрать страну',
                          searchPlaceholder: 'Найти страну',
                        },
                        phoneInput: {
                          placeholder: 'Номер телефона',
                          example: 'Пример:',
                        },
                    }"
                />
                <div class="popup_add_phone" @click="removePhone('third')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>

        <div class="popup_main_row" v-if="email.access">
            <div class="popup_main_cell" :class="{ required: email.main.required}">
                Email
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">

                <input type="email" name="email_main" v-model="email.main.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email" @click="addEmail" :class="{inactive: noMoreEmail}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#00000099" d="M128 63.954c0 2.006-.797 3.821-2.136 5.127-1.308 1.337-3.125 2.133-5.166 2.133H71.302v49.356c0 4.012-3.284 7.292-7.302 7.292-2.009 0-3.827-.828-5.166-2.134-1.308-1.337-2.136-3.152-2.136-5.159V71.214H7.302c-4.05 0-7.302-3.248-7.302-7.26 0-2.006.797-3.853 2.136-5.159a7.279 7.279 0 0 1 5.166-2.134h49.395V7.306c0-4.012 3.284-7.26 7.302-7.26 2.009 0 3.827.828 5.166 2.133a7.238 7.238 0 0 1 2.136 5.127v49.356h49.395A7.276 7.276 0 0 1 128 63.954z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="email.access && email.second.show">
            <div class="popup_main_cell" :class="{ required: email.second.required}">
                Email №2
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">
                <input type="email" name="email_main" v-model="email.second.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email"  @click="removeEmail('second')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row" v-if="email.access && email.third.show">
            <div class="popup_main_cell" :class="{ required: email.third.required}">
                Email №3
            </div>
            <div class="popup_main_cell d-flex justify-start align-center">
                <input type="email" name="email_main" v-model="email.third.value" class="main_input popup_input">
                <div class="popup_add_phone popup_add_email" @click="removeEmail('third')">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#303030" d="M125.61 71.238H2.39A2.39 2.39 0 0 1 0 68.848v-9.787a2.39 2.39 0 0 1 2.39-2.39h123.22a2.39 2.39 0 0 1 2.39 2.39v9.787a2.39 2.39 0 0 1-2.39 2.39z"/></svg>
                </div>
            </div>
        </div>
        <div class="popup_main_row">
            <div class="popup_main_cell"></div>
            <div class="popup_main_cell popup_search_contact_info fz-12">
                Пересечения по контактам не проверены
            </div>
        </div>

        <div class="popup_danger fz-13">
            Контакты доступны пользователям согласно правам доступа
        </div>

        <div class="popup_line"></div>
        <div class="popup_main_row" v-if="source.access">
            <div class="popup_main_cell" :class="{ required: source.required}">
                Источник
            </div>
            <div class="popup_main_cell">
                <v-select
                    :options="options"
                    label="title"
                    :reduce="option => option.id"
                    v-model="selectedOption"
                    placeholder="Не выбрано"
                ></v-select>
            </div>
        </div>
        <div class="popup_main_row d-flex align-center">
            <div class="popup_main_cell">

            </div>
            <div class="popup_main_cell d-flex justify-start ">
                <input
                    class="checkbox"
                    type="checkbox"
                    id="sourceInvited"
                    v-model="source.invited"
                >
                <label for="sourceInvited" style="gap: 10px">Пригласил Клиент-менеджер</label>
            </div>
        </div>

        <div class="popup_main_row">
            <div class="popup_main_cell">
                Партнер
            </div>
            <div class="popup_main_cell" v-tippy.top="`Не достаточно прав для заполнения поля`">
                <input type="text" name="partner_main" v-model="partner.value" :disabled="partner.access" placeholder="Введите текст" class="main_input w100" :class="{disabled: !partner.access}">
            </div>
        </div>

    </div>
</template>
