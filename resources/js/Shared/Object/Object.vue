<script>
import { ref } from 'vue';
import CartObject from "./CartObject";
import AppealsObject from "./AppealsObject";
import ServiceObject from "./ServiceObject";
import FilesObject from "./FilesObject";
import TasksObject from "./TasksObject";
import PhotoVideoObject from "./PhotoVideoObject";
import {useObjectTab } from "../../store/computed";

export default {
    props: {
        object: Object
    },
    components:{
        CartObject,
        AppealsObject,
        ServiceObject,
        FilesObject,
        PhotoVideoObject,
        TasksObject,
        useObjectTab
    },
    setup() {
        const objectTab = useObjectTab();
        const activeTab = ref(objectTab.tab);
        function toggleObjectTab(index) {
            objectTab.tab = index;
            activeTab.value = objectTab.tab;
            localStorage.setItem('object_tab', index);
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
    <AppealsObject :object="object" v-if="activeTab === 1"/>
    <ServiceObject :object="object" v-if="activeTab === 2"/>
    <FilesObject :object="object" v-if="activeTab === 3"/>
    <PhotoVideoObject :object="object" v-if="activeTab === 4"/>
    <TasksObject :object="object" v-if="activeTab === 5"/>
</template>


<style scoped>

</style>
