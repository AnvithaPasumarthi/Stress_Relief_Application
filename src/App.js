import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import LaunchPage from "./Components/LaunchPage/Launchpage";
import Events from "./Components/Events/events";
import Display from "./Components/DisplayEvent";
import { eventsConfig } from "./config";
import PieChart from "./Components/PieChart";
import { SliderData } from "./Components/LaunchPage/SliderData";
import Song from "./Components/Music/songs";

function App() {
  const [isEvent, setIsEvent] = useState(false);
  const [displayData, setDisplayData] = useState();
  const [stateSpecificData, setStateSpecificData] = useState();
  const [allStateData, setAllStateData] = useState();
  const stateCode = ["ny", "or", "ca", "wa", "az", "nv", "co", "ut"];

  const parseStateData = (data, state) => {
    let statedata = data.filter((val) => {
      return val._embedded.venues[0].state.stateCode.toLowerCase() === state;
    });
    return statedata;
  };
  const createDisplayDataJoke = (data) => {
    return <div className="Jokedisplay">{data}</div>;
  };
  const createDisplayDataDictionary = (data) => {
    return (
      <>
        <div className="dictionarydisplay">
          <div className="dictionaryWord">{`${data.word}`}</div>
          <div className="dictionaryDefinition">{`Meaning: ${data.definition}`}</div>
          <div className="dictionaryPronunciation">{`Pronunciation:   ${data.pronunciation}`}</div>
        </div>
      </>
    );
  };
  const createDisplayEventsData = (piedata) => {
    let data = [];
    for (let key in piedata) {
      let keyLabel;
      if (key === "ny") {
        keyLabel = "New York";
      }
      if (key === "or") {
        keyLabel = "Oregon";
      }
      if (key === "ca") {
        keyLabel = "California";
      }
      if (key === "wa") {
        keyLabel = "Washington";
      }
      if (key === "az") {
        keyLabel = "Arizona";
      }
      if (key === "nv") {
        keyLabel = "Nevada";
      }
      if (key === "co") {
        keyLabel = "Colorado";
      }
      let tempObj = {};
      tempObj.id = keyLabel;
      tempObj.label = keyLabel;
      tempObj.value = piedata[key].length;

      if (piedata[key].length > 1) {
        tempObj.value = piedata[key].length - 1;
      } else {
        tempObj.value = piedata[key].length;
      }
      tempObj.color = "hsl(205, 70%, 50%)";
      data.push(tempObj);
    }
    const onClickHandler = (pieData, allData) => {
      let piekey = pieData.data.id;
      let stateData = allData[piekey];
      setStateSpecificData(stateData);
      console.log("this data", piekey, stateData);
    };
    return <PieChart piedata={piedata} fetchStateData={onClickHandler} />;
  };
  const createDisplayDataAdvice = (data) => {
    return (
      <>
        <div className="AdviceDisplay">
          <h1 className="advice">
            <span>{`${data}`}</span>
          </h1>
        </div>
      </>
    );
  };
  const createDisplayDataQuotes = (data) => {
    let RandomNumber = Math.floor(Math.random() * 100);
    return (
      <div className="QuotesDisplay">
        <div className="Quote">
          <q>{data[RandomNumber].en}</q>
        </div>
        <div>
          <cite className="quoteauthorname">-{data[RandomNumber].author}</cite>
        </div>
      </div>
    );
  };
  const createDisplayMusic = (data) => {
    if (data) {
      return (
        <div className="MusicDisplay">
          <Song />
        </div>
      );
    } else
      return (
        <>
          <Song />
        </>
      );
  };
  const createDisplayDataGIFs = (data) => {
    return (
      <>
        <div className="GIFdisplay">
          <img
            className="GIFimageDisplay"
            src={data.url}
            alt="GiFs"
            height="20%"
            width="20%"
          />
        </div>
      </>
    );
  };
  const createDisplayDataNews = (data) => {
    return (
      <>
        {data.map((val) => {
          return (
            <>
              <div className="NewsDisplay" key={val.author}>
                <img
                  src={val.urlToImage}
                  height="20%"
                  width="30%"
                  alt="NewsImage"
                  className="NewsImageIcon"
                />
                <div className="Newstitle">{` ${val.title}`}</div>
                <div className="Newsdescription"> {` ${val.description}`}</div>
                <div className="quoteauthorname"> {val.source.name}</div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  const apiResponseHandler = (url, eventName) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsEvent(false);
        if (eventName === "jokes") {
          setDisplayData(createDisplayDataJoke(data.joke));
        } else if (eventName === "dictionary") {
          setDisplayData(createDisplayDataDictionary(data[0]));
        } else if (eventName === "advice") {
          setDisplayData(createDisplayDataAdvice(data.slip.advice));
        } else if (eventName === "quotes") {
          setDisplayData(createDisplayDataQuotes(data.slice(0, 100)));
        } else if (eventName === "news") {
          setDisplayData(createDisplayDataNews(data.articles.slice(0, 5)));
        } else if (eventName === "music") {
          setDisplayData(createDisplayMusic(data));
        } else if (eventName === "gifs/memes") {
          setDisplayData(createDisplayDataGIFs(data.memes[0]));
        } else if (eventName === "events") {
          setIsEvent(true);
          let stateObjHolder = {};
          stateCode.forEach((state) => {
            let stateData = parseStateData(data._embedded.events, state);
            stateObjHolder[state] = stateData;
          });
          setAllStateData(stateObjHolder);

          setDisplayData(createDisplayEventsData(stateObjHolder));
        }
      });
  };

  return (
    <BrowserRouter>
      <LaunchPage slides={SliderData} />
      <div className="navContainer">
        <div className="AllIconsDisplay">
          {eventsConfig.map((data) => {
            return <Events eventData={data} iconClick={apiResponseHandler} />;
          })}
        </div>
      </div>
      <div className="output">
        {displayData && <Display displayContent={displayData} />}
        {isEvent && stateSpecificData && (
          <span className="EventsAndPie">
            <table className="EventsTable">
              <thead>
                <tr>
                  <th>Event</th>
                  <th>city</th>
                  <th>Zipcode </th>
                  <th>Date</th>
                  <th>Site</th>
                </tr>
              </thead>
              {stateSpecificData &&
                stateSpecificData.map((val) => {
                  return (
                    <tbody>
                      <tr key={val.id}>
                        <td>{val.name}</td>
                        <td> {val._embedded.venues[0].city.name}</td>
                        <td>{val._embedded.venues[0].postalCode} </td>
                        <td>{val.dates.start.localDate}</td>
                        <td>
                          <a href={val.url}>Link</a>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </span>
        )}
      </div>
    </BrowserRouter>
  );
}
export default App;
