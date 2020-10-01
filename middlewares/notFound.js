module.exports = async (req, res, next) => {
  return res.status(404).send('The requested url was not found.')
}
