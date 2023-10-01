import './App.css'
import { useState } from 'react'

function App() {

  const [file, setFile] = useState(null)
  const [msg, setMsg] = useState(null)
  const [images, setImages] = useState([])

  function handleUpload() {
    if (!file) {
      setMsg("No file selected!")
      return
    }
    const fd = new FormData()
    console.log('fd', fd)
    fd.append('file', file)
  }

  return (
    <div className="app-container">
      <div className='toolbar'>
        <h1>Lucas' photo uploads</h1>
      </div>
      <div className='content'>
        <div className='row'>
          <h2>Upload your photo here!</h2>

        </div>
        <div className='row'>
          <div className='file-upload'>
            <div className='file-upload-button'>
              File: 
            </div>
          </div>
          <label for='file-upload-input' className='file-upload-div'>
            Envie aqui seu arquivo
          </label>
          <input 
              name='file-upload-input'
              className='file-upload-field'
              onChange={(e) => setFile(e.target.files[0])}
              type='file'
            />
          <button onClick={handleUpload}>Save!</button>
        </div>
        {msg &&
          <div className='row'>
            {msg}
          </div>
        }
        {images &&
          <div>

          </div>
        }
      </div>
    </div>
  );
}

export default App;
