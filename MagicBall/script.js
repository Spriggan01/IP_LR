var divContent = document.createElement('div');
var ask = document.createElement('div');
var par = document.createElement('p');
var askInput = document.createElement('input');
var askBtn = document.createElement("button");
var circle = document.createElement('div');
var littleCircle = document.createElement('div');
var answer = document.createElement('span');

divContent.classList.add('content');
ask.classList.add('ask');
askBtn.classList.add('ask__btn');
circle.classList.add('ball');
littleCircle.classList.add('circle__little-circle');
answer.classList.add('answerForQuest');

askInput.setAttribute('type','text');

document.body.append(divContent);
divContent.append(ask);
divContent.append(ball);

ask.append(par);
ask.append(askInput);
ask.append(askBtn);

circle.append(littleCircle);
circle.append(answerForQuest);
littleCircle.append(answerForQuest);
par.innerHTML='Ask your question';
askBtn.innerHTML='Ask question';

var answers = ['Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.',
  'There is a good chance.', 'Quite likely.', 'I think so.', 'It is certain.',
  'I hope so.', 'Never!', 'You may rely on it.', 'As I see it, yes', 'Most likely.',
  'Better not tell you now.', 'Hell, yes.', 'Signs point to yes.', 'My reply is no.',
  'The future is uncertain.', 'I would rather not say.', 'Ask again later.',
  'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!', 'Outlook not so good.',
  'Without a doubt.', 'Yes - definetly.'];
askBtn.onclick = function Predict () {
    if(askInput.value.length){
        circle.classList.add('ballShake');
        var ans = answers[Math.floor(Math.random() * answers.length)];
        answer.className="answerForQuest";
        answer.innerHTML = ans;
        circle.addEventListener( "animationend",  function() {
        circle.classList.remove("ballShake");
        answers.classList.remove("answerForQuest")});
    }
}

