import React, { useContext } from 'react';
import Card from '../shared/Card';
import { FaEdit } from 'react-icons/fa';
import { TiDeleteOutline } from 'react-icons/ti';
import FeedbackContext from '../context/FeedbackContext';

const Feedbackitems = ({ item }) => {
  const { editFeedback, deleteFeedBack } = useContext(FeedbackContext);

  return (
    <>
      <Card reverse={true}>
        <div className="num-display">{item.rating}</div>

        <button className="delete" onClick={() => deleteFeedBack(item.id)}>
          <TiDeleteOutline color="purple" />
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color="purple" />
        </button>
        <div className="text-display">{item.text}</div>
      </Card>
    </>
  );
};

export default Feedbackitems;
