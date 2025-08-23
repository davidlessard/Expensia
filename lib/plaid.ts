import { Configuration, PlaidApi, PlaidEnvironments } from 'plaid';

type PlaidEnvironmentsKeys = keyof typeof PlaidEnvironments;

const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV as PlaidEnvironmentsKeys],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
})

export const plaidClient = new PlaidApi(configuration);