'use strict'

const FB = require('fb');

let getUser = (req, res) => {
  const accessToken = req.headers.token;
  FB.setAccessToken(accessToken);
  FB.api('/me', (resp) => res.send(resp));
}

let postToFacebook = (req, res) => {
  const accessToken = req.body.token;
  const post = req.body.post;
  console.log(post);
  FB.setAccessToken(accessToken);
  FB.api('/me/feed', 'post', { message: post }, (resp) => res.send(resp));
}

module.exports = {
  getUser,
  postToFacebook
};
