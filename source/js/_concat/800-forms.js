$(function() {
	/*hint*/
	var $placeholder_inputs = $("input[placeholder], textarea[placeholder]");
	$placeholder_inputs.each(function() {
		var $this = $(this);
		var currVal = $this.val();

		if (currVal === '') {
			$this.val($this.attr('placeholder'));
		}
	});
	$placeholder_inputs.hint();


	/*forms*/
	var success_url = 'transmitted.html';
	var $form = $('form#estimate-form, form#contact-form');
	var $fields = $(':input', $form);
	var $error = $('.error', $form);
	var $loading = $('#loading');

	/*validate on submit*/
	var is_submitting = false;
	$form.submit(function (e) {
		e.preventDefault(); /*stop form submit*/

		if (is_submitting) {
			/*prevent multiple submit*/
			return;
		}
		is_submitting = true;

		$error.html(''); /*clear the error message*/
		$loading.removeClass('off');

		var $this = $(this);
		var stop = false;

		$fields.each(function () {
			var $field = $(this);

			if (!is_valid($field)) {
				stop = true;
			}
		});

		if (stop) {
			/*use delay to bring attention to error message*/
			setTimeout(function () {
				$loading.addClass('off');
				$error.html('Please make corrections to the highlighted entries above. (Required fields cannot be blank; some fields require a specific format.)');
				is_submitting = false;
			}, 300);

			return;
		}

		ajax_post($this);
	});

	/*validate on keyup only if currently invalid*/
	$fields.keyup(function (e) {
		var $field = $(this);

		if ($field.hasClass('invalid') && is_valid($field)) {
			$error.html(''); /*clear the error message*/
		}
	});

	/*stop form submit on enter (exclude textarea and button)*/
	$('input', $form).keydown(function (e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			return false; /*ie8*/
		}
	});


	function is_valid($field) {
		var entry = $field.val();
		var placeholder = $field.attr('placeholder');

		if ($field.data('required') && (entry === placeholder || !$.trim(entry))) {
			$field.addClass('invalid');
			return false;
		}

		var pattern = $field.data('pattern');
		/*if it does not equal placeholder, not empty, and pattern does not match...*/
		if (entry !== placeholder && $.trim(entry) && pattern && !RegExp(pattern).test(entry)) {
			$field.addClass('invalid');
			return false;
		}

		$field.removeClass('invalid');
		return true;
	}

	function ajax_post($form) {
		hints_remove(); /*remove hints from empty fields before submit*/

		$.ajax({
			method: 'POST',
			url: $form.attr('action'),
			data: $form.serialize()
		}).always(function (data, status, xhr) {
			if (status === 'error') {
				xhr = data;
			}

			if (xhr.status === 200) {
				location.assign(success_url);
				return;
			}

			hints_replace(); /*replace hints to empty fields*/
			if (xhr.status === 414) {
				$error.html('Your message exceeds the allowed length. Please shorten your message and try again.');
				$('textarea', $form).addClass('invalid');
			}
			else {
				$error.html('The server encountered an unexpected error. Please try again in a few moments.');
			}

			$loading.addClass('off');
			is_submitting = false;
		});
	}

	/*remove hints from empty fields before submit*/
	function hints_remove() {
		$fields.each(function () {
			var $field = $(this);
			var entry = $field.val();
			var placeholder = $field.attr('placeholder');

			if (entry === placeholder) {
				$field.val('');
			}
		});
	}

	function hints_replace() {
		$fields.each(function () {
			var $field = $(this);
			var entry = $field.val();
			var placeholder = $field.attr('placeholder');

			if (placeholder && !entry) {
				$field.val(placeholder);
			}
		});
	}
});