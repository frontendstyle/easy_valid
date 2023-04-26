import {isArray, isObject, isFunction} from './validate'

const NOOP = () => undefined
const EMPTY_OBJ: { readonly [key: string]: any } = Object.freeze({})
const EMPTY_ARR: ReadonlyArray<any> = Object.freeze([])

const extend = Object.assign

const notEmptyObject = (target: any): boolean => isObject(target) && Object.keys(target).length >= 1
const notEmptyArray = (target: any): boolean => isArray(target) && target.length >= 1
const forEachFunction = (fns: Function[], args?: any): ReadonlyArray<any> => {
  const resultArray= []
  for (let i = 0; i < fns.length; i++) {
    const func = fns[i];
    if (isFunction(func)) {
      resultArray.push(func(args));
    } else {
      resultArray.push(func)
    }
  }
  return resultArray;
}
const joinArrayObjectField = (array: any[], delimiter: string, fieldName: string, defaultValue:string = ''): string =>{
  return notEmptyArray(array) ? array.map(val => val[fieldName]).join(delimiter) : defaultValue
}

const joinArrayLastNode = (array: any[], delimiter: string, defaultValue: string = ''): string => {
  return notEmptyArray(array) ? array.map(arr => arr.slice(-1)).join(delimiter) : defaultValue
}

export {
  NOOP,
  EMPTY_OBJ,
  EMPTY_ARR,
  extend,
  notEmptyObject,
  notEmptyArray,
  joinArrayObjectField,
  joinArrayLastNode,
  forEachFunction
}
