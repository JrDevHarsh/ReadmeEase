import Tooltip from "../tooltip/Tooltip";

function Bold({ updateEditor }: { updateEditor: Function }) {
  // function to make text bold
  function textToBold(text: string) {
    text = `**${text}**`;
    return text;
  }

  return (
    <button
      aria-label="Bold"
      onClick={() => updateEditor("Bold", textToBold)}
      className="group relative flex items-center justify-center w-6 h-6 bg-transparent hover:bg-[#ffffff1a] focus-visible:bg-[#ffffff1a] outline-none rounded-sm transition-colors duration-250"
    >
      <span className="text-base text-center text-primary-text-500 font-semibold leading-4">
        B
      </span>
      <Tooltip text="Make text to Bold" />
    </button>
  );
}

export default Bold;
