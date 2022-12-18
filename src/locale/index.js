/* eslint-disable indent */
require('dotenv/config')

const locale = process.env.LANGUAGE === 'en_US:en'
  ? {
      messages: {
        general: {
          serverError: 'Server Error',
          incorrectParameter: 'Incorrect parameter',
        },
        resources: {
          companies: {
            created: 'Company created',
          },
          contracts: {
            created: 'Contract created',
            notFound: 'Contract not found',
            removed: 'Contract removed'
          },
          countries: {
            created: 'Country created',
            notFound: 'Country not found',
          },
          products: {
            created: 'Product created',
          },
        },
      },
    }
  : {}

module.exports = locale
