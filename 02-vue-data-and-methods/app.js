new Vue({
  el: '#vue-app',
  data: {
    name: 'Mohan',
    job: 'UI Developer'
  },
  methods: {
    greet(time) {
      return 'Good ' + time + ' ' + this.name
    }
  }
});
