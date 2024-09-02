// import React, { useState } from 'react';
// import QuizPopup from './components/QuizPopup';
// import { getAIQuestion } from './services/QuestionService';
// import { getSearchResults } from './services/SearchService';

// function App() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [questionData, setQuestionData] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
//   const [showExpandedPopup, setShowExpandedPopup] = useState(false);
//   const [points, setPoints] = useState(0);
//   const [leaderboard, setLeaderboard] = useState([]);
//   const [isFirstQuestion, setIsFirstQuestion] = useState(true);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     const results = await getSearchResults(searchTerm);
//     setSearchResults(results);

//     // Fetch the initial question
//     const question = await getAIQuestion(searchTerm);
//     setQuestionData(question);

//     // Show the initial popup
//     setShowPopup(true);
//   };

//   const handlePlayMore = async () => {
//     setShowPopup(false); // Hide the initial popup
//     setShowExpandedPopup(true); // Show the expanded popup
//     setIsFirstQuestion(false); // Indicate that we are now in the expanded quiz mode
//   };

//   const handleCancel = () => {
//     setShowExpandedPopup(false); // Hide the expanded popup
//     setShowPopup(false); // Ensure the smaller popup is also hidden
//   };

//   const fetchNewQuestion = async () => {
//     const newQuestion = await getAIQuestion(searchTerm);
//     setQuestionData(newQuestion);
//   };

//   const updateLeaderboard = () => {
//     setLeaderboard([...leaderboard, { name: 'You', points }]);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSearch}>
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           placeholder="Search the Constitution..."
//         />
//         <button type="submit">Search</button>
//       </form>

//       <div className="search-results">
//         {searchResults.map((result, index) => (
//           <div key={index}>
//             <h3>{result.title}</h3>
//             <p>{result.snippet}</p>
//             <a href={result.link} target="_blank" rel="noopener noreferrer">
//               Read More
//             </a>
//           </div>
//         ))}
//       </div>

//       {showPopup && (
//         <QuizPopup
//           question={questionData.question}
//           options={questionData.options}
//           correctAnswer={questionData.correctAnswer}
//           onPlayMore={handlePlayMore}
//           onCancel={handleCancel}
//           leaderboard={leaderboard}
//           points={points}
//           setPoints={setPoints}
//           updateLeaderboard={updateLeaderboard}
//           fetchNewQuestion={fetchNewQuestion}
//           isExpanded={false}
//           setIsExpanded={() => {}}
//         />
//       )}

//       {showExpandedPopup && (
//         <QuizPopup
//           question={questionData.question}
//           options={questionData.options}
//           correctAnswer={questionData.correctAnswer}
//           onPlayMore={fetchNewQuestion}
//           onCancel={handleCancel}
//           leaderboard={leaderboard}
//           points={points}
//           setPoints={setPoints}
//           updateLeaderboard={updateLeaderboard}
//           fetchNewQuestion={fetchNewQuestion}
//           isExpanded={true}
//           setIsExpanded={setShowExpandedPopup}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import QuizPopup from './components/QuizPopup';
import { getAIQuestion } from './services/QuestionService';
import { getSearchResults } from './services/SearchService';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [questionData, setQuestionData] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showExpandedPopup, setShowExpandedPopup] = useState(false);
  const [points, setPoints] = useState(0);
  const [leaderboard, setLeaderboard] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await getSearchResults(searchTerm);
    setSearchResults(results);

    // Fetch the initial question
    const question = await getAIQuestion(searchTerm);
    setQuestionData(question);

    // Show the initial popup
    setShowPopup(true);
  };

  const handlePlayMore = async () => {
    setShowPopup(false); // Hide the initial popup
    setShowExpandedPopup(true); // Show the expanded popup
  };

  const handleCancel = () => {
    setShowExpandedPopup(false); // Hide the expanded popup
    setShowPopup(false); // Ensure the smaller popup is also hidden
  };

  const fetchNewQuestion = async () => {
    const newQuestion = await getAIQuestion(searchTerm);
    setQuestionData(newQuestion);
  };

  const updateLeaderboard = () => {
    setLeaderboard([...leaderboard, { name: 'You', points }]);
  };

  return (
    <div className="App">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search the Constitution..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="search-results">
        {searchResults.map((result, index) => (
          <div key={index}>
            <h3>{result.title}</h3>
            <p>{result.snippet}</p>
            <a href={result.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>

      {showPopup && (
        <QuizPopup
          question={questionData.question}
          options={questionData.options}
          correctAnswer={questionData.correctAnswer}
          onPlayMore={handlePlayMore}
          onCancel={handleCancel}
          leaderboard={leaderboard}
          points={points}
          setPoints={setPoints}
          updateLeaderboard={updateLeaderboard}
          fetchNewQuestion={fetchNewQuestion}
          isExpanded={false}
          setIsExpanded={setShowExpandedPopup}
        />
      )}

      {showExpandedPopup && (
        <QuizPopup
          question={questionData.question}
          options={questionData.options}
          correctAnswer={questionData.correctAnswer}
          onPlayMore={fetchNewQuestion}
          onCancel={handleCancel}
          leaderboard={leaderboard}
          points={points}
          setPoints={setPoints}
          updateLeaderboard={updateLeaderboard}
          fetchNewQuestion={fetchNewQuestion}
          isExpanded={true}
          setIsExpanded={setShowExpandedPopup}
        />
      )}
    </div>
  );
}

export default App;
