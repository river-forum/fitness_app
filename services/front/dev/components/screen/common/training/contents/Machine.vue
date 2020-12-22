<template>
  <div class="test">
    <InputDate />
    <div class="mt-20 accordion-wrapper">
      <Accordion accordion-title="肩" :arr-each-part="arrEachPart('肩')" />
      <Accordion accordion-title="腕" :arr-each-part="arrEachPart('腕')" />
      <Accordion accordion-title="胸" :arr-each-part="arrEachPart('胸')" />
      <Accordion accordion-title="お腹" :arr-each-part="arrEachPart('お腹')" />
      <Accordion accordion-title="背中" :arr-each-part="arrEachPart('背中')" />
      <Accordion accordion-title="腰" :arr-each-part="arrEachPart('腰')" />
      <Accordion accordion-title="脚" :arr-each-part="arrEachPart('脚')" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import MasterData from '@/data/master'
import Accordion from '../contents/machine/Accordion'

export default defineComponent({
  components: {
    Accordion,
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
