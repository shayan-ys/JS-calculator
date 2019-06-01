import React from 'react';
import Box from "@material-ui/core/Box";
import { Container } from '@material-ui/core';

import { KeypadsLayout } from '../components/KeypadsLayout';
import { handleKeyPress } from './handleKeyPress';

interface Props {}
interface State {
    clipboard: any;
    currentVal: any;
    operation: any;
}

export class CalculatorBox extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            clipboard: null,
            currentVal: null,
            operation: null
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (keyValue: string) => {
        this.setState(handleKeyPress(this.state, keyValue));
    };

    render() {
        return (
            <Container style={{marginTop: 35}} maxWidth="xs">
                <Box boxShadow="1">
                <KeypadsLayout onClick={this.handleClick} displayValue={this.state.currentVal || this.state.clipboard || "0"} />
                </Box>
            </Container>
        );
    }
}