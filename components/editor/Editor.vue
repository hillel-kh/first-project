<template>
    <div class="wrapper" >
      <h2 class="title">Editor</h2>
      <div class="buttons">
        <button class="buttons__item" @click="makeBold()"><b>bold</b></button>
        <button class="buttons__item" @click="makeItalic()"><i>italic</i></button>
        <button class="buttons__item" @click="createTable()">table</button>
        <button class="buttons__item" @click="createImg()">img</button>
      </div>
      <textarea 
        class="editor"
        contenteditable="true"
        rows="10">
      </textarea>
      <button class="push-button">push</button>
    </div>
</template>

<script>
export default {
  methods: {
    makeItalic() {

    },
    makeBold() {
      const selection = window.getSelection();
      console.log(selection.toString());
      const replacement = document.createElement('b');
      replacement.innerText = 'hi';
      console.log(replacement);
      const range = selection.getRangeAt(0);
      console.log(range);
      range.surroundContents(replacement);
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
}
.buttons__item{
  padding: 5px 10px;
  font-size: 20px;
  color: white;
  background-color: rgb(129, 129, 129);
  border: 1px solid rgb(153, 153, 153);
  border-bottom: none;
  width: 25%;
}
.push-button {
  padding: 5px 10px;
  font-size: 20px;
  color: white;
  background-color: rgb(129, 129, 129);
  border: 2px solid rgb(153, 153, 153);
  width: 100%;
}
.editor{  
  padding: 10px;
  background: white;
  height: 50%;
  font-family: Verdana, Arial, sans-serif;
  font-size: 24px;
  border: 1px solid rgb(153, 153, 153);
  width: 100%;
  resize: none;
}
.title {
  color:white;
  text-align: center;
  font-size: 1.5em;
  margin-top: 5px;
}
.headline{
  font-size: 2em;
  text-align: center;
}
.wrapper {
  width: 100%;
  background: rgb(126, 125, 125);
  padding: 1em;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  border-radius: 3px;
}
button:hover, button:focus {
  cursor: pointer;
  outline: none;
}
</style>
