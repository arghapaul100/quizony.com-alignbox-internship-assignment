var menu_div, menu_btn, inner_post,sideBar_avtar,responsive_button,main;
menu_btn = document.querySelector('.menu-bar');
menu_div = document.querySelector('.nav-links');
sideBar_avtar = document.querySelectorAll('.container .avtar');
responsive_button = document.querySelector('.responsive-button');
inner_post = document.querySelector('.inner-post');
main = document.querySelector('.main');

menu_btn.addEventListener('click', function () {
	if (menu_div.offsetHeight > 0) {
		document.querySelector('.nav-links').removeAttribute('style');
		menu_btn.innerHTML = `<i class="fas fa-bars"></i>`;
	} else {
		document.querySelector('.nav-links').style.height = "auto";
		menu_btn.innerHTML = `<i class="fas fa-times"></i>`;
	}
});
function createBox() {
	box = document.createElement("div");
	box.classList.add("box");
	inner_post.appendChild(box);
}
function createInnerBox() {
	inner_box = document.createElement("div");
	inner_box.classList.add('inner-box');
	box.appendChild(inner_box);
}
function createCard_avtar(image) {
	card_avtar = document.createElement("div");
	card_avtar.classList.add('card-avtar');
	card_avtar.style.backgroundImage = `url('./images/${image}')`;
	inner_box.appendChild(card_avtar);
}
function createQuiz() {
	quiz = document.createElement("div");
	quiz.setAttribute("id", "quiz");
	card_avtar.appendChild(quiz);
	var txtNode1 = document.createTextNode("Quiz");
	quiz.appendChild(txtNode1);
}
function createTime() {
	time = document.createElement("div");
	time.setAttribute("id", "time");
	card_avtar.appendChild(time);
	txtNode2 = document.createTextNode("1 month ago");
	time.appendChild(txtNode2);
}
function createCardTitle(text) {
	card_title = document.createElement("div");
	card_title.classList.add('card-title');
	inner_box.appendChild(card_title);
	var cardTitleText = document.createElement('p');

	//To create textNode and append into p tag
	txtNode3 = document.createTextNode(`${text}`);
	cardTitleText.appendChild(txtNode3);
	card_title.appendChild(cardTitleText);
}
function createCardSubtitle(text) {
	card_subtitle = document.createElement("div");
	card_subtitle.classList.add('card-subtitle');
	inner_box.appendChild(card_subtitle);
	cardSubtitleText = document.createElement('p');

	//To create textNode and append into p tag
	txtNode3 = (text.length > 95) ? document.createTextNode(`${text.slice(0,95)}...`) : document.createTextNode(`${text}`);
	cardSubtitleText.appendChild(txtNode3);
	card_subtitle.appendChild(cardSubtitleText);
}
function createIcons() {
	//To create icons and insert into box
	icons = document.createElement('div');
	icons.classList.add('icons');
	box.appendChild(icons);

	//To create list icon also respective text and append into icon 
	listIconDiv = document.createElement('div');
	icons.appendChild(listIconDiv);

	listIcon = document.createElement('i');
	listIcon.classList.add("fas");
	listIcon.classList.add("fa-list-ul");

	listIconText = document.createElement('span');
	txtNode4 = document.createTextNode("29");
	listIconText.appendChild(txtNode4);

	listIconDiv.appendChild(listIcon);
	listIconDiv.appendChild(listIconText);

	//To create eye icon also respective text and append into icon 
	eyeIconDiv = document.createElement('div');
	icons.appendChild(eyeIconDiv);

	eyeIcon = document.createElement('i');
	eyeIcon.classList.add("fas");
	eyeIcon.classList.add("fa-eye");

	eyeIconText = document.createElement('span');
	txtNode5 = document.createTextNode("1097075");
	eyeIconText.appendChild(txtNode5);

	eyeIconDiv.appendChild(eyeIcon);
	eyeIconDiv.appendChild(eyeIconText);

	//To create eye icon also respective text and append into icon 
	likeIconDiv = document.createElement('div');
	icons.appendChild(likeIconDiv);

	likeIcon = document.createElement('i');
	likeIcon.classList.add("far");
	likeIcon.classList.add("fa-thumbs-up");

	likeIconText = document.createElement('span');
	txtNode6 = document.createTextNode("2498");
	likeIconText.appendChild(txtNode6);

	likeIconDiv.appendChild(likeIcon);
	likeIconDiv.appendChild(likeIconText);

	//To create eye icon also respective text and append into icon 
	userIconDiv = document.createElement('div');
	icons.appendChild(userIconDiv);

	userIcon = document.createElement('i');
	userIcon.classList.add("fas");
	userIcon.classList.add("fa-user");

	userIconText = document.createElement('span');
	txtNode7 = document.createTextNode("Jenn");
	userIconText.appendChild(txtNode7);

	userIconDiv.appendChild(userIcon);
	userIconDiv.appendChild(userIconText);
}

for (var i = 0; i < data.length; i++) {
	createBox();
	createInnerBox();
	createCard_avtar(data[i]['avtar']);
	createQuiz();
	createTime();
	createCardTitle(data[i]["title"]);
	createCardSubtitle(data[i]["subtitle"]);
	createIcons();
}

