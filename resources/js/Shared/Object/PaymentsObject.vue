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
                Реквизиты клиента
            </div>
            <div class="btn_object ml-a" style="opacity: 0.6;">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" style="enable-background:new 0 0 128 128" xml:space="preserve"><path style="fill:#fff" d="M128 63.954c0 2.006-.797 3.821-2.136 5.127-1.308 1.337-3.125 2.133-5.166 2.133H71.302v49.356c0 4.012-3.284 7.292-7.302 7.292-2.009 0-3.827-.828-5.166-2.134-1.308-1.337-2.136-3.152-2.136-5.159V71.214H7.302c-4.05 0-7.302-3.248-7.302-7.26 0-2.006.797-3.853 2.136-5.159a7.279 7.279 0 0 1 5.166-2.134h49.395V7.306c0-4.012 3.284-7.26 7.302-7.26 2.009 0 3.827.828 5.166 2.133a7.238 7.238 0 0 1 2.136 5.127v49.356h49.395A7.276 7.276 0 0 1 128 63.954z"/></svg>
                Добавить реквизиты
            </div>
        </div>

        <div class="tab_radio_info_task">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z" fill="currentColor"></path></svg>
            <span> Здесь вы можете создать реквизиты с паспортными данными, если клиент физическое лицо или реквизиты компании, если клиент юридическое лицо. В дальнейшем эти данные будут использоваться при формировании различных документов </span>
        </div>

        <div class="task_table">
            <div class="task_table_content">
                Пока нет созданных реквизитов
            </div>
        </div>
    </div>
 </div>
</template>
