'use strict'

$(function() {
  // Page effect
  $('body .container').fadeOut(0).fadeIn('slow')

  // Get package info
  ipcRenderer.send('packageInfo')

  // On service add
  ipcRenderer.on('serviceAdd', function(event, data) {
    var tableAdd = '<tr><td>' + data.service + '</td><td>' + data.email + '</td><td>' + data.password + '</td><td></td></tr>'
    $('table > tbody:last-child').append(tableAdd)
    $('.modal .btn[type=button]').click()
  })
})
