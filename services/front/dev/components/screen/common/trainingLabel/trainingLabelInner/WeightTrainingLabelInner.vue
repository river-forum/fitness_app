<template>
  <div class="label-inner">
    <InputDate />
    <InputTrainingName />
    <InputNumber current-type="weight" />
    <InputNumber current-type="times" />
    <InputNumber current-type="set" />
    <Button button-inner-text="記録する" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import InputDate from '../../../../ui/form/InputDate.vue'
import InputNumber from '../../../../ui/form/InputNumber.vue'
import InputTrainingName from '../../../common/inputTrainingName/InputTrainingName.vue'
import Button from '../../../../ui/button/Button.vue'
export default defineComponent({
  components: {
    InputDate,
    InputNumber,
    InputTrainingName,
    Button,
  },
})
</script>
