<script>
import { ref } from 'vue';
import CartObject from "./CartObject";
export default {
    props: {
        object: Object
    },
    components:{
        CartObject
    },
    setup() {
        const activeTab = ref(0);

        function toggleObjectTab(index) {
            activeTab.value = index;
        }

        return {
            activeTab,
            toggleObjectTab
        };
    }
};
</script>


<template>
    <div class="object_tabs">
        <div
            class="object_tab fz-14"
            :class="{ active: activeTab === 0 }"
            @click="toggleObjectTab(0)"
        >
            Объект
        </div>
        <div
            class="object_tab fz-14"
            :class="{ active: activeTab === 1 }"
            @click="toggleObjectTab(1)"
        >
            обращения
        </div>
        <div
            class="object_tab fz-14"
            :class="{ active: activeTab === 2 }"
            @click="toggleObjectTab(2)"
        >
            Сервисы
        </div>
        <div
            class="object_tab fz-14"
            :class="{ active: activeTab === 3 }"
            @click="toggleObjectTab(3)"
        >
            Файлы
        </div>
        <div
            class="object_tab fz-14"
            :class="{ active: activeTab === 4 }"
            @click="toggleObjectTab(4)"
        >
            Фото и видео
        </div>
        <div
            class="object_tab fz-14"
            :class="{ active: activeTab === 5 }"
            @click="toggleObjectTab(5)"
        >
            Задачи
        </div>
        <div
            class="object_tab fz-14"
            :class="{ active: activeTab === 6 }"
            @click="toggleObjectTab(6)"
        >
            Реквизиты
        </div>
        <div
            class="object_tab fz-14"
            :class="{ active: activeTab === 7 }"
            @click="toggleObjectTab(7)"
        >
            История
        </div>
    </div>
    <CartObject :object="object" v-if="activeTab === 0"/>
</template>


<style scoped>

</style>
