import axios from 'axios';

// Array of 100 default questions about the Indian Constitution
const defaultQuestions = [
  {
    question: "What is the preamble of the Indian Constitution?",
    options: ["Introduction to the Constitution", "Directive Principles of State Policy"],
    correctAnswer: "Introduction to the Constitution"
  },
  {
    question: "Which part of the Indian Constitution deals with Fundamental Rights?",
    options: ["Part III", "Part IV"],
    correctAnswer: "Part III"
  },
  {
    question: "Who is the head of state in India?",
    options: ["President", "Prime Minister"],
    correctAnswer: "President"
  },
  {
    question: "What is the maximum age limit for the President of India?",
    options: ["65 years", "70 years"],
    correctAnswer: "35 years"
  },
  {
    question: "Who appoints the Chief Election Commissioner of India?",
    options: ["President", "Prime Minister"],
    correctAnswer: "President"
  },
  {
    question: "What is the term length for a Rajya Sabha member?",
    options: ["5 years", "6 years"],
    correctAnswer: "6 years"
  },
  {
    question: "Which article of the Indian Constitution provides for the establishment of the Supreme Court?",
    options: ["Article 124", "Article 217"],
    correctAnswer: "Article 124"
  },
  {
    question: "Who is the ex-officio Chairman of the Rajya Sabha?",
    options: ["President", "Vice President"],
    correctAnswer: "Vice President"
  },
  {
    question: "What is the minimum age for becoming a Member of Parliament in India?",
    options: ["25 years", "30 years"],
    correctAnswer: "25 years"
  },
  {
    question: "Which fundamental right is related to education?",
    options: ["Right to Equality", "Right to Education"],
    correctAnswer: "Right to Education"
  },
  // Add more questions up to 100
  // Ensure a mix of different topics related to the Indian Constitution
  {
    question: "Who is responsible for the enforcement of Fundamental Rights?",
    options: ["Supreme Court", "High Court"],
    correctAnswer: "Supreme Court"
  },
  {
    question: "Which body is responsible for the amendment of the Indian Constitution?",
    options: ["Parliament", "President"],
    correctAnswer: "Parliament"
  },
  {
    question: "How many schedules are there in the Indian Constitution?",
    options: ["12", "10"],
    correctAnswer: "12"
  },
  {
    question: "Who can dissolve the Lok Sabha?",
    options: ["President", "Prime Minister"],
    correctAnswer: "President"
  },
  {
    question: "Which article of the Constitution deals with the removal of the President?",
    options: ["Article 61", "Article 75"],
    correctAnswer: "Article 61"
  },
  {
    question: "Which Article of the Indian Constitution guarantees the right to freedom of speech and expression?",
    options: ["Article 19", "Article 21"],
    correctAnswer: "Article 19"
  },
  {
    question: "What is the term length for the President of India?",
    options: ["4 years", "5 years"],
    correctAnswer: "5 years"
  },
  {
    question: "What is the main responsibility of the Speaker of the Lok Sabha?",
    options: ["Preside over the House", "Lead the Opposition"],
    correctAnswer: "Preside over the House"
  },
  {
    question: "Which Article provides for the official language of India?",
    options: ["Article 343", "Article 351"],
    correctAnswer: "Article 343"
  },
  {
    question: "How is the Prime Minister of India appointed?",
    options: ["Elected by the people", "Appointed by the President"],
    correctAnswer: "Appointed by the President"
  },
  // Continue adding questions until you have 100
];

// Array to track used questions
const usedQuestions = new Set();

// Function to get a random default question that has not been used
const getRandomDefaultQuestion = () => {
  if (usedQuestions.size >= defaultQuestions.length) {
    // All questions have been used
    usedQuestions.clear(); // Optionally reset if you want to reuse questions
  }

  let question;
  do {
    const randomIndex = Math.floor(Math.random() * defaultQuestions.length);
    question = defaultQuestions[randomIndex];
  } while (usedQuestions.has(question));

  usedQuestions.add(question);
  return question;
};

// Function to get a question from the Llama API
export const getAIQuestion = async (searchTerm) => {
  try {
    const response = await axios.post(
      'https://api.your-llama-endpoint.com/generateQuestion', // Update with your actual API endpoint
      {
        searchTerm: searchTerm,
        prompt: "Generate a question about the Indian Constitution with two options and one correct answer."
      },
      {
        headers: {
          'Authorization': `Bearer LA-5fb83bf75ac4479383206090e52cfd534499454714a94d16bed67d3f09f0735a`, // Replace with your API key
          'Content-Type': 'application/json',
        },
      }
    );

    // Assuming the API returns question, options, and correctAnswer
    const { question, options, correctAnswer } = response.data;

    // Ensure the options and correctAnswer are valid
    if (question && options && options.length === 2 && correctAnswer) {
      return { question, options, correctAnswer };
    } else {
      throw new Error('Invalid question format');
    }
  } catch (error) {
    console.error('Error generating question:', error);
    return getRandomDefaultQuestion(); // Fall back to a random default question
  }
};
