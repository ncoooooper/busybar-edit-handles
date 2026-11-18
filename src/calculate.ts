import type {Result} from "@shared/worksheet";

export function calculate(v:number[]):Result[]{
const [tail,head,want,fps]=v,limit=2*Math.min(tail,head),fit=Math.min(limit,want);
 return [{name:"Centered max",value:limit+"fr",detail:["Limiting "+(tail<head?"outgoing":tail>head?"incoming":"both"),"Even-length centered blend"]},
 {name:"Usable blend",value:fit+"fr",detail:[(fit/fps).toFixed(2)+" seconds","Short by "+(want-fit)+" frames"],fraction:fit/Math.max(1,want)},
 {name:"Asymmetric max",value:(tail+head)+"fr",detail:["Shift edit alignment","Tail "+tail+" / head "+head]}];
}
