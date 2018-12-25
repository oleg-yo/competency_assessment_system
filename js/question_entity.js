const QUESTION_YES_NO 			= 1;
const QUESTION_ONE_FROM_MANY 	= 2;
const QUESTION_SOME_FROM_MANY 	= 3;
const QUESTION_NUMBER 			= 4;
const QUESTION_INTERVAL 		= 5;
const QUESTION_FUZZY_INTERVAL 	= 6;
const QUESTION_WORD 			= 7;
const QUESTION_SENTENCE 		= 8;

const QUESTION_COMPLEXITY_DEFAULT = 0.5;

(function () {
	this.questions_counter = 0;

    function createQuestionVisibleHidden(type, question_str, answers_arr, correct_answer_id, image_path, complexity) {
    	questions_counter++;

    	if (!g_utils.isVar(complexity) || complexity <= 0 || complexity >= 1) {
    		complexity = QUESTION_COMPLEXITY_DEFAULT;
    	}

		let answers_with_id_arr = []
		for (let i = 0; i < answers_arr.length; i++) {
			answers_with_id_arr.push({
				"id": i,
				"answer": answers_arr[i],
			});
		}
		return {
			"visible": {
				"id": questions_counter,
				"type": type,
				"question": question_str,
				"answers_arr": answers_with_id_arr,
				"image": image_path,
				"complexity": complexity
			},
			"hidden": {
				"id": questions_counter,
				"type": type,
				"correct_answer_id": correct_answer_id,
				"complexity": complexity
			}
		}
	}

    window.g_question = {
        createQuestion: createQuestionVisibleHidden,
    };
})();