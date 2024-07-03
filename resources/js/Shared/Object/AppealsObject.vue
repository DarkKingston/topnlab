<script>
import { ref } from 'vue';
export default {
    props:{
        object: Object
    },
    components:{

    },
    setup(){

        const taskList = ref(0)

        function changeTaskList(list){
            taskList.value = list;
        }

        return {
            changeTaskList,
            taskList
        }
    }
}
</script>

<template>
 <div class="object_wrapper">
    <div class="appeals_header">
        <div class="appeals_header_row">
            <div class="appeals_header_title">
                Покупатели, которые интересовались этой квартирой - 0
            </div>
            <div class="btn_object ml-a">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#fff" d="M128 63.954c0 2.006-.797 3.821-2.136 5.127-1.308 1.337-3.125 2.133-5.166 2.133H71.302v49.356c0 4.012-3.284 7.292-7.302 7.292-2.009 0-3.827-.828-5.166-2.134-1.308-1.337-2.136-3.152-2.136-5.159V71.214H7.302c-4.05 0-7.302-3.248-7.302-7.26 0-2.006.797-3.853 2.136-5.159a7.279 7.279 0 0 1 5.166-2.134h49.395V7.306c0-4.012 3.284-7.26 7.302-7.26 2.009 0 3.827.828 5.166 2.133a7.238 7.238 0 0 1 2.136 5.127v49.356h49.395A7.276 7.276 0 0 1 128 63.954z"/></svg>
                Добавить заявку
            </div>
        </div>
        <div class="task_list_header">
            <div class="task_list_block">
                <div class="task_list_item">
                    <button class="task_list_btn" @click="changeTaskList(0)" :class="{active: taskList == 0}">Все</button>
                    <button class="task_list_btn" @click="changeTaskList(1)" :class="{active: taskList == 1}">Покупатели</button>
                    <button class="task_list_btn" @click="changeTaskList(2)" :class="{active: taskList == 2}">От контрагентов</button>
                </div>
            </div>
        </div>
        <div class="task_table" v-if="taskList == 0">
            <div class="task_table_content">
                Обращений нет
            </div>
        </div>
        <div class="task_table" v-if="taskList == 1">
            <div class="task_table_content">
                Обращений нет
            </div>
        </div>
        <div class="task_table" v-if="taskList == 2">
            <div class="task_table_content">
                Обращений нет
            </div>
        </div>
    </div>
 </div>
</template>
