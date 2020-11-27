<template>
  <div class="test">
    <InputDate />
    <InputTrainingName class="mt-12" />
    <Button button-inner-text="記録する" class="mx-auto mt-12" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import InputDate from '../../../../ui/form/InputDate.vue'
import InputTrainingName from '../../inputTrainingName/InputTrainingName.vue'
import Button from '../../../../ui/button/Button.vue'

export default defineComponent({
  components: {
    InputDate,
    InputTrainingName,
    Button,
  },
})
</script>
