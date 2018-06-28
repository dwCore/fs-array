var test = require('tape')
var path = require('path')

var dws2 = require('@dwcore/dws2')
var dwfStreamArray = require('../')

function dwfStreamArrayStrings() {
  return dwfStreamArray.obj(['a', 'b', 'c'])
}

function dwfStreamArrayObjects() {
  return dwfStreamArray.obj([{
    name:'a'},{
    name:'b'},{
    name:'c'}])
}

test('DWFSTREAM-Array Tests: From String Array', function(t) {
  var dwStream = dwfStreamArrayStrings()

  var arr = []
  dwStream
    .pipe(dws2.obj(function(chunk, enc, cb){
      arr.push(chunk)
      cb()
    }, function(){
      t.equal(arr.length, 3)
      t.equal(arr[0], 'a')
      t.equal(arr[1], 'b')
      t.equal(arr[2], 'c')
      t.end()
    }))
})

test('DWFSTREAM-Array Tests: Object Array', function(t) {
  var dwStream = dwfStreamArrayObjects()

  var arr = []
  dwStream
    .pipe(dws2.obj(function(chunk, enc, cb){
      arr.push(chunk)
      cb()
    }, function(){
      t.equal(arr.length, 3)
      t.equal(arr[0].name, 'a')
      t.equal(arr[1].name, 'b')
      t.equal(arr[2].name, 'c')
      t.end()
    }))
})
