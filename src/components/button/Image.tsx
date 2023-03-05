function ImageLink({ updateEditor }: { updateEditor: Function }) {
  // function to make text to image link
  function textToImageLink(text: string) {
    text = `![${text}](https://www.example.com)`;
    return text;
  }

  return (
    <button
      aria-label="Image"
      title="Image"
      onClick={() => updateEditor("alt-text-of-image", textToImageLink)}
      className="flex items-center justify-center w-6 h-6 bg-transparent hover:bg-[#ffffff1a] focus-visible:bg-[#ffffff1a] outline-none rounded-sm transition-colors duration-250"
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
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
          />
        </svg>
      </span>
    </button>
  );
}

export default ImageLink;
