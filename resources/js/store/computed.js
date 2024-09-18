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

export const useStage = defineStore('stage', {
    state: () => ({
        stage: 'all',
    }),
    actions: {
        setStage(newStage) {
            this.stage = newStage;
        }
    }
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
        percentage: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: '100% ' },
                { id: 2, title: '50%' },
                { id: 3, title: '1%' },
           ],
            selectedOption: ''
        },
        floor_in_apartment: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: '1' },
                { id: 2, title: '2' },
                { id: 3, title: '3' },
                { id: 4, title: '4' },
                { id: 5, title: '5' },
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
                { id: 1, title: '1' },
                { id: 2, title: '2' },
                { id: 3, title: '3' },
                { id: 4, title: '4' },
                { id: 5, title: '5' },
                { id: 6, title: '6' },
                { id: 7, title: '7' },
                { id: 8, title: '8' },
                { id: 9, title: '9' },
            ],
            selectedOption: ''
        },
        litter: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'есть' },
                { id: 2, title: 'нет' },
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
            selectedOption: 1
        },
        bargain: {
            value: '',
            required: false,
            access: true,
        },
        liquidity: {
            value: '',
            required: false,
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
            required: true,
            access: true,
        },
        rooms_area: {
            value: '',
            required: true,
            access: true,
        },
        living_area: {
            value: '',
            required: false,
            access: true,
        },
        kitchen_area: {
            value: '',
            required: true,
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
            required: true,
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
            required: true,
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
            required: true,
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
            required: true,
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
            required: true,
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

export const useCreateObjectAddress = defineStore('create_object_address', {
    state: () => ({
        region: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Красноярский край' },
                { id: 2, title: 'Краснодарский край' },
                { id: 3, title: 'Липецкая область' },
                { id: 4, title: 'Омская область' },
            ],
            selectedOption: ''
        },
        area_region: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Анапский р-н' },
                { id: 2, title: 'Динской р-н' },
                { id: 3, title: 'Кавказкий р-н' },
                { id: 4, title: 'Мостовский р-н' },
            ],
            selectedOption: ''
        },
        township: {
            value: '',
            required: true,
            access: true,
            options :[
                { value: 1, text: 'Армавир г.' },
                { value: 2, text: 'Анапа г. (Анапский р-н)' },
                { value: 3, text: 'Аргопром снт (Сочи г.)' },
            ],
            selectedOption: ''
        },
        street: {
            value: '',
            required: false,
            access: true,
            options :[
                { value: 1, text: 'Фадеева' },
                { value: 2, text: 'Невский проспект' },
                { value: 3, text: 'Московская улица' },
            ],
            selectedOption: ''
        },
        number_house: {
            value: '',
            required: true,
            access: true,
        },
        enclosure: {
            value: '',
            required: false,
            access: true,
        },
        litera: {
            value: '',
            required: false,
            access: true,
        },
        structure: {
            value: '',
            required: false,
            access: true,
        },
        apartment: {
            value: '',
            required: false,
            access: true,
        },
        street_additional: {
            value: '',
            required: false,
            access: true,
            options :[
                { value: 1, text: 'Фадеева' },
                { value: 2, text: 'Невский проспект' },
                { value: 3, text: 'Московская улица' },
            ],
            selectedOption: {}
        },
        number_house_additional: {
            value: '',
            required: true,
            access: true,
        },
        enclosure_additional: {
            value: '',
            required: false,
            access: true,
        },
        litera_additional: {
            value: '',
            required: false,
            access: true,
        },
        structure_additional: {
            value: '',
            required: false,
            access: true,
        },
        apartment_additional: {
            value: '',
            required: false,
            access: true,
        },
        name_township: {
            value: '',
            required: false,
            access: true,
        },
        km_city: {
            value: '',
            required: false,
            access: true,
        },
        coordinates_value: {
            value: [46.9622462, 28.8485565],
            required: false,
            access: true,
        }
    }),
});

