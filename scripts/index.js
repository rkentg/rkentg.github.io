//index.js  
function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "<rkentg20@gmail.com>",
	Password : "<kentgregorioO8>",
	To : '<kentgregorio@outlook.com>',
	From : "<rkentg20@gmail.com>",
	Subject : "<Project>",
	Body : "<Hi>",
	}).then(
		message => alert("Registered for weekly Update")
	);
}