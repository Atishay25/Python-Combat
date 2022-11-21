import './App.css';
import React from 'react';
import './styles.css';
import CodeEditor from './components/codeEditor.js';

function App() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );
  return (
     <div>
      <CodeEditor></CodeEditor>
     </div>
  );
}
export default App;
