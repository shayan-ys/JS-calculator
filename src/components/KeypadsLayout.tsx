import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Keypad } from './Keypad';

interface CellProps {
    value: string;
    onClick: (key: string) => void;
}
interface Props {
    onClick: (key: string) => void;
    displayValue: string;
    clipboard: string;
    operation: string;
}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {},
    tableBody: {},
    row: {},
    cell: {
        width: '25%',
        border: '1px solid #ddd'
    },
    input: {
        padding: 10,
        flex: 1,
        width: '100%',
        fontSize: 47
    },
    secondary_input: {
        position: 'absolute',
        right: 10,
        fontSize: 19,
        opacity: 0.3
    }
}));

export const KeypadCell = (props: CellProps) =>
{
    const classes = useStyles();
    let colSpan = 1;
    if (props.value === ".") {
        colSpan = 2;
    }
    return (
        <TableCell className={classes.cell} colSpan={colSpan}><Keypad value={props.value} onClick={props.onClick} /></TableCell>
    );
};

export const KeypadsLayout = (props: Props) =>
{
    const classes = useStyles();
    return (
        <Table className={classes.table} padding="none">
            <TableBody className={classes.tableBody}>
                <TableRow>
                    <TableCell className={classes.cell} style={{position: 'relative'}} colSpan={4}>
                        {/*<InputBase autoFocus className={classes.input} placeholder="0" value={props.displayValue} />*/}
                        <div className={classes.input}>{props.displayValue}</div>
                        <span className={classes.secondary_input} style={{top: 10}}>{props.clipboard}</span>
                        <span className={classes.secondary_input} style={{top: 37}}>{props.operation}</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <KeypadCell onClick={props.onClick} value="AC" />
                    <KeypadCell onClick={props.onClick} value="+/-" />
                    <KeypadCell onClick={props.onClick} value="%" />
                    <KeypadCell onClick={props.onClick} value="÷" />
                </TableRow>
                <TableRow>
                    <KeypadCell onClick={props.onClick} value="7" />
                    <KeypadCell onClick={props.onClick} value="8" />
                    <KeypadCell onClick={props.onClick} value="9" />
                    <KeypadCell onClick={props.onClick} value="×" />
                </TableRow>
                <TableRow>
                    <KeypadCell onClick={props.onClick} value="4" />
                    <KeypadCell onClick={props.onClick} value="5" />
                    <KeypadCell onClick={props.onClick} value="6" />
                    <KeypadCell onClick={props.onClick} value="−" />
                </TableRow>
                <TableRow>
                    <KeypadCell onClick={props.onClick} value="1" />
                    <KeypadCell onClick={props.onClick} value="2" />
                    <KeypadCell onClick={props.onClick} value="3" />
                    <KeypadCell onClick={props.onClick} value="+" />
                </TableRow>
                <TableRow>
                    <KeypadCell onClick={props.onClick} value="0" />
                    <KeypadCell onClick={props.onClick} value="." />
                    <KeypadCell onClick={props.onClick} value="=" />
                </TableRow>
            </TableBody>
        </Table>
    );
};
