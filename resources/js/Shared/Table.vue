<script >
import { ref, computed, onMounted, watch, nextTick } from 'vue';
import TableHead from './Table/TableHead';
import TableBody from './Table/TableBody';
import PopupUserTable from "./popups/PopupUserTable";
import { Inertia } from '@inertiajs/inertia'
export default {
    props:{
        objects: Object,
        total: String,
        pagination: Object
    },
    components: {
        TableHead,
        TableBody,
        PopupUserTable
    },
    setup(props) {
console.log('props.pagination', props.pagination)
        // Данные и состояние
        const sortField = ref('id');

        const typeSort = ref('asc');
        const selectedObjects = ref([]);
        const userInfo = ref(null);
        const showUserPopup = ref(false);

        // Ссылки на элементы DOM
        const tableRef = ref(null);
        const tableContentRef = ref(null);
        const fakeScrollContainer = ref(null);
        const fakeScrollWidth = ref('0px');

        // Управление состоянием дропдауна
        const dropDownState = ref(false);
        const activeItem = ref(5);

        function dropState() {
            dropDownState.value = !dropDownState.value;
        }

        function changeItem(event) {
            activeItem.value = event.target.innerText;
            dropState();
        }

        // Синхронизация позиций скролла
        function syncScroll() {
            if (tableContentRef.value && fakeScrollContainer.value) {
                tableContentRef.value.scrollLeft = fakeScrollContainer.value.scrollLeft;
            }
        }

        // Добавление слушателя событий на фейковую полосу прокрутки
        function handleFakeScroll() {
            if (fakeScrollContainer.value) {
                fakeScrollContainer.value.addEventListener('scroll', syncScroll);
            }
        }

        // Добавление слушателя событий на настоящую таблицу для синхронизации с фейковой полосой
        function handleTableScroll() {
            if (tableContentRef.value) {
                tableContentRef.value.addEventListener('scroll', () => {
                    if (fakeScrollContainer.value) {
                        fakeScrollContainer.value.scrollLeft = tableContentRef.value.scrollLeft;
                    }
                });
            }
        }

        // Обновление ширины фейкового скроллбара в зависимости от ширины таблицы
        function updateFakeScrollWidth() {
            if (tableRef.value) {
                // Ширина фейкового скроллбара равна ширине таблицы
                fakeScrollWidth.value = `${tableRef.value.scrollWidth - 390}px`;
            }
        }

        onMounted(() => {
            console.log('objects', props.objects)
            nextTick(() => {
                handleFakeScroll();
                handleTableScroll();
                updateFakeScrollWidth();
            });
        });

        // Обновление ширины фейкового скроллбара при изменении объектов
        watch(props.objects, () => {
            updateFakeScrollWidth();
        });

        watch(() => window.innerWidth, () => {
            updateFakeScrollWidth();
        });

        // Сортировка объектов
        const objectsSorting = computed(() => {
            return props.objects.sort((a, b) => {
                let modifier = 1;
                if (typeSort.value === 'desc') modifier = -1;
                if (a[sortField.value] < b[sortField.value]) return -1 * modifier;
                if (a[sortField.value] > b[sortField.value]) return 1 * modifier;
                return 0;
            });
        });

        const visiblePages = computed(() => {
            let range = [];
            for (let i = Math.max(1, props.pagination.currentPage - 1); i <= Math.min(props.pagination.currentPage + 1, props.pagination.totalPages); i++) {
                range.push(i);
            }
            return range;
        });

        // Установка сортировки
        const setSort = (name) => {
            if (sortField.value === name) {
                typeSort.value = typeSort.value === 'asc' ? 'desc' : 'asc';
            } else {
                sortField.value = name;
            }
        };

        // Управление выбором объектов
        const toggleSelection = (id) => {
            const index = selectedObjects.value.indexOf(id);
            if (index === -1) {
                selectedObjects.value.push(id);
            } else {
                selectedObjects.value.splice(index, 1);
            }
        };

        const selectObject = (objectId) => {
            const object = props.objects.find(obj => obj.id === objectId);
            if (object) {
                object.checked = checked;
                toggleSelection(objectId);
            }
        };

        // Логика прокрутки таблицы с добавлением класса тени
        function handleTableScrollShadow(event) {
            const tableElement = event.target;
            const firstCell = tableElement.querySelector('.table_info_cell._check');

            if (tableElement.scrollLeft > 0) {
                firstCell.classList.add('_shadow');
            } else {
                firstCell.classList.remove('_shadow');
            }
        }

        // Показ/скрытие карточки пользователя
        const togglePopup = (user) => {
            userInfo.value = user;
            showUserPopup.value = !showUserPopup.value;
        };

        function changePage(pageValue) {
            if(pageValue){

                Inertia.post('/dashboard', {
                    page: pageValue
                }, {
                    preserveState: true,
                    onSuccess: (data) => {
                        console.log("Page changed successfully.", data);

                    },
                    onError: (errors) => {
                        console.log("Errors occurred:", errors);
                    }
                });
            }
        }

        return {
            sortField,
            typeSort,
            selectedObjects,
            tableRef,
            tableContentRef,
            fakeScrollContainer,
            fakeScrollWidth,
            dropDownState,
            activeItem,
            objectsSorting,
            dropState,
            visiblePages,
            changePage,
            changeItem,
            selectObject,
            handleTableScrollShadow,
            toggleSelection,
            setSort,
            updateFakeScrollWidth,
            handleTableScroll,
            togglePopup,
            userInfo,
            showUserPopup

        }
    }
}
</script>

