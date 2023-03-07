import EditorContainer from "../container/Editor";

function EditorLayout() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-start w-full">
      <EditorContainer />
    </div>
  );
}

export default EditorLayout;
