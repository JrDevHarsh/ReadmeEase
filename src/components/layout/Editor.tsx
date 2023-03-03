import EditorContainer from "../container/Editor";

function EditorLayout() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start w-full">
      <EditorContainer />
    </div>
  );
}

export default EditorLayout;
