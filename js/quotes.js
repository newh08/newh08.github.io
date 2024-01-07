const quotes = [
    {quote: "You can't climb the ladder of success with your hands in your pockets.",
    author: "아놀드"},

    {quote: "삶이 있는 한 희망은 있다.",
    author: "키케로"},

    {quote: "산다는것 그것은 치열한 전투이다.",
    author: "로망로랑"},

    {quote: "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 해",
    author: "찰리 채플린"},

    {quote: "신은 용기있는자를 결코 버리지 않는다",
    author: "켄러"},

    {quote: "단순하게 살아라. 현대인은 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?",
    author: "이드리스 샤흐"},

    {quote: "어리석은 자는 멀리서 행복을 찾고, 현명한 자는 자신의 발치에서 행복을 키워간다.",
    author: "제임스 오펜하임"},

    {quote: "피할수 없으면 즐겨라",
    author: "로버트 엘리엇"},

    {quote: "전대 어제를 후회하지 마라. 인생은 오늘의 내 안에 있고 내일은 스스로 만드는것이다.",
    author: "L론허바드"},

    {quote: "행복은 습관이다, 그것을 몸에 지니라",
    author: "허버드"}
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const index = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[index];

quote.innerHTML = todaysQuote.quote;
author.innerHTML = ` - ${todaysQuote.author}`;