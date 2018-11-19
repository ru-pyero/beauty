/*
 ** Contact form notify
 */

var contact_form_notify = readCookie("contact-form-notify");
if(contact_form_notify == 'true') {
	$.notify({
		title: '<center><strong>Сообщение успешно отправлено.</strong><center>',
		message: 'Мы свяжемся с вами как можно быстрее, спасибо!'},{
		type: 'success',
		template:
		'<div data-notify="container fade" role="alert" class="col-xs-11 col-sm-2 alert alert-{0}" style="margin: 15px 0 15px 0;">\
		<button type="button" class="close" data-notify="dismiss" style="top:7px;">\
		<span aria-hidden="true">×</span>\
		<span class="sr-only">Close</span>\
		</button>\
		<span data-notify="icon"></span>\
		<span data-notify="title">{1}</span>\
		<span data-notify="message" style="padding-right:15px">{2}</span>\
		<a href="{3}" target="{4}" data-notify="url"></a>\
		</div>'
	});
	eraseCookie('contact-form-notify');
}
if(contact_form_notify == 'false') {
	$.notify({
		title: '<center><strong>Ошибка отправки сообщения.</strong><center>',
		message: 'Нам очень жаль, но ваше сообщение не было отправлено нам на почту.'},{
		type: 'danger',
		template:
		'<div data-notify="container fade" role="alert" class="col-xs-11 col-sm-2 alert alert-{0}" style="margin: 15px 0 15px 0;">\
		<button type="button" class="close" data-notify="dismiss" style="top:7px;">\
		<span aria-hidden="true">×</span>\
		<span class="sr-only">Close</span>\
		</button>\
		<span data-notify="icon"></span>\
		<span data-notify="title">{1}</span>\
		<span data-notify="message" style="padding-right:15px">{2}</span>\
		<a href="{3}" target="{4}" data-notify="url"></a>\
		</div>'
	});
	eraseCookie('contact-form-notify');
}

var contact_form_validate_notify = readCookie("contact-form-validate-notify");
if(contact_form_validate_notify == 'true') {
	$.notify({
		title: '<center><strong>Ошибка отправки сообщения.</strong><center>',
		message: 'Где-то произошла ошибка валидации формы отправки сообщения.'},{
		type: 'danger',
		template:
		'<div data-notify="container fade" role="alert" class="col-xs-11 col-sm-2 alert alert-{0}" style="margin: 15px 0 15px 0;">\
		<button type="button" class="close" data-notify="dismiss" style="top:7px;">\
		<span aria-hidden="true">×</span>\
		<span class="sr-only">Close</span>\
		</button>\
		<span data-notify="icon"></span>\
		<span data-notify="title">{1}</span>\
		<span data-notify="message" style="padding-right:15px">{2}</span>\
		<a href="{3}" target="{4}" data-notify="url"></a>\
		</div>'
	});
	eraseCookie('contact-form-validate-notify');
}

/*
 ** Request form notify
 */

var request_form_notify = readCookie("request-form-notify");
if(request_form_notify == 'true') {
	$.notify({
		title: '<center><strong>Ваша заявка принята.</strong><center>',
		message: 'Мы рассмотрим её как можно быстрее, спасибо!'},{
		type: 'success',
		template:
		'<div data-notify="container fade" role="alert" class="col-xs-11 col-sm-2 alert alert-{0}" style="margin: 15px 0 15px 0;">\
		<button type="button" class="close" data-notify="dismiss" style="top:7px;">\
		<span aria-hidden="true">×</span>\
		<span class="sr-only">Close</span>\
		</button>\
		<span data-notify="icon"></span>\
		<span data-notify="title">{1}</span>\
		<span data-notify="message" style="padding-right:15px">{2}</span>\
		<a href="{3}" target="{4}" data-notify="url"></a>\
		</div>'
	});
	eraseCookie('request-form-notify');
}
if(request_form_notify == 'false') {
	$.notify({
		title: '<center><strong>Ошибка отправки новой заявки.</strong><center>',
		message: 'Нам очень жаль, но ваша заявка не была отправлена нам на почту.'},{
		type: 'danger',
		template:
		'<div data-notify="container fade" role="alert" class="col-xs-11 col-sm-2 alert alert-{0}" style="margin: 15px 0 15px 0;">\
		<button type="button" class="close" data-notify="dismiss" style="top:7px;">\
		<span aria-hidden="true">×</span>\
		<span class="sr-only">Close</span>\
		</button>\
		<span data-notify="icon"></span>\
		<span data-notify="title">{1}</span>\
		<span data-notify="message" style="padding-right:15px">{2}</span>\
		<a href="{3}" target="{4}" data-notify="url"></a>\
		</div>'
	});
	eraseCookie('request-form-notify');
}

var request_form_validate_notify = readCookie("request-form-validate-notify");
if(request_form_validate_notify == 'true') {
	$.notify({
		title: '<center><strong>Ошибка отправки новой заявки.</strong><center>',
		message: 'Где-то произошла ошибка валидации формы отправки заявки.'},{
		type: 'danger',
		template:
		'<div data-notify="container fade" role="alert" class="col-xs-11 col-sm-2 alert alert-{0}" style="margin: 15px 0 15px 0;">\
		<button type="button" class="close" data-notify="dismiss" style="top:7px;">\
		<span aria-hidden="true">×</span>\
		<span class="sr-only">Close</span>\
		</button>\
		<span data-notify="icon"></span>\
		<span data-notify="title">{1}</span>\
		<span data-notify="message" style="padding-right:15px">{2}</span>\
		<a href="{3}" target="{4}" data-notify="url"></a>\
		</div>'
	});
	eraseCookie('request-form-validate-notify');
}


/*
 ** Reviews form notify
 */

var reviews_form_notify = readCookie("reviews-form-notify");
if(reviews_form_notify == 'true') {
	$.notify({
		title: '<center><strong>Отзыв добавлен.</strong><center>',
		message: 'Комментарий будет включен после проверки администратором сайта.'},{
		type: 'success',
		template:
		'<div data-notify="container fade" role="alert" class="col-xs-11 col-sm-2 alert alert-{0}" style="margin: 15px 0 15px 0;">\
		<button type="button" class="close" data-notify="dismiss" style="top:7px;">\
		<span aria-hidden="true">×</span>\
		<span class="sr-only">Close</span>\
		</button>\
		<span data-notify="icon"></span>\
		<span data-notify="title">{1}</span>\
		<span data-notify="message" style="padding-right:15px">{2}</span>\
		<a href="{3}" target="{4}" data-notify="url"></a>\
		</div>'
	});
	eraseCookie('reviews-form-notify');
}

var reviews_form_validate_notify = readCookie("reviews-form-validate-notify");
if(reviews_form_validate_notify == 'true') {
	$.notify({
		title: '<center><strong>Ошибка добавлеия отзыва.</strong><center>',
		message: 'Где-то произошла ошибка валидации формы добавления отзыва.'},{
		type: 'danger',
		template:
		'<div data-notify="container fade" role="alert" class="col-xs-11 col-sm-2 alert alert-{0}" style="margin: 15px 0 15px 0;">\
		<button type="button" class="close" data-notify="dismiss" style="top:7px;">\
		<span aria-hidden="true">×</span>\
		<span class="sr-only">Close</span>\
		</button>\
		<span data-notify="icon"></span>\
		<span data-notify="title">{1}</span>\
		<span data-notify="message" style="padding-right:15px">{2}</span>\
		<a href="{3}" target="{4}" data-notify="url"></a>\
		</div>'
	});
	eraseCookie('reviews-form-validate-notify');
}


/*
 ** Password update form notify
 */

var passupdate_form_notify = readCookie("passupdate-form-notify");
if(passupdate_form_notify == 'true') {
	$.notify({
		title: '<center><strong>Пароль успешно изменён</strong><center>',
		message: ''},{
		type: 'success',
		template:
		'<div data-notify="container fade" role="alert" class="col-xs-11 col-sm-2 alert alert-{0}" style="margin: 15px 0 15px 0;">\
		<button type="button" class="close" data-notify="dismiss" style="top:7px;">\
		<span aria-hidden="true">×</span>\
		<span class="sr-only">Close</span>\
		</button>\
		<span data-notify="icon"></span>\
		<span data-notify="title">{1}</span>\
		<span data-notify="message" style="padding-right:15px">{2}</span>\
		<a href="{3}" target="{4}" data-notify="url"></a>\
		</div>'
	});
	eraseCookie('passupdate-form-notify');
}

var passupdate_form_notify = readCookie("passupdate-form-notify");
if(passupdate_form_notify == 'false') {
	$.notify({
		title: '<center><strong>Ошибка обновления пароля</strong><center>',
		message: ''},{
		type: 'danger',
		template:
		'<div data-notify="container fade" role="alert" class="col-xs-11 col-sm-2 alert alert-{0}" style="margin: 15px 0 15px 0;">\
		<button type="button" class="close" data-notify="dismiss" style="top:7px;">\
		<span aria-hidden="true">×</span>\
		<span class="sr-only">Close</span>\
		</button>\
		<span data-notify="icon"></span>\
		<span data-notify="title">{1}</span>\
		<span data-notify="message" style="padding-right:15px">{2}</span>\
		<a href="{3}" target="{4}" data-notify="url"></a>\
		</div>'
	});
	eraseCookie('passupdate-form-notify');
}