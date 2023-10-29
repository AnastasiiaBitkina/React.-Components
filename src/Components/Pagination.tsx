import React, { useState, useEffect } from "react";
import { GifData } from "./apiFunctions";

interface PaginationProps {
  gifs: GifData;
}

interface ShuffledGifs {
  data: GifData["data"];
}

const Pagination: React.FC<PaginationProps> = ({ gifs }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [shuffledGifs, setShuffledGifs] = useState<ShuffledGifs | null>(null);
  const itemsPerPage: number = 5;

  useEffect(() => {
    if (gifs.data) {
      const shuffled = shuffleArray(gifs.data);
      setShuffledGifs({ data: shuffled });
    }
  }, [gifs]);

  const displayGifs = () => {
    if (!shuffledGifs) {
      return null;
    }

    const startIndex: number = (currentPage - 1) * itemsPerPage;
    const endIndex: number = currentPage * itemsPerPage;
    const currentGifs = shuffledGifs.data.slice(startIndex, endIndex);

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

  const shuffleArray = (array: GifData["data"]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
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
