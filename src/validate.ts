const isObject = (target: any): boolean => target !== null && typeof target === 'object'
const isString = (target: any): boolean => typeof target === 'string'
const isFunction = (val: any): boolean => typeof val === 'function'
const isArray = (target: any): boolean => Array.isArray(target)

const hasChanged = (value: any, oldValue: any): boolean => !Object.is(value, oldValue)
const hasOwnProperty = Object.prototype.hasOwnProperty
const hasOwn = (target: object, key: string | symbol): boolean => hasOwnProperty.call(target, key)

const camelizeRE = /-(\w)/g
const hyphenateRE = /\B([A-Z])/g

const camelize = (str: string): string => str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ''))
const hyphenate = (str: string): string => str.replace(hyphenateRE, '-$1').toLowerCase()
const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1)

export { isObject, isString, isFunction, isArray, hasChanged, hasOwn, camelize, hyphenate, capitalize }
