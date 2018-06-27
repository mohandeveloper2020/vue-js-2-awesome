new Vue({
  el: '#vue-app',
  data: {
    age: 25
  },
  methods: {
    add: function(inc){
      //this.age = this.age + inc;
      this.age += inc;
    },
    subtract: function(dec){
      //this.age = this.age - dec;
      this.age -= dec;
    },
    click: function(){
      alert('I am clicked');
    }
  }
});
