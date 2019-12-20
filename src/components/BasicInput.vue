<template lang="pug">
  .basic__input(
    :class="{ 'basic__input-disabled': disabled }"
  )
    input(
      :type="type"
      :value="value"
      :required="required"
      :placeholder="placeholder"
      :class="inputClass"
      v-on="listeners"
    ).basic__input-control
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    required: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
  },
  computed: {
      listeners() {
        return {
          ...this.$listeners,
          input: (event) => {
            if (!this.disabled) {
              this.$emit('input', event.target.value);
            }
          },
        };
      },
      inputClass() {
        return {
          'basic__input-control_dirty': this.value.length,
          'basic__input-control_disabled': this.disabled
        };
      },
    },
}
</script>

<style lang="postcss" scoped>
.basic__input {
  width: 100%;
  position: relative;
}

.basic__input-control {
  width: 100%;
  margin-bottom: 20px;
  position: relative;
  outline: none;
  background: none;
  padding: 7px 7px 7px 15px;
  border: 2px solid #000;

  &:focus {
    border-color: red;
  }
}

.basic__input-disabled {
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(white, 0.8);
  }
}
</style>