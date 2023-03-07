function Tooltip({ text }: { text: string }) {
  return (
    <div className="hidden group-hover:block group-focus-visible:block absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 px-2 py-1 w-auto bg-[#ffffffeb] text-xs text-center text-primary-dark-900 font-medium tracking-wide whitespace-nowrap rounded z-10">
      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#ffffffeb] rotate-45"></span>
      {text}
    </div>
  );
}

export default Tooltip;
