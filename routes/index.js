var nodemailer = require('nodemailer');

exports.index = function(req, res){
  res.render('index');
};

exports.mail = function(req, res) {
	var transport = nodemailer.createTransport("Sendmail");

	var mailOptions = {
	    from: "Ваш почтовый робот <box@artel.ru>",
	    to: "sergey@khokhlachev.ru",
	    subject: "Заявка с сайта",
	    generateTextFromHTML: true,
	    html: '<strong>Имя</strong>: '+req.body.name+'<br/> <strong>Телефон</strong>: '+req.body.phone ,
	}

	transport.sendMail(mailOptions);

	res.send(200);
};

exports.question = function(req, res) {
	var transport = nodemailer.createTransport("Sendmail");

	var mailOptions = {
	    from: "Ваш почтовый робот <box@artel.ru>",
	    to: "sergey@khokhlachev.ru",
	    subject: "Заявка с сайта",
	    generateTextFromHTML: true,
	    html: '<strong>Имя</strong>: '+req.body.name+'<br/> <strong>Телефон</strong>: '+req.body.phone+'<br/> <strong>Вопрос</strong>: '+req.body.question,
	}

	transport.sendMail(mailOptions);

	res.send(200);
}