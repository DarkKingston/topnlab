<script>
import { ref, onMounted } from 'vue';
import { Link } from '@inertiajs/inertia-vue3';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
export default {
    props:{
        object: Object
    },
    components:{
        Link
    },
    setup(){

        const copied = ref(false);

        function clipboardCopy(id){
            copied.value = !copied.value;
            navigator.clipboard.writeText(id);
            setTimeout(() => {
                copied.value = !copied.value;
            }, 1000)
        }

        onMounted(() => {
            const slider = new Swiper ('.gallery-slider', {
                slidesPerView: 1,
                centeredSlides: true,
                loop: false,
                spaceBetween: 15,
                loopedSlides: 6,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
            const thumbs = new Swiper ('.gallery-thumbs', {
                slidesPerView: 'auto',
                spaceBetween: 4,
                centeredSlides: true,
                loop: false,
                slideToClickedSlide: true,
            });
            slider.controller.control = thumbs;
            thumbs.controller.control = slider;

            Fancybox.bind('[data-fancybox="slider"]', {
                Toolbar: false,
                animated: false,
                hideScrollbar: false,
                click: false,
            });
        })

        return {
            copied,
            clipboardCopy,
        }
    }
}
</script>

<template>
    <div class="cart_object">
        <div class="cart_object_notifications">
            <div class="cart_object_notify_item">
                <div class="cart_object_notify_item_wrapper">
                    <div class="cart_object_notify_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <path d="m23.89 3.72-2-1.19a3.84 3.84 0 0 0-5.25 1.34l-10 16.85a2.91 2.91 0 0 0-.41 1.66L6.59 29a1 1 0 0 0 .49.81 1 1 0 0 0 .51.14 1 1 0 0 0 .43-.1L14 27a2.92 2.92 0 0 0 1.26-1.15L24.63 10l.6-1a3.84 3.84 0 0 0-1.34-5.28zm-4 .28a1.88 1.88 0 0 1 .93.25l2 1.19A1.84 1.84 0 0 1 23.51 8l-.09.15L18.26 5l.09-.15A1.84 1.84 0 0 1 19.93 4zm-5.33 19.05-.33-.52a1 1 0 0 0-.77-.45L11.73 22l-.94-1.46A1 1 0 0 0 10 20h-.6l7.84-13.24 5.16 3.06zm-1.43 2.12-4.62 2.22-.27-5.12a.83.83 0 0 1 0-.35l1.14.08.94 1.46a1 1 0 0 0 .77.45l1.73.12.59.92a1.18 1.18 0 0 1-.28.22z"/>
                        </svg>
                    </div>
                    <div class="cart_object_notify_text">
                        Заполните ВСЕ обязательные поля.
                    </div>
                    <div class="cart_object_notify_link color_link">Заполнить</div>
                </div>
            </div>
            <div class="cart_object_notify_item">
                <div class="cart_object_notify_item_wrapper">
                    <div class="cart_object_notify_icon">
                        <svg class="bi bi-info-lg" fill="currentColor" height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z"/>
                        </svg>
                    </div>
                    <div class="cart_object_notify_text">
                        По объекту есть 2 пересечений.
                    </div>
                    <div class="cart_object_notify_link color_link">Посмотреть</div>
                </div>
            </div>
        </div>

        <div class="cart_object_status">
            <div class="table_status_progress">
                <div class="table_status_steps">
                    <div class="table_status_step_item fz-13">
                        <div class="table_status_step_descr fz-14">Заключенные договоры</div>
                    </div>
                    <div class="table_status_step_item _red fz-13">
                        <div class="table_status_step_descr fz-14">Новые продавцы</div>
                    </div>
                </div>
            </div>
            <div style="display: flex; align-items: center; flex-shrink: 0;">
                <button class="btn_table btn_next">
                    Вперед по воронке
                    <svg viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_iconCarrier">
                            <path d="M224.48535,136.48535l-72,72a12.0001,12.0001,0,0,1-16.9707-16.9707L187.0293,140H40a12,12,0,0,1,0-24H187.0293L135.51465,64.48535a12.0001,12.0001,0,0,1,16.9707-16.9707l72,72A11.99975,11.99975,0,0,1,224.48535,136.48535Z">
                            </path>
                        </g>
                    </svg>
                </button>
            </div>
        </div>

        <div class="cart_object_header">
            <div class="cart_object_header_box">
                <div class="cart_object_header_title fz-24">
                    <span>
                        Продается
                    </span>
                    <span class="cart_object_name cart_object_separator">
                        дом
                    </span>
                    <span class="cart_object_name cart_object_separator">
                       120 м²
                    </span>
                    <span class="cart_object_name">
                       3.3 сотки
                    </span>
                </div>
                <div class="cart_object_addresses">
                    Краснодарский край,г. Краснодар,снт КСТ-2,Прикубанский р-н,ул. Крайняя,д. 399
                </div>
            </div>
            <div class="cart_object_header_box">

                <div class="cart_object_dates">
                    <div class="cart_object_date_item fz-13">
                        Создано: 11.10.2022, 13:12
                    </div>
                    <div class="cart_object_date_item fz-13">
                        Изменено: 24.01.2024, 21:30
                    </div>
                    <div class="cart_object_date_realty_id fz-13" @click="clipboardCopy(object.id)">
                        id объекта: {{object.id}}
                        <span>
                            <svg height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg" fill="white">
                                <path d="M14 8H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V10c0-1.103-.897-2-2-2z"/>
                                <path d="M20 2H10a2 2 0 0 0-2 2v2h8a2 2 0 0 1 2 2v8h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                            </svg>
                        </span>
                        <div class="cart_object_dates_popup fz-13" :class="{active : copied}">
                            id объекта скопировано
                            <span>
                                <svg id="Layer_1" viewBox="0 0 30 30" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path d="M13.44,20.56c-0.265,0-0.52-0.105-0.707-0.293l-4.453-4.453c-0.391-0.391-0.391-1.023,0-1.414s1.023-0.391,1.414,0  l3.746,3.746l10.8-10.8C22.039,4.691,18.718,3,15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12  c0-2.18-0.59-4.218-1.606-5.98L14.147,20.267C13.96,20.454,13.706,20.56,13.44,20.56z"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cart_object_info">
            <div class="cart_object_info_main">

                <div class="cart_object_info_preview">
                    <div class="cart_preview_actions">
                        <div class="combo_button">
                            <div class="button_left_side" v-tippy.top="`У вас недостаточно прав`">
                                <div class="advertising-button _default"> Реклама </div>
                            </div>
                            <div class="button_right_side" v-tippy.top="`Услуг не заказано`">
                                <div class="service-label"> Сервисы </div>
                            </div>
                        </div>
                        <div class="cart_preview_action_item" v-tippy.top="`В базе данных есть покупатели под этот обьект`">
                            <button class="btn_table btn_combo fz-13 btn_next" >
                                Покупателей 0
                            </button>
                        </div>
                        <div class="footer_bar_btn fz-14 _yellow" v-tippy.top="`Недостаточно прав для этой операции`"> CMA </div>
                        <div class="combo_button btn_table_blue fz-13" v-tippy.top="`В карточке заполнены не все обязательные поля`">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#3588F3" width="18" height="4">
                                <circle cx="9" cy="2" r="2"></circle>
                                <circle cx="2" cy="2" r="2"></circle>
                                <circle cx="16" cy="2" r="2"></circle>
                            </svg>
                        </div>
                    </div>

                    <div class="cart_object_slider">
                        <div class="swiper-container gallery-slider">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" data-fancybox="slider" href="/assets/object.jpg"><span class="blur"></span><img src="/assets/object.jpg" alt=""></div>
                                <div class="swiper-slide" data-fancybox="slider" href="/assets/object.jpg"><span class="blur"></span><img src="/assets/object.jpg" alt=""></div>
                                <div class="swiper-slide" data-fancybox="slider" href="/assets/object.jpg"><span class="blur"></span><img src="/assets/object.jpg" alt=""></div>
                                <div class="swiper-slide" data-fancybox="slider" href="/assets/object.jpg"><span class="blur"></span><img src="/assets/object.jpg" alt=""></div>
                                <div class="swiper-slide" data-fancybox="slider" href="/assets/object.jpg"><span class="blur"></span><img src="/assets/object.jpg" alt=""></div>
                                <div class="swiper-slide" data-fancybox="slider" href="/assets/object.jpg"><span class="blur"></span><img src="/assets/object.jpg" alt=""></div>
                            </div>
                            <div class="swiper-button-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z" style="fill:#3588f3"/></svg>
                            </div>
                            <div class="swiper-button-next">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m14.707 12.707-4 4a1 1 0 0 1-1.414-1.414L12.586 12 9.293 8.707a1 1 0 1 1 1.414-1.414l4 4a1 1 0 0 1 0 1.414z" style="fill:#3588f3"/></svg>
                            </div>
                            <div class="slider_info">
                                <div class="slider_info_wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g id="Layer_2" data-name="Layer 2"><path class="cls-1" d="M32 44a10 10 0 1 0-10-10 10 10 0 0 0 10 10z"/><path class="cls-1" d="M9.51 56h45A5.51 5.51 0 0 0 60 50.49V20.18A4.18 4.18 0 0 0 55.82 16H48.3a1.81 1.81 0 0 1-1.51-.81L43.3 10a4.39 4.39 0 0 0-3.65-2h-15.3a4.39 4.39 0 0 0-3.65 2l-3.5 5.19a1.81 1.81 0 0 1-1.5.81H8.18A4.18 4.18 0 0 0 4 20.18v30.31A5.51 5.51 0 0 0 9.51 56zM52 20a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm-20 0a14 14 0 1 1-14 14 14 14 0 0 1 14-14zM54.82 12A1.18 1.18 0 0 0 56 10.82v-.61A2.22 2.22 0 0 0 53.78 8h-4.15a.74.74 0 0 0-.74.74A3.26 3.26 0 0 0 52.15 12z"/></g></svg>
                                    <span>6 фото</span>
                                </div>
                            </div>
                        </div>

                        <div class="swiper-container gallery-thumbs">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide"><img src="/assets/object.jpg" alt=""></div>
                                <div class="swiper-slide"><img src="/assets/object.jpg" alt=""></div>
                                <div class="swiper-slide"><img src="/assets/object.jpg" alt=""></div>
                                <div class="swiper-slide"><img src="/assets/object.jpg" alt=""></div>
                                <div class="swiper-slide"><img src="/assets/object.jpg" alt=""></div>
                                <div class="swiper-slide"><img src="/assets/object.jpg" alt=""></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cart_object_info_contract">
                    <div class="cart_contract">
                        Устная договоренность
                    </div>
                </div>
                <div class="cart_object_info_params">
                    <div class="cart_object_param_title">
                        Заголовок не задан
                    </div>
                    <table>
                        <tr class="cart_object_data">
                            <td class="cart_object_data_item">
                                <div class="cart_object_data_item_wrapper">
                                    <div class="cart_object_data_item_price blue"> ₽ 10 500 000 </div>
                                    <div class="cart_object_data_item_name"><span>350 000</span> ₽/м²</div>
                                </div>
                            </td>
                            <td class="cart_object_data_item">
                                <div class="cart_object_data_item_wrapper">
                                    <div class="cart_object_data_item_price"><span>30</span> м²</div>
                                    <div class="cart_object_data_item_name">ОБЩАЯ</div>
                                </div>
                            </td>
                            <td class="cart_object_data_item">
                                <div class="cart_object_data_item_wrapper">
                                    <div class="cart_object_data_item_price"><span>10</span> м²</div>
                                    <div class="cart_object_data_item_name">КУХНЯ</div>
                                </div>
                            </td>
                            <td class="cart_object_data_item">
                                <div class="cart_object_data_item_wrapper">
                                    <div class="cart_object_data_item_price">22 из 25</div>
                                    <div class="cart_object_data_item_name">ЭТАЖ</div>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
            <div class="cart_object_info_sidebar"></div>
        </div>
    </div>
</template>

<style scoped lang="scss">

.gallery {
    width: 100%;
    max-width: 620px;
    margin: 40px auto;

    &-slider {
        width: 100%;
        height: auto;
        margin: 0 0 10px 0;

        .swiper-slide {
            width: auto;
            height: 525px;

            img {
                display: block;
                width: auto;
                height: 100%;
                margin: 0 auto;
            }
        }
    }

    &-thumbs {
        width: 100%;
        padding: 0;
        overflow: hidden;
        border-radius: 5px;

        .swiper-slide {;
            width: 96px;
            height: 72px;
            outline: none;
            cursor: pointer;
            overflow: hidden;
            border-radius: 5px;
            opacity: .7;

            &-active {
                opacity: 1;
            }

            img {
                width: auto;
                height: 100%;
            }
        }
    }
}
</style>
