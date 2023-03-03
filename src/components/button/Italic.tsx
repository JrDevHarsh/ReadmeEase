function Italic({ updateEditor }: { updateEditor: Function }) {
    // function to make text bold
    function textToItalic(text: string) {
      text = `*${text}*`;
      return text;
    }
  
    return (
      <button
        aria-label="Italic"
        title="Italic"
        onClick={() => updateEditor("Italic", textToItalic)}
        className="flex items-center justify-center w-6 h-6 bg-transparent hover:bg-[#ffffff1a] focus-visible:bg-[#ffffff1a] outline-none rounded-sm transition-colors duration-250"
      >
        <span className="text-base text-center text-primary-text-500 italic font-semibold leading-4">
          I
        </span>
      </button>
    );
  }
  
  export default Italic;
  