import { FarmingContractInfoProps } from '../types';
import LabelAndValue from '../../../components/form/LabelAndValue';
import LabelAndAsset from '../../../components/form/LabelAndAsset';
import { PaperContent } from '../../../components/paper/Paper';
import { Link } from '@material-ui/core';

export default function FarmingContractInfo({
                                              program,
                                              contractBalances
                                            }: FarmingContractInfoProps) {
  return (
    <PaperContent alternate>
      <LabelAndValue
        label={'Pool contract info'}
        value={
          <Link
            target={'_blank'}
            color={'textSecondary'}
            rel={'noreferrer'}
            href={`https://tzkt.io/${program.pool.contract}/operations/`}  //removed program.pool.contract.
          >
            {program.pool.contract} 
          </Link>
        }
      />
      <LabelAndAsset
        label={'Total staked'}
        emptyState={contractBalances.loading}
        emptyStatePlaceHolder={'Loading…'}
        value={contractBalances.totalSupply}
        decimals={6}
        symbol={'LP Token'}
      />
      <LabelAndAsset
        label={'Your current share'}
        value={contractBalances.staked}
        emptyState={contractBalances.loading}
        emptyStatePlaceHolder={'Loading…'}
        decimals={6}
        symbol={'LP Token'}
      />
      <LabelAndAsset
        label={'Your pending reward'}
        value={contractBalances.reward}
        emptyState={contractBalances.loading}
        emptyStatePlaceHolder={'Loading…'}
        decimals={program.reward.decimals}
        symbol={'SEB'}
      />
    </PaperContent>
  );
}
