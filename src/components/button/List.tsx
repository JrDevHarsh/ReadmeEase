import Tooltip from "../tooltip/Tooltip";

function List({ updateEditor }: { updateEditor: Function }) {
  // function to make a list
  function textToList(text: string) {
    text = `- ${text}`;
    return text;
  }

  return (
    <button
      aria-label="List"
      onClick={() => updateEditor("This is a list", textToList)}
      className="group relative flex items-center justify-center w-6 h-6 bg-transparent hover:bg-[#ffffff1a] focus-visible:bg-[#ffffff1a] outline-none rounded-sm transition-colors duration-250"
    >
      <span className="text-base text-center text-primary-text-500 italic font-semibold leading-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </span>
      <Tooltip text="Add new List" />
    </button>
  );
}

export default List;
