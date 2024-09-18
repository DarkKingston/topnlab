<script>
import { ref, onMounted } from "vue";
import draggable from "vuedraggable";
import { Inertia } from '@inertiajs/inertia'
import { useStage } from "../store/computed";

export default{
props:{
    total: String,
    tabs: Object
},
 components: {
     draggable
 },
 setup(props){
     const activeClass = ref(null);
     const stageStore = useStage();

     function activeTab(event, tab_value) {
         if (activeClass.value) {
             activeClass.value.classList.remove('active');
         }

         console.log('tab event', tab_value, tab_value?.name)
         stageStore.setStage(tab_value?.name);
         Inertia.post('/dashboard', {
             stage: tab_value['name']
         }, {
             preserveState: true,
             onSuccess: (data) => {
                 console.log("Stage changed successfully.", data);

             },
             onError: (errors) => {
                 console.log("Errors occurred:", errors);
             }
         });


         const target = event.currentTarget;
         if (target !== activeClass.value) {
             target.classList.add('active');
             activeClass.value = target;
         } else {
             activeClass.value = null;
         }
     }
     let tabsStatic = ref([
         { id: 0, title: "Все", active: true, name: 'all' },
     ]);

     let tabsDraggable = ref(Object.values(props.tabs).map(stage => ({
         id: stage.ID,
         title: stage.NAME,
         total: stage.count_deals,
         name: stage.STATUS_ID
     })));
     let isDragging = ref(false);

     function handleDragStart() {
         setTimeout(() => {
             isDragging.value = true;
         }, 100)
     }

     function handleDragEnd() {
         isDragging.value = false;
     }

     onMounted(() => {
         const firstTab = document.querySelector('.table_tabs_static .table_tabs_item');
         if (firstTab) {
             firstTab.classList.add('active');
             activeClass.value = firstTab;
         }
     });

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
        <div class="table_tabs_item" v-for="tab in tabsStatic" :key="tab.id" @click="activeTab($event, tab)">
          <div class="table_tabs_title">
            {{ tab.title }}
          </div>
<!--          <span class="table_tabs_count">{{ total }}</span>-->
        </div>
      </div>
<!--          v-model="tabsDraggable"-->
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
          <li class="table_tabs_item" @click="activeTab($event, tab)" v-tippy="`${tab.tooltip || ''}`">
            <div class="table_tabs_item_link">
              <div class="table_tabs_title">
                {{ tab.title }}
              </div>
              <span class="table_tabs_count">{{ tab.total }}</span>
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

.table_tabs_static .table_tabs_item{
    min-width: 80px;
    display: flex;
    justify-content: center;
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
