import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Editor from "@monaco-editor/react";
import { useState } from "react";

function EditorContainer() {
  const [code, setCode] = useState<string>("");

  function handleOnChange(val: any) {
    setCode(val);
  }
  return (
    <>
      <div className="relative flex flex-col items-start justify-start min-w-[280px] w-full max-w-full md:max-w-[50%] h-auto overflow-y-hidden">
        <div className="p-2 flex items-center justify-start w-full bg-[#1e1f23] border-b border-r border-solid border-b-[#333] border-r-[#333]">
          <h2 className="text-base text-center text-[#bbbcc1] font-medium tracking-wide">
            MARKDOWN
          </h2>
        </div>
        <Editor
          className="min-h-[calc(100vh-106px)] max-h-[calc(100vh-106px)] h-full overflow-x-hidden"
          theme="vs-dark"
          onChange={handleOnChange}
          loading={
            <div className="animate-pulse block min-h-[calc(100vh-106px)] max-h-[calc(100vh-106px)] h-full w-full bg-[#111] border-r border-solid border-r-[#333]"></div>
          }
          value={code}
          language="markdown"
          aria-label="Markdown Editor"
          options={{
            fontSize: 16,
            wordWrap: "on",
          }}
        />
      </div>
      <div className="relative flex flex-col items-start justify-start min-w-[280px] w-full max-w-full md:max-w-[50%] h-auto overflow-y-hidden border-t border-solid border-t-[#333] md:border-t-0">
        <div className="p-2 flex items-center justify-start w-full bg-[#1e1f23] border-b border-solid border-[#333]">
          <h2 className="text-base text-center text-[#bbbcc1] font-medium tracking-wide">
            PREVIEW
          </h2>
        </div>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className="preview p-4 min-h-[calc(100vh-106px)] max-h-[calc(100vh-106px)] h-full w-full bg-[#0d1117] overflow-y-auto"
        >
          {code}
        </ReactMarkdown>
      </div>
    </>
  );
}

export default EditorContainer;
