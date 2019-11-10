<template>
    <div class="wrapper" >
      <h2 class="title">Текстовый редактор с автосохранением</h2>
      <div class="buttons">
        <button @click="createTable()">TABLE</button>
        <button @click="makeBold()"><b>BOLD</b></button>
        <button @click="makeItalic()"><i>ITALIC</i></button>
        <button @click="createImg()">IMAGE</button>
      </div>
      <p 
        class="editor" 
        contenteditable="true" 
        v-model="text" 
        :class="{italic: isItalic, bold: isBold}"
        @keydown.ctrl.b="makeBold()"
        @keydown.ctrl.i="makeItalic()">
      </p>
    </div>
</template>

<script>
export default {
  data: () => ({
    text: '',
    isItalic: false,
    isBold: false
  }),
  methods: {
    makeItalic() {
      this.isItalic ? this.isItalic = false : this.isItalic = true
    },
    makeBold() {
      this.isBold ? this.isBold = false : this.isBold = true
    }
  }
} 
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.buttons {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.editor{  
  padding: 1em;
  background: #E6E6E6;
  border-radius: 3px;
  height: 50%;
  font-family: Verdana, Arial, sans-serif;
  font-size: 24px;
  border: 1px solid black;
}
.title {
  color:navy;
  text-align: center;
  font-size: 1.5em;
  margin-top: 5px;
}
button{
  /* height:80px;
  width:150px; */
  padding: 15px 10px;
}
.headline{
  font-size: 2em;
  text-align: center;
}
.wrapper {
  width: 100%;
  background: #FFF;
  padding: 1em;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  border-radius: 3px;
}
.bold {
  font-weight: bold;
}
.italic {
  font-style: italic;
} 
button:hover, button:focus {
  cursor: pointer;
  outline: none;
}
</style>
