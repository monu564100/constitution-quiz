// import React, { useState, useEffect } from 'react';
// import './QuizPopup.css';

// const QuizPopup = ({
//   question,
//   options,
//   correctAnswer,
//   onPlayMore,
//   onCancel,
//   leaderboard,
//   points,
//   setPoints,
//   updateLeaderboard,
//   fetchNewQuestion,
//   isExpanded,
//   setIsExpanded
// }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [feedback, setFeedback] = useState('');
//   const [isFirstQuestion, setIsFirstQuestion] = useState(true);

//   useEffect(() => {
//     if (isExpanded) {
//       setSelectedOption(null);
//       setFeedback('');
//       setIsFirstQuestion(false); // To handle the state when the popup is expanded
//     }
//   }, [isExpanded]);

//   const handleOptionClick = async (option) => {
//     setSelectedOption(option);
//     if (option === correctAnswer) {
//       setFeedback('Correct!');
//       setPoints((prevPoints) => prevPoints + 2);
//       updateLeaderboard();
//     } else {
//       setFeedback(`Wrong! The correct answer is ${correctAnswer}`);
//     }

//     if (isExpanded && !isFirstQuestion) {
//       await fetchNewQuestion(); // Fetch a new question if in expanded mode
//       setSelectedOption(null);
//       setFeedback('');
//     }
//   };

//   const handlePlayMore = () => {
//     if (!isExpanded) {
//       onPlayMore(); // Trigger play more action if in the smaller popup
//     }
//   };

//   const handleCancel = () => {
//     setIsExpanded(false);
//     onCancel();
//   };

//   return (
//     <div className={`quiz-popup ${isExpanded ? 'expanded' : ''}`}>
//       <div className="quiz-content">
//         <p className="quiz-question">{question}</p>
//         <div className="quiz-options">
//           {options.map((option, index) => (
//             <button
//               key={index}
//               className={`quiz-option ${
//                 selectedOption === option
//                   ? option === correctAnswer
//                     ? 'correct'
//                     : 'wrong'
//                   : ''
//               }`}
//               onClick={() => handleOptionClick(option)}
//               disabled={selectedOption !== null && isExpanded}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//         {selectedOption && !isExpanded && isFirstQuestion && (
//           <button className="play-more-button" onClick={handlePlayMore}>
//             Play More
//           </button>
//         )}
//         {selectedOption && <p className="quiz-feedback">{feedback}</p>}
//       </div>
//       {isExpanded && (
//         <>
//           <button className="cancel-button" onClick={handleCancel}>
//             Cancel
//           </button>
//           <div className="leaderboard">
//             <h3>Leaderboard</h3>
//             {/* <ul>
//               {leaderboard.map((user, index) => (
//                 // <li key={index}>
//                 //   {user.name}: {user.points} points
//                 // </li>
//               ))}
//             </ul> */}
//             <p>Your Points: {points}</p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default QuizPopup;





// import React, { useState, useEffect } from 'react';
// import './QuizPopup.css';

// const QuizPopup = ({
//   question,
//   options,
//   correctAnswer,
//   onPlayMore,
//   onCancel,
//   leaderboard,
//   points,
//   setPoints,
//   updateLeaderboard,
//   fetchNewQuestion,
//   isExpanded,
//   setIsExpanded,
// }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [feedback, setFeedback] = useState('');
//   const [interactionTimer, setInteractionTimer] = useState(null);

//   useEffect(() => {
//     if (!isExpanded) {
//       // Set up a timer to hide the popup if there's no interaction
//       const timer = setTimeout(() => {
//         setIsExpanded(false);
//         onCancel();
//       }, 10000); // 10 seconds

//       setInteractionTimer(timer);

//       return () => clearTimeout(timer); // Clean up timer on component unmount or when expanded state changes
//     }
//   }, [isExpanded, onCancel, setIsExpanded]);

//   useEffect(() => {
//     if (interactionTimer) {
//       clearTimeout(interactionTimer); // Clear the timer on any user interaction
//     }
//   }, [selectedOption]);

//   const handleOptionClick = async (option) => {
//     setSelectedOption(option);
//     if (option === correctAnswer) {
//       setFeedback('Correct!');
//       setPoints((prevPoints) => prevPoints + 2);
//       updateLeaderboard();
//     } else {
//       setFeedback(`Wrong! The correct answer is ${correctAnswer}`);
//     }

//     if (isExpanded) {
//       await fetchNewQuestion(); // Fetch a new question if in expanded mode
//       setSelectedOption(null);
//       setFeedback('');
//     }
//   };

//   const handlePlayMore = () => {
//     if (!isExpanded) {
//       onPlayMore(); // Trigger play more action if in the smaller popup
//     }
//   };

//   const handleCancel = () => {
//     setIsExpanded(false);
//     onCancel();
//   };

//   return (
//     <div className={`quiz-popup ${isExpanded ? 'expanded' : ''}`}>
//       <div className="quiz-content">
//         <p className="quiz-question">{question}</p>
//         <div className="quiz-options">
//           {options.map((option, index) => (
//             <button
//               key={index}
//               className={`quiz-option ${
//                 selectedOption === option
//                   ? option === correctAnswer
//                     ? 'correct'
//                     : 'wrong'
//                   : ''
//               }`}
//               onClick={() => handleOptionClick(option)}
//               disabled={selectedOption !== null && isExpanded}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//         {selectedOption && !isExpanded && (
//           <button className="play-more-button" onClick={handlePlayMore}>
//             Play More
//           </button>
//         )}
//         {selectedOption && <p className="quiz-feedback">{feedback}</p>}
//       </div>
//       {isExpanded && (
//         <>
//           <button className="cancel-button" onClick={handleCancel}>
//             Cancel
//           </button>
//           <div className="leaderboard">
//             <h3>Leaderboard</h3>
//             {/* <ul>
//               {leaderboard.map((user, index) => (
//                 <li key={index}>
//                   {user.name}: {user.points} points
//                 </li>
//               ))}
//             </ul> */}
//             <p>Your Points: {points}</p>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default QuizPopup;

import React, { useState, useEffect } from 'react';
import './QuizPopup.css';

const QuizPopup = ({
  question,
  options,
  correctAnswer,
  onPlayMore,
  onCancel,
  leaderboard,
  points,
  setPoints,
  updateLeaderboard,
  fetchNewQuestion,
  isExpanded,
  setIsExpanded,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [interactionTimer, setInteractionTimer] = useState(null);
  const [loading, setLoading] = useState(false); // State to manage loading

  useEffect(() => {
    if (!isExpanded) {
      // Set up a timer to hide the popup if there's no interaction
      const timer = setTimeout(() => {
        setIsExpanded(false);
        onCancel();
      }, 10000); // 10 seconds

      setInteractionTimer(timer);

      return () => clearTimeout(timer); // Clean up timer on component unmount or when expanded state changes
    }
  }, [isExpanded, onCancel, setIsExpanded]);

  useEffect(() => {
    if (interactionTimer) {
      clearTimeout(interactionTimer); // Clear the timer on any user interaction
    }
  }, [selectedOption]);

  const handleOptionClick = async (option) => {
    setSelectedOption(option);
    if (option === correctAnswer) {
      setFeedback('Correct!');
      setPoints((prevPoints) => prevPoints + 2);
      updateLeaderboard();
    } else {
      setFeedback(`Wrong! The correct answer is ${correctAnswer}`);
    }

    if (isExpanded) {
      setLoading(true); // Start loading state

      // Wait for 2 seconds before fetching a new question
      setTimeout(async () => {
        await fetchNewQuestion(); // Fetch a new question
        setSelectedOption(null);
        setFeedback('');
        setLoading(false); // End loading state
      }, 1500); // 2 seconds delay
    }
  };

  const handlePlayMore = () => {
    if (!isExpanded) {
      onPlayMore(); // Trigger play more action if in the smaller popup
    }
  };

  const handleCancel = () => {
    setIsExpanded(false);
    onCancel();
  };

  return (
    <div className={`quiz-popup ${isExpanded ? 'expanded' : ''}`}>
      <div className="quiz-content">
        <p className="quiz-question">{question}</p>
        <div className="quiz-options">
          {options.map((option, index) => (
            <button
              key={index}
              className={`quiz-option ${
                selectedOption === option
                  ? option === correctAnswer
                    ? 'correct'
                    : 'wrong'
                  : ''
              }`}
              onClick={() => handleOptionClick(option)}
              disabled={selectedOption !== null && isExpanded || loading} // Disable buttons during loading
            >
              {option}
            </button>
          ))}
        </div>
        {selectedOption && !isExpanded && (
          <button className="play-more-button" onClick={handlePlayMore}>
            Play More
          </button>
        )}
        {selectedOption && <p className="quiz-feedback">{feedback}</p>}
      </div>
      {isExpanded && (
        <>
          {loading ? (
            <p className="loading">Loading...</p> // Display loading text
          ) : (
            <>
              <button className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
              <div className="leaderboard">
                <h3>Leaderboard</h3>
                {/* <ul>
                  {leaderboard.map((user, index) => (
                    <li key={index}>
                      {user.name}: {user.points} points
                    </li>
                  ))}
                </ul> */}
                <p>Your Points: {points}</p>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default QuizPopup;
