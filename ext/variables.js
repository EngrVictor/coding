
function populate()  {
 		if(quiz.isEnded()){
 			showScores();
 		}else{
 			// show question
 			var element = document.getElementById("question");
 			element.innerHTML = quiz.getQuestionIndex().text;

 			// show choices
 			var choices = quiz.getQuestionIndex().choices;
 			for(var i = 0; i < choices.length; i++)  {
 				var element = document.getElementById("choice" + i);
 				element.innerHTML = choices[i];
 				guess("btn" + i, choices[i]);
 			}

 			showProgress();
 		}
 	};

 	function guess(id, guess){
 		var button = document.getElementById(id);
 		button.onclick = function(){
 			quiz.guess(guess);
      
 			populate();
 		}
 	};

 	function showProgress() {
 		var currentQuestionNumber = quiz.questionIndex + 1;
 		var element = document.getElementById("progress");
 		element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
 	}

    function showScores() {
    	var gameOverHtml = "<h1>Result</h1>";
    	  gameOverHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    	  var element = document.getElementById("quiz");
    	  element.innerHTML = gameOverHtml;
    };

 	var questions = [
       new Question("what is the capital of Ebonyi?", ['Owerri', 'Kaduna', 'Abakaliki', 'Enugu'], 'Abakaliki'),
       new Question(" ______ is a type of electrical component?", ['Brush', 'Capacitor', 'spatula', 'benz'], 'Capacitor'),
       new Question("what is the full meaning of HP?", ['Highly Portable', 'Hawlett Packard', 'Hulk Porche', 'high Press'], 'Hawlett Packard'),
       new Question("the ______ aids the display and the speed of a computer system?", ['RAM', 'ROM', 'PROM', 'IDE'], 'RAM'),
       new Question("each of the following are the types of computer processors ______?", ['Sd,cd,led,ccfl', 'Acer,Lenovo,Asus,Dell', 'Pentium,Core i3,i5,i7', 'SSD,SATA,PATA,IDE'], 'Pentium,Core i3,i5,i7'),
       new Question("Which of this is a type of javascript framework?", ['Vue.js', 'Angular.js', 'Shell.js', 'React.js'], 'Shell.js'),
       new Question("Which of the following programming language can be used for both front-end and back-end development?", ['Javacript', 'Php', 'Ruby', 'Mysql'], 'Javacript'),
       new Question("Who invented the (IC) Integrated Circuits?", ['Jack Kilby', 'Charles Babbage', 'William B. Shockley', 'John Bardeen'], 'Jack Kilby'),
       new Question("Which of the computer generations used vacuum tubes for circuitry and magnetic drums for memory, and were often enormous, taking up entire rooms?", ['Fourth Generation', 'Third Generation', 'Second Generation', 'First Generation'], 'First Generation'),
       new Question("Which of the computer generations used Integrated Circuits (ICs) in place of transistors?", ['Fourth Generation', 'Third Generation', 'Second Generation', 'First Generation'], 'Third Generation'),
 	];
    var n = Math.floor(Math.random() * questions.lenght);
 	 var quiz = new Quiz(questions);

 	 populate();