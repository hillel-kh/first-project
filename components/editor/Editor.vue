<template>
    <CenteredLayout>
        <div class="icon-block">
            <ul>
                <li><button><a>TABLE</a></button></li>
                <li><button><a>BOLD</a></button></li>
                <li><button><a>ITALICS</a></button></li>
                <li><button><a>IMAGE</a></button></li>
            </ul>

            <h2>Текстовый редактор с автосохранением</h2>
            <div class="text">
                <div id="editor" contenteditable="true"></div>
            </div>
        </div>
    </CenteredLayout>
</template>

<script>
export default {
 

    // если в нашем хранилище уже что-то есть…
    if (localStorage.getItem('editor') !== null) {
        // …то отображаем его содержимое в нашем редакторе
        document.getElementById('editor').innerHTML = localStorage.getItem('text_in_editor');
      }
       
    // отслеживаем каждое нажатие клавиши и при каждом нажатии выполняем команду
    document.addEventListener('keydown', function(e) {
    
      // записываем содержимое нашего редактора в хранилище
      localStorage.setItem('editor', document.getElementById('editor').innerHTML);
    });

}
</script>

<style scoped>

#editor{  
    padding: 1em;
    background: #E6E6E6;
    border-radius: 3px;
    height: 50%; 
    width: 100%;
    text-align: center;
    margin: 10;
    font-family: Verdana, Arial, sans-serif;
    font-size: 24px;
    border: 1px solid;
}
h2{
    color:navy;
    text-align: center;
}
.icon-block{
    display:inline-block;
    
}
button{
    height:80px;
    width:150px;
    
}
ul{
    list-style:none;
    display:flex;
    padding:0;

}
li{
    display:inline;
    margin: 20px;
}





body{ 
  font-family: "Dosis"; 
  font-size: 1.3em;
  line-height: 1.6em;
}

.headline{
  font-size: 2em;
  text-align: center;
}

#wrapper {
  width: 600px;
  background: #FFF;
  padding: 1em;
  margin: 1em auto;
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  border-radius: 3px;
}



button:hover, button:focus {
  cursor: pointer;
  outline: none;
}


</style>
<script>
export default {
  data: () => ({ counter: 0 }),
  methods: {
    increment() { this.counter++; },
    decrement() { this.counter--; }
  }
  
}
</script>