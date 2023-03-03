import NavigateToEditorPage from "@/components/button/NavigateToEditorPage";
import PageSEO from "@/components/PageSEO";

export default function Home() {
  return (
    <>
      <PageSEO
        title="ReadmeEase | Create README Files Effortlessly"
        description="Create beautiful and professional readme.md files effortlessly with ReadmeEase."
      />
      <main className="relative w-full h-auto">
        <section className="mx-auto max-w-7xl w-full h-auto">
          <div className="px-6 py-4 w-full">
            <div className="inline-block py-10 w-full">
              <div className="py-10 flex flex-col items-center justify-center w-full">
                <div className="my-4 mx-auto px-3 py-2 bg-gradient-to-r from-primary-dark-900 to-primary-dark-800">
                  <p className="text-lg sm:text-2xl md:text-4xl text-center text-primary-text-600 font-medium tracking-wide">
                    We have launch
                    <span className="text-primary-orange">ed&#33;</span>
                  </p>
                </div>
                <div className="mx-auto py-5 flex flex-col items-center justify-between max-w-2xl w-full">
                  <h2 className="text-lg sm:text-2xl lg:text-3xl text-center text-primary-text-500 font-medium tracking-wide">
                    Streamline your documentation process with
                  </h2>
                  <h3 className="mt-2 mb-4 text-3xl sm:text-5xl lg:text-6xl text-center text-primary-orange font-semibold tracking-wider">
                    ReadmeEase
                  </h3>
                  <p className="mt-4 w-full lg:w-3/4 text-sm lg:text-base text-center text-primary-text-700 font-medium tracking-wider leading-6">
                    A cutting-edge platform designed to simplify the creation of
                    high-quality README files. Users can easily design and
                    customize their README files.
                  </p>
                </div>
                <div className="mt-4 mx-auto flex items-center justify-center w-full">
                  <NavigateToEditorPage />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
