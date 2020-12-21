<template>
  <div class="test">
    <InputDate />
    <div class="mt-20 accordion-wrapper">
      <TrainingAccordion
        accordion-title="肩"
        :arr-each-part="arrEachPart('肩')"
      />
      <TrainingAccordion
        accordion-title="腕"
        :arr-each-part="arrEachPart('腕')"
      />
      <TrainingAccordion
        accordion-title="胸"
        :arr-each-part="arrEachPart('胸')"
      />
      <TrainingAccordion
        accordion-title="お腹"
        :arr-each-part="arrEachPart('お腹')"
      />
      <TrainingAccordion
        accordion-title="背中"
        :arr-each-part="arrEachPart('背中')"
      />
      <TrainingAccordion
        accordion-title="腰"
        :arr-each-part="arrEachPart('腰')"
      />
      <TrainingAccordion
        accordion-title="脚"
        :arr-each-part="arrEachPart('脚')"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import MasterData from '@/data/master'
import InputDate from '../../../../ui/form/InputDate.vue'
import TrainingAccordion from '../../../common/trainingLabel/trainingLabelInner/trainingAccordion/TrainingAccordion'

export default defineComponent({
  components: {
    InputDate,
    TrainingAccordion,
  },
  setup() {
    function arrEachPart(name) {
      const partsNameArr = MasterData.filter((data) => name === data.partsName)

      return partsNameArr
    }

    return {
      arrEachPart,
    }
  },
})
</script>
