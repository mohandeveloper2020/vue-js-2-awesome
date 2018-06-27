new Vue({
  el: '#vue-app',
  data: {

  },
  methods: {
    logName: function(){
      console.log('Name with keyup');
    },
    logAge: function(){
      console.log('Age after pressing enter key');
    },
    logCity: function(){
      console.log('Keyup left');
    }
  }
});
