import React from "react";

// export const CarouselItem = ({ item, width }) => {
//   return (
//     <div className="carousel-item" style={{ width: width }}>
//       <div></div>
//       <img className="carousel-img" src={item.icon.default} />
//       <div className="carousel-item-text">{item.description}</div>
//     </div>
//   );
// };


export const CarouselItem = ({ manga, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      <div></div>
      <a href={manga.url}><img className="carousel-img" src={manga.img_url} /></a>
      <div className="carousel-item-text"><a href={manga.url}>{manga.title}</a>
      <p>Description:</p>{manga.manga_description}</div>
    </div>
  );
};