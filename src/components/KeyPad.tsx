import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ButtonBase from '@material-ui/core/ButtonBase';

interface Props {
    value: string;
}

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: 60,
        fontSize: 23
    },
    number: {},
    operator: {
        backgroundColor: 'orange'
    }
});

export const Keypad = (props: Props) => {
    const classes = useStyles();
    let operators = ["=", "+", "−", "×", "÷"];
    let classKeyType = classes.number;
    if (operators.indexOf(props.value) > -1) {
        classKeyType = classes.operator;
    }
    return (
        <ButtonBase className={[classes.root, classKeyType].join(" ")}>{props.value}</ButtonBase>
    );
}
