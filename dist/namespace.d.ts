/**
 * Namespace class
 */
export declare class Namespace {
    /** The name of the namespace */
    name: string;
    constructor(name: string);
    init(): void;
}
/**
 * Creates namespace
 * @param this Any object or a function
 * @param name The name, separate by '"[]. symbols, like "my.awesome.namespace[with][details]"
 */
export declare function namespace(this: any, name: string): Namespace;
/**
 * namespace function plugin for @iyuo/context ecosystem
 */
export declare var ns: (...args: any[]) => import("@iyuo/context").IPlugin<any, Namespace>;
