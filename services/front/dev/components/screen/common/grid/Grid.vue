<template>
  <div class="grid grid-cols-2">
    <Item />
    <Item class="bg-gray-300" />
    <Item class="bg-gray-300" />
    <Item />
    <Item />
    <Item class="bg-gray-300" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import Item from './item/Item'

export default defineComponent({
  components: {
    Item,
  },
})
</script>
