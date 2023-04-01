function LinkGithub(): JSX.Element {

return (
<div className="flex items-center justify-center w-auto mr-5">
    <a href="https://github.com/JunDevHarsh/ReadmeEase/" target="_blank" rel="noopener noreferrer"
        className="relative pl-1 sm:pl-3 pr-1 sm:pr-4 py-1 flex items-center justify-center w-auto bg-primary-dark-900 hover:bg-primary-dark-800 text-primary-text-400 rounded-tl rounded-bl outline-1 outline outline-primary-dark-800 hover:outline-primary-text-700 focus-visible:outline-primary-text-700 z-[2]"
        aria-label="Star the Project" title="Star this project">
        <svg fill="none" viewBox="0 0 45 45" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round"
                d="M21.8,4.2a19.93,19.93,0,0,0-5,38.4.92.92,0,0,0,1.2-1V38.4a8.25,8.25,0,0,1-1.8.2A4.31,4.31,0,0,1,12,34.8a4.15,4.15,0,0,0-1.2-2c-.6-.2-.8-.2-.8-.4,0-.4.6-.4.8-.4,1.2,0,2.2,1.4,2.6,2a3.64,3.64,0,0,0,2.8,2,4,4,0,0,0,1.8-.4A5.07,5.07,0,0,1,20,32c-4.6-1-8-3.6-8-8a9.43,9.43,0,0,1,2.4-6,7.42,7.42,0,0,1-.4-2.8,5.91,5.91,0,0,1,.4-2.6A.64.64,0,0,1,15,12h.2A9.5,9.5,0,0,1,20,14.6a13.63,13.63,0,0,1,8,0A9.92,9.92,0,0,1,33,12h.2c.4,0,.6.2.8.6v2.6a6.65,6.65,0,0,1-.4,2.8A9,9,0,0,1,36,24c0,4.4-3.4,7-8,8a6.17,6.17,0,0,1,2,4.6v5.2a1.09,1.09,0,0,0,1.4,1A20.08,20.08,0,0,0,21.8,4.2Z" />
        </svg>

        <span className="ml-0.5 min-[425px]:ml-2 text-sm text-center text-current font-normal tracking-wide">
            gitHub
        </span>
    </a>

</div>
);
}

export default LinkGithub;