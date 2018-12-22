/*
	Don't look in this file, please!
	It has all questions with correct answers. 
	Cheating is not fair.
*/

(function () {
    function loadQuestions() {
        let questions = [];

		questions.push(g_question.createQuestion(
			QUESTION_YES_NO,
			"Чи правда, що на цій фотографії зображено Софійський собор у Києві?",
			["Так",
			"Ні"],
			[1],
			"q3.jpg",
		));
		questions.push(g_question.createQuestion(
			QUESTION_ONE_FROM_MANY,
			"Яким архітектурним стилям відповідає Будівля угорського парламенту?",
			["Неоготика і неоренесанс",
			"Готика і бароко",
			"Архітектура відродження і бароко"],
			[0, 1, 2],
			"q1.jpg",
		));
		questions.push(g_question.createQuestion(
			QUESTION_ONE_FROM_MANY,
			"Який архітектурний стиль вирізняє відмова від прямих ліній і кутів на користь більш природних ліній, а також використання металу і скла?",
			["Модерн",
			"Ампір",
			"Бароко"],
			[0, 2, 1],
			"q2.jpg",
		));

		questions.push(g_question.createQuestion(
			QUESTION_SOME_FROM_MANY,
			"Вкажіть правдиві на ваш погляд твердження",
			["Першим у світі хмарочосом вважається офіс у Парижі",
			"Ейфелева вежа спочатку створювалася як найвеличніша конструкція у світі для короля Франції",
			"Єгипетські піраміди є одним із семи чудес світу",
			"Єдиний в Україні 'плоский будинок-стіну' побудовано в Одесі"],
			[2, 3],
			"",
		));

		questions.push(g_question.createQuestion(
			QUESTION_NUMBER,
			"У якому столітті було побудовано Собор святого Юра у Львові?",
			[],
			[18],
			"q5.jpg",
		));
		questions.push(g_question.createQuestion(
			QUESTION_NUMBER,
			"У якому столітті було відкрито пам'ятник Богдану Хмельницькому у Києві?",
			[],
			[19],
			"q9.jpg",
		));
		questions.push(g_question.createQuestion(
			QUESTION_NUMBER,
			"У якому столітті було побудовано Андріївську церкву у Києві?",
			[],
			[18],
			"q10.jpg",
		));
		
		questions.push(g_question.createQuestion(
			QUESTION_INTERVAL,
			"У якому столітті було побудовано Софійський собор у Києві?",
			[],
			[11],
			"q4.jpg",
		));
		questions.push(g_question.createQuestion(
			QUESTION_INTERVAL,
			"У якому столітті було побудовано Спасо-Преображенський собор у Чернігові?",
			[],
			[11],
			"q11.png",
		));
		questions.push(g_question.createQuestion(
			QUESTION_INTERVAL,
			"У якому столітті було побудовано церкву святого Пантелеймона поблизу Галича?",
			[],
			[12],
			"q6.jpg",
		));

		return questions;
    }

    window.g_data = {
        loadQuestions: loadQuestions,
    };
})();