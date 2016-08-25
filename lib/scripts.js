'use strict'

var $ = require('jQuery');


function showHeader() {
  $('#menu-button-header-nav').hide();
  $('#header-nav').show();
}

function hideHeader() {
  $('header').hide();
  $('#menu-button-header-nav').show();
}

$('#menu-button-header-nav').on('click', function() {
  showHeader();
});

$('header').on('mouseleave', function() {
  hideHeader();
});
