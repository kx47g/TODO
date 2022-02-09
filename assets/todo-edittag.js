'use strict';

const Edittag = {
  data() {
    // Controller に 3 つの変数を用意
    return {
      tag: '',
    };
  },

  methods: {
    // Controller に 1 つの関数を用意
     
      async onRegister2(){
      // tag という "一時" 変数を用意し、内容を保存
      const tag = this.tag;
      

      // API にリクエストを行う
      // 登録処理 ⇒ /todolist かつ POST
      for (let item of current) {
      await fetch(`${API_ROOT}/todo/${item}/tags`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
        },
        // content のデータと、deadline のデータを所定の形式でサーバに送信
        body: JSON.stringify({
          tag,
        }),
      });
      }
      window.location.href = 'start-screen.html'; // 通常の遷移
     },
     async onRegister(){
      // tag という "一時" 変数を用意し、内容を保存
      const tag = this.tag;
      

      // API にリクエストを行う
      // 登録処理 ⇒ /todolist かつ POST
      for (let item of current) {
      await fetch(`${API_ROOT}/todo/${item}/tags`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
        },
        // content のデータと、deadline のデータを所定の形式でサーバに送信
        body: JSON.stringify({
          tag,
        }),
      });
      }
      window.location.href = 'start-screen.html';
     },
     Jumpstart(){
      window.location.href = 'start-screen.html'; // 通常の遷移
    },
    },
  /*html*/
  template: `
  <div>
    <!--
    v-model に各 Controller 上の変数と、入力内容同期する
    (content, date, time の 3 つ分)
    -->
    <div id="tag">タグ名: <input v-model="tag" type="text"></div>
    <!--
    @click により、クリックしたときの処理が登録できる
    ここでは、事前に Controller に作成した onRegister 関数を呼び出している
    -->
    <button @click="onRegister" id="addition">タグを追加</button>
    <button @click="onRegister2" id="addition">タグを削除</button>
  </div>
  `,
};