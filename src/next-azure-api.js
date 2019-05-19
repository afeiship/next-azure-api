(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var NxAxios = nx.Axios || require('next-axios');

  var NxAzureApi = nx.declare('nx.AzureApi', {
    methods: {
      init: function(inOptions) {}
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAzureApi;
  }
})();
