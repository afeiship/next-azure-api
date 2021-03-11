/*!
 * name: @jswork/next-rc
 * description: React components quick path for next.
 * homepage: https://github.com/afeiship/next-rc
 * version: 1.0.0
 * date: 2021-03-11 10:15:03
 * license: MIT
 */

(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var Blank = require('@jswork/react-blank').default;
  var RSM = require('@jswork/react-status-manager').default;
  var RCM = require('@jswork/react-condition-manager').default;
  var Ife = require('@jswork/react-if-else').default;
  var Layout = require('@jswork/react-layout-trbla').default;
  var DEFAULT_OPTIONS = {
    blank: Blank,
    rsm: RSM,
    rcm: RCM,
    ife: Ife,
    layout: Layout
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
