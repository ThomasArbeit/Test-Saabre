import Link from "next/link"
import '@/styles/Pagination.scss';

type PaginationProps = {
 actualPage: number,
 totalPages: number,
 basePath: string,
 limit?: number,
}

export default function Pagination ({actualPage, totalPages, basePath, limit = 10}: PaginationProps) {
 const createPageArray = () => {
  const pages: (number | string)[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    if (actualPage < 3) {
      pages.push(1, 2, 3, '...', totalPages);
    } else if (actualPage === 3) {
      pages.push(1, 2, 3, 4, '...', totalPages);
    } else if (actualPage === totalPages - 2) {
      pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else if (actualPage > totalPages - 2) {
      pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
    } else {
      pages.push(
        1,
        '...',
        actualPage - 1,
        actualPage,
        actualPage + 1,
        '...',
        totalPages
      );
    }
  }

  return pages;
};

const pages = createPageArray();
 return (
  <div className="pagination">
   { actualPage > 1 && 
    <Link className="pagination__link" href={`${basePath}?limit=${limit}&offset=${(Number(actualPage) - 2)*limit}`}>
     Precedent
    </Link>
   }
   <div className="pagination__numbers">
    {pages.map((page, i) =>
      page === '...' ? (
        <span key={i}>
          ...
        </span>
      ) : (
       <Link className={`pagination__link ${actualPage === page ? 'pagination__link--active': ''}`} key={i} href={`${basePath}?limit=${limit}&offset=${(Number(page) - 1)*limit}`}>
        {page}
       </Link>
      )
    )}
   </div>


   <Link className="pagination__link" href={`${basePath}?limit=${limit}&offset=${(Number(actualPage))*limit}`}>
    Suivant
   </Link>
  </div>
 )
}