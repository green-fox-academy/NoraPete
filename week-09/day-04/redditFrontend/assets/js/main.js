'use strict';

let mainContent = document.querySelector('main');

function checkResponseStatus(res) {
  if (res.status < 200 || res.status >= 300) {
    return new Error('Something went wrong');
  }
  return res;
}

function getId(event) {
  let voteDiv = event.target.parentNode;
  return voteDiv.parentNode.getAttribute('id').slice(1);
}

function getUpOrDown(event) {
  return event.target.getAttribute('alt');
}

function updateScore(id, score) {
  let displayedScore = document.querySelector(`#p${id} > div > p`);
  displayedScore.innerText = score;
}

// TODO: refact

function sendRequestToVote(upOrDown, id) {
  return fetch(`http://secure-reddit.herokuapp.com/simple/posts/${id}/${upOrDown}`, {
    method: 'PUT',
    headers: { 'Accept': 'application/json' }
  })
    .then(checkResponseStatus)
    .then(response => response.json())
    .then(json => updateScore(id, json.score))
    .catch(console.log)
}

fetch('/reddit')
  .then(res => res.text())
  .then(content => mainContent.innerHTML = content)
  .then(() => {
    let voteBlock = document.querySelectorAll('.vote');
    voteBlock.forEach((block) => {
      block.addEventListener('click', (e) => {
        if(getUpOrDown(e) === 'upvote') {
          e.target.setAttribute('src', 'images/upvoted.png');
        } else {
          e.target.setAttribute('src', 'images/downvoted.png');
        }
        sendRequestToVote(getUpOrDown(e), getId(e));
      })
    })
  })
  .catch(console.log);
