import React, { useContext, useEffect, useState } from 'react';
import Rating from './components/Rating';
import FeedbackContext from './context/FeedbackContext';
import Button from './shared/Button';
import Card from './shared/Card';

const FeedbackForm = () => {
  const { addFeedBack, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState();

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be 10 character long!!');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      console.log(newFeedback);

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedBack(newFeedback);
      }
      setText('');
    }
  };

  return (
    <>
      <Card reverse={true}>
        <form onSubmit={handleSubmit}>
          <h2>How would you rate your service with us?</h2>
          <Rating select={(rating) => setRating(rating)} />
          <div className="input-group">
            <input
              onChange={handleTextChange}
              type="text"
              placeholder="Write a review"
              value={text}
            />
            <Button type="submit" isDisabled={btnDisabled}>
              Send
            </Button>
          </div>
          <div className="message">{message}</div>
        </form>
      </Card>
    </>
  );
};

export default FeedbackForm;
