<script setup>
  const emits = defineEmits(['update:checked', 'updateCheckboxGroup'])
  const props = defineProps({
    name: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    group: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'checkbox'
    }
  })

  const handleClick = (event) => {
    if (props.group) {
      emits('updateCheckboxGroup', {optionId: props.id, checked: event.target.checked})
    } else {
      emits('update:checked', event.target.checked)
    }
  }
</script>

<template>
  <div :class="[{'switch-container': type === 'switch'}]">
    <input
      :class="[{'checkbox': type === 'checkbox'}, {'switch': type === 'switch'}]"
      type="checkbox"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @input="handleClick($event)">
    <label :for="id">{{label}}</label>
    <label :for="id" class="switch__label" v-if="type === 'switch'">{{label}}</label>
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

.switch {
	height: 0;
	width: 0;
	visibility: hidden;
  position: absolute;
  z-index: -1;
  opacity: 0;
  &-container {
    display: flex;
    align-items: center;
  }
  &__label {
    margin-left: 10px;
  }
  & + label {
    cursor: pointer;
    text-indent: -9999px;
    width: 50px;
    height: 35px;
    background: #fafafa;
    border: 1px solid #adb5bd;
    display: block;
    border-radius: 100px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 5px;
      width: 26px;
      height: 26px;
      background: #fff;
      background: var(--primary);
      border-radius: 90px;
      transition: 0.3s;
      transform: translateY(-50%);
      }
  }
  &:checked {
    & + label {
      background: var(--primary);
      &:after {
        background: #fff;
        left: calc(100% - 5px);
        transform: translateX(-100%) translateY(-50%);
      }
      &:active:after {
        width: 33px;
      }
    }
  }
} 
</style>