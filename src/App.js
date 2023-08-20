import "./styles.css";
import { useState, useEffect } from "react";
export default function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    const url = "https://bionic-reading1.p.rapidapi.com/convert";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "8be299a4b7msh030f96918dfad2cp1adf6fjsndebda7ba8466",
        "X-RapidAPI-Host": "bionic-reading1.p.rapidapi.com"
      },
      body: new URLSearchParams({
        content:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        response_type: "html",
        request_type: "html",
        fixation: "1",
        saccade: "10"
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      setData(result);
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  };

 useEffect(()=> {
   getData()
 })

  return <div className="App">{loading && data}</div>;
}
