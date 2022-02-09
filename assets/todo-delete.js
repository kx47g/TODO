'use strict';

const TodoDelete = {


  methods: {
    // Controller に 1 つの関数を用意
    async DELETEtodo() {
      for (let item of current) {
      // API にリクエストを行う
      // 登録処理 ⇒ /todolist かつ POST
      await fetch(`${API_ROOT}/todo/${item}`, {
        method: 'DELETE',
        });
      }
      window.location.href = 'index.html';
    },
  },
  /*html*/
  template: `<div class="center">
  <!--
    @click により、クリックしたときの処理が登録できる
    ここでは、事前に Controller に作成した onRegister 関数を呼び出している
    -->
    <button @click="DELETEtodo" id="addition">削除</button>
  </div>
  `,
};
