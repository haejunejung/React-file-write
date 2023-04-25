import { useCallback, useState } from "react";

function App() {
  const [datas, setDatas] = useState([]);

  const handleAddData = (evt) => {
    evt.preventDefault();

    const newData = [...datas];
    newData.push("NEW DATA");

    setDatas(newData);

    console.log(datas);
  };

  const handleExportTxt = useCallback(() => {
    const fileName = "example.txt";
    let output = "";
    datas.forEach((ele) => {
      output += ele;
    });

    console.log(output);

    const element = document.createElement("a");
    const file = new Blob([output], {
      type: "text/plain",
    });

    element.href = URL.createObjectURL(file);
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
  }, [datas]);

  return (
    <div>
      <form>
        <button onClick={handleAddData}>Add Data</button>
        <button onClick={handleExportTxt}>Export txt file</button>
      </form>
    </div>
  );
}

export default App;
