import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import InputBase from '@material-ui/core/InputBase';
import { Keypad } from './Keypad';

interface CellProps {
    value: string;
}
interface Props {}

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        
    },
    row: {},
    cell: {
        width: '25%',
        border: '1px solid #ddd'
    },
    input: {
        marginLeft: 8,
        flex: 1,
        width: '100%',
        fontSize: 47
    }
}));

export const KeypadCell = (props: CellProps) =>
{
    const classes = useStyles();
    let colSpan = 1;
    if (props.value == ".") {
        colSpan = 2;
    }
    return (
        <TableCell className={classes.cell} colSpan={colSpan}><Keypad value={props.value} /></TableCell>
    );
}

export const KeypadsLayout = (props: Props) =>
{
    const classes = useStyles();
    return (
        <Table className={classes.table} padding="none">
            <TableBody>
                <TableRow>
                    <TableCell className={classes.cell} colSpan={4}>
                    <InputBase className={classes.input} placeholder="0" />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <KeypadCell value="AC" />
                    <KeypadCell value="+/-" />
                    <KeypadCell value="%" />
                    <KeypadCell value="÷" />
                </TableRow>
                <TableRow>
                    <KeypadCell value="7" />
                    <KeypadCell value="8" />
                    <KeypadCell value="9" />
                    <KeypadCell value="×" />
                </TableRow>
                <TableRow>
                    <KeypadCell value="4" />
                    <KeypadCell value="5" />
                    <KeypadCell value="6" />
                    <KeypadCell value="−" />
                </TableRow>
                <TableRow>
                    <KeypadCell value="1" />
                    <KeypadCell value="2" />
                    <KeypadCell value="3" />
                    <KeypadCell value="+" />
                </TableRow>
                <TableRow>
                    <KeypadCell value="0" />
                    <KeypadCell value="." />
                    <KeypadCell value="=" />
                </TableRow>
            </TableBody>
        </Table>
    );
}