import Vue from 'vue'
import Accordian from './components/Accordian'
import List from './components/List'


// CONFIG TUTORIAL: https://www.youtube.com/watch?v=PaHZTeN_wSY

window.axios = require('axios');

 new Vue({
   el: "#app",

   components: {
     Accordian,
     List,
   },

   mounted: function(){
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => this.posts = response.data)
      .catch(error => this.posts = [{title: "No Posts Found"}]);
   },

   data: {
     posts: null,
     title: "Vue Do",
     item: "",
     items: ["item 1", "item 2", "item 3"],
     isVisible: false,
     things: [
       { text: "One", checked: true },
       { text: "Two", checked: true },
       { text: "Three", checked: false },
     ],
     price: 100,
     workers: [
       { id: 1, name: "Ken", description: "Ken is cool." },
       { id: 2, name: "Glen", description: "Glen is ten." },
       { id: 3, name: "Suzie", description: "Suzie is a doozy." },
       { id: 4, name: "Beth", description: "Beth is the harbringer of Death." },
     ],
   },
   computed: {
     tax: function() {
       return this.price * 0.12;
     },
     calculateTotal: function() {
       return parseInt(this.price) + this.tax;
     },
   },
   methods: {
     moneyFormat: function(price) {
       return "$" + price;
     },
   },
 });