import Tooltip from "../tooltip/Tooltip";

function HrefLink({ updateEditor }: { updateEditor: Function }) {
  // function to make text to link
  function textToHrefLink(text: string) {
    text = `[${text}](https://www.example.com)`;
    return text;
  }

  return (
    <button
      aria-label="Href"
      onClick={() => updateEditor("Href", textToHrefLink)}
      className="group relative flex items-center justify-center w-6 h-6 bg-transparent hover:bg-[#ffffff1a] focus-visible:bg-[#ffffff1a] outline-none rounded-sm transition-colors duration-250"
    >
      <span className="text-base text-center text-primary-text-500 italic font-semibold leading-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
          />
        </svg>
      </span>
      <Tooltip text="Add Link" />
    </button>
  );
}

export default HrefLink;
