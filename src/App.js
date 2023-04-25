import { useState } from "react";
import FileDownloader from "./components/FileDownloader";

function App() {
  const [datas, setDatas] = useState("");

  const handleAddData = (evt) => {
    evt.preventDefault();

    let newData = datas;
    newData += `data\n`;

    setDatas(newData);
  };

  return (
    <div>
      <form>
        <button onClick={handleAddData}>Add Data</button>
        <FileDownloader filename="ex.txt" output={datas} type="text/plain" />
      </form>
    </div>
  );
}

export default App;
