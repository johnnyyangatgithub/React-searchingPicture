import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    // console.log(props.images);
    const images = props.images.map((image) => {
        // console.log(image.urls.regular);
        // 将key属性标注在map方法返回的跟标记中
        return <ImageCard key={image.id} image={image} />
    });
    return (
        <div className='image-list'>
            {images}
        </div>
    );
};

export default ImageList;