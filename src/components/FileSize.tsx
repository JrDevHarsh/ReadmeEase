function FileSize({ text }: { text: string }) {
  function getFileSize(value: string) {
    const bytes = new TextEncoder().encode(JSON.stringify(value)).length;
    if (bytes < 1024) {
      return bytes + " bytes";
    } else if (bytes >= 1024 && bytes < 1048576) {
      const kiloBytes = (bytes / 1024).toFixed(2);
      return kiloBytes + " KB";
    }
    const megaBytes = (bytes / 1048576).toFixed(2);
    return megaBytes + " MB";
  }
  return (
    <div className="flex items-center justify-center w-auto text-sm text-center font-medium tracking-wide">
      <span className="text-primary-text-700">Size:</span>
      <span className="ml-1 text-primary-text-600">{getFileSize(text)}</span>
    </div>
  );
}

export default FileSize;
