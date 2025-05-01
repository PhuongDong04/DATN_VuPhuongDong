import React from "react";

// Masonry là thành phần sắp xếp ảnh theo bố cục lưới tự động kiểu "tường gạch
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import galleryImages from "./galleryImages";

const MasonryImagesGallery = () => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 768: 3, 992: 4 }}>
            <Masonry gutter="0.5rem">
                {galleryImages.map((item, index) => (
                    <div key={index}>
                        <img
                            src={item}
                            alt=""
                            style={{ width: '100%', display: 'block', borderRadius: '10px' }}
                        />
                    </div>
                ))}
            </Masonry>

        </ResponsiveMasonry>
    );
};

export default MasonryImagesGallery