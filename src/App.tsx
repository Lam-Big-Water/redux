import Counter from './components/Counter';

// Store
// interface CounterState {
//   value: number;
// }

// interface UserState {
//   isSignedIn: boolean;
// }

// Actions
// const incrementByAmount = {type: 'INCREMENT', payload: 10};
// const decrement = {type: 'DECREMENT'};

// Reducers

const App = () => {
  return (
    <div>
      <h1>Redux Complete Tutorial</h1>
      <Counter/>
    </div>
  )
}

export default App