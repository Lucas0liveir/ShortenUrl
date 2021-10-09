import { useState } from 'react';
import axios from 'axios'
import './App.css'

function App() {
  const [result, setResult] = useState("Your shorten link is:")
  const [value, setValue] = useState("")

  async function handleLink() {
    if(value){
      await axios.post('urlHere', {
      originURL: value
    }).then((response) =>{ 
      console.log(response.data)
      setResult('Seu link encurtado é: ' + response.data)
    }).catch(err => console.log(err))
    return
    }
  }
  return (
    <>
      <div className="container">
        <form className="App">
          <input className="input-link" type="text" onChange={(text) => setValue(text.target.value)} name="link" placeholder="Enter the link"></input>
          <input className="btn-submit" type="button" value="Shorten Link" onSubmit={e => e.preventDefault()} onClick={handleLink} />
        </form>
        <div className="result">
          <span>{result}</span>
        </div>
      </div>
      <footer>© 2021 Created by <a href="https://github.com/Lucas0liveir" target="_blank" rel="noreferrer">Lucas Oliveira</a></footer>
    </>
  );
}

export default App;
