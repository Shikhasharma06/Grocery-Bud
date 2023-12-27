import React, { useState, useEffect } from "react";
import Card from "./Card";
import InputComponent from "./InputComponent";
import "./Style/main.css";
function Main() {

  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("GroceryItem"))
  );

  const [utterance, setUtterance] = useState(null);
  const [text, setText] = useState("Arya Raj");
  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);
    u.setRate= 4;
    console.log(u);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);



  // take input from user
  const getDataInput = (e) => {
    e.preventDefault();
    const newItem = e.target.children[0].value;
    addItem(newItem);
    setInputValue((e.target.children[0].value = ""));
  };

  // add item to localStorage and UI
  function addItem(item) {
if(item ===""){
  alert("Sir, You have to enter something");
  return;
}

    const newData = [
      ...data,
      {
        id: "GroceryItem" + Date.now(),
        content: item,
      },
    ];

    localStorage.setItem("GroceryItem", JSON.stringify(newData));

    const newPlanner = localStorage.getItem("GroceryItem");
    if (newPlanner) {
      setData(JSON.parse(newPlanner));
    }
  }

  function speakText(text) {
    
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.voice = window.speechSynthesis.getVoices()[12];
    window.speechSynthesis.speak(speech);
  }
function deleteItem(itemId){
  const newData =  data.filter((ele)=> ele.id != itemId);
setData(newData);
  localStorage.setItem("GroceryItem", JSON.stringify(newData));
}


  return (
    <>
      <main className="main">
        <div className="inner-main">
          <div className="upper-container">
            <h2>Grocery Bud</h2>
            <div className="input-container">
              <InputComponent getDataInput={getDataInput} />
            </div>
          </div>

          <div className="lower-container">
            {data != null
              ? data.map((ele) => (
                  <Card key={ele.id} {...ele} speakLoud={()=>speakText(ele.content)} deleteMe={()=>deleteItem(ele.id)}/>
                ))
              : setData([])}
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
