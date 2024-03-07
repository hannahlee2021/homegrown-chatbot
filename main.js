// Use a form and DOM and form event listener to update
// the AI/Chatbot object created in class 4 assignment.
// Use basic validation to make sure a question is actually
// asked before submitting/processing.



document.getElementById('chatbot').addEventListener('submit', function(event) {
    event.preventDefault();


const inputTextValue = document.getElementById('input-text').value.toLowerCase();
const QA = {
    one: {
    question: "what color is the sky on a sunny afternoon",
    answer: "light blue"
    },
    two: {
    question: "how many days are in the week",
    answer: "7"
    },
    three: {
    question: "what is the time difference between the east coast and the west coast",
    answer: "3 hours"
    }
};

const foundMatch = false;
document.getElementById('output').innerHTML = "";

for(const key in QA) {
    if ((inputTextValue.match("sky") && key==="one")
    || (inputTextValue.match("days") && key ==="two") 
    || (inputTextValue.match("difference") && key === "three")) {
        document.getElementById('output').innerHTML += `<h2>${QA[key].answer}</h2>`;
        // document.querySelector('.submission-container').innerHTML = QA[key].answer;
        console.log(QA[key].answer)
        foundMatch = true;
        document.getElementById('input-text').innerHTML.value = "";
        return;
    }
}

if (!foundMatch) {
    // document.getElementById('submission').innerHTML = "i cannot answer that";
     document.getElementById('output').innerHTML += "<p>i cannot answer that<p>";
    console.log("i cant ")
    document.getElementById('input-text').value = "";
    
    
    


}

});
