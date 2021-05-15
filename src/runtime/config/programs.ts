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
      farmingContract: 'KT1ETAtdv2PTvXwbGGsWWjnswfagdUc77hiP',  //insert forked farming contract here. need to make. 
      pool: {
        contract: 'KT1ETAtdv2PTvXwbGGsWWjnswfagdUc77hiP',  // insert bezos Quipuswap contract here. check.
        base: {
          symbol: 'Bezos',
          name: 'Tezos Till We Bezos',
          id: 0,
          contract: 'KT1J4m9nxZQSKDwRNahAL1fziuwW9o5hb8Tb',  //insert bezos token contract here. checked.
          thumbnailUri:
            'ipfs://QmfEbirSA7indrEzjFAtJ589oChBFrqLio9kwpJwR4ttHx',  //insert bezos ipfs link here. checked, add to pinata. checked.
          decimals: 0
        },
        quote: 'xtz'
      }
    },

            {
      reward: WRAP_MAINNET,
      farmingContract: 'KT1Jp6NDzkuHdK8EBNydN1jfAnKKyt2JWWWg',  //insert forked farming contract here.
      pool: {
        contract: 'KT1C755xS3TLH4HEWaCJvWuoHTcytTBdEjgS',  // insert  Quipuswap contract here. BohnerDyldoh VX Pro BDVXP KT1T1PeeRDbsKDYM2nX8JjJ1kkAhHh5FnjgC
        base: {
          symbol: 'BDVXP',
          name: 'BohnerDyldoh VX Pro',
          id: 0,
          contract: 'KT1T1PeeRDbsKDYM2nX8JjJ1kkAhHh5FnjgC',  //insert Bart token contract here.
          thumbnailUri:
            'ipfs://QmVbkmsnie44NUMFzhamLcDKTFAzVbPafYGLna65KfKCHK',  //insert Bohner ipfs link here. check
          decimals: 6
        },
        quote: 'xtz'
      }
    },
    
              //tdao
            {
      reward: WRAP_MAINNET,
      farmingContract: 'KT1XeDMXqC32sveBwn4bpShe9LDbC3LJMRXp',  //insert forked farming contract here.
      pool: {
        contract: 'KT1X6dAh8fwQMkWC9yh4yuvkJaS5NjqY4NvW',  // insert  token contract here. 
        base: {
          symbol: 'tDAO',
          name: 'Taco DAO',
          id: 0,
          contract: 'KT1Cjx8hYwzaCAke6rLWoZBLp8w89VeAduAR',  //insert dex contract hdao token contract here.
          thumbnailUri:
            'ipfs://QmaYySoRHqomge54GRgBQqkqzspTKMsGRjJXKD6jjq1mkC',  //insert hdao ipfs link here. check
          decimals: 4
        },
        quote: 'xtz'
      }
    },
    
    
    //hdao
            {
      reward: WRAP_MAINNET,
      farmingContract: 'KT1H7NcmBAYyDqw8hYsYDRha2nueZWH11VG2',  //insert forked farming contract here.
      pool: {
        contract: 'KT1QxLqukyfohPV5kPkw97Rs6cw1DDDvYgbB',  // insert  token contract here. 
        base: {
          symbol: 'hDAO',
          name: 'hic et nunc DAO',
          id: 0,
          contract: 'KT1AFA2mwNUMNd4SsujE1YYp29vd8BZejyKW',  //insert dex contract hdao token contract here.
          thumbnailUri:
            'ipfs://QmXbShojo8qBcYYqn96mQyWsRWTzdUPMLyYhGnrBFAnt98',  //insert hdao ipfs link here. check
          decimals: 6
        },
        quote: 'xtz'
      }
    },
    
        //flame
            {
      reward: WRAP_MAINNET,
      farmingContract: 'KT1WwPgJeyzMXehtvSmsnBUYJ1ztUVe3dDiq',  //insert forked farming contract here.
      pool: {
        contract: 'KT1Q93ftAUzvfMGPwC78nX8eouL1VzmHPd4d',  // insert  token contract here. 
        base: {
          symbol: 'FLAME',
          name: 'Flame Token',
          id: 0,
          contract: 'KT1Wa8yqRBpFCusJWgcQyjhRz7hUQAmFxW7j',  //insert dex contract flame token contract here.
          thumbnailUri:
            'ipfs://QmT6abVwDWZE2XjypJvfDVCRV68DgjDmtFHAQZJrQfa7Lz',  //insert hdao ipfs link here. check
          decimals: 6
        },
        quote: 'xtz'
      }
    },
    
            //crunch
            {
      reward: WRAP_MAINNET,
      farmingContract: 'KT1WcSpWsNnywbocfqZjKWZGKYuBwXzayFSh',  //insert forked farming contract here.
      pool: {
        contract: 'KT1RRgK6eXvCWCiEGWhRZCSVGzhDzwXEEjS4',  // insert  token contract here. 
        base: {
          symbol: 'CRUNCH',
          name: 'Crunchy.network Utility Token',
          id: 0,
          contract: 'KT1BHCumksALJQJ8q8to2EPigPW6qpyTr7Ng',  //insert dex contract hdao token contract here.
          thumbnailUri:
            'ipfs://bafybeienhhbxz53n3gtg7stjou2zs3lmhupahwovv2kxwh5uass3bc5xzq',  //insert hdao ipfs link here. check
          decimals: 8
        },
        quote: 'xtz'
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
