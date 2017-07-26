const handleError = (res) => (err) => {
  console.error(err)
  res.json({error: err.name, message: err.message})
}

module.exports = {
  handleError
}
