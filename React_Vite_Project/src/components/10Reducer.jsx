import React, { useReducer } from 'react';

const Reducer = () => {
    const initialState = {
        firstname: '',
        lastname: '',
        email: '',
        phoneNumber: ''
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2 className='text-center'>Reducer</h2>
            <p>Reducer is a function that takes the current state and an action as arguments, and returns a new state. It's the core of the Redux architecture, and it's where you define how your application's state changes in response to actions.</p>
            <p>In Redux, the reducer is responsible for:</p>
            <ul>
                <li>Handling actions: The reducer receives an action and updates the state accordingly.</li>
                <li>Maintaining state: The reducer returns a new state object that reflects the changes made by the action.</li>
                <li>Dispatch acts like onchange function for setting value in state.</li>
            </ul>
            <div>
                <label>
                    First Name:
                    <input type="text" value={state.firstname} onChange={(e) => dispatch({ type: Types.FIRSTNAME, payload: e.target.value })} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={state.lastname} onChange={(e) => dispatch({ type: Types.LASTNAME, payload: e.target.value })} />
                </label>
                <label>
                    Email:
                    <input type="email" value={state.email} onChange={(e) => dispatch({ type: Types.EMAIL, payload: e.target.value })} />
                </label>
                <label>
                    Phone Number:
                    <input type="number" value={state.phoneNumber} onChange={(e) => dispatch({ type: Types.PHONENUMBER, payload: e.target.value })} />
                </label>
            </div>
        </div>
    );
}

function reducer(state, action) {
    switch (action.type) {
        case Types.FIRSTNAME:
            return { ...state, firstname: action.payload };
        case Types.LASTNAME:
            return { ...state, lastname: action.payload };
        case Types.EMAIL:
            return { ...state, email: action.payload };
        case Types.PHONENUMBER:
            return { ...state, phoneNumber: action.payload };
        default:
            return state;
    }
}

const Types = {
    FIRSTNAME: 'FirstName',
    LASTNAME: 'LastName',
    EMAIL: 'Email',
    PHONENUMBER: 'PhoneNumber'
};

export default Reducer;
