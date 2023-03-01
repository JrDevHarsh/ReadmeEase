import EditorLayout from "@/components/layout/Editor";
import PageSEO from "@/components/PageSEO";

export default function EditorPage() {
  return (
    <>
      <PageSEO
        title="Editor | ReadmeEase"
        description="Discover the power of effortless README creation with the editor feature of ReadmeEase."
      />
      <main className="relative w-full h-auto">
        <div className="mx-auto max-w-[1440px] w-full h-auto">
            <EditorLayout />
        </div>
      </main>
    </>
  );
}
