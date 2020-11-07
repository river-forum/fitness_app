<template>
  <div class="flex items-center justify-between pb-4 border-b-2 form-wrap">
    <p class="text-3xl form-wrap__title">
      {{ value.title }}
    </p>
    <div class="flex items-center form-wrap__content">
      <input class="input" type="number" />
      <div class="pl-4 text-3xl unit">
        {{ value.unit }}
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    currentType: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const currentComponent = computed(() => {
      switch (props.currentType) {
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
