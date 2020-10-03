module.exports = class {

  /**
   * A simple welcome for the actual API
   * 
   * @param {Object} req    - Request info we received.
   * @param {Object} res    - Response we send back
   * @param {function} next - Used to forward to next handler. 
   */
  static async Index(req, res, next) {
    try {
      res.status(200).json({
        msg: 'Welcome to the API',
      })
    } catch (error) { res.error = error; next(); }
  }

}
