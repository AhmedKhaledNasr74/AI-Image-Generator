const Button = () => {
    return (
        <button className="group relative py-1   bg-purple-600  text-neutral-50 h-full border border-slate-200 rounded-l-none border-l-0 rounded-sm px-4">
            <span className="relative z-10">Generate</span>
            <span className="absolute inset-0 overflow-hidden rounded-md">
                <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-purple-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
            </span>
        </button>
    );
};

export default Button;
