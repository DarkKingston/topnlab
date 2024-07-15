import { defineStore } from 'pinia';
import {ref} from "vue";

export const usePresentationStore = defineStore('presentation', {
    state: () => ({
        presentation: false
    }),
});

export const useObjectTab = defineStore('object_tab', {
    state: () => ({
        tab: +localStorage.getItem('object_tab') || 0
    }),
});

export const useCreateObjectContact = defineStore('create_object_contact', {
    state: () => ({
        name: {
            value: '',
            required: true,
            access: true
        },
        last_name: {
            value: '',
            required: false,
            access: true
        },
        parent_name: {
            value: '',
            required: false,
            access: true
        },
        birthday:{
            value: '',
            required: false,
            notify: false,
            access: true
        },
        phone: {
            main:{
                value: '',
                required: true
            },
            second: {
                value: '',
                required: false,
                show: false
            },
            third: {
                value: '',
                required: false,
                show: false
            },
            access: true
        },
        email: {
            access: true,
            main:{
                value: '',
                required: false
            },
            second: {
                value: '',
                required: false,
                show: false
            },
            third: {
                value: '',
                required: false,
                show: false
            }
        },
        source: {
            value: '',
            required: true,
            invited: false,
            access: true
        },
        partner: {
            value: '',
            access: false,
        }
    }),
});


export const useCreateObjectDeals = defineStore('create_object_deals', {
    state: () => ({
        type_sell: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Альтернатива (встречная)' },
                { id: 2, title: 'Свободная (прямая)' },
                { id: 3, title: 'Переуступка прав собственности (цессия)' },
            ],
            selectedOption: ''
        },
        auction: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        contractor: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        mortgage: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        pay_commission: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        give_commission: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        online_show: {
            value: '',
            required: false,
            access: true
        },
        code_db: {
            value: '',
            required: false,
            access: true
        },
        encumbrance: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        enforcement: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        passport: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        surveying: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        notarised_deal: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        authorisations: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        part_summ: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        unregistered_buildings: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        mom_capital: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        }
    }),
});

