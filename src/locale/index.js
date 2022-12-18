/* eslint-disable indent */
require('dotenv-safe').config()

const locale =
  process.env.LANGUAGE === 'en_US:en'
    ? {
        messages: {
          general: {
            serverError: 'Server Error',
            incorrectParameter: 'Incorrect parameter',
            requiredData: 'is required',
          },
          authentication: {
            noToken: 'No token provided',
            failed: 'Failed to authenticate token'
          },
          resources: {
            companies: {
              created: 'Company created',
            },
            contracts: {
              created: 'Contract created',
              notFound: 'Contract not found',
              removed: 'Contract removed',
            },
            countries: {
              created: 'Country created',
              notFound: 'Country not found',
            },
            products: {
              created: 'Product created',
            },
            users: {
              notFound: 'User does not exist',
              wrongCredentials: 'Wrong password',
              logged: 'User is logged'
            },
          },
        },
      }
    : {}

module.exports = locale
