import { Environment, ProgramConfig, Token } from './types';

const SEB_MAINNET: Token = {
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
      reward: SEB_MAINNET,
      farmingContract: 'KT1T8TFtJjhChvniW7deGyKL7kkKearqr8uE',
      pool: {
        contract: 'KT1S4WyNiYPoYheihysddNh5hojNFdiVBwZL',
        base: SEB_MAINNET,
        quote: 'xtz'
      }
    },
  ],
};

export default programs;
