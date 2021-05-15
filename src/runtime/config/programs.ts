import { Environment, ProgramConfig, Token } from './types';

const WRAP_MAINNET: Token = {
  contract: 'KT1981tPmXh4KrUQKZpQKb55kREX7QGJcF3E',
  thumbnailUri: 'ipfs://QmPy2hwffGsaWBfpJgv97TrZzfkFkt4P35NScrnMLQPd6d',
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
        {
      reward: WRAP_MAINNET,
      farmingContract: 'KT1NvQJYeMCdEtzF45bs3UNpMmjfY97u2qW2',  //insert forked farming contract here. need to make. 
      pool: {
        contract: 'KT1J4m9nxZQSKDwRNahAL1fziuwW9o5hb8Tb',  // insert bezos Quipuswap contract here. check.
        base: {
          symbol: 'Bezos',
          name: 'Tezos Till We Bezos',
          id: 0,
          contract: 'KT1ETAtdv2PTvXwbGGsWWjnswfagdUc77hiP',  //insert bezos token contract here. checked.
          thumbnailUri:
            'ipfs://QmfEbirSA7indrEzjFAtJ589oChBFrqLio9kwpJwR4ttHx',  //insert bezos ipfs link here. checked, add to pinata. checked.
          decimals: 0
        },
        quote: 'xtz'
      }
    },

            {
      reward: WRAP_MAINNET,
      farmingContract: 'KT1zvQJYeMCdEtzF45bs3UNpMmjfY97u2qW2',  //insert forked farming contract here.
      pool: {
        contract: 'KT1T1PeeRDbsKDYM2nX8JjJ1kkAhHh5FnjgC',  // insert  Quipuswap contract here. BohnerDyldoh VX Pro BDVXP KT1T1PeeRDbsKDYM2nX8JjJ1kkAhHh5FnjgC
        base: {
          symbol: 'BDVXP',
          name: 'BohnerDyldoh VX Pro',
          id: 0,
          contract: 'KT1C755xS3TLH4HEWaCJvWuoHTcytTBdEjgS',  //insert Bart token contract here.
          thumbnailUri:
            'ipfs://QmVbkmsnie44NUMFzhamLcDKTFAzVbPafYGLna65KfKCHK',  //insert Bohner ipfs link here. check
          decimals: 6
        },
        quote: 'xtz'
      }
    },
    
    //testing nft staking
            {
      reward: WRAP_MAINNET,
      farmingContract: 'KT1gvQJYeMCdEtzF45bs3UNpMmjfY97u2qW2',  //insert forked farming contract here.
      pool: {
        contract: 'KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton',  // insert  Quipuswap contract here. BohnerDyldoh VX Pro BDVXP KT1T1PeeRDbsKDYM2nX8JjJ1kkAhHh5FnjgC
        base: {
          symbol: 'OBJKT#4589',
          name: 'pepe reeeeeeeeeeeeeeeeeeeeeeeeeeee #1',
          id: 4569,
          contract: 'KT1RJ6PbjHpwc3M5rw5s2Nbmefwbuwbdxton',  //insert Bart token contract here.
          thumbnailUri:
            'ipfs://QmbaxxcF1BumhQnaHVwoRKfGJpmqBQ6t5rKLDfpe8EbPy5',  //insert Bohner ipfs link here. check
          decimals: 0
        },
       // quote: 'xtz'
      }
    },
    
  ],
  TESTNET: [
    {
      reward: WRAP_TESTNET,
      farmingContract: 'KT1Tgn7wYwmjhTuSot5DPZ8U1hPn7cPzhnea',  //insert forked contract here.
      pool: {
        contract: 'KT1ETAtdv2PTvXwbGGsWWjnswfagdUc77hiP', //bezos QPT contract.
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
