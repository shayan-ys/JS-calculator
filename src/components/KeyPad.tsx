import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';

interface Props {
    value: string;
    onClick: (key: string) => void;
}
interface State {}

export class Keypad extends React.Component<Props, State> {
    classes: any;

    constructor(props: Props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.props.onClick(this.props.value);
    }

    render() {
        let operators = ["=", "+", "−", "×", "÷"];
        let styles = {
            width: '100%',
            height: 60,
            fontSize: 23,
            backgroundColor: 'inherit'
        };
        if (operators.indexOf(this.props.value) > -1) {
            styles.backgroundColor = 'orange';
        }
        return (
            <ButtonBase style={styles}
                        onClick={this.clickHandler} href="#">
                {this.props.value}
            </ButtonBase>
        );
    }
}
