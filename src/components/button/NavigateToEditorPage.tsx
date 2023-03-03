import Link from "next/link";

function NavigateToEditorPage() {
  return (
    <Link
      href="/editor"
      aria-label="Go to Editor's Page"
      title="Go to Editor's Page"
      className="inline-block px-4 py-1.5 w-auto bg-primary-orange text-base sm:text-lg text-center text-primary-text-600  font-medium tracking-wide rounded"
    >
      Create a New One
    </Link>
  );
}

export default NavigateToEditorPage;
