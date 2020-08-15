module.exports = async (req, res, next) => {
  try {
    if (!res.error) return next()
    console.log(`Error catched by error handler middleware: ${res.error}`)

    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode).json({
      error: true,
      stack: process.env.NODE_ENV === 'production' ? 'An error has ocurred.' : res.error.toString()
    });
  } catch (error) {
    console.log(`Error handler failed, handler error: ${error}\nReceived error: ${res.error}`)
  }
}