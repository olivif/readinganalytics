import request from 'request';

var pocketClient = {};

pocketClient.getArchive = function (consumerKey, accessToken) {
    request({
        url: 'https://getpocket.com/v3/get',
        qs: {
            consumer_key: consumerKey,
            access_token: accessToken
        }
    }, function (error, response, body) {
        console.log("---------- Pocket client ----------");
        //console.log(body);
        console.log("----------/Pocket client ----------");
    });
}

export default pocketClient;
