<template>
  <nav class="w-9/12 menu">
    <ul class="menu__inner">
      <li class="menu__ls">
        <nuxt-link class="block px-4 py-5" to="/"> お知らせ </nuxt-link>
      </li>
      <li class="menu__ls">
        <nuxt-link class="block px-4 py-5" to="/"> レッスン/動画 </nuxt-link>
      </li>
      <li class="menu__ls">
        <nuxt-link class="block px-4 py-5" to="/"> BeatFit 無料体験 </nuxt-link>
      </li>
      <li class="menu__ls">
        <nuxt-link class="block px-4 py-5" to="/"> スタジオ参加履歴 </nuxt-link>
      </li>
      <li class="menu__ls">
        <nuxt-link class="block px-4 py-5" to="/"> 契約情報 </nuxt-link>
      </li>
      <li class="menu__ls">
        <nuxt-link class="block px-4 py-5" to="/"> 各種お手続き </nuxt-link>
      </li>
      <li class="menu__ls">
        <nuxt-link class="block px-4 py-5" to="/"> アプリ設定 </nuxt-link>
      </li>
      <li class="menu__ls">
        <nuxt-link class="block px-4 py-5" to="/"> ヘルプ </nuxt-link>
      </li>
      <li class="menu__ls">
        <nuxt-link class="block px-4 py-5" to="/"> お問い合わせ </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.menu {
  &__ls:nth-of-type(odd) {
    a {
      background: rgba(#000, 0.1);
    }
  }
}
</style>