<template>
    <div class="table_container">
        <div class="table_content" ref="tableContentRef">
            <table class="table" id="mainTable" ref="tableRef">
                <TableHead />
                <tbody>
                <TableBody v-for="object in objects" :key="object.id" :object="object" @toggle-popup="togglePopup"/>
                </tbody>
            </table>
        </div>
    </div>
    <div class="popup" :class="{active: showUserPopup}">
        <div class="popup_content">
            <PopupUserTable :user="userInfo"/>
        </div>
    </div>

    <div class="fake_scroll">
        <div class="fake_items fz-15">
            по:
            <div class="fake_dropdown fz-14">
                <div class="fake_dropdown_text" @click="dropState">
                    {{ activeItem }}
                    <span :class="{ active: dropDownState }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10.033" height="5">
                            <path d="M5.016 0 0 .003 2.506 2.5 5.016 5l2.509-2.5L10.033.003 5.016 0z" />
                        </svg>
                    </span>
                </div>
                <div class="fake_dropdown_list fz-1em" :class="{ active: dropDownState }">
                    <div class="fake_dropdown_item fz-14" @click="changeItem($event)">5</div>
                    <div class="fake_dropdown_item fz-14" @click="changeItem($event)">15</div>
                    <div class="fake_dropdown_item fz-14" @click="changeItem($event)">25</div>
                </div>
            </div>
        </div>
        <div class="fake_table_scroll">
            <div ref="fakeScrollContainer" class="fake_table_scroll_container" style="overflow-x: auto;">
                <div class="fake_table_scroll_scrollbar" :style="{ width: fakeScrollWidth }"></div>
            </div>
        </div>
        <div class="fake_pagination">
            <ul class="fake_pagination_menu">
                <li class="pagination_prev pagination_action" :class="{disabled: pagination.currentPage <= 1}" @click="changePage(pagination.currentPage != 1 ? pagination.currentPage - 1 : null)"></li>
                <li v-for="page in visiblePages" class="fake_pagination_item fz-14" :class="{ 'active': page === pagination.currentPage }" @click="changePage(page)">
                    {{ page }}
                </li>
                <li class="pagination_next pagination_action" :class="{disabled: pagination.currentPage >= pagination.totalPages}" @click="changePage(pagination.currentPage < pagination.totalPages ? pagination.currentPage + 1 : null)"></li>
            </ul>

        </div>
    </div>
</template>

<style lang="scss" scoped>
.checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
  & + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  & + label::before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    border: 2px solid #D3D5E0;
    border-radius: 2px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  &:checked + label::before {
    border-color: #127cda;
    background-color: #127cda;
    background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAsMCwyNjAsMjUwIj4KPGcgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGcgdHJhbnNmb3JtPSJzY2FsZSg4LjUzMzMzLDguNTMzMzMpIj48cGF0aCBkPSJNMjYuOTgwNDcsNS45OTAyM2MtMC4yNTk4LDAuMDA3NzQgLTAuNTA2MzgsMC4xMTYzMiAtMC42ODc1LDAuMzAyNzNsLTE1LjI5Mjk3LDE1LjI5Mjk3bC02LjI5Mjk3LC02LjI5Mjk3Yy0wLjI1MDgyLC0wLjI2MTI0IC0wLjYyMzI3LC0wLjM2NjQ3IC0wLjk3MzcxLC0wLjI3NTExYy0wLjM1MDQ0LDAuMDkxMzYgLTAuNjI0MTEsMC4zNjUwMyAtMC43MTU0NywwLjcxNTQ3Yy0wLjA5MTM2LDAuMzUwNDQgMC4wMTM4OCwwLjcyMjg5IDAuMjc1MTEsMC45NzM3MWw3LDdjMC4zOTA1MywwLjM5MDM3IDEuMDIzNTMsMC4zOTAzNyAxLjQxNDA2LDBsMTYsLTE2YzAuMjk1NzYsLTAuMjg3NDkgMC4zODQ2OSwtMC43MjcwNyAwLjIyMzkzLC0xLjEwNjkxYy0wLjE2MDc1LC0wLjM3OTg1IC0wLjUzODIxLC0wLjYyMjA0IC0wLjk1MDUsLTAuNjA5ODh6Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+");
    background-size: 22px 16px;
  }
  &:not(:disabled):not(:checked) + label:hover::before {
    border-color: var(--primary-hover);
  }
  &:not(:disabled):active + label::before {
    background-color: var(--primary);
    border: 1px solid #ECEBED;
  }
  &:focus + label::before {
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
  }
  &:focus:not(:checked) + label::before {
    border-color: var(--primary);
  }
  &:disabled + label::before {
    background-color: #e9ecef;
    border: 1px solid #ECEBED;
  }
}
.table{
    position: relative;
    display: table;
    width: 100%;
    font-size: 13px;
    border-collapse: collapse;

}
.table_content{
    position: relative;
    z-index: 1;
    overflow-x: auto;
    min-height: 225px;
    &::-webkit-scrollbar {
        display: none;
    }
    &::-moz-scrollbar {
        width: 0px;
        height: 0px;
    }
    border-collapse: collapse;
    box-shadow: 0 0 12px rgba(13, 35, 67, 0.13);
    border-radius: 8px;
}
.table_container{
    position: relative;
}
</style>
