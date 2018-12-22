const ANSWER_CENTURY_MIN = 0;
const ANSWER_CENTURY_MAX = 21;
const ANSWER_CENTURY_DEVIATION = 1;

let questions_amount = 0;
let questions = [];
let answers_amount = 0;
let answers = [];

let result = {};

let current_card_id = 0;

let test_finished = false;


function runOnload() {
	questions = g_data.loadQuestions();
	questions_amount = questions.length;
	if (!questions_amount) {
		return;
	}
	questions = g_utils.shuffleArray(questions);

	var card = createQuestionCard(current_card_id);
	card.getElementsByClassName('card_buttons')[0].addEventListener('click', changeCardCallback);

	document.addEventListener('keydown', function (event) {
		switch (event.keyCode) {
			case 37:
				document.getElementsByClassName('card_button')[0].click();
				break;
			case 39:
				document.getElementsByClassName('card_button')[1].click();
				break;
		}
	});
}

function createQuestionCard(card_id) {
	let question_this = questions[card_id].visible;

	let card = document.createElement('div');
	card.classList.add('card');
	card.setAttribute('card_id', card_id);

		let card_question = document.createElement('div');
		card_question.classList.add('card_question');
		let question_number = (card_id + 1) + "/" + questions_amount
		card_question.innerText = question_number + ": " + question_this.question;

		let card_image = document.createElement('img');
		card_image.classList.add('card_image');
		let image_name = question_this.image;
		if (image_name == "") {
			image_name = "architecture.jpg"
		}
		card_image.src = 'images/' + image_name;

			var loading_bowl = document.createElement('div');
			loading_bowl.innerHTML = '<div class="bowl_ringG">'
				+ '<div class="ball_holderG">'
					+ '<div class="ballG"></div>'
				+ '</div>'
			+ '</div>';
			loading_bowl.classList.add('loading_bowl');

			card_image.appendChild(loading_bowl);

		let card_answer = document.createElement('div');
		card_answer.classList.add('card_answer');
		let card_answer_form = createCardAnswerForm(card_id, question_this);
		card_answer.appendChild(card_answer_form);

		var card_buttons = document.createElement('div');
		card_buttons.classList.add('card_buttons');

		var button_prev = document.createElement('div');
		button_prev.classList.add('card_button');
		var button_next = button_prev.cloneNode(false);
		button_prev.innerText = 'Попереднє питання';
		button_prev.setAttribute('direction', -1);
		button_next.innerText = 'Наступне питання';
		button_next.setAttribute('direction', 1);

		card_buttons.appendChild(button_prev);
		card_buttons.appendChild(button_next);

	card.appendChild(card_question);
	card.appendChild(card_image);
	card.appendChild(card_answer);
	card.appendChild(card_buttons);

	document.body.appendChild(card);
	return card;
}

function createCardAnswerForm(card_id, question_this) {
	let card_answer_form = document.createElement('form');
	let saved_answers = answers[card_id];
	switch (question_this.type) {
		case QUESTION_YES_NO:
		case QUESTION_ONE_FROM_MANY:
			for (let i = 0; i < question_this.answers_arr.length; i++) {
				let form_input = document.createElement('input');
				form_input.type = 'radio';
				form_input.name = 'q' + card_id;
				form_input.value = question_this.answers_arr[i].id;
				form_input.id = question_this.answers_arr[i].id;
				if (saved_answers) {
					for (let j = 0; j < saved_answers.length; j++) {
						if (saved_answers[j] == question_this.answers_arr[i].id) {
							form_input.checked = true;
							break;
						}
					}
				}

				let form_label = document.createElement('label');
				form_label.setAttribute('for', question_this.answers_arr[i].id);
				form_label.innerText = question_this.answers_arr[i].answer;

				let br_element = document.createElement('br');

				card_answer_form.appendChild(form_input);
				card_answer_form.appendChild(form_label);
				card_answer_form.appendChild(br_element);
			}
		break;
		case QUESTION_SOME_FROM_MANY: {
			for (let i = 0; i < question_this.answers_arr.length; i++) {
				let form_input = document.createElement('input');
				form_input.type = 'checkbox';
				form_input.name = 'q' + card_id;
				form_input.value = question_this.answers_arr[i].id;
				form_input.id = question_this.answers_arr[i].id;
				if (saved_answers) {
					for (let j = 0; j < saved_answers.length; j++) {
						if (saved_answers[j] == question_this.answers_arr[i].id) {
							form_input.checked = true;
							break;
						}
					}
				}

				let form_label = document.createElement('label');
				form_label.setAttribute('for', question_this.answers_arr[i].id);
				form_label.innerText = question_this.answers_arr[i].answer;

				let br_element = document.createElement('br');

				card_answer_form.appendChild(form_input);
				card_answer_form.appendChild(form_label);
				card_answer_form.appendChild(br_element);
			}
		}
		break;
		case QUESTION_NUMBER: {
			let form_label = document.createElement('label');
			form_label.innerText = "Введіть одне число - століття, \nнаприклад 21:";

			let br_element = document.createElement('br');

			let form_input = document.createElement('input');
			form_input.classList.add('card_input_number');
			form_input.type = 'number';
			form_input.name = 'q' + card_id;
			form_input.min = ANSWER_CENTURY_MIN;
			form_input.max = ANSWER_CENTURY_MAX;
			if (saved_answers) {
				form_input.value = saved_answers[0];
			}

			card_answer_form.appendChild(form_label);
			card_answer_form.appendChild(br_element);
			card_answer_form.appendChild(form_input);
		}
		break;
		case QUESTION_INTERVAL:
		case QUESTION_FUZZY_INTERVAL: {
			let form_label = document.createElement('label');
			form_label.innerText = "Вкажіть інтервал з двох чисел з різницею не більше 2, \nнаприклад 1-3:";

			let br_element = document.createElement('br');

			let form_input = document.createElement('input');
			form_input.classList.add('card_input_number');
			form_input.type = 'number';
			form_input.name = 'q' + card_id;
			form_input.min = ANSWER_CENTURY_MIN;
			form_input.max = ANSWER_CENTURY_MAX;
			if (saved_answers) {
				form_input.value = saved_answers[0];
			}

			card_answer_form.appendChild(form_label);
			card_answer_form.appendChild(br_element);
			card_answer_form.appendChild(form_input);
		}
		break;
		case QUESTION_WORD:
		case QUESTION_SENTENCE:
			// let form_input = document.createElement('input');
			// form_input.type = 'text';
			// form_input.name = 'q1';
			// form_input.value = question_this.answers_arr[i].id;
			// form_input.id = question_this.answers_arr[i].id;
	}
	return card_answer_form;
}

