exports.getTestFunction = function(req, res, next) {
  return res.json({hello: 'Hello!'})
}

exports.postTestFunction = function(req, res, next) {
  console.log(req.body.data)
  return res.send('Thanks!')
}
