import { useState } from "react";
import Tooltip from "../tooltip/Tooltip";

function ToolSelect({ updateEditor }: { updateEditor: Function }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative flex items-center justify-center w-auto h-auto z-[11]">
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu List"
        className="group relative flex items-center justify-center w-6 h-6 bg-transparent hover:bg-[#ffffff1a] focus-visible:bg-[#ffffff1a] outline-none rounded-sm transition-colors duration-250 z-[11]"
      >
        <span className="text-base text-center text-primary-text-500 font-semibold leading-4">
          H
        </span>
        {!isOpen && <Tooltip text="Select Headings" />}
      </button>
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-auto h-auto bg-primary-dark-800 rounded overflow-hidden z-[12]">
          <div className="relative px-3 py-2 flex flex-col items-start justify-start w-full h-auto rounded">
            {[...Array(6).fill(0)].map((_, index) => (
              <button
                key={`heading-${index + 1}`}
                title={`Heading ${index + 1}`}
                aria-label={`Heading ${index + 1}`}
                onClick={() => {
                  setIsOpen(!isOpen);
                  updateEditor(`Heading ${index + 1}`, (text: string) => {
                    let hash = "";
                    for (let i = 0; i <= index; i++) {
                      hash += "#";
                    }
                    text = hash + " " + text;
                    return text;
                  });
                }}
                className="py-1 px-2 flex items-center justify-center w-auto bg-transparent hover:bg-[#ffffff1a] focus-visible:bg-[#ffffff1a] outline-none rounded-sm transition-colors duration-250"
              >
                <span className="text-base text-center text-primary-text-500 font-semibold leading-4">
                  {`H${index + 1}`}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
      {isOpen && (
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-0 left-0 h-full w-full z-10"
        ></div>
      )}
    </div>
  );
}

export default ToolSelect;
