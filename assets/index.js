'use strict';

let current = new Set()
var app;
// HTML の先頭で index.js を読み込んでいるので、
// Vue.js の初期化タイミングをページの準備が完了したとき (≒ DOMContentLoaded) にあわせる
document.addEventListener('DOMContentLoaded', () => {
  app = Vue.createApp({
    components: {
      TodoList,
      TodoInput,
      TodoDelete,
      Edittag,
    },
  });
  app.mount('#vue');
});
