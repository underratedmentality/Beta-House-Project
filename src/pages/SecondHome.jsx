import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HeroSections } from "../data"; // Assuming HeroSections are imported
import { BiAlignLeft } from "react-icons/bi";

const SecondHome = () => {
  const { pageNumber } = useParams(); // Get the page number from URL
  const navigate = useNavigate();

  // Set a default page number if pageNumber is not available
  const currentPage = pageNumber ? parseInt(pageNumber) : 1;

  // Items per page
  const itemsPerPage = 3;
  
  // Ensure the page number is within a valid range
  const totalPages = Math.ceil(HeroSections.length / itemsPerPage);
  if (currentPage > totalPages) {
    navigate(`/page/${totalPages}`); // Redirect to the last valid page
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, HeroSections.length);

  const pageItems = HeroSections.slice(startIndex, endIndex);

  return (
    <div className='hero-div'>
      <div className='filter-div d-flex justify-content-between'>
        <div>
          <BiAlignLeft />{" "}{" "}<span>More Filter</span>{" "}{" "}
          <span>Showing {startIndex + 1}-{endIndex} of {HeroSections.length} Results</span>
        </div>
        <div>
          <p>Sort By: Default</p>
        </div>
      </div>
      <div className='section-div'>
        {pageItems.map((section) => {
          return (
            <div key={section.id} className='hero-item'>
              <img src={section.mainImage} alt="house" />
              <h3>{section.title}</h3>
              <p><span></span>{section.location}</p>
              <img src={section.frameImage} alt="description"/>
              <img src={section.priceImage} alt="price" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SecondHome;
