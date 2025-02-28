import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4; // Total number of pages, you can adjust this dynamically

  // Go to the previous page
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Go to the next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Set the current page when a page number is clicked
  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="max-w-[500px] flex items-center gap-4 mx-auto justify-center my-7">
      {/* Previous Arrow */}
      <RiArrowLeftSLine
        size={22}
        color="gray"
        role="button"
        onClick={handlePrev}
      />

      {/* Pagination Numbers */}
      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            className={`h-5 w-5 text-black ${page === currentPage ? 'bg-green-700 text-white' : ''}`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        );
      })}

      {/* Next Arrow */}
      <RiArrowRightSLine
        size={22}
        color="black"
        role="button"
        onClick={handleNext}
      />
    </div>
  );
};

export default Pagination;
