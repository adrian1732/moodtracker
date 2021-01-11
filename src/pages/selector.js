import React, {Component} from 'react'
import Select from 'react-select';

const options = [
    {
        value: 'happy',
        label: 'happyy'
    },
    {
        value: 'great',
        label: 'greaty'
    }
]

const MyComponent = () => (
    <Select options={options} />
)

export default MyComponent;