export const useCreateObjectBuild = defineStore('create_object_build', {
    state: () => ({
        builder: {
            value: '',
            required: false,
            access: true,
            options :[
                { value: 1, text: 'Частный застройщик' },
                { value: 2, text: 'ООО << С3 Черномор >>' },
            ],
            selectedOption: false
        },
        complex: {
            value: '',
            required: false,
            access: true,
            options :[
                { value: 1, text: 'Золотой Колос' },
                { value: 2, text: 'Дом на Школьной' },
            ],
            selectedOption: false
        },
        corpus: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Корпус 2' },
                { id: 2, title: 'Корпус 3' },
                { id: 4, title: 'Корпус 4' },
                { id: 5, title: 'Корпус 5' },
            ],
            selectedOption: ''
        },
        type_home: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Кирпичный' },
                { id: 2, title: 'Монолитный' },
                { id: 4, title: 'Панельный' },
                { id: 5, title: 'Блочный' },
            ],
            selectedOption: ''
        },
        series_home: {
            value: '',
            required: false,
            access: true,
        },
        lift: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Нет лифта' },
                { id: 2, title: '1 лифт' },
                { id: 4, title: '2 лифта' },
                { id: 5, title: '3 и более' },
                { id: 6, title: 'Только грузовой' },
            ],
            selectedOption: ''
        },
        new_house: {
            value: '',
            required: true,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        year_build: {
            value: '',
            required: false,
            access: true,
        },
        year_rennovation: {
            value: '',
            required: false,
            access: true,
        },
        area_buildings: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Да' },
                { id: 2, title: 'Нет' },
            ],
            selectedOption: ''
        },
        building_block: {
            value: '',
            required: false,
            access: true,
        }
    }),
});

export const useCreateObjectContract = defineStore('create_object_contract', {
    state: () => ({
        contract_service: {
            value: '',
            required: true,
            access: true,
            options :[
                {
                    id: 1,
                    title: 'Возмездный договор',
                    additional:{
                        subtitle: 'Клиент готов заключить с Вами агентский возмездный договор, но данный договор не дает Вам право на эксклюзивную работу, т.е. с этим клиентом могут работать и другие агенты.'
                    }
                },
                {
                    id: 2,
                    title: 'Нет договора',
                    additional:{
                        subtitle: 'Клиент категорически отказывается заключать договор'
                    }
                },
                {
                    id: 4,
                    title: 'Устная договоренность',
                    additional:{
                        subtitle: 'Клиент не готов заключать бумажные договоры, но готов с Вами работать без договора.'
                    }
                },
                {
                    id: 5,
                    title: 'Эксклюзивный',
                    additional:{
                        subtitle: 'Клиент готов заключить с Вами эксклюзивный агентский договор, согласно которому Вы единственный Агент, который будет оказывать ему услугу.'
                    }
                },
            ],
            selectedOption: ''
        },
        type_property: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Свидетельство о гос регистрации' },
                { id: 2, title: 'Договор долевого участия' },
            ],
            selectedOption: ''
        },
        object_right: {
            value: '',
            required: false,
            access: true,
        },
        subject_contract: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Объект (без земельного участка)' },
                { id: 2, title: 'Объект + земельный участок' },
                { id: 3, title: 'Земельный участок (объект не сдан)' },
            ],
            selectedOption: ''
        },
        basis: {
            value: '',
            required: false,
            access: true,
        },
        type_right: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Собственность' },
                { id: 2, title: 'Общая долевая собственность' },
                { id: 3, title: 'Общая совместная собственность' },
                { id: 4, title: 'Уступка прав по договору аренды' },
            ],
            selectedOption: ''
        },
        right_land: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Собственность' },
                { id: 2, title: 'Общая долевая собственность' },
                { id: 3, title: 'Общая совместная собственность' },
                { id: 4, title: 'Аренда' },
                { id: 5, title: 'Уступка прав по договору аренды' },
                { id: 6, title: 'Право требований' },
            ],
            selectedOption: ''
        },
        individual_mentioned: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: '1' },
                { id: 2, title: '2' },
                { id: 3, title: '3' },
                { id: 4, title: '4' },
            ],
            selectedOption: ''
        },
        primary: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'да' },
                { id: 2, title: 'нет' }
            ],
            selectedOption: ''
        },
        deffered_payments: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'да' },
                { id: 2, title: 'нет' }
            ],
            selectedOption: ''
        },
        indefinite_contract: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'да' },
                { id: 2, title: 'нет' }
            ],
            selectedOption: ''
        },
        fix_price: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'да' },
                { id: 2, title: 'нет' }
            ],
            selectedOption: ''
        },
    }),
});

