import { useCallback } from "react";

const FileDownloader = ({ filename, output, type }) => {
  const exportTxt = useCallback(() => {
    const element = document.createElement("a");
    const file = new Blob([output], {
      type: type,
    });

    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
  }, [filename, output, type]);

  return <button onClick={() => exportTxt()}>txt download</button>;
};

export default FileDownloader;
