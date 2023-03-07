import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Editor from "@monaco-editor/react";
import useLocalStorage from "@/hooks/useLocalStorage";
import EditorToolbar from "../toolbar/Editor";
import { editor } from "monaco-editor";
import { useRef } from "react";
import CopyToClipboard from "../button/CopyToClipboard";

function EditorContainer() {
  const [code, updateLocalStorage] = useLocalStorage("code", "");
  const monacoEditorInstance = useRef<editor.IStandaloneCodeEditor | null>(
    null
  );

  // update state of editor on change
  function handleOnChange(val: any) {
    updateLocalStorage(val);
  }

  // get instance of monco-editor while mounting
  function handleEditorOnMount(editorInstance: editor.IStandaloneCodeEditor) {
    if (monacoEditorInstance.current === null) {
      monacoEditorInstance.current = editorInstance;
    }
  }

  function insertText(text: string, callback: Function) {
    if (monacoEditorInstance.current) {
      const selection = monacoEditorInstance.current.getSelection();
      const selectionRange = {
        startLineNumber: selection?.startLineNumber || 1,
        startColumn: selection?.startColumn || 1,
        endLineNumber: selection?.endLineNumber || 1,
        endColumn: selection?.endColumn || 1,
      };
      let selectedText;
      if (!selection?.isEmpty()) {
        selectedText = monacoEditorInstance.current
          .getModel()
          ?.getValueInRange(selectionRange);
      } else {
        selectedText = text;
      }
      // callback to format text on the basis of styling
      selectedText = callback(selectedText);
      const op = {
        range: selectionRange,
        text: selectedText,
      };
      monacoEditorInstance.current.executeEdits("my-source", [op]);
    }
  }

  return (
    <>
      <div className="relative flex flex-col items-start justify-start min-w-[280px] w-full max-w-full md:max-w-[50%] h-auto overflow-y-hidden">
        <div className="p-2 flex items-center justify-between w-full bg-[#1e1f23] border-b border-r border-solid border-b-[#333] border-r-[#333]">
          <h2 className="text-base text-center text-[#bbbcc1] font-medium tracking-wide">
            MARKDOWN
          </h2>
          <div className="flex items-center justify-center gap-x-2 w-auto">
            <CopyToClipboard value={code} />
            <EditorToolbar updateEditor={insertText} />
          </div>
        </div>
        <Editor
          className="min-h-[calc(100vh-106px)] max-h-[calc(100vh-106px)] h-full overflow-x-hidden"
          theme="vs-dark"
          onChange={handleOnChange}
          onMount={handleEditorOnMount}
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
