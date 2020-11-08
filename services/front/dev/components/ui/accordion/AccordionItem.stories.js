import AccordionItem from './AccordionItem.vue'

export default {
  title: 'ui/accordion/AccordionItem',
  component: AccordionItem,
}

export const HowToUse = () => ({
  components: { AccordionItem },
  template: `<div class="m-10">
  <AccordionItem accordionTitle="肩" />
  </div>`,
})
