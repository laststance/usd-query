import type { EventNameString } from './types'
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// @ts-expect-error add certain types later
Node.prototype.on = function (
  name: EventNameString,
  fn: EventListenerOrEventListenerObject,
) {
  this.addEventListener(name, fn)
}

// @ts-expect-error add certain types later
NodeList.prototype.on = NodeList.prototype.addEventListener = function (
  name: EventNameString,
  fn: EventListenerOrEventListenerObject,
) {
  this.forEach(function (elem) {
    // @ts-expect-error add certain types later
    elem.on(name, fn)
  })
}

export { $, $$ }
