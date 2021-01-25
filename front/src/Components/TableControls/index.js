import "./style.scss";

const TableControls = ({
  prevLabel,
  nextLabel,
  onPrevClick,
  onNextClick,
  currentPage = 1,
}) => {
  return (
    <div className="table-controls">
      <div className="button prev" onClick={onPrevClick}>
        <p>{prevLabel}</p>
      </div>
      <div className="page-info">
        <p>{currentPage + 1}</p>
      </div>
      <div className="button next" onClick={onNextClick}>
        <p>{nextLabel}</p>
      </div>
    </div>
  );
};

export default TableControls;
