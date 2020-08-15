module.exports = class {

  /**
   * The base url, home page.
   */
  static async index(req, res, next) {
    try {
      res.status(200).send({msg: 'Welcome to the page.'}) 
    } catch (error) { res.error = error; next() } 
  }


  /**
   * This redirects to the 
   * Github repository.
   */
  static async git(req, res, next) {
    try {
      res.redirect('https://github.com/Hey/Express-API-Example')
    } catch (error) { res.error = error; next() } 
  }
  
}