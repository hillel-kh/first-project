<template>
    <div class="wrapper">
      <h2 class="title">Текстовый редактор с автосохранением</h2>
      <div class="buttons">
        <button>TABLE</button>
        <button><b>BOLD</b></button>
        <button ><i>ITALICS</i></button>
        <button>IMAGE</button>
      </div>
      <div class="editor" contenteditable="true"></div>
    </div>
</template>

<style scoped>
body{ 
  font-family: "Dosis"; 
  font-size: 1.3em;
  line-height: 1.6em;
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
  text-align: center;
  margin: 10;
  font-family: Verdana, Arial, sans-serif;
  font-size: 24px;
  border: 1px solid;
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
button:hover, button:focus {
  cursor: pointer;
  outline: none;
}
</style>
