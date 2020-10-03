module.exports = async (req, res, next) => {

  res.status(404).send({
    error: true,
    message: 'The requested url was not found.'
  });

}
