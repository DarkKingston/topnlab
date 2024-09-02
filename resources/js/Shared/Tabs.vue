<script>
import { ref } from "vue";
import draggable from "vuedraggable";
export default{
props:{
    total: String
},
 components: {
     draggable
 },
 setup(){
     const activeClass = ref(null);

     function activeTab(event) {
         if (activeClass.value) {
             activeClass.value.classList.remove('active');
         }

         const target = event.currentTarget;
         if (target !== activeClass.value) {
             target.classList.add('active');
             activeClass.value = target;
         } else {
             activeClass.value = null;
         }
     }
     let tabsStatic = ref([
         { id: 0, title: "Новые", count: "7241" },
         { id: 1, title: "Все", count: "27215" }
     ]);

     let tabsDraggable = ref([
         { id: 2, title: "Вариант", count: "7242" },
         { id: 3, title: "Отложено", count: "126", tooltip:'На данном этапе находяться Продавцы, которых НОП перевел в отложенный спрос' },
         { id: 4, title: "Нужно распределить", count: "284", tooltip: 'Старовый этар ТОПа. Заявки, которые нужно распределить по Агентам' },
         { id: 5, title: "Заключенные договора", count: "1146", tooltip: 'На этом этапе находяться Продавцы, с которыми заключен агентский договор' },
         { id: 6, title: "Новые продавцы", count: "5", tooltip: 'Это стартовый этап воронки. Вновь созданные карточки Продавцов и карточки полученные от ТОПа будут попадать на этот этап.' },
         { id: 7, title: "Передано в црп", count: "0", tooltip: 'На этом этапе находяться карточки Продавцов, переданные в Центр Регионального Партнерства' },
         { id: 8, title: "В рекламе / показы", count: "8333", tooltip: 'На этом этапе находяться объекты Продавцов, по каторым ведется рекламная компания и проводяться показы Покупателям' },
         { id: 9, title: "Аванс", count: "385", tooltip: 'На этом этапе находяться Продавцы, которые подписали предварительный договор' },
         { id: 10, title: "Ожидание комиссии", count: "33", tooltip: 'На этом этапе находяться Клиенты, которые ожидают оканчательного расчета за оказание услуг' },
         { id: 11, title: "Отложено (на Нопа)", count: "180", tooltip: 'На этом этапе находяться Продавцы, которых Агент планирует отложить. НОП принимает решения по отложке' },
         { id: 12, title: "Отказ снят", count: "4633", tooltip: 'На этом этапе находяться Продавцы, по которым получены отказы. Например: продали сами, отказались от сотрудничества и т.д.' },
         { id: 13, title: "Сделка закрыта", count: "459", tooltip: 'Финальные этап сделки' }
     ]);

     let isDragging = ref(false);

     function handleDragStart() {
         setTimeout(() => {
             isDragging.value = true;
         }, 100)
     }

     function handleDragEnd() {
         isDragging.value = false;
     }
     return{
         handleDragEnd,
         handleDragStart,
         isDragging,
         tabsDraggable,
         tabsStatic,
         activeTab,
         activeClass
     }
 }
}
</script>

<template>
    <div class="table_tabs" :class="{ 'drag-scroll-enabled': !isDragging, 'drag-scroll-disabled': isDragging, 'active': activeClass }" v-dragscroll>
      <div class="table_tabs_static">
        <div class="table_tabs_item" v-for="tab in tabsStatic" :key="tab.id" @click="activeTab($event)">
          <div class="table_tabs_title">
            {{ tab.title }}
          </div>
          <span class="table_tabs_count">{{ total }}</span>
        </div>
      </div>
      <draggable
          v-model="tabsDraggable"
          tag="ol"
          itemKey="id"
          handle=".table_tabs_item_drag"
          class="table_tabs_draggable"
          @start="handleDragStart"
          @end="handleDragEnd"
      >
        <template #item="{ element: tab }">
          <li class="table_tabs_item" @click="activeTab($event)" v-tippy="`${tab.tooltip || ''}`">
            <div class="table_tabs_item_link">
              <div class="table_tabs_title">
                {{ tab.title }}
              </div>
              <span class="table_tabs_count">{{ total }}</span>
            </div>
            <div class="table_tabs_item_drag">
              <span></span>
              <span></span>
            </div>
          </li>
        </template>
      </draggable>
    </div>
</template>

<style scoped lang="scss">
.table_tabs {
  display: flex;
  align-items: center;
  padding: 0 0 10px 0;
  overflow: hidden;

  &_count {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 23px;
    height: 20px;
    padding: 0 5px;
    background: #f4f4f4;
    border-radius: 3px;
    margin-left: 10px;
    color: #1a1a1a;
    font-size: 13px;
    line-height: 1;
  }

  &_item:hover,
  &_item:hover &_count {
    color: #3588f3;
  }
}
.table_tabs.active{
    padding-bottom: 0;
}

.table_tabs_static {
  display: flex;
  align-items: center;
}

.table_tabs_item {
  height: 55px;
  flex-shrink: 0;
  background: #ffffff;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 0 12px rgba(13, 35, 67, 0.13);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 312px;
  padding: 10px;
  color: #242424;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.3px;
  cursor: pointer;
  user-select: none;
  transition: none !important;
  margin: 18px 7px 0 7px;
}
.table_tabs_item_drag {
  pointer-events: all;
}
.table_tabs_item_link {
  display: flex;
  align-items: center;
}
.table_tabs_item_drag {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.table_tabs_item_drag span {
  width: 100%;
  height: 2px;
  background: #eee;
  border-radius: 20px;
}
.table_tabs_item.active {
  height: 79px;
  padding: 10px;
  box-shadow: 0 0 12px rgba(13, 35, 67, 0.13);
  border-radius: 8px 8px 0 0;
  color: #3588f3;
  font-weight: 600;
}
.table_tabs_draggable {
  display: flex;
  align-items: center;
}

.drag-scroll-enabled {
  cursor: grab;
}

.drag-scroll-disabled {
  cursor: default;
}
</style>
