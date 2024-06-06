<script setup>
import { ref, computed, onMounted } from 'vue';
import TableHead from './Table/TableHead';
import TableBody from './Table/TableBody';

const sortField = ref('id')
const typeSort = ref('asc')
const objects = ref([{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}])
const selectedObjects = ref([])

const objectsSorting = computed(() => {
  return objects.value.sort((a, b) => {
    let modifier = 1
    if (typeSort.value === 'desc') modifier = -1
    if (a[sortField.value] < b[sortField.value]) return -1 * modifier
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier
    return 0
  })
})

const setSort = (name) => {
  if (sortField.value === name) {
    typeSort.value = typeSort.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortField.value = name
  }
}

const toggleSelection = (id) => {
  const index = selectedObjects.value.indexOf(id)
  if (index === -1) {
    selectedObjects.value.push(id)
  } else {
    selectedObjects.value.splice(index, 1)
  }
}

const selectObject = (objectId) => {
  console.log(objectId)
  const object = objects.value.find(obj => obj.id === optionId)
  if (object) {
    object.checked = checked
    toggleSelection(optionId)
  }
}

const showRow = (row) => {
  console.log(row);
}


const tableRef = ref(null);

onMounted(() => {
    const tableElement = tableRef.value;
    tableElement.addEventListener('scroll', handleScroll);
});

function handleScroll(event) {
    const tableElement = event.target;
    const firstCell = tableElement.querySelectorAll('.table_info_cell._check')[0];

    if (tableElement.scrollLeft > 0) {
        firstCell.classList.add('_shadow');
    } else {
        firstCell.classList.remove('_shadow');
    }
}


</script>

<template>
    <div class="table_container">
        <div class="table_content" ref="tableRef">
          <table class="table" id="mainTable">
            <TableHead/>
              <tbody>
                <TableBody v-for="object in objects" :key="object.id" :object="object"/>
              </tbody>
          </table>
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
