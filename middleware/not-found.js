const notFound = (req, res) => res.status(404).send({success: false, msg: 'Route not Exist'})

module.exports = notFound
