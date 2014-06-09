var nodemailer = require('nodemailer');

exports.index = function(req, res){
  res.render('index');
};

exports.mail = function(req, res) {
	var transport = nodemailer.createTransport("SMTP", {
		service: "Mandrill",
		auth: {
			user: "stroitelnaya.artel.gorbunova@gmail.com",
			pass: "bOIR4yju5EtrkEgTvYgokw"
		}
	});

	var mailOptions = {
	    from: "Ваш почтовый робот <box@artel.ru>",
	    to: "sergey@khokhlachev.ru",
	    subject: "Заявка с сайта",
	    generateTextFromHTML: true,
	    html: '<strong>Имя</strong>: '+req.body.name+'<br/> <strong>Телефон</strong>: '+req.body.phone+'<br/> <strong>Я пришел из</strong>: '+ req.body.source +'<br/> <strong>Я искал</strong>: '+ req.body.keyword ,
	}

	transport.sendMail(mailOptions, function(error, response){
	    if(error) {
	        console.log(error);
	    } else {
	    	res.send(200);
	        console.log("Message sent: " + response.message);
	    }
	});

	
};

exports.question = function(req, res) {
	var transport = nodemailer.createTransport("SMTP", {
		service: "Mandrill",
		auth: {
			user: "stroitelnaya.artel.gorbunova@gmail.com",
			pass: "bOIR4yju5EtrkEgTvYgokw"
		}
	});

	var mailOptions = {
	    from: "Ваш почтовый робот <box@artel.ru>",
	    to: "sergey@khokhlachev.ru",
	    subject: "Заявка с сайта",
	    generateTextFromHTML: true,
	    html: '<strong>Имя</strong>: '+req.body.name+'<br/> <strong>Телефон</strong>: '+req.body.phone+'<br/> <strong>Я пришел из</strong>: '+ req.body.source +'<br/> <strong>Я искал</strong>: '+ req.body.keyword+'<br/> <strong>Вопрос</strong>: '+req.body.question,
	}

	transport.sendMail(mailOptions, function(error, response){
	    if(error) {
	        console.log(error);
	    } else {
	    	res.send(200);
	        console.log("Message sent: " + response.message);
	    }
	});
}