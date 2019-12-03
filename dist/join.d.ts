import { IPlugin } from "@iyuo/context";
/**
 * Join Types
 */
export declare enum JoinTypes {
    none = 0,
    left = 8,
    right = 1,
    midLeft = 4,
    midRight = 2,
    midMerge = 6,
    innerJoin = 6,
    leftJoin = 14,
    rightJoin = 7,
    fullJoin = 15
}
export declare function join<TContext, TJoinObject>(joinType: JoinTypes, withObject: TJoinObject): IPlugin<TContext, TContext & TJoinObject>;
