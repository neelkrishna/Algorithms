"use strict";
//assumptions: max tweets < 100; s.length > 0
Object.defineProperty(exports, "__esModule", { value: true });
exports.twitterThreadPapasWay = exports.Tweet = exports.twitterThreadSplitWords = exports.twitterThread = void 0;
function twitterThread(s) {
    var maxChars = 280;
    var countSpace = 6; // [ (1/3)]
    var tweets = [];
    var initialNumTweets = Math.ceil(s.length / 280);
    if (initialNumTweets > 10)
        countSpace += 2;
    var currentPosition = 0;
    var tweetCount = 1;
    while (s.length > 0) {
        var currentTweet = "" + " (" + tweetCount + "/x)";
        currentPosition = Math.min((maxChars - countSpace), s.length);
        while (s.charAt(currentPosition - 1) != " " && currentPosition != 0) {
            console.log(currentPosition);
            currentPosition--;
        }
        currentTweet = s.substring(0, currentPosition - 1) + currentTweet;
        s = s.substring(currentPosition, s.length);
        tweetCount++;
        tweets.push(currentTweet);
    }
    return tweets;
}
exports.twitterThread = twitterThread;
function twitterThreadSplitWords(s) {
    var maxChars = 280;
    var countSpace = 6; // [ (1/3)]
    var tweets = [];
    var words = s.split(" "); // words[] contains all words in a string array now
    var currentTweet = "";
    var count = 0;
    while (words.length > 0) {
        if (words[count].length > maxChars - countSpace - currentTweet.length) {
        }
    }
    return tweets;
}
exports.twitterThreadSplitWords = twitterThreadSplitWords;
var Tweet = /** @class */ (function () {
    function Tweet() {
    }
    return Tweet;
}());
exports.Tweet = Tweet;
function twitterThreadPapasWay(s) {
    return;
}
exports.twitterThreadPapasWay = twitterThreadPapasWay;
//# sourceMappingURL=twitterThreads.js.map