import './FileUploadButton.css'

export default function FileUploadButton() {

  return (
    <div className='container'>
      <form>
        <label for='file-upload-input' className='file-upload-div'>
          Envie aqui seu arquivo
        </label>
        <input
          name='file-upload-input'
          id='file-upload-input'
          type='file'
        />
      </form>
    </div>
  )
}

