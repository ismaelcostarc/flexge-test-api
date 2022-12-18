module.exports = function createRoutes(app) {
  const resources = ['user', 'company', 'country', 'contract', 'product']
  resources.map(resource =>
    app.use(`/api/${resource}`, require(`./src/${resource}/routes`))
  )
}