export const usePopupNotes = defineStore('popup_notes', {
    state: () => ({
        popup_notes: false,
        tab: 1
    }),
});

    export const usePopupSettingsCell = defineStore('popup_settings_cell', {
    state: () => ({
        popup_settings_cell: false,
    }),
});

export const useFilterState = defineStore('filter_state', {
    state: () => ({
        filter_state: false,
        type_objects: {
            options :[
                { id: 1, title: 'Квартира' },
                { id: 2, title: 'Комната' },
                { id: 3, title: 'Дом/Дача/Таунхаус' },
                { id: 4, title: 'Коммерция' },
                { id: 5, title: 'Зем.Участок' },
                { id: 6, title: 'Гараж' }
            ],
            selectedOption: ''
        },
        currency: {
            options :[
                { id: 1, title: 'Цена' },
                { id: 2, title: 'Цена в $/€' }
            ],
            selectedOption: 1
        }
    }),
});


export const useCreateObjectNote = defineStore('object_note', {
    state: () => ({
        object_note: {
            personal: [],
            public: []
        }
    }),
});


export const useCreateObjectFields = defineStore('custom_fields', {
    state: () => ({
        status: {
            value: '',
            required: false,
            access: false,
            options :[
                { id: 1, title: 'Сбор данных' },
                { id: 2, title: 'Сбор данных 2' },
            ],
            selectedOption: ''
        },
        no_export: {
            value: '',
            required: false,
            access: true,
        },
        site: {
            value: '',
            required: false,
            access: false,
        },
        bd_close: {
            value: '',
            required: false,
            access: true,
        },
        comment_call_center: {
            value: '',
            required: false,
            access: true,
        },
        remove_status: {
            value: '',
            required: false,
            access: true,
            options :[
                { id: 1, title: 'Передумал' },
                { id: 2, title: 'Продал сам' },
                { id: 3, title: 'Дубль' },
                { id: 4, title: 'Обьявление не актуально' },
                { id: 5, title: 'Другая причина' },
            ],
            selectedOption: ''
        },
        call:{
            value: '',
            required: false,
            access: true
        },
    }),
});

export const useCreateObjectSettings = defineStore('settings_table', {
    state: () => ({
        settings_table:{
            progress_bar_stage: {
                id: 1,
                default: true,
                value: true,
                order: 1,
                label: 'Прогресс-бар этапов воронки',
            },
            settings_responsible: {
                id: 2,
                default: true,
                value: true,
                order: 2,
                label: 'Ответственный',
            },
            settings_photo: {
                id: 3,
                default: true,
                value: true,
                order: 3,
                label: 'Фото',
            },
            settings_contacts: {
                id: 4,
                default: true,
                value: true,
                order: 4,
                label: 'Контакты',
            },
            settings_adpopup: {
                id: 5,
                default: true,
                value: true,
                order: 5,
                label: 'Реклама',
            },
            settings_type_objects: {
                id: 6,
                default: true,
                value: true,
                order: 6,
                label: 'Тип объекта',
            },
            settings_location: {
                id: 7,
                default: true,
                value: true,
                order: 7,
                label: 'Расположение',
            },
            settings_house: {
                id: 8,
                default: true,
                value: true,
                order: 8,
                label: 'Дом',
            },
            settings_metro: {
                id: 9,
                default: false,
                value: false,
                order: 9,
                label: 'Метро',
            },
            settings_price: {
                id: 10,
                default: true,
                value: true,
                order: 10,
                label: 'Цена',
            },
            settings_market_price: {
                id: 11,
                default: true,
                value: true,
                order: 11,
                label: 'Рыночная цена',
            },
            settings_commission: {
                id: 12,
                default: true,
                value: true,
                order: 12,
                label: 'Комиссия',
            },
            settings_floor: {
                id: 13,
                default: true,
                value: true,
                order: 13,
                label: 'Этаж',
            },
            settings_type_house: {
                id: 14,
                default: true,
                value: true,
                order: 14,
                label: 'Тип дома',
            },
            settings_areas: {
                id: 15,
                default: true,
                value: true,
                order: 15,
                label: 'Площади',
            },
            settings_tasks: {
                id: 16,
                default: true,
                value: true,
                order: 16,
                label: 'Задачи',
            },
            settings_type_contract: {
                id: 17,
                default: true,
                value: true,
                order: 17,
                label: 'Тип договора',
            },
            settings_type_sell: {
                id: 18,
                default: true,
                value: true,
                order: 18,
                label: 'Тип продажи',
            },
            settings_complex: {
                id: 19,
                default: true,
                value: true,
                order: 19,
                label: 'Комплекс',
            },
            settings_design: {
                id: 20,
                default: true,
                value: true,
                order: 20,
                label: 'Интерьер',
            },
            settings_notes: {
                id: 21,
                default: true,
                value: true,
                order: 21,
                label: 'Примечания',
            },
            settings_description: {
                id: 22,
                default: true,
                value: true,
                order: 22,
                label: 'Описание',
            },
            settings_communication: {
                id: 23,
                default: true,
                value: true,
                order: 23,
                label: 'Коммуникации',
            },
            settings_additional_params: {
                id: 24,
                default: true,
                value: true,
                order: 24,
                label: 'Доп. параметры',
            },
            settings_look: {
                id: 25,
                default: true,
                value: true,
                order: 25,
                label: 'Вид раз. исп.',
            },
            settings_room: {
                id: 26,
                default: true,
                value: true,
                order: 26,
                label: 'Помещение',
            },
            settings_cadastral_number: {
                id: 27,
                default: true,
                value: true,
                order: 27,
                label: 'Кадастровый номер',
            },
            settings_publication: {
                id: 28,
                default: true,
                value: true,
                order: 28,
                label: 'Публикация',
            },
            settings_source: {
                id: 29,
                default: true,
                value: true,
                order: 29,
                label: 'Источник',
            },
            settings_status: {
                id: 30,
                default: true,
                value: true,
                order: 30,
                label: 'Статус',
            },
            settings_comments: {
                id: 31,
                default: true,
                value: true,
                order: 31,
                label: 'Комментарий для КЦ',
            },
            settings_have_renter: {
                id: 32,
                default: false,
                value: false,
                order: 32,
                label: 'Наличие арендаторов',
            },
            settings_form_ownership: {
                id: 33,
                default: false,
                value: false,
                order: 33,
                label: 'Форма собственности',
            },
            settings_area_construction: {
                id: 34,
                default: false,
                value: false,
                order: 34,
                label: 'Указать площадь з/у для строительства многоквартирного дома (первичный рынок)',
            },
            settings_object_permission: {
                id: 35,
                default: false,
                value: false,
                order: 35,
                label: 'Объект права',
            },
            settings_code_db: {
                id: 36,
                default: false,
                value: false,
                order: 36,
                label: 'Код в БД',
            },
            settings_roof: {
                id: 37,
                default: false,
                value: false,
                order: 37,
                label: 'Крыша',
            },
            settings_lease_term: {
                id: 38,
                default: false,
                value: false,
                order: 38,
                label: 'Срок аренды',
            },
            settings_type_ownership: {
                id: 39,
                default: false,
                value: false,
                order: 39,
                label: 'Тип владения',
            },
            settings_reason_withdrawal: {
                id: 40,
                default: true,
                value: true,
                order: 40,
                label: 'Причина снятия',
            },
            settings_subject_contract: {
                id: 41,
                default: false,
                value: false,
                order: 41,
                label: 'Предмет договора',
            },
            settings_exist_encumbrance: {
                id: 42,
                default: false,
                value: false,
                order: 42,
                label: 'Наличие обременения',
            },
            settings_building_block: {
                id: 43,
                default: false,
                value: false,
                order: 43,
                label: 'Квартал постройки',
            },
            settings_ownership: {
                id: 44,
                default: false,
                value: false,
                order: 44,
                label: 'Право собственности',
            },
            settings_basis: {
                id: 45,
                default: false,
                value: false,
                order: 45,
                label: 'На основании (чего...)',
            },
            settings_encumbrance_bank: {
                id: 46,
                default: false,
                value: false,
                order: 46,
                label: 'Банк обременения',
            },
            settings_type_layout: {
                id: 47,
                default: false,
                value: false,
                order: 47,
                label: 'Вид планировки',
            },
            settings_invite_client_manager: {
                id: 48,
                default: false,
                value: false,
                order: 48,
                label: 'Пригласил Клиент-менеджер',
            },
            settings_area_apartment: {
                id: 49,
                default: false,
                value: false,
                order: 49,
                label: 'Площадь з/у для строительства многоквартирного дома (кв.м)',
            },
            settings_summ_encumbrance: {
                id: 50,
                default: false,
                value: false,
                order: 50,
                label: 'Сумма обременения',
            },
            settings_exhaust: {
                id: 51,
                default: false,
                value: false,
                order: 51,
                label: 'Вытяжка',
            },
            settings_type_object_right: {
                id: 52,
                default: false,
                value: false,
                order: 52,
                label: 'Вид права на объект',
            },
            settings_exist_enforcement: {
                id: 53,
                default: false,
                value: false,
                order: 53,
                label: 'Наличие исполнительных производств',
            },
            settings_water_supply: {
                id: 54,
                default: false,
                value: false,
                order: 54,
                label: 'Водоснабжение',
            },
            settings_rooms_in_sauna: {
                id: 55,
                default: false,
                value: false,
                order: 55,
                label: 'Кол-во номеров в сауне',
            },
            settings_share_ownership: {
                id: 56,
                default: false,
                value: false,
                order: 56,
                label: 'Доля собственности на объект (через /)',
            },
            settings_partner: {
                id: 57,
                default: false,
                value: false,
                order: 57,
                label: 'Партнер',
            },
            settings_amount_enforcement: {
                id: 58,
                default: false,
                value: false,
                order: 58,
                label: 'Сумма по исполнительному производству',
            },
            settings_catering: {
                id: 59,
                default: false,
                value: false,
                order: 59,
                label: 'Общепит',
            },
            settings_pool: {
                id: 60,
                default: false,
                value: false,
                order: 60,
                label: 'Бассейн',
            },
            settings_leased: {
                id: 61,
                default: false,
                value: false,
                order: 61,
                label: 'Сдан в аренду',
            },
            settings_land_plot: {
                id: 62,
                default: false,
                value: false,
                order: 62,
                label: 'Земельный участок',
            },
            settings_name_lessee: {
                id: 63,
                default: false,
                value: false,
                order: 63,
                label: 'Наименование арендатора',
            },
            settings_profit_lessee: {
                id: 64,
                default: false,
                value: false,
                order: 64,
                label: 'Доход от арендаторов',
            },
            settings_place: {
                id: 65,
                default: false,
                value: false,
                order: 65,
                label: 'Расположение',
            },
            settings_area_place: {
                id: 66,
                default: false,
                value: false,
                order: 66,
                label: 'Площадь участка, сот.',
            },
            settings_facade: {
                id: 67,
                default: false,
                value: false,
                order: 67,
                label: 'Фасадный',
            },
            settings_warehouse_class: {
                id: 68,
                default: false,
                value: false,
                order: 68,
                label: 'Класс склада',
            },
            settings_type: {
                id: 69,
                default: false,
                value: false,
                order: 69,
                label: 'Тип',
            },
            settings_corner: {
                id: 70,
                default: false,
                value: false,
                order: 70,
                label: 'Угловой',
            },
            settings_floor_room: {
                id: 71,
                default: false,
                value: false,
                order: 71,
                label: 'Пол',
            },
            settings_number_boxes: {
                id: 72,
                default: false,
                value: false,
                order: 72,
                label: 'Количество боксов',
            },
            settings_length: {
                id: 73,
                default: false,
                value: false,
                order: 73,
                label: 'Длина',
            },
            settings_coverage: {
                id: 74,
                default: false,
                value: false,
                order: 74,
                label: 'Покрытие',
            },
            settings_pit: {
                id: 75,
                default: false,
                value: false,
                order: 75,
                label: 'Яма',
            },
            settings_width: {
                id: 76,
                default: false,
                value: false,
                order: 76,
                label: 'Ширина',
            },
            settings_approach: {
                id: 77,
                default: false,
                value: false,
                order: 77,
                label: 'Подъезд',
            },
            settings_lifts: {
                id: 78,
                default: false,
                value: false,
                order: 78,
                label: 'Подъемники',
            },
            settings_rampa: {
                id: 79,
                default: false,
                value: false,
                order: 79,
                label: 'Рампа',
            },
            settings_showers: {
                id: 80,
                default: false,
                value: false,
                order: 80,
                label: 'Душевые',
            },
            settings_fridge: {
                id: 81,
                default: false,
                value: false,
                order: 81,
                label: 'Холодильник',
            },
            settings_crande_girder: {
                id: 82,
                default: false,
                value: false,
                order: 82,
                label: 'Кран-балка',
            },
            settings_crande_girder_tones: {
                id: 83,
                default: false,
                value: false,
                order: 83,
                label: 'Кран-балка, тонн',
            },
            settings_gate_width: {
                id: 84,
                default: false,
                value: false,
                order: 84,
                label: 'Ворота, ширина',
            },
            settings_bathroom: {
                id: 85,
                default: false,
                value: false,
                order: 85,
                label: 'Санузел',
            },
            settings_gate_heigth: {
                id: 86,
                default: false,
                value: false,
                order: 86,
                label: 'Ворота, высота',
            },
            settings_type_gate: {
                id: 87,
                default: false,
                value: false,
                order: 87,
                label: 'Тип ворот',
            },
            settings_office_available: {
                id: 88,
                default: false,
                value: false,
                order: 88,
                label: 'Наличие офиса',
            },
            settings_number_windows: {
                id: 89,
                default: false,
                value: false,
                order: 89,
                label: 'Количество окон/витрин',
            },
            settings_number_buildings: {
                id: 90,
                default: false,
                value: false,
                order: 90,
                label: 'Количество строений',
            },
            settings_area_office: {
                id: 91,
                default: false,
                value: false,
                order: 91,
                label: 'Площадь офиса',
            },
            settings_area_buildings: {
                id: 92,
                default: false,
                value: false,
                order: 92,
                label: 'Площадь строений',
            },
            settings_additional_permited_use: {
                id: 93,
                default: false,
                value: false,
                order: 93,
                label: 'Дополнительные виды разрешенного использования',
            },
            settings_last_call: {
                id:94,
                default: false,
                value: false,
                order: 94,
                label: 'Дата последнего прозвона',
            },
        }
    }),
});