function createResultsCard(card_id) {
	let card = document.createElement('div');
	card.classList.add('card');
	card.setAttribute('card_id', card_id);

		let card_label_text;
		if (answers_amount != questions_amount) {
			test_finished = false;
			card_label_text = "Для отримання результату дайте відповіді на всі запитання";
		} else {
			test_finished = true;
			card_label_text = "Опитування завершено!";
		}

		let card_label = document.createElement('div');
		card_label.classList.add('card_question');
		card_label.innerText = card_label_text;

		let card_result = document.createElement('div');
		card_result.classList.add('card_answer');

		var card_buttons = document.createElement('div');
		card_buttons.classList.add('card_buttons');

		if (test_finished) {
			card_result.innerHTML = "Ваш результат: " + 
			result["result"] + " з " + 
			result["result_max"] + " балів.";
		} else {
			var button_prev = document.createElement('div');
			button_prev.classList.add('card_button');
			var button_next = button_prev.cloneNode(false);
			button_prev.innerText = 'Попереднє питання';
			button_prev.setAttribute('direction', -1);
			button_next.innerText = 'Наступне питання';
			button_next.setAttribute('direction', 1);

			card_buttons.appendChild(button_prev);
			card_buttons.appendChild(button_next);
		}

	card.appendChild(card_label);
	card.appendChild(card_result);
	card.appendChild(card_buttons);

	document.body.appendChild(card);
	return card;
}

function changeCardView(old_card, direction) {
	var last_card_id = old_card.getAttribute('card_id');
	var new_card_id = parseInt(last_card_id) + direction;

	var angle = direction === 1 ? 72 : -72;

	if (new_card_id === questions_amount) {
		evaluateResult();
		var new_card = createResultsCard(new_card_id);
	} else {
		var new_card = createQuestionCard(new_card_id);
	}

	new_card.style.transform = 'rotateY(' + angle + 'deg)';
	new_card.style.visibility = 'hidden';

	old_card.style.transform = 'rotateY(' + (-1 * angle) + 'deg)';
	setTimeout(function() {
		new_card.style.visibility = 'visible';
		setTimeout(function() {
			new_card.style.transform = "rotateY(0deg)";
		}, 50);
	}, 200);
	setTimeout(function() {
		document.body.removeChild(old_card);
	}, 500);

	return new_card;
}

function changeCardCallback(event) {
	if (document.getElementsByClassName('card').length > 1 ||
		test_finished) {
		return;
	}
	var old_card = document.getElementsByClassName('card')[0];
	var last_card_id = parseInt(old_card.getAttribute('card_id'));

	var button = event.target;
	var direction = parseInt(button.getAttribute('direction'));
	var new_card_id = last_card_id + direction;

	if (new_card_id < 0 ||
		new_card_id > questions_amount && questions_amount !== -1) {
		return;
	}
	button.removeEventListener('click', changeCardCallback);

	saveCardData(old_card);

	var new_card = changeCardView(old_card, direction);
	new_card.getElementsByClassName('card_buttons')[0].addEventListener('click', changeCardCallback);

	current_card_id = new_card_id;
}

