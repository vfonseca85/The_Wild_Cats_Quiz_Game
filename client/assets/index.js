let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        let output = [];
        let answers;
    
        // for each question...
        for(let i=0; i<questions.length; i++){
            
            // first reset the list of answers
           let answers = [];
    
            // for each available answer to this question...
            for(letter in questions[i].answers){
    
                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+ letter+'">' 
                        +'   '+ letter + ' :  '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
    
            // add this question and its answers to the output
            output.push(
                '<div class="question">' + (i+1) + ') ' + questions[i].question + '</div>','</br>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
    
        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }

function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	let answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	let userAnswer = '';
	let numCorrect = 0;
	
	// for each question...
	for(let i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}

async function getQuestions(){
    let response = await fetch("http://localhost:3002/questions"); //getting data from API
    let jsonResponse = await response.json() //data coming through
    let myQuestions = [];
   
    for(item in jsonResponse){
     myQuestions.push(jsonResponse[item])
    }
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
    
   }
   
   
   getQuestions()
