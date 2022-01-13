import {useState} from 'react';
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedBack, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this feedback?')) {
    setFeedback(feedBack.filter((item) => item.id !== id));
    }
  }
  return (
    <>
    <Header />
    <div className="container">
      <FeedbackStats feedback={feedBack} />
      <FeedbackList feedback={feedBack} handleDelete={deleteFeedback} />
    </div>
    </>
  );
}

export default App;