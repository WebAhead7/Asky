const homeURL = "http://localhost:3000/";
const previousAnswersDiv = document.querySelector("#previous-answers");

const container = document.querySelector(".container");
/*Here we bring the answers by talking to the server, and then
the server talks to the database and send us the wanted data, so
the home page will stay updated with the questions and answers from
the database, this is a self invoked function*/
(function updateHomePage() {
  fetch(`/getdata`)
    .then((response) => {
      if (!response.ok) throw new Error("Something Went Wrong!");
      else {
        return response.json();
      }
    })
    .then((data) => {
      console.log(data);
      let previousQuestionID = 0;
      let questionDiv = document.createElement("div");
      for (let i = 0; i < data.length; i++) {
        let questionID = data[i].question_id;
        let questionWriter = data[i].usernameq;
        let questionContent = data[i].question;
        let answerWriter = data[i].usernamea;
        let answersContent = data[i].answer_content;
        let answersDiv = document.createElement("div");
        if (questionID !== previousQuestionID) {
          container.appendChild(questionDiv);
          answersDiv.innerHTML = "";
          questionDiv.innerHTML += `<h2 id="${questionID}">Question: ${questionContent}</h2>
          <form action="addanswer" method="POST"> 
          <input name="username" type="text placeholder="Type your name">
          <input name="answer" type="text placeholder="Type your answer">
          <input type="submit" value="Publish">
          <input type="hidden" name="question_id" value="${questionID}">
          </form>`;
          previousQuestionID = data[i].question_id;
        }
        answersDiv.innerHTML = `<p>Answer: ${answersContent}</p>
        <p>Written By: ${answerWriter}</p>`;
        questionDiv.appendChild(answersDiv);
      }
    })
    .catch((error) => {
      console.error(error);
    });
})();
const addButton = document.querySelector("#add-btn");

addButton.addEventListener("click", () => {
  window.location.assign("/questionpage");
});
