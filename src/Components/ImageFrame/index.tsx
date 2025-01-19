import Loader from "../Loader";
interface ImageFrameType {
    imageUrl: string;
    loading: boolean;
}
const ImageFrame = ({ imageUrl, loading }: ImageFrameType) => {
    return (
        <div className="w-1/4 min-w-[300px]">
            <h2 className="text-center text-3xl font-bold mb-4 text-white capitalize leading-normal">
                AI Image Generator with{" "}
                <span className="text-purple-500">pollinations.ai</span>
            </h2>
            <div className="imageFrame rounded-t-sm bg-slate-700 border-4 border-slate-700  aspect-square">
                {imageUrl !== "" && (
                    <img src={imageUrl} alt="Generated Image" />
                )}
            </div>
            <Loader loading={loading} />
        </div>
    );
};

export default ImageFrame;
