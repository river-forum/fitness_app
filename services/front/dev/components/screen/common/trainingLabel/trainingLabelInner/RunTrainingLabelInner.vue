<template>
  <div class="label-inner">
    <InputDate />
    <InputNumber current-type="distance" />
    <Button button-inner-text="記録する" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import InputDate from '../../../../ui/form/InputDate.vue'
import InputNumber from '../../../../ui/form/InputNumber.vue'
import Button from '../../../../ui/button/Button.vue'
export default defineComponent({
  components: {
    InputDate,
    InputNumber,
    Button,
  },
})
</script>
