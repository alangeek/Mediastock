'use strict'

/**
 * Add event on multiple elements
 * @param {NodeList} NodeList
 * @param {String} Event Type eg. "click"
 * @param {Function} Callback function
 */

export const addEventOnElements = function ($elements, eventType, callback) {
  $elements.forEach($element => $element.addEventListener(eventType, callback))
}
