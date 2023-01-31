import React from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';

const Post = () => {
  const navigate = useNavigate();

  const handleChange = () => {
    navigate('/post/show');
  };

  return (
    <div>
      <button onClick={handleChange}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello world</h1>} />
      </Routes>
    </div>
  );
};

export default Post;
