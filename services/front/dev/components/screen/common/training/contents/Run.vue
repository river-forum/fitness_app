<template>
  <div class="test">
    <InputDate />
    <ToggleBtn :button-inner-texts="['RUN', 'BIKE']" class="mt-12" />
    <InputNumber type="distance" class="mt-12" />
    <Button button-inner-text="記録する" class="mx-auto mt-16" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import InputDate from '../../../../ui/form/InputDate.vue'
import ToggleBtn from '../../../../ui/button/ToggleBtn.vue'
import InputNumber from '../../../../ui/form/InputNumber.vue'
import Button from '../../../../ui/button/Button.vue'

export default defineComponent({
  components: {
    InputDate,
    ToggleBtn,
    InputNumber,
    Button,
  },
})
</script>
