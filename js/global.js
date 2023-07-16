'use strict'

/**
 * Header on-scroll state
 */

const /** {NodeElelement}**/ $header = document.querySelector('[data-header]')

window.addEventListener('scroll', () => {
  $header.classList[window.scrollY > 50 ? 'add' : 'remove']('active')
})
