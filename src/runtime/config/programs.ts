import { Environment, ProgramConfig, Token } from './types';

const WRAP_MAINNET: Token = {
  contract: 'KT1981tPmXh4KrUQKZpQKb55kREX7QGJcF3E',
  thumbnailUri: 'https://tzstats.com/logos/tz1R664EP6wjcM1RSUVJ7nrJisTpBW9QyJzP.png',
  decimals: 2,
  symbol: 'SEB',
  name: 'Sebuh.net',
  id: 0
};

const WRAP_TESTNET: Token = {
  contract: 'KT1L1xYJit22TmuhDXaeng4AZDhRqZwcacNj',
  thumbnailUri: 'ipfs://Qma2o69VRZe8aPsuCUN1VRUE5k67vw2mFDXb35uDkqn17o',
  decimals: 8,
  symbol: 'WRAP',
  name: 'WRAP',
  id: 0
};

const programs: { [key in Environment]: ProgramConfig[] } = {
  MAINNET: [
    {
      reward: WRAP_MAINNET,
      farmingContract: 'KT1T8TFtJjhChvniW7deGyKL7kkKearqr8uE',
      pool: {
        contract: 'KT1981tPmXh4KrUQKZpQKb55kREX7QGJcF3E',
        base: WRAP_MAINNET,
        quote: 'xtz'
      }
    },

  ],
  TESTNET: [
    {
      reward: WRAP_TESTNET,
      farmingContract: 'KT1Tgn7wYwmjhTuSot5DPZ8U1hPn7cPzhnea',
      pool: {
        contract: 'KT1Srr8aWcxPTptoCNrWoXGQdrrNWN6Zx58X',
        base: WRAP_TESTNET,
        quote: 'xtz'
      }
    },
    {
      reward: WRAP_TESTNET,
      farmingContract: 'KT1SHNTj8icDmdXhaTuqe2AF5pE4mzMt6BXk',
      pool: {
        contract: 'KT1FkFC5ovz9UrGoQJLd5hyjmz6aSnASTDsx',
        base: {
          symbol: 'wDAI',
          name: 'Dai Stable coin',
          id: 0,
          contract: 'KT1DJwRryZ11dGDnqmmRtTiSsgxQDY4bw3j4',
          thumbnailUri:
            'ipfs:////QmVov6RtfRNzuQGvGKmhnABUsfCiDKvn31amg8DUxzowtM',
          decimals: 18
        },
        quote: 'xtz'
      }
    }
  ]
};

export default programs;
