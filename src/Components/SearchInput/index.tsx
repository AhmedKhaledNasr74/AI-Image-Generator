import { useState } from "react";
import Button from "../Button";
import axios from "axios";
interface SearchInputType {
    setImageUrl: (imageUrl: string) => void;
    setLoading: (state: boolean) => void;
}
const SearchInput = ({ setImageUrl, setLoading }: SearchInputType) => {
    const [searchItem, setSearchItem] = useState("");

    let fetchImage = async () => {
        return await axios.get(
            `https://image.pollinations.ai/prompt/${searchItem}`
        );
    };

    let submitPrompt = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const result = await fetchImage();
            if (result) {
                setImageUrl(result.request.responseURL);
            }
        } catch (error) {
            console.error("Error fetching image", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-1/4 min-w-[300px] mt-6">
            <form
                className="relative flex items-center h-10"
                onSubmit={(e) => submitPrompt(e)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                        clipRule="evenodd"
                    />
                </svg>

                <input
                    className="w-full bg-transparent h-full border-r-0 rounded-sm rounded-r-none placeholder:text-slate-400 text-slate-200 text-sm border border-slate-400 pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-200 hover:border-slate-300 shadow-sm focus:shadow "
                    placeholder="Type a Prompt"
                    onChange={(e) => {
                        setSearchItem(e.target.value);
                    }}
                    value={searchItem}
                />
                <Button />
            </form>
        </div>
    );
};

export default SearchInput;