export const useCreateObjectAbout = defineStore('create_object_about', {
    state: () => ({
        type_object: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Квартира' },
                { id: 2, title: 'Дом/Дача/Таунхаус' },
                { id: 3, title: 'Коммерция' },
                { id: 4, title: 'Гараж' },
            ],
            selectedOption: ''
        },
        type_apartments: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Стандартная' },
                { id: 2, title: 'Апартаменты' },
                { id: 3, title: 'Пентхаус' },
            ],
            selectedOption: ''
        },
        count_rooms: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: '1 ком.' },
                { id: 2, title: '2 ком.' },
                { id: 3, title: '3 ком.' },
                { id: 4, title: '4 ком.' },
                { id: 5, title: '5 ком.' },
                { id: 6, title: '6 ком.' },
                { id: 7, title: '7 ком.' },
                { id: 8, title: '8 ком.' },
                { id: 9, title: '9 ком.' },
                { id: 10, title: '10 ком.' },
                { id: 11, title: '11 ком.' },
                { id: 12, title: '12 ком.' },
                { id: 13, title: '13 ком.' },
                { id: 14, title: '14 ком.' },
                { id: 15, title: '15 ком.' },
                { id: 16, title: '16 ком.' },
                { id: 17, title: '17 ком.' },
                { id: 18, title: '18 ком.' },
                { id: 19, title: '19 ком.' },
                { id: 20, title: '20+ ком.' },
                { id: 21, title: 'Свободная планировка' },
            ],
            selectedOption: ''
        },
        floor: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: '-2 ' },
                { id: 2, title: '-1' },
                { id: 3, title: 'Подвал' },
                { id: 4, title: 'Цоколь' },
                { id: 5, title: 'Мансарда' },
                { id: 6, title: '1' },
                { id: 7, title: '2' },
                { id: 8, title: '3' },
                { id: 9, title: '4' },
                { id: 10, title: '5' },
                { id: 11, title: '6' },
                { id: 12, title: '7' },
                { id: 13, title: '8' },
                { id: 14, title: '9' }
            ],
            selectedOption: ''
        },
        all_floor: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: '-2 ' },
                { id: 2, title: '-1' },
                { id: 3, title: 'Подвал' },
                { id: 4, title: 'Цоколь' },
                { id: 5, title: 'Мансарда' },
                { id: 6, title: '1' },
                { id: 7, title: '2' },
                { id: 8, title: '3' },
                { id: 9, title: '4' },
                { id: 10, title: '5' },
                { id: 11, title: '6' },
                { id: 12, title: '7' },
                { id: 13, title: '8' },
                { id: 14, title: '9' }
            ],
            selectedOption: ''
        },
        price: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: '€' },
                { id: 2, title: '$' },
                { id: 3, title: 'MDL' }
            ],
            selectedOption: ''
        },
        bargain: {
            value: '',
            required: false,
            access: true,
        },
        liquidity: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Ликвид' },
                { id: 2, title: 'Неликвид' },
                { id: 3, title: 'Средняя ликвидность' },
            ],
            selectedOption: ''
        },
        market_price: {
            value: '',
            required: false,
            access: true,
        },
        average_price: {
            value: '',
            required: false,
            access: false,
        },
        total_area: {
            value: '',
            required: false,
            access: true,
        },
        rooms_area: {
            value: '',
            required: false,
            access: true,
        },
        living_area: {
            value: '',
            required: false,
            access: true,
        },
        kitchen_area: {
            value: '',
            required: false,
            access: true,
        },
        hallway_area: {
            value: '',
            required: false,
            access: true,
        },
        ceiling_height: {
            value: '',
            required: false,
            access: true,
        },
        ballcony: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Нет' },
                { id: 2, title: 'Балкон' },
                { id: 3, title: 'Французкий балкон' },
                { id: 4, title: 'Лоджия' },
                { id: 5, title: 'Терраса' },
                { id: 6, title: 'Застекленная лоджия' },
                { id: 7, title: 'Застекленный балкон' },
                { id: 8, title: 'Эркер' }
            ],
            selectedOption: ''
        },
        bathroom: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Нет' },
                { id: 2, title: 'Совмещенный' },
                { id: 3, title: 'Раздельный' },
            ],
            selectedOption: ''
        },
        heating: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Нет' },
                { id: 2, title: 'Печное' },
                { id: 3, title: 'Центральное' },
                { id: 4, title: 'Камин' },
                { id: 5, title: 'Котел солярка' },
                { id: 6, title: 'Котел уголь' },
                { id: 7, title: 'Котел электро' },
                { id: 8, title: 'Котел газ' },
                { id: 9, title: 'Паровое' },
                { id: 10, title: 'Печь+камин' },
                { id: 11, title: 'Электрообогрев' },
                { id: 12, title: 'Индивидуальное' },
                { id: 13, title: 'Автономное' }
            ],
            selectedOption: ''
        },
        view_window: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Во двор' },
                { id: 2, title: 'На улицу' },
                { id: 3, title: 'Во двор и на улицу' },
            ],
            selectedOption: ''
        },
        renovation: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Черновая' },
                { id: 2, title: 'Чистовая' },
                { id: 3, title: 'Под ключ' },
                { id: 4, title: 'Без отделки' },
                { id: 5, title: 'Под чистовую' },
                { id: 6, title: 'Под ключ + мебель' }
            ],
            selectedOption: ''
        },
        gas: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Черновая' },
                { id: 2, title: 'Чистовая' },
                { id: 3, title: 'Под ключ' }
            ],
            selectedOption: ''
        },
        cadastral_number: {
            value: '',
            required: false,
            access: true,
        },
        cadastral_number2: {
            value: '',
            required: false,
            access: true,
            show:false
        },
        cadastral_number3: {
            value: '',
            required: false,
            access: true,
            show:false
        },
        cadastral_number4: {
            value: '',
            required: false,
            access: true,
            show:false
        },
        cadastral_number5: {
            value: '',
            required: false,
            access: true,
            show:false
        },
        cadastral_number6: {
            value: '',
            required: false,
            access: true,
            show:false
        },
        cadastral_number7: {
            value: '',
            required: false,
            access: true,
            show:false
        },
        cadastral_number8: {
            value: '',
            required: false,
            access: true,
            show:false
        },
        cadastral_number9: {
            value: '',
            required: false,
            access: true,
            show:false
        },
        cadastral_number10: {
            value: '',
            required: false,
            access: true,
            show:false
        },
        reclama: {
            value: '',
            required: false,
            access: true,
            max: 33
        },
        description: {
            value: '',
            required: false,
            access: true,
            max: 5000
        },
    }),
});
