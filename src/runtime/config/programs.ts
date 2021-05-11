import { Environment, ProgramConfig, Token } from './types';

const SEB_MAINNET: Token = {
  contract: 'KT1981tPmXh4KrUQKZpQKb55kREX7QGJcF3E',
  thumbnailUri: 'https://tzstats.com/logos/tz1R664EP6wjcM1RSUVJ7nrJisTpBW9QyJzP.png',
  decimals: 2,
  symbol: 'SEB',
  name: 'Sebuh.net',
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
