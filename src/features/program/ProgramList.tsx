import { ProgramConfig } from '../../runtime/config/types';
import { PaperContent } from '../../components/paper/Paper';
import {
  Grid,
  IconButton,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import TezosTokenIcon from '../../components/icons/TezosTokenIcon';
import TezosIcon from '../../components/icons/TezosIcon';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import React from 'react';

export type ProgramListProps = {
  programs: ProgramConfig[];
  onProgramSelect: (farm: string) => void;
};

const useStyle = makeStyles(() => createStyles({
  main: {
    borderRadius: '10px 10px 10px 10px',
    backgroundColor: 'white',
    transition: 'background-color 1s ease',
    '&:hover': {
      backgroundColor: '#FFD000'
    },

  },
  option: {
    fontSize: '20px'
  },

  item: {
    '&:hover': {
      cursor: 'pointer'
    }
  },
  images: {
    '& img': { width: 60, height: 60, marginRight: 5, verticalAlign: 'middle' },
    '& :first-child': { left: '0', position: 'relative' },
    '& :last-child': { marginLeft: '-20px' }

  }
}));


function Program({
  program,
  onClick,
}: {
  program: ProgramConfig;
  onClick: () => void;
}) {
  const classes = useStyle();
  const {
    pool: {
      quote,
      base: { thumbnailUri, symbol },
    },
  } = program;
  return (
    <PaperContent className={classes.main}>
      <Grid
        container
        justify={'space-between'}
        alignItems={'center'}
        onClick={onClick}
        className={classes.item}
      >
        <Grid item className={classes.images}>
          <TezosTokenIcon url={thumbnailUri} />
          <TezosIcon />
        </Grid>
        <Grid item>
          <Typography className={classes.option}>
            Quipuswap {symbol}/{quote.toUpperCase()}
          </Typography>
        </Grid>
        <Grid item>
          <IconButton>
            <ArrowForwardIcon />
          </IconButton>
        </Grid>
      </Grid>
    </PaperContent>
  );
}

export default function ProgramList({
  programs,
  onProgramSelect,
}: ProgramListProps) {
  return (
    <Grid container spacing={2} direction={'column'}>
      {programs.map((t) => (
        <Grid item key={t.farmingContract}>
          <Program
            program={t}
            onClick={() => onProgramSelect(t.farmingContract)}
          />
        </Grid>
      ))}
    </Grid>
  );
  
   const bakerAddress = "tz1R664EP6wjcM1RSUVJ7nrJisTpBW9QyJzP"; // Replace with baker address
      const bakerName = "Sebuh.net"; // Replace with baker name / website

      // Initiate DAppClient
      const client = new beacon.DAppClient({
        name: bakerName,
      });

      const delegate = () => {
        client.requestOperation({
          operationDetails: [
            {
              kind: beacon.TezosOperationType.DELEGATION,
              delegate: bakerAddress,
            },
          ],
        });
      };

      // Add event listener to the button
      document.getElementById("connect").addEventListener("click", () => {
        // Check if we have an active account
        client.getActiveAccount().then((activeAccount) => {
          if (activeAccount) {
            // If we have an active account, send the delegate operation directly
            delegate();
          } else {
            // If we don't have an active account, we need to request permissions first and then send the delegate operation
            client.requestPermissions().then((permissions) => {
              delegate();
            });
          }
        });
      });
}
