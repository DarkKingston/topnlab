<script>
export default {
    props:{
        object: Object
    },
    components:{

    },
    setup(){


        return {
        }
    }
}
</script>

<template>
 <div class="object_wrapper">
    <div class="appeals_header">
        <div class="appeals_header_row">
            <div class="appeals_header_title">
                Список прикрепленных файлов
            </div>
        </div>
        <div class="task_table">
            <div class="task_table_content empty">
                Нет файлов
            </div>
        </div>
    </div>
 </div>
</template>
