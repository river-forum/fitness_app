<template>
  <div class="test">
    <InputDate />
    <div class="mt-20 accordion-wrapper">
      <AccordionItem accordion-title="肩" :arr-each-part="arrEachPart('肩')" />
      <AccordionItem accordion-title="腕" :arr-each-part="arrEachPart('腕')" />
      <AccordionItem accordion-title="胸" :arr-each-part="arrEachPart('胸')" />
      <AccordionItem
        accordion-title="お腹"
        :arr-each-part="arrEachPart('お腹')"
      />
      <AccordionItem
        accordion-title="背中"
        :arr-each-part="arrEachPart('背中')"
      />
      <AccordionItem accordion-title="腰" :arr-each-part="arrEachPart('腰')" />
      <AccordionItem accordion-title="脚" :arr-each-part="arrEachPart('脚')" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import MasterData from '@/data/master'
import InputDate from '../../../../ui/form/InputDate.vue'
import AccordionItem from '../../../../ui/accordion/AccordionItem.vue'

export default defineComponent({
  components: {
    InputDate,
    AccordionItem,
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
