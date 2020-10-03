module.exports = class {

  /**
   * A simple welcome for the actual API
   */
  static async Index(req, res, next) {
    try {
      res.status(200).json({
        msg: 'Welcome to the API',
      })
    } catch (error) { res.error = error; next(); }
  }

}
