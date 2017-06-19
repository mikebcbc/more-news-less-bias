require('../build/index.html');
import css from './main.css';
let $ = require('jquery');

const API_URL = 'https://newsapi.org/v1/articles?';

const SOURCES_LIST = [
	'breitbart-news',
	'bbc-news',
	'bloomberg',
	'buzzfeed',
	'cnbc',
	'cnn',
	'daily-mail',
	'google-news',
	'independent',
	'the-guardian-uk',
	'the-huffington-post',
	'the-new-york-times',
	'the-wall-street-journal',
	'time',
	'usa-today',
	'the-washington-post'
];

const ARTICLE_TEMPLATE = (
	"<li class='article'>" +
		"<a href target='_blank'></a>" +
	"</li>"
);

let articleArray = [];

function addArticle(articles) {
	articles.forEach((article)=> {
		articleArray.push(article)
	});
}

function renderArticle(article) {
	let template = $(ARTICLE_TEMPLATE);
	template.find("a").attr("href", article.url);
	template.find("a").text(article.title);
	$('.articles ul').append(template);
}

function inputArticle(articles) {
	articles.forEach((article)=> {
		return renderArticle(article);
	})
}

function getArticles(sources, url) {
	for (let i of sources) {
		$.ajax({
			url: url + 'source=' + i + '&apiKey=71d63d411e7548b5a76d9cd92d80498f',
			async: false,
			success: (res)=> {
				addArticle(res.articles);
			}
		});
	}
	inputArticle(articleArray);
}

function showArticles() {
	let shown = 50;
	$('.article:lt(50)').show();
	$(window).scroll(()=> {
		if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
			shown = $('.article:visible').length + 25;
			$('.article:lt(' + shown + ')').show();
		}
	})
	console.log($('.article:visible').length);
}

$(getArticles(SOURCES_LIST, API_URL));
$(showArticles());