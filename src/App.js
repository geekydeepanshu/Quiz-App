import { useState } from "react";
function App() {
  $_quizApiResponse();

  return (
    <div className="w-screen h-screen sm:flex sm:justify-center sm:items-center bg-blue-950">

      <div className=" h-3/4 w-1/2 sm:rounded-xl sm:p-8 bg-white">
        <h1 className="text-3xl font-medium text-blue-900">Simple Quiz</h1>
        <hr className="h-[1.5px] mt-8 mb-6 font-medium border-0 bg-blue-900" />
        <p className="sm:mb-3 sm:text-xl sm:text-blue-900 "> Question Goes Here...</p>
        <button className="h-10 w-full sm:my-2 sm:pl-4 sm:text-md sm:text-left sm:border sm:rounded-md sm:text-blue-900 sm:border-blue-900">Answer 1</button>
        <button className="h-10 w-full sm:my-2 sm:pl-4 sm:text-md sm:text-left sm:border sm:rounded-md sm:text-blue-900 sm:border-blue-900">Answer 2</button>
        <button className="h-10 w-full sm:my-2 sm:pl-4 sm:text-md sm:text-left sm:border sm:rounded-md sm:text-blue-900 sm:border-blue-900">Answer 3</button>
        <button className="h-10 w-full sm:my-2 sm:pl-4 sm:text-md sm:text-left sm:border sm:rounded-md sm:text-blue-900 sm:border-blue-900">Answer 4</button>
        <div className="my-6 sm:flex sm:flex-row sm:justify-center sm:items-center">
          <button className="h-10 w-52 sm:self-center text-white sm:text-md sm:font-medium sm:rounded-lg bg-blue-900"
            onClick={() => { $_quizApiResponse() }}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;



function $_quizApiResponse() {
  fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
    .then((response) => {
      return response.json();
    })
    .then((quizData) => {
      let data = quizData.results;
      console.log(quizData.results);
      
      let answers = data[1].incorrect_answers;
      answers.push(data[1].correct_answer);
      console.log(shuffle(answers));

    })
    .catch((error) => {
      alert(error);
      // window.location.reload();
    })
}

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}