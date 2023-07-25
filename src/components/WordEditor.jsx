import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const WordEditor = () => {
  const [editorContent, setEditorContent] = useState("");

  const handleSave = () => {
    // Send 'editorContent' to the backend to save as needed
    console.log("Content to be saved:", editorContent);
  };

  const handleLoad = () => {
    // Replace 'loadedContent' with the content received from the backend as a Word document
    const loadedContent =
      '{"blocks":[{"key":"etnb4","text":"Hello, this is the loaded content.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}';
    const parsedContent = convertFromRaw(JSON.parse(loadedContent));
    setEditorState(EditorState.createWithContent(parsedContent));
  };

  return (
    <div className="w-full h-[800px] flex flex-col gap-14 justify-start items-center">
      <ReactQuill
        value={editorContent}
        onChange={setEditorContent}
        className="h-[60%] w-full"
      />

      <button
        onClick={handleSave}
        className="bg-blue-500 px-10 py-5 w-[20%] rounded-md text-white hover:bg-white hover:text-blue-500 hover:border-solid hover:border-[2px] duration-500"
      >
        Submit
      </button>
    </div>
  );
};

export default WordEditor;
