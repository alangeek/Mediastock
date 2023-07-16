'use strict'

/**
 * Import
 * **/

import { ripple } from './utils/ripple.js'

/**
 * Header on-scroll state
 */

const /** {NodeElelement}**/ $header = document.querySelector('[data-header]')

window.addEventListener('scroll', () => {
  $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active')
})

/**
 * Add ripple effect
 */

const /** {NodeList} */ $rippleElems =
    document.querySelectorAll('[data-ripple]')

$rippleElems.forEach($rippleElem => ripple($rippleElem))
