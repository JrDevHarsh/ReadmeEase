import { useState } from "react";
import Bold from "../button/Bold";
import Italic from "../button/Italic";
import HrefLink from "../button/Link";

function EditorToolbar({ updateEditor }: { updateEditor: Function }) {
  const [toolbarIsOpen, setToolbarIsOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center w-auto">
      {toolbarIsOpen && (
        <div className="mr-2 flex items-center justify-center w-auto">
          <Bold updateEditor={updateEditor} />
          <Italic updateEditor={updateEditor} />
          <HrefLink updateEditor={updateEditor} />
        </div>
      )}
      <button
        aria-label="Toggle Toolbar"
        title="Toggle Toolbar"
        onClick={() => setToolbarIsOpen(!toolbarIsOpen)}
        className="inline-block py-1.5 px-1 w-6 h-6 bg-transparent hover:bg-[#ffffff1a] focus-visible:bg-[#ffffff1a] outline-none rounded-sm transition-colors duration-250"
      >
        <div className="flex flex-col items-center justify-between w-full h-full">
          <span className="inline-block py-[1px] w-full bg-[#8a8a8a]"></span>
          <span className="inline-block py-[1px] w-full bg-[#8a8a8a]"></span>
          <span className="inline-block py-[1px] w-full bg-[#8a8a8a]"></span>
        </div>
      </button>
    </div>
  );
}

export default EditorToolbar;
