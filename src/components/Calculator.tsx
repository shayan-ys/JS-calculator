import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';

import { KeypadsLayout } from './KeypadsLayout';

interface Props {
    onClick: (key: string) => void;
    displayValue: string;
}

const useStyles = makeStyles({
    root: {
        marginTop: 35
    },
});

export const Calculator = (props: Props) => 
{
    const classes = useStyles();
    return (
        <Container className={classes.root} maxWidth="xs">
            <Box boxShadow="1">
            <KeypadsLayout onClick={props.onClick} displayValue={props.displayValue} />
            </Box>
        </Container>
    );
};
