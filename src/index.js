(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var RSM = require('@jswork/react-status-manager').default;
  var RCM = require('@jswork/react-condition-manager').default;
  var Ife = require('@jswork/react-if-else').default;
  var DEFAULT_OPTIONS = {
    rsm: RSM,
    rcm: RCM,
    ife: Ife,
  };

  nx.rc = function (inOptions, inPath) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
    var path = inPath || '$rc';
    nx.set(nx, path, options);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.rc;
  }
})();
