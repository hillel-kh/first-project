<template>
  <ProjectLayout title="Converter" bgcolor="yellow">

    <div id = "convert">
      <h1>Currency Converter</h1>  
      <span>Enter Amount:</span><input type = "number" v-model.number = "amount" placeholder = "Enter Amount" /><br/>
      <span>Convert From:</span>
     
      <select v-model = "convertfrom" style = "width:300px;font-size:25px;">
        <option v-for = "(a, index) in currencyfrom"  v-bind:value = "a.name">{{a.desc}}</option>
      </select>
      
      <span>Convert To:</span>
      
      <select v-model = "convertto" style = "width:300px;font-size:25px;">
        <option v-for = "(a, index) in currencyfrom" v-bind:value = "a.name">{{a.desc}}</option>
      </select><br/><br/>
      
      <span> {{amount}} {{convertfrom}} equals {{finalamount}} {{convertto}}</span>
    </div>
  </ProjectLayout>
</template>

<script>
import ProjectLayout from './ProjectLayout.vue';

 export default {
  components: { ProjectLayout },
  el: '#convert',
  data: {
    name:'',
    currencyfrom : [
      { name:"USD", desc:"US Dollar" },
      { name:"EUR", desc:"Euro" },
      { name:"UAH", desc:"UA Hrivna" }
 ],
 convertfrom: "UAH",
 convertto:"USD",
 amount :" "
 },
 computed :{
 finalamount:function() {
 var to = this.convertto;
 var from = this.convertfrom;
 var final;
 switch ( from ) {
  case "UAH":
    if (to == "USD") {
  final = this.amount * 0.042;
 }
 if (to == "EUR") {
  final = this.amount * 0.04;
 }
 if (to == "UAH") {
  final = this.amount;
 }
 break;
 case "USD":
 if (to == "UAH") {
  final = this.amount * 23.88;
 }
 if (to == "EUR") {
  final = this.amount * 0.84;
 }
 if (to == "USD") {
  final = this.amount;
 }
 break;
 case "EUR":
 if (to == "UAH") {
  final = this.amount * 26.49;
 }
 if (to == "USD") {
  final = this.amount * 1.19;
 }
 if (to == "EUR") {
  final = this.amount;
 }
 break;
 }
 return final;
}
  }
    };
</script>

 <style scoped>
 #convert{
    padding: 20px 15px 15px 15px;
    margin: 0 0 25px 0;
    width: auto;
    background-color: #e7e7e7;
 }
 span, option, input {
    font-size:25px;
 }
 </style>