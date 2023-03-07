function DownloadFile({ value }: { value: string }) {
  function downloadFile() {
    if (value === "") return;
    const element = document.createElement("a");
    const file = new Blob([value], { type: "text/markdown" });
    element.href = URL.createObjectURL(file);
    element.download = "file.md";
    document.body.appendChild(element);
    element.click();
  }
  return (
    <button
      aria-label="Download File"
      title="Download"
      onClick={downloadFile}
      disabled={value === ""}
      className={`relative px-4 py-2.5 flex items-center justify-center w-auto outline-none rounded-sm transition-colors duration-250 ${
        value === ""
          ? "bg-primary-dark-800 text-primary-text-700"
          : "bg-primary-orange hover:bg-[#d55937] focus-visible:bg-[#d55937] text-primary-text-400 hover:text-primary-text-600 focus-visible:text-primary-text-600"
      }`}
    >
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
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>

      <span className="ml-1 text-sm text-center text-current font-semibold leading-4">
        Download
      </span>
    </button>
  );
}

export default DownloadFile;
