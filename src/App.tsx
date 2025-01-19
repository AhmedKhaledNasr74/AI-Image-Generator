import { useState } from "react";
import "./App.css";
import ImageFrame from "./Components/ImageFrame";
import SearchInput from "./Components/SearchInput";

function App() {
    const [imageUrl, setImageUrl] = useState("");
    const [loading, setLoading] = useState(false);
    return (
        <main className="bg-slate-900 h-screen flex flex-col items-center justify-center">
            <ImageFrame imageUrl={imageUrl} loading={loading} />

            <SearchInput setImageUrl={setImageUrl} setLoading={setLoading} />
        </main>
    );
}

export default App;
