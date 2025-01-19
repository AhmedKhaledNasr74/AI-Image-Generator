import { useEffect, useState } from "react";

interface loadingType {
    loading: boolean;
}

const Loader = ({ loading }: loadingType) => {
    const [width, setWidth] = useState(0);
    let interval: NodeJS.Timeout | null = null;

    useEffect(() => {
        if (loading) {
            interval = setInterval(() => {
                setWidth((prevWidth) => {
                    if (prevWidth >= 100) {
                        if (interval) clearInterval(interval);
                        return 100;
                    }
                    return prevWidth + 1;
                });
            }, 100);
        } else {
            setWidth(0);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [loading]);

    return (
        loading && (
            <div className="w-full bg-gray-200 h-1 rounded-b-sm dark:bg-gray-700">
                <div
                    className="bg-purple-600 h-1 rounded-b-sm dark:bg-purple-500"
                    style={{
                        width: `${width}%`,
                        transition: "width 0.3s ease-out",
                    }}
                ></div>
            </div>
        )
    );
};

export default Loader;
