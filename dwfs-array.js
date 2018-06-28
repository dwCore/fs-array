var dwStreamWrap = require('@dwcore/dws2wrap')

var dwStreamArray = module.exports = function(opts, arr){
	if(arguments.length<=1){
		arr = opts
		opts = {}
	}
	var reduce = [].concat(arr)
	return dwStreamWrap(opts, function(size, cb){
		if(reduce.length<=0) return cb(null, null)
		cb(null, reduce.shift())
	})
}

dwStreamArray.obj = function(arr){
	return dwStreamArray({
		objectMode:true
	}, arr)
}
