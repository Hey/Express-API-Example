const request = require('request')

module.exports = class {

  /**
   * The base url, home page.
   * 
   * @param {Object} req    - Request info we received.
   * @param {Object} res    - Response we send back
   * @param {function} next - Used to forward to next handler. 
   */
  static async Index(req, res, next) {
    try {

      res.status(200).send({ msg: 'Welcome to the page.' })

    } catch (error) { res.error = error; next(); }
  }

  /**
   * This redirects to the
   * Github repository.
   * 
   * @param {Object} req    - Request info we received.
   * @param {Object} res    - Response we send back
   * @param {function} next - Used to forward to next handler. 
   */
  static async Git(req, res, next) {
    try {

      res.redirect('https://github.com/Hey/Express-API-Example')
      
    } catch (error) { res.error = error; next(); }
  }

  static async Fetch(req, res, next) {
    request('https://api.github.com/repos/Hey/Express-API-Example', { json: true, headers: { 'User-Agent': 'Hey' } }, function (apiErr, apiRes, apiBody) {
      try {
        res.status(200).send({ repo: apiBody.name, url: apiBody.html_url, description: apiBody.description })
      } catch (error) { res.error = error; next(); }
    })
  }
}
