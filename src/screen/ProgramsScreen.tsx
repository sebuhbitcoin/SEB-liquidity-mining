import { Box, Container, Divider, Typography } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useConfig } from '../runtime/config/ConfigContext';
import ProgramList from '../features/program/ProgramList';
import { useHistory } from 'react-router';
import { opPage } from '../routes';

const useStyles = makeStyles((theme) => createStyles({
  subtitle: {
    color: '#000000',
    textAlign: 'center',
    marginBottom: '20px'
  },
  containBox: {
    borderRadius: '0 0 10px 10px',
    padding: '30px',
    backgroundColor: '#e5e5e5'
  },
  title: {
    color: 'black',
    borderBottom: '3px solid #ffd000',
    textAlign: 'center',
    fontSize: '30px',
    background: 'grey',
    paddingBottom: '15px'
  },
  titleCenter: {
    justifyItems: 'center'
  },
greenLink:  {
    textDecoration: 'none',
    color: '#00ff00'
}
}));



export default function ProgramsScreen() {
  const classes = useStyles();
  const history = useHistory();
  const { programs } = useConfig();
  return (
    <Container  maxWidth={'sm'}>

      <Box className={classes.titleCenter} my={2} >
        <Typography className={classes.title}>Liquidity Mining Programs <Divider />
          <a  href="https://www.hicetnunc.xyz/tz/tz1Wc1uawzskCTxzUVbYh56vqstPGRHiJTpE" className={classes.greenLink}>Background Art by DoctaGonz</a> </Typography>
        
        

  
      </Box>
      <Box className={classes.containBox}>
        <Typography variant={'subtitle1'} className={classes.subtitle}>Select an option to stake, unstake or claim your
          rewards. All rewards are paid in SEB. Reward Rates: KALAM/XTZ 6x, CVZA/XTZ 2x, FLAME/XTZ 2x, all the rest - 1x. 1x Means 10,000 SEB paid out in 30 Days. First batch of farms
          are ending around June 15th, 2021. The latest additions, CVZA, will be ending July 9.</Typography>
      <ProgramList

        programs={programs}
        onProgramSelect={(t) => {
          history.push(opPage(t));
        }}
      />
      </Box>

    </Container>
  );

}
