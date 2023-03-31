import { useEffect, useState } from "react";
import LinkGithub from "./LinkGithub";
function ProjectStar(): JSX.Element {
  const [starCount, setStarCount] = useState<number>(0);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const abortController = new AbortController();

      const githubUrl = process.env.NEXT_PUBLIC_GITHUB_REPO_URL;
      const fetchStarCount = async function () {
        try {
          if (!githubUrl) {
            throw new Error(
              "'NEXT_PUBLIC_GITHUB_REPO_URL' variable is not defined in .env.local file"
            );
          }
          const response = await fetch(
            "https://api.github.com/repos/JunDevHarsh/ReadmeEase",
            {
              signal: abortController.signal,
            }
          );
          const data = await response.json();
          setStarCount(data.stargazers_count);
        } catch (error) {
          console.error("Error fetching star count:", error);
        }
      };

      fetchStarCount();

      return () => {
        abortController.abort();
      };
    }
  }, []);

  return (
    <div className="flex items-center justify-center w-auto">
      <LinkGithub />
      <a
        href="https://github.com/JunDevHarsh/ReadmeEase/"
        target="_blank"
        rel="noopener noreferrer"
        className="relative pl-1 sm:pl-3 pr-1 sm:pr-4 py-1 flex items-center justify-center w-auto bg-primary-dark-900 hover:bg-primary-dark-800 text-primary-text-400 rounded-tl rounded-bl outline-1 outline outline-primary-dark-800 hover:outline-primary-text-700 focus-visible:outline-primary-text-700 z-[2]"
        aria-label="Star the Project"
        title="Star this project"
      >
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>

        <span className="ml-0.5 min-[425px]:ml-2 text-sm text-center text-current font-normal tracking-wide">
          Star <span className="hidden min-[425px]:inline">this Project</span>
        </span>
      </a>
      <span className="relative px-2 py-1 flex items-center justify-center w-auto h-7 bg-primary-dark-900 hover:bg-primary-dark-800 text-sm text-center text-primary-text-600 rounded-tr rounded-br outline-1 outline outline-primary-dark-800 hover:outline-primary-text-700 z-[1] hover:z-[3]">
        {starCount === 0 ? (
          <span
            aria-label="Loading"
            className="inline-block w-5 h-5 bg-transparent border-[3px] border-solid border-x-current border-y-transparent rounded-full spin_rotate"
          ></span>
        ) : (
          <span
            aria-label={`Stars to the project: ${starCount}`}
            title={`Stars: ${starCount}`}
          >
            {starCount}
          </span>
        )}
      </span>
    </div>
  );
}

export default ProjectStar;
