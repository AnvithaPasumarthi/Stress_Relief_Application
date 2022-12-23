import jokeicon from "./Logos/joke-icon.jpeg";
import dictionaryicon from "./Logos/dictionary-icon.png";
import newsicon from "./Logos/news-icon.png";
import gifsicon from "./Logos/GIfs-icon.gif";
import musicicon from "./Logos/music-icon.png";
import quoteicon from "./Logos/quote-icon.jpeg";
import adviceicon from "./Logos/advice-icon.png";
import eventsicon from "./Logos/events-icon.png";

export const eventsConfig = [
  {
    name: "Jokes",
    iconUrl: jokeicon,
    apiUrl: "https://geek-jokes.sameerkumar.website/api?format=json",
  },
  {
    name: "GIFs/memes",
    iconUrl: gifsicon,
    apiUrl: "https://meme-api.herokuapp.com/gimme/1",
  },
  {
    name: "Advice",
    iconUrl: adviceicon,
    apiUrl: "https://api.adviceslip.com/advice",
  },
  {
    name: "Events",
    iconUrl: eventsicon,
    apiUrl:
      "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=62FtsiHexAHvYoNSqzGB9eEDhG3HN4gv&size=100",
  },
  {
    name: "Dictionary",
    iconUrl: dictionaryicon,
    apiUrl: "https://random-words-api.vercel.app/word",
  },
  {
    name: "Music",
    iconUrl: musicicon,
    apiUrl:
      "https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=9773febf5ce07b68df5232fc1ff8e37b&format=json",
  },
  {
    name: "Quotes",
    iconUrl: quoteicon,
    apiUrl: "https://programming-quotes-api.herokuapp.com/Quotes",
  },
  {
    name: "News",
    iconUrl: newsicon,
    apiUrl:
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=e3bf50ba66e14c15a67b4d44091e78d3",
  },
];
