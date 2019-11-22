<template>
    <div class="wrapper" >
      <h2 class="title">Editor</h2>
      <div class="buttons">
        <button class="buttons__item" @click="insertTag('b')"><b>bold</b></button>
        <button class="buttons__item" @click="insertTag('i')"><i>italic</i></button>
        <button class="buttons__item" @click="createTable()">table</button>
        <button class="buttons__item" @click="insertTag('img')">img</button>
        <button class="buttons__item" @click="del()">delete</button>
      </div>
      <div 
        class="editor"
        contenteditable="true"
        autofocus>
      </div>
      <img src="http://www.imgworlds.com/wp-content/uploads/2015/12/18-CONTACTUS-HEADER.jpg" alt="" class="adaptive">
      <button class="push-button">push</button>
    </div>
</template>

<script>
export default {
  methods: {
    insertTag(tagName) {
      // const selection = window.getSelection()
      // const range = selection.getRangeAt(0)
      // const tag = document.createElement(tagName)
      // if (tagName === 'img') {
      //   const link = prompt('Link to the img')
      //   if(!link) return
      //   tag.setAttribute('src', link)
      // }
      // range.surroundContents(tag)
      // const deleteRange = range.selectNode(tag)
      const selection = window.getSelection() 
      const range = selection.getRangeAt(0) 
      const tag = document.createElement(tagName);
      if (tagName === 'img') {
        const link = prompt('Link to the img')
        if(!link) return
        tag.setAttribute('src', link)
        tag.className = 'adaptive'
      }
      tag.appendChild(range.extractContents());
      range.insertNode(tag);
    },
    del() {
      const selection = window.getSelection()
      const range = selection.getRangeAt(0)
      range.deleteContents()
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
  min-height: 300px;
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
.adaptive {
  height: auto;
  width: 100%;
  max-width: 720px;
}
</style>
