import React from 'react';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from "../modules/counter";

const CounterContainerHooks = () => {
    const number = useSelector(state => state.counter.number);
    return <Counter number={number} />;
};

export default CounterContainerHooks;