<script>
import { Head } from '@inertiajs/inertia-vue3'
import Table from "../Shared/Table.vue";
import Tabs from "../Shared/Tabs.vue";
export default {
    props:{
        title: String
    },
    components:{
        Head,
        Table,
        Tabs
    }
};
</script>
<template>
    <Head :title="title"/>
    <section class="actions">
        <h1 class="actions_title">
            Продавцы, Объекты компании - 27209
        </h1>
        <div class="actions_wrapper">
            <div class="actions_item">
                <div class="btn sky">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="search">
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path d="M15.5 14h-.79l-.28-.27c1.2-1.4 1.82-3.31 1.48-5.34-.47-2.78-2.79-5-5.59-5.34-4.23-.52-7.79 3.04-7.27 7.27.34 2.8 2.56 5.12 5.34 5.59 2.03.34 3.94-.28 5.34-1.48l.27.28v.79l4.25 4.25c.41.41 1.08.41 1.49 0 .41-.41.41-1.08 0-1.49L15.5 14zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
          </span>
                    Поиск
                </div>
            </div>
            <div class="actions_item">
                <div class="btn btn_blue">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" id="plus">
              <g fill="none" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path d="M8 1v14M1 8h14"></path>
              </g>
            </svg>
          </span>
                    Создать обьект
                </div>
            </div>
            <div class="actions_item">
                <div class="btn sky btn_only_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" id="view-column">
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path d="M11 18h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1zm-6 0h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1zM16 6v11c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1z"></path>
                    </svg>
                </div>
            </div>
        </div>
    </section>

    <section class="table">
        <Tabs/>
        <Table/>
    </section>
</template>


<style scoped>

.actions{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 30px;
}
.actions_wrapper{
    display: flex;
    align-items: center;
    gap: 15px;
}
</style>
