import { useEffect, useState } from "react";
import axios from "axios";

const ImageGallery = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/images")
            .then((response) => setImages(response.data))
            .catch((error) => console.error("Fetch error:", error));
    }, []);

    return (
        <div>
            {images.length > 0 ? (
                images.map((img) => (
                    <div key={img._id}>
                        <img src={`http://localhost:5000${img.filepath}`} alt={img.filename} width="200px" />
                    </div>
                ))
            ) : (
                <p>No images found.</p>
            )}
        </div>
    );
};

export default ImageGallery;
