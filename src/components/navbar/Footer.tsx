import Link from "next/link";

function Footer() {
  return (
    <footer className="relative bottom-0 w-full border-t border-solid border-t-primary-dark-800">
      <div className="relative flex items-center justify-center w-full h-auto">
        <div className="mx-auto px-2 lg:px-4 py-4 flex items-center justify-between max-w-7xl w-full h-auto">
          <div className="flex items-center w-auto">
            <h1 className="text-center">
              <Link
                href="/"
                className="relative flex items-center justify-center w-auto"
                aria-label="Go to home page"
                title="ReadmeEase"
              >
                <div className="flex items-center justify-center w-auto">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_716_2)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 32V0.240997H23.041L0 32ZM31.15 32V0.240997H26.739L17.48 13.158L31.15 32ZM3.645 32L15.499 16.121L27.353 32H3.645Z"
                        fill="#E56643"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_716_2">
                        <rect width="32" height="32" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="ml-1 text-2xl text-current font-medium tracking-wide">
                    ReadmeEase
                  </span>
                </div>
              </Link>
            </h1>
          </div>
          <div className="w-auto">
            <p className="text-sm text-center text-[#c9d1d9] tracking-wide">
              <span className="hidden md:inline font-normal">
                Open-Source project released under the
              </span>{" "}
              <a
                href="https://github.com/JunDevHarsh/ReadmeEase/blob/dev/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white no-underline hover:underline"
                aria-label="MIT LICENSE"
                title="Project's MIT LICENSE"
              >
                MIT LICENSE
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
