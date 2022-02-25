/* eslint-disable react/jsx-key */
import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {
    decrement,
    increment,
    incrementAsync,
    incrementByAmount,
    incrementIfOdd,
    selectCount,
} from './counterSlice';
import Row from '../../styles/components/Row';
import Button from '../../styles/components/Button';
import * as C from './Counter.styles';

export function Counter() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    const incrementValue = Number(incrementAmount) || 0;

    return (
        <div>
            <Row>
                <Button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </Button>
                <C.Value>{count}</C.Value>
                <Button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </Button>
            </Row>
            <Row>
                <C.Textbox
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <Button
                    onClick={() => dispatch(incrementByAmount(incrementValue))}
                >
                    Add Amount
                </Button>
                <Button
                    async
                    onClick={() => dispatch(incrementAsync(Number(incrementAmount)))}
                >
                    Add Async
                </Button>
                <Button
                    onClick={() => dispatch(incrementIfOdd(incrementValue))}
                >
                    Add If Odd
                </Button>
            </Row>
        </div>
    );
}
