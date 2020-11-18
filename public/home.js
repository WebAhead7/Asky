/*Here we bring the answers by talking to the server, and then
the server talks to the database and send us the wanted data*/
const homeURL = "http://localhost:3000/";
const previousAnswersDiv = document.querySelector("#previous-answers");
fetch(`${homeURL}getanswers`)
  .then((response) => {
    if (!response.ok) throw new Error("Something Went Wrong!");
    else {
      return response.json();
    }
  })
  .then((data) => {
    console.log(data);
    previousAnswersDiv.innerHTML = "";
    data.forEach((answer) => {
      let answerDiv = document.createElement("div");
      answerDiv.classList.add("answer-div"); //I added this class for the styling in css
      let username = answer.username;
      let answerContent = answer.answer_content;
      answerDiv.innerHTML = `<h4>Username: ${username}</h4>
          <h4>Answer: ${answerContent}</h4>`;
      previousAnswersDiv.appendChild(answerDiv);
    });
  })
  .catch((error) => {
    console.error(error);
  });
