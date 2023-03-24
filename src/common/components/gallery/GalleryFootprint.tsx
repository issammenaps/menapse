import React, { useState, useCallback } from "react";
import { Gallery } from "react-grid-gallery";
 
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import styled from 'styled-components';
import { IGalleryFootprint } from "./IGalleryFootprint";

 
  export default function GalleryFootprint({ data, children, style,className,padding }: IGalleryFootprint) {
  const [index, setIndex] = useState(-1);

  const currentImage = data[index];
  const nextIndex = (index + 1) % data.length;
  const nextImage = data[nextIndex] || currentImage;
  const prevIndex = (index + data.length - 1) % data.length;
  const prevImage = data[prevIndex] || currentImage;

  const handleClick = (index: number, item: any) => setIndex(index)

  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => {setIndex(nextIndex); console.log("ffff")}



 
 

  return (
 
     <div className={` ${padding ? "site-padding  " : ""} ${style ? style : ""} `}>
      <Gallery
        images={data}
        onClick={handleClick}
        margin={10}
        rowHeight={280}
        enableImageSelection={false}
     
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>


  );
}
 


