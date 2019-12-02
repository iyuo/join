(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@iyuo/context')) :
  typeof define === 'function' && define.amd ? define(['exports', '@iyuo/context'], factory) :
  (global = global || self, factory(global.iyuo = {}, global.context));
}(this, (function (exports, context) { 'use strict';

  /**
   * Namespace class
   */
  var Namespace = /** @class */ (function () {
      function Namespace(name) {
          this.name = name;
          this.init();
      }
      Namespace.prototype.init = function () { };
      return Namespace;
  }());
  /**
   * Creates namespace
   * @param this Any object or a function
   * @param name The name, separate by '"[]. symbols, like "my.awesome.namespace[with][details]"
   */
  function namespace(name) {
      var nsObj = this, p = name.split(/[\[\]."']/gi).filter(function (x) { return !!x && !!x.trim(); });
      for (var i = 0; i < p.length; i++) {
          nsObj[p[i]] = nsObj[p[i]] || new Namespace(p[i]);
          nsObj = nsObj[p[i]];
      }
      return nsObj;
  }
  /**
   * namespace function plugin for @iyuo/context ecosystem
   */
  var ns = context.pluginize(namespace);

  exports.Namespace = Namespace;
  exports.namespace = namespace;
  exports.ns = ns;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=namespace.js.map
