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

let shown = 50;

function renderArticle(article) {
	let template = $(ARTICLE_TEMPLATE);
	template.find("a").attr("href", article.url);
	template.find("a").text(article.title);
	$('.articles ul').append(template);
}

function getArticles(sources, url) {
  Promise.all(sources.map((source)=>{
    return new Promise((resolve, reject) => {
      $.ajax({
        url:`${url}source=${source}&apiKey=71d63d411e7548b5a76d9cd92d80498f`,
        success: (res)=>{
          resolve(res.articles);
        }
      });
    });
  })).then(values => {
    articleArray = values.reduce((acc, curr)=>{
      return acc.concat(curr);
    }, []);
    return articleArray;
  }).then(articles => {
    articles.forEach(renderArticle);
    showArticles();
  });
}

function showArticles() {
	$('.article:lt(50)').show();
	$(window).scroll(()=> {
		if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
			shown = $('.article:visible').length + 25;
			$('.article:lt(' + shown + ')').show();
		}
	})
}

function listenFilter() {
	$('.filter input').keyup(() => {
		let term = $('.filter input').val();
		$(".articles ul").empty();
		articleArray.filter((article) => {
			return article.title.match(new RegExp(term, "i"));
		}).forEach(renderArticle);
		$('.article:lt(50)').show();
	})
}

$(getArticles(SOURCES_LIST, API_URL));
$(listenFilter());