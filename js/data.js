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
			"q3.jpg"
		));
		questions.push(g_question.createQuestion(
			QUESTION_ONE_FROM_MANY,
			"Яким архітектурним стилям відповідає Будівля угорського парламенту?",
			["Неоготика і неоренесанс",
			"Готика і бароко",
			"Архітектура відродження і бароко"],
			[0, 1, 2],
			"q1.jpg"
		));
		questions.push(g_question.createQuestion(
			QUESTION_ONE_FROM_MANY,
			"До якого стилю відноситься будівля Бруклінської публічної бібліотеки?",
			["Ар-нуво",
			"Ар-деко",
			"Модерн"],
			[1, 0, 2],
			"q12.jpg"
		));
		questions.push(g_question.createQuestion(
			QUESTION_ONE_FROM_MANY,
			"Який з цих соборів відноситься до готичного архітектурного стилю?",
			["Собор Святого Петра у Ватикані",
			"Німецький собор на берлінській площі Жандарменмаркт",
			"Собор Паризької Богоматері у Парижі"],
			[2, 1, 0],
			"q13.jpg"
		));
		questions.push(g_question.createQuestion(
			QUESTION_ONE_FROM_MANY,
			"Як називається химерний стиль пізньої готичної архітектури, популярний у Франції та Іспанії в 15 столітті?",
			["Полум’яніюча готика",
			"Сяюча готика",
			"Танцююча готика"],
			[0, 1, 2],
			"q14.jpg"
		));
		questions.push(g_question.createQuestion(
			QUESTION_ONE_FROM_MANY,
			"Як називається архітектурний стиль пізнього класицизму, що виник у Франції в період правління Наполеона I?",
			["Романтизм",
			"Бароко",
			"Ампір",
			"Рококо"],
			[2, 1, 3, 0],
			"q15.jpg"
		));
		questions.push(g_question.createQuestion(
			QUESTION_ONE_FROM_MANY,
			"Архітектором якої з будівель є Рафаель Санті?",
			["Палаццо Фарнезе в Римі",
			"Вілла Фарнезе в Витербо",
			"Палац Пандольфіні у Флоренції"],
			[2, 0, 1],
			"q16.jpg"
		));

		questions.push(g_question.createQuestion(
			QUESTION_SOME_FROM_MANY,
			"Вкажіть правдиві на ваш погляд твердження",
			["Першим у світі хмарочосом вважається офіс у Парижі",
			"Єгипетські піраміди є одним із семи чудес світу",
			"Ейфелева вежа спочатку створювалася як найвеличніша конструкція у світі для короля Франції",
			"Єдиний в Україні 'плоский будинок-стіну' побудовано в Одесі"],
			[2, 3],
			""
		));

		questions.push(g_question.createQuestion(
			QUESTION_NUMBER,
			"У якому столітті було побудовано Собор святого Юра у Львові?",
			[],
			[18],
			"q5.jpg"
		));
		questions.push(g_question.createQuestion(
			QUESTION_NUMBER,
			"У якому столітті було відкрито пам'ятник Богдану Хмельницькому у Києві?",
			[],
			[19],
			"q9.jpg"
		));
		questions.push(g_question.createQuestion(
			QUESTION_NUMBER,
			"У якому столітті було побудовано Андріївську церкву у Києві?",
			[],
			[18],
			"q10.jpg"
		));
		
		
		// questions.push(g_question.createQuestion(
		// 	QUESTION_INTERVAL,
		// 	"У якому столітті було побудовано Софійський собор у Києві?",
		// 	[],
		// 	[11],
		// 	"q4.jpg",
		// ));
		// questions.push(g_question.createQuestion(
		// 	QUESTION_INTERVAL,
		// 	"У якому столітті було побудовано Спасо-Преображенський собор у Чернігові?",
		// 	[],
		// 	[11],
		// 	"q11.png",
		// ));
		// questions.push(g_question.createQuestion(
		// 	QUESTION_INTERVAL,
		// 	"У якому столітті було побудовано церкву святого Пантелеймона поблизу Галича?",
		// 	[],
		// 	[12],
		// 	"q6.jpg",
		// ));

		return questions;
    }

    window.g_data = {
        loadQuestions: loadQuestions,
    };
})();