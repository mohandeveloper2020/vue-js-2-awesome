new Vue({
  el: '#vue-app',
  data: {
    name: 'Mohan',
    job: 'UI Developer',
    url: 'http://www.google.com',
    urlTag: '<a href="http://www.twitter.com">Twitter</a>'
  },
  methods: {
    greet(time) {
      return 'Good ' + time + ' ' + this.name
    }
  }
});
