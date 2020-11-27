<template>
  <div class="flex items-center justify-between pb-4 border-b form-wrap">
    <p class="text-2xl form-wrap__title">
      {{ value.title }}
    </p>
    <div class="flex items-center form-wrap__content">
      <input
        class="text-2xl text-right input"
        type="number"
        placeholder="---"
      />
      <div class="pl-4 text-2xl unit">
        {{ value.unit }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const currentComponent = computed(() => {
      switch (props.type) {
        case 'weight':
          return {
            title: '重さ',
            unit: 'kg',
          }
        case 'times':
          return {
            title: '回数',
            unit: '回',
          }
        case 'set':
          return {
            title: 'セット',
            unit: 'セット',
          }
        case 'distance':
          return {
            title: '距離',
            unit: 'km',
          }
      }
    })

    const value = currentComponent.value

    return {
      value,
    }
  },
})
</script>
