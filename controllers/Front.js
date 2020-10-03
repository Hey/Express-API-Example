const request = require('request')

module.exports = class {
  /**
   * The base url, home page.
   */
  static async index(req, res, next) {
    try {
      res.status(200).send({ msg: 'Welcome to the page.' })
    } catch (error) { res.error = error; next(); }
  }

  /**
   * This redirects to the
   * Github repository.
   */
  static async git(req, res, next) {
    try {
      res.redirect('https://github.com/Hey/Express-API-Example')
    } catch (error) { res.error = error; next(); }
  }

  static async fetch(req, res, next) {
    request('https://api.github.com/repos/Hey/Express-API-Example', { json: true, headers: { 'User-Agent': 'Hey' } }, function (apiErr, apiRes, apiBody) {
      try {
        res.status(200).send({ repo: apiBody.name, url: apiBody.html_url, description: apiBody.description })
      } catch (error) { res.error = error; next(); }
    })
  }
}
