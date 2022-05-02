//assumptions: max tweets < 100; s.length > 0

export function twitterThread(s: string) : string[] {
    let maxChars: number = 280;
    let countSpace: number = 6; // [ (1/3)]
    let tweets: string[] = [];
    let initialNumTweets: number = Math.ceil(s.length/280);
    if(initialNumTweets > 10) countSpace += 2;
    let currentPosition: number = 0;

    let tweetCount: number = 1;
    while(s.length > 0) {
        let currentTweet: string = "" + " (" + tweetCount + "/x)";
        currentPosition = Math.min((maxChars - countSpace), s.length);
        while(s.charAt(currentPosition - 1)  != " " && currentPosition != 0) {
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

export function twitterThreadSplitWords(s: string): string[] {
    let maxChars: number = 280;
    let countSpace: number = 6; // [ (1/3)]
    let tweets: string[] = [];
    let words: string[] = s.split(" "); // words[] contains all words in a string array now
    let currentTweet: string = "";
    let count: number = 0;
    while(words.length > 0) {
        if(words[count].length > maxChars - countSpace - currentTweet.length) {

        }
    }

    return tweets;
}

export class Tweet {
    sentence ?: string;
    numerator ?: number;
    denominator ?: number;
}

export function twitterThreadPapasWay(s: string): string[] {
    return;
}