import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
  const params = useParams();

  return (
    <Fragment>
      <h1>Quote Detail Page</h1>
      {params.quoteId}
    </Fragment>
  );
};

export default QuoteDetail;
