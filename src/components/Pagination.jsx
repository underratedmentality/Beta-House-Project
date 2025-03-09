import React, { useState } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // For example, 5 total pages, you can adjust dynamically
  const navigate = useNavigate(); // Get the navigate function

  // Go to the previous page
  const handlePrev = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      navigate(`/page/${newPage}`); // Navigate to the new page
    }
  };

  // Go to the next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      navigate(`/page/${newPage}`); // Navigate to the new page
    }
  };

  // Set the current page when a page number is clicked
  const handlePageClick = (page) => {
    setCurrentPage(page);
    navigate(`/page/${page}`); // Navigate to the selected page
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
