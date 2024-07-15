<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import ItemContact from "./createItems/ItemContact";
import ItemDeals from "./createItems/ItemDeals";
import ItemAbout from "./createItems/ItemAbout";
import ItemAddress from "./createItems/ItemAddress";
import ItemBuild from "./createItems/ItemBuild";
import ItemContract from "./createItems/ItemContract";
import ItemAditional from "./createItems/ItemAditional";
import ItemCustomFields from "./createItems/ItemCustomFields";

export default {
    props: {
        userId: Number
    },
    components: {
        ItemCustomFields,
        ItemAditional,
        ItemContract,
        ItemBuild,
        ItemContact,
        ItemAbout,
        ItemAddress,
        ItemDeals
    },
    setup() {
        const checkbox = ref(false);
        const navSelected = ref(Array(8).fill(false));


        function removeActivePopup() {
            document.querySelector('.popup_create').classList.remove('active');
            document.querySelector('main').classList.remove('no_scroll');
        }

        function handleScroll() {
            const header = document.querySelector('.popup_create_header');
            const main = document.querySelector('.popup_create_main');
            if (main.scrollTop > 0) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        onMounted(() => {
            const main = document.querySelector('.popup_create_main');
            if (main) {
                main.addEventListener('scroll', handleScroll);
            }
        });

        onBeforeUnmount(() => {
            const main = document.querySelector('.popup_create_main');
            if (main) {
                main.removeEventListener('scroll', handleScroll);
            }
        });

        function toggleNav(index) {
            navSelected.value[index] = !navSelected.value[index];
        }

        return {
            checkbox,
            removeActivePopup,
            navSelected,
            toggleNav
        }
    }
}
</script>

<template>
    <div class="popup_modal">
        <div class="popup_create_header">
            <div class="popup_label">
                Создать объект Продавца
            </div>
            <div class="popup_close" @click="removeActivePopup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#3588F3" width="17.828" height="17.828"><path d="m2.828 17.828 6.086-6.086L15 17.828 17.828 15l-6.086-6.086 6.086-6.086L15 0 8.914 6.086 2.828 0 0 2.828l6.085 6.086L0 15l2.828 2.828z"/></svg>
            </div>
        </div>
        <div class="popup_create_main">
            <div class="popup_create_main_wrapper">
                <div class="popup_main_nav">
                    <div class="popup_main_nav_list">
                        <div class="popup_main_nav_item" @click="toggleNav(0)">
                            Контакты, источник
                        </div>
                        <div class="popup_main_nav_item" @click="toggleNav(1)">
                            Условия сделки
                        </div>
                        <div class="popup_main_nav_item" @click="toggleNav(2)">
                            Об объекте
                        </div>
                        <div class="popup_main_nav_item" @click="toggleNav(3)">
                            Адрес объекта
                        </div>
                        <div class="popup_main_nav_item" @click="toggleNav(4)">
                            О здании
                        </div>
                        <div class="popup_main_nav_item" @click="toggleNav(5)">
                            Договор
                        </div>
                        <div class="popup_main_nav_item" @click="toggleNav(6)">
                            Примечания
                        </div>
                        <div class="popup_main_nav_item" @click="toggleNav(7)">
                            Служебные поля
                        </div>
                    </div>
                </div>
                <div class="popup_main_content">
                    <div class="popup_main_item" :class="{active: navSelected[0]}">
                        <div class="popup_main_item_wrapper">
                            <div class="popup_main_item_header"  @click="toggleNav(0)">
                                Контакты, источник
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
                            </div>
                            <ItemContact/>
                        </div>
                    </div>
                    <div class="popup_main_item" :class="{active: navSelected[1]}">
                        <div class="popup_main_item_wrapper">
                            <div class="popup_main_item_header" @click="toggleNav(1)">
                                Условия сделки
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
                            </div>
                            <ItemDeals/>
                        </div>
                    </div>
                    <div class="popup_main_item" :class="{active: navSelected[2]}">
                        <div class="popup_main_item_wrapper">
                            <div class="popup_main_item_header" @click="toggleNav(2)">
                                Об объекте
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
                            </div>
                            <ItemAbout/>
                        </div>
                    </div>
                    <div class="popup_main_item" :class="{active: navSelected[3]}">
                        <div class="popup_main_item_wrapper">
                            <div class="popup_main_item_header" @click="toggleNav(3)">
                                Адрес объекта
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
                            </div>
                            <ItemAddress/>
                        </div>
                    </div>
                    <div class="popup_main_item" :class="{active: navSelected[4]}">
                        <div class="popup_main_item_wrapper">
                            <div class="popup_main_item_header" @click="toggleNav(4)">
                                О здании
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
                            </div>
                            <ItemBuild/>
                        </div>
                    </div>
                    <div class="popup_main_item" :class="{active: navSelected[5]}">
                        <div class="popup_main_item_wrapper">
                            <div class="popup_main_item_header" @click="toggleNav(5)">
                                Договор
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
                            </div>
                            <ItemContract/>
                        </div>
                    </div>
                    <div class="popup_main_item" :class="{active: navSelected[6]}">
                        <div class="popup_main_item_wrapper">
                            <div class="popup_main_item_header" @click="toggleNav(6)">
                                Примечания
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
                            </div>
                            <ItemAditional/>
                        </div>
                    </div>
                    <div class="popup_main_item" :class="{active: navSelected[7]}">
                        <div class="popup_main_item_wrapper">
                            <div class="popup_main_item_header" @click="toggleNav(7)">
                                Служебные поля
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"/></svg>
                            </div>
                            <ItemCustomFields/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="popup_create_footer"></div>
    </div>
</template>
