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
		"<a href></a>" +
	"</li>"
);

let articles = [];


function getArticles(sources, url) {
	for (let i of sources) {
		$.ajax({
			url: url + 'source=' + i + '&apiKey=71d63d411e7548b5a76d9cd92d80498f',
			success: function(res) {
				console.log(res);
			}
		});
	}
}

$(getArticles(SOURCES_LIST, API_URL));