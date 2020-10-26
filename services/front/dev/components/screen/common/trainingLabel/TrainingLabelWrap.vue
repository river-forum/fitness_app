<template>
  <div class="label-wrapper flex">
    <TrainingLabelItem
      current-color="red"
      class="px-2"
      js-btn
      :class="[activeIdx === 1 ? 'is-active' : '']"
      @click.native="activeIdx = 1"
    />
    <TrainingLabelItem
      current-color="blue"
      class="px-2"
      js-btn
      :class="[activeIdx === 2 ? 'is-active' : '']"
      @click.native="activeIdx = 2"
    />
    <TrainingLabelItem
      current-color="green"
      class="px-2"
      js-btn
      :class="[activeIdx === 3 ? 'is-active' : '']"
      @click.native="activeIdx = 3"
    />
    <TrainingLabelItem
      current-color="yellow"
      class="px-2"
      js-btn
      :class="[activeIdx === 4 ? 'is-active' : '']"
      @click.native="activeIdx = 4"
    />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import TrainingLabelItem from './TrainingLabelItem'
export default defineComponent({
  data() {
    return {
      activeIdx: 1,
    }
  },
  components: {
    TrainingLabelItem,
  },
})
</script>
