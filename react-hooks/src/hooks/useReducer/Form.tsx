import { useReducer } from "react";

interface State {
    name: string;
    age: number;
}

interface Action {
    type: string;
    newName?: string;
}

function reducer(state: State, action: Action) : State{
    switch (action.type) {
        case "changed_name": {
            return {
                age: state.age,
                name: action.newName || state.name,
            };
        }

        case "incremented_age": {
            return {
                age: state.age + 1,
                name: state.name,
            };
        }

        default: {
            return state;
        }
    }
}

export default function Form() {
    const [state, dispatch] = useReducer(reducer, {
        name: "",
        age: 0,
    });

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch({ type: "changed_name", newName: e.target.value });
    }

    function handleButtonClick() {
        dispatch({ type: "incremented_age" });
    }

    return (
        <>
            <input type="text" onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Increment age</button>
            <p>
                Hello {state.name}! You are {state.age} years old
            </p>
        </>
    );
}