function saveCardData(card) {
	let card_id = parseInt(card.getAttribute('card_id'));
	let card_inputs = document.getElementsByName('q' + card_id);

	if (answers[card_id] && answers[card_id].length) {
		answers_amount--;
	}

	let answers_values = [];
	for (let i = 0; i < card_inputs.length; i++) {
		if (card_inputs[i].type == 'number' && card_inputs[i].value ||
		(card_inputs[i].type == 'radio' && card_inputs[i].checked) ||
		(card_inputs[i].type == 'checkbox' && card_inputs[i].checked)) {
			answers_values.push(card_inputs[i].value);
		}
	}
	answers[card_id] = answers_values;

	if (answers[card_id] && answers[card_id].length) {
		answers_amount++;
	}
}

function evaluateResult() {
	const RESULT_MAX = questions_amount;

	let result_sum = 0;
	for (let i = 0; i < questions_amount; i++) {
		let answer_ids = answers[i].map(Number);
		switch (questions[i].hidden.type) {
			case QUESTION_YES_NO: {
				if (answer_ids[0] == questions[i].hidden.correct_answer_id[0]) {
					result_sum += 1;
				} else {
					result_sum -= 1;
				}
			}
			break;

			case QUESTION_ONE_FROM_MANY: {
				if (answer_ids[0] == questions[i].hidden.correct_answer_id[0]) {
					result_sum += 1;
				} else {
					let variants_amount = questions[i].hidden.correct_answer_id.length;
					let step = Math.round(1 / (variants_amount - 1) * 100) / 100;
					let penalty = 0;
					for (let j = 0; j < variants_amount; j++) {
						if (answer_ids[0] == questions[i].hidden.correct_answer_id[j]) {
							result_sum -= penalty;
							break;
						}
						penalty += step;
					}
				}
			}
			break;

			case QUESTION_SOME_FROM_MANY: {
				let variants_amount = questions[i].visible.answers_arr.length;
				let right_variants_amount = questions[i].hidden.correct_answer_id.length;
				let wrong_variants_amount = variants_amount - right_variants_amount;
				let right_step = Math.round(1 / right_variants_amount * 100) / 100;
				let wrong_step = Math.round(1 / wrong_variants_amount * 100) / 100;
				let result_sum_local = 0;
				for (let j = 0; j < answer_ids.length; j++) {
					if (questions[i].hidden.correct_answer_id.find(id => id === answer_ids[j])) {
						result_sum_local += right_step;
					} else {
						result_sum_local -= wrong_step;
					}
				}
				result_sum_local = Math.round(result_sum_local * 10) / 10;
				result_sum += result_sum_local;
			}
			break;

			case QUESTION_NUMBER: {
				if (ANSWER_CENTURY_MIN <= answer_ids[0] && answer_ids[0] <= ANSWER_CENTURY_MAX) {
					let left_border = questions[i].hidden.correct_answer_id[0] - ANSWER_CENTURY_DEVIATION;
					if (left_border < ANSWER_CENTURY_MIN) {
						left_border = ANSWER_CENTURY_MIN;
					}
					let right_border = questions[i].hidden.correct_answer_id[0] + ANSWER_CENTURY_DEVIATION;
					if (right_border > ANSWER_CENTURY_MAX) {
						right_border = ANSWER_CENTURY_MAX;
					}
					let answer_difference = Math.abs(answer_ids[0] - questions[i].hidden.correct_answer_id[0]);
					if (answer_difference > ANSWER_CENTURY_DEVIATION) {
						result_sum -= 1;
					} else {
						let penalty = answer_difference * Math.round(1 / ANSWER_CENTURY_DEVIATION * 100) / 100;
						result_sum += 1 - penalty;
					}
				} else {
					result_sum -= 1;
				}
			}
			break;

			case QUESTION_WORD: {
				if (answer_ids[0] == questions[i].hidden.correct_answer_id[0]) {
					result_sum += 1;
				} else {
					result_sum -= 1;
				}
			}
			break;
			
			case QUESTION_INTERVAL: {
				if (ANSWER_CENTURY_MIN <= answer_ids[0] && answer_ids[0] <= ANSWER_CENTURY_MAX) {
					let left_border = questions[i].hidden.correct_answer_id[0] - ANSWER_CENTURY_DEVIATION;
					if (left_border < ANSWER_CENTURY_MIN) {
						left_border = ANSWER_CENTURY_MIN;
					}
					let right_border = questions[i].hidden.correct_answer_id[0] + ANSWER_CENTURY_DEVIATION;
					if (right_border > ANSWER_CENTURY_MAX) {
						right_border = ANSWER_CENTURY_MAX;
					}
					result_sum += (answer_ids[0] - right_border) / (right_border - left_border);
				} else {
					result_sum -= 1;
				}
			}
			case QUESTION_FUZZY_INTERVAL:

			case QUESTION_SENTENCE:
		}
	}
	if (result_sum > RESULT_MAX) {
		result_sum = RESULT_MAX;
	}
	result['result'] = result_sum;
	result['result_max'] = RESULT_MAX;
}

window.onload = runOnload();
