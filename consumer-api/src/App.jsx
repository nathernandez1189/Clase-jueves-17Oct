import { useState } from 'react';
import Form from './componente/Form.jsx';
import FormMaterialize from './componente/FormMaterialize.jsx';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Form />
      <FormMaterialize />
    </>
  );
}

export default App;
