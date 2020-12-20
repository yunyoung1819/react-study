import React, { useState } from 'react';

const IterationSample2 = () => {
    const [names, setNames] = useState([
        { id: 1, text: '아이린' },
        { id: 2, text: '수지' },
        { id: 3, text: '아이유' },
        { id: 4, text: '한승연' }
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5); //  새로운 항목을 추가할 때 사용할 id

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);  // nextId 값에 1을 더해준다.
        setNames(nextNames); // name값을 업데이트한다.
        setInputText(''); // inputText를 비운다.
    };

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    };

    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));

    console.log('render');

    return (
        <>
            <input value={inputText} onChange={onChange} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </>
    );
};

export default IterationSample2;