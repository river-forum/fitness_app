<template>
  <div class="bg-white machine-card">
    <figure class="relative overflow-hidden machine-card__img-wrap">
      <img
        src="https://placehold.jp/730x390.png"
        class="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full m-auto machine-card__img"
        alt=""
      />
    </figure>
    <div class="flex items-center text-white machine-card__label">
      <figure class="flex items-center justify-center py-8 machine-card__icon">
        <img
          src="assets/icons/dumbbell.svg"
          alt=""
          width="25rem"
          height="25rem"
        />
      </figure>
      <p class="py-8 pl-4 machine-card__title">マシーン名</p>
    </div>
    <div class="mt-6 machine-card__body">
      <div class="px-8 l-container">
        <InputDate />
        <InputNumber type="weight" class="mt-6" />
        <InputNumber type="times" class="mt-6" />
        <InputNumber type="set" class="mt-6" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.machine-card {
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  overflow: hidden;
  &__img-wrap {
    padding-bottom: 60%;
  }

  &__icon {
    background: #718ec5;
    width: 10rem;
    height: 100%;
  }

  &__label {
    background: #9bb0d6;
  }
}
</style>
