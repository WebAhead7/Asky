const previousAnswersDiv = document.querySelector("#previous-answers");
const container = document.querySelector(".container");
const addButton = document.querySelector("#add-btn");

addButton.addEventListener("click", () => {
  window.location.assign("/questionpage");
});

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
      let questionDiv = document.createElement("div");
      let previousQuestionID = 0;
    
      for (let i = 0; i < data.length; i++) {
        let questionID = data[i].id;
        let questionWriter = data[i].usernameq;
        let questionContent = data[i].question;
        let answerWriter = data[i].usernamea;
        let answersContent = data[i].answer_content;
        let answersDiv = document.createElement("div");
        
        /*check if this is valid answer to a given question.*/
        if (answersContent !== null) {
          /*new question to add to the form*/
          if (questionID !== previousQuestionID || questionID == null) {
            /*add a line bfore a new question*/
            if (questionID !== 1) questionDiv.innerHTML += "<hr class='separator'>";
            container.appendChild(questionDiv);
            answersDiv.innerHTML = "";
            /*add answer form to the user*/
            questionDiv.innerHTML += `<h2 id="${questionID}"> 
          Question: ${questionContent}</h2>
          <form action="addanswer" method="POST"> 
          <input name="username" type="text" placeholder="Type your name" required>
          <input name="answer" type="text" placeholder="Type your answer" required>
          <input type="submit" value="Publish">
          <input type="hidden" name="question_id" value="${questionID}">
          </form>`;
            previousQuestionID = data[i].question_id;
          }
          answersDiv.innerHTML = `<p> 
          Answer: ${answersContent}</p>
          <p>Written By: ${answerWriter}</p>`;
          questionDiv.appendChild(answersDiv);
        } 
        */new question to add that has no answers yet*/
        else {
          questionDiv.innerHTML += "<hr class='separator'>";
          /*add answer form to the user*/
          if (questionID !== previousQuestionID || questionID == null) {
            container.appendChild(questionDiv);
            answersDiv.innerHTML = "";
            questionDiv.innerHTML += `<h2 id="${questionID}">
          Question: ${questionContent}</h2>
          <form action="addanswer" method="POST"> 
          <input name="username" type="text" placeholder="Type your name">
          <input name="answer" type="text" placeholder="Type your answer">
          <input type="submit" value="Publish">
          <input type="hidden" name="question_id" value="${questionID}">
          </form>`;
            previousQuestionID = data[i].question_id;
          }
        }
      }
    })
    .catch((error) => {
      console.error(error);
    });
})();

