import "./App.css";
import FileUploadPage from "./components/Upload";

function App() {
  const handleSubmission = (selectedFile) => {
    // TODO: complete function by appending "demo_image" field to formData with file, then calling upload file endpoint
    const formData = new FormData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <FileUploadPage handleSubmission={handleSubmission}></FileUploadPage>
      </header>
    </div>
  );
}

export default App;
