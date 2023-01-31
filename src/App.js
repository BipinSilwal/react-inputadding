import React from 'react';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import FeedbackForm from './FeedbackForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Post from './components/Post';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  return (
    <>
      <FeedbackProvider>
        <Router>
          <Header />
          <div className="container">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackList />
                  </>
                }
              ></Route>
              <Route path="/about" element={<About />} />
              <Route path="/post/*" element={<Post />} />
            </Routes>
          </div>
        </Router>
      </FeedbackProvider>
    </>
  );
};

export default App;
