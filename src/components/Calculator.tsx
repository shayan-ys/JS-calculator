import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { KeypadsLayout } from './KeypadsLayout';

interface Props {
    title: string;
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
            <KeypadsLayout />
        </Container>
    );
}
