if (process.env.NODE_ENV !== 'production') {
	require('../build/index.html');
}
let $ = require('jquery');
let moment = require('moment');

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
		"<div class='date'></div>" +
	"</li>"
);

let articleArray = [];

let shown = 50;

function renderArticle(article) {
	let template = $(ARTICLE_TEMPLATE);
	template.find("a").attr("href", article.url);
	template.find("a").text(article.title);
	template.find(".date").text(moment(article.publishedAt).format('h:mm a, MMM D'));
	$('.articles ul').append(template);
}

function getArticles(sources, url) {
  Promise.all(sources.map((source)=>{
    return new Promise((resolve, reject) => {
      $.ajax({
        url:`${url}source=${source}&apiKey=71d63d411e7548b5a76d9cd92d80498f`,
        success: (res)=>{
        	console.log(source);
          resolve(res.articles);
        }
      })
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

function listenSort() {
	const sortList = {
		shuffle: (a, b) => {
			return 0.5 - Math.random();
		},
		name: (a, b) => {
			return a.title == b.title ? 0 : +(a.title > b.title) || -1;
		},
		date: (a, b) => {
			return moment(b.publishedAt).diff(moment(a.publishedAt));
		}
	}

	$('.sort select').change(() => {
		let sortBy = $('.sort select').val();
		$(".articles ul").empty();
		articleArray.sort(sortList[sortBy]).forEach(renderArticle);
		$(".article:lt(50)").show();
	})
}


$(function(){
	getArticles(SOURCES_LIST, API_URL);
	listenFilter();
	listenSort();
});