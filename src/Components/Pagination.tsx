import React, { useState } from "react";
import { GifData } from "./apiFunctions";

interface PaginationProps {
  gifs: GifData;
}

const Pagination: React.FC<PaginationProps> = ({ gifs }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage: number = 5;

  const displayGifs = () => {
    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = currentPage * itemsPerPage;
    const currentGifs = gifs.data.slice(startIndex, endIndex);

    return (
      <div>
        <h2>Random Gif</h2>
        <ul>
          {currentGifs.map((gif, index) => (
            <div key={index}>
              <h3>Title</h3>
              <img src={gif.images.original.url} alt="" />
            </div>
          ))}
        </ul>
      </div>
    );
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(gifs.data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      {displayGifs()}
      <div>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(gifs.data.length / itemsPerPage)}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Pagination;

