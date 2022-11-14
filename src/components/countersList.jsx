import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: 'Ненужная вещь' },
        { id: 1, value: 4, name: 'Ложка' },
        { id: 2, value: 0, name: 'Вилка' },
        { id: 3, value: 0, name: 'Тарелка' },
        { id: 4, value: 0, name: 'Набор минималиста' },
    ]
    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounters = counters.filter(c => c.id !== id)
        setCounters(newCounters)
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    const changeValue = value => counters.map(c => c.id === value.id ? value : c)

    const handleIncrement = (props) => {
        const newValue = { ...props }
        newValue.value += 1
        setCounters(changeValue(newValue))
    }

    const handleDecrement = (props) => {
        const newValue = { ...props }
        if (newValue.value > 0) { newValue.value -= 1 }
        setCounters(changeValue(newValue))
    }

    return <>
        {
            counters.map(count =>
                <Counter key={count.id}
                    {...count}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                />)
        }
        <button className="btn btn-primary btn-sm m2" onClick={handleReset}>Сброс</button>
    </>
}

export default CountersList