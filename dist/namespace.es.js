import { pluginize } from '@iyuo/context';

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
var ns = pluginize(namespace);

export { Namespace, namespace, ns };
//# sourceMappingURL=namespace.es.js.map
