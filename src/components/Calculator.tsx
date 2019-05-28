import React from 'react';
import { KeyPad } from './KeyPad';

interface Props {
    title: string;
}

export const Calculator = (props: Props) => 
{
    return (
        <div>
            <h1>{props.title}</h1>
            <KeyPad />
        </div>
    );
}
