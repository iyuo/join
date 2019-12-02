import { pluginize } from "@iyuo/context";
/**
 * Namespace class
 */
export class Namespace {
  /** The name of the namespace */
  public name: string;
  constructor(name: string) {
    this.name = name;
    this.init();
  }

  public init() {}
}

/**
 * Creates namespace
 * @param this Any object or a function
 * @param name The name, separate by '"[]. symbols, like "my.awesome.namespace[with][details]"
 */
export function namespace(
  this: any,
  name: string
): Namespace {
  let nsObj = this,
    p = name.split(/[\[\]."']/gi).filter(x => !!x && !!x.trim());
  for (var i = 0; i < p.length; i++) {
    nsObj[p[i]] = nsObj[p[i]] || new Namespace(p[i]);
    nsObj = nsObj[p[i]];
  }
  return nsObj;
}

/**
 * namespace function plugin for @iyuo/context ecosystem
 */
export var ns = pluginize(namespace);