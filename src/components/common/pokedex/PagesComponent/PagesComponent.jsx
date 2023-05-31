import "./PagesComponent.css";

const PagesComponent = ({
    totalPages,
    onNextPage,
    onPreviousPage,
    onChangePage}) => {
        
    const pagesArray = Array(totalPages)
    .fill()
    .map((_, index) => index + 1)


  return (
    <div className='pages_container'>
        <button className="previous_btn" onClick={() => onPreviousPage()}>Previous</button>

        {pagesArray.map((page) => (
            <button className="page-number" key={page} onClick={() => onChangePage(page)}>
              {page}
            </button>
        ))}
        <button className="next_btn" onClick={() => onNextPage()}>Next
        </button>
    </div>
  )
}

export default PagesComponent