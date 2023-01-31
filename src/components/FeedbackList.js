import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Feedbackitems from './Feedbackitems';
import { FaSpinner } from 'react-icons/fa';
import Card from '../shared/Card';

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }

  return isLoading ? (
    <>
      <FaSpinner />
    </>
  ) : (
    <div className="feedback-list">
      {feedback.map((data) => (
        <Feedbackitems key={data.id} item={data} />
      ))}
    </div>
  );
};

export default FeedbackList;
