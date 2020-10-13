let state;

function reducer(state = { count: 0 }, action) {
    switch (action.type) {
        case 'INCREASE_COUNT':
            return { count: state.count + 1 };
        case 'DECREASE_COUNT':
            return { count: state.count - 1 };
        default:
            return state;
    }
}

function dispatch(action) {
    state = reducer(state, action);
    render()
}

function render() {
    let container = document.getElementById('container');
    container.textContent = state.count;
}

let iBtn = document.getElementById('i-button');

iBtn.addEventListener('click', () => {
    dispatch({ type: 'INCREASE_COUNT' })
})

let dBtn = document.getElementById('d-button');

dBtn.addEventListener('click', () => {
    dispatch({ type: 'DECREASE_COUNT' })
})

dispatch({ type: '@@INIT' })
