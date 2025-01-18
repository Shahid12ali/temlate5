import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 border rounded-md ${
          currentPage === 1 ? "bg-gray-200 text-gray-400" : "bg-white text-black"
        }`}
      >
        First
      </button>


      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 border rounded-md ${
          currentPage === 1 ? "bg-gray-200 text-gray-400" : "bg-white text-black"
        }`}
      >
        &lt;
      </button>

     
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 border rounded-md ${
            currentPage === page
              ? "bg-blue-500 text-white"
              : "bg-white text-black"
          }`}
        >
          {page}
        </button>
      ))}

     
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 border rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400"
            : "bg-white text-black"
        }`}
      >
        &gt;
      </button>

     
      <button
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 border rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400"
            : "bg-white text-black"
        }`}
      >
        Last
      </button>
    </div>
  );
};

export default Pagination;
