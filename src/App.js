import React,{useState} from "react";
function App() {
  const [Score,setScore]=useState(76);
  const [Wicket,setWicket]=useState(2);
  const [Overs,setOvers]=useState("8.2")
  //console.log(Overs-Math.floor(Overs)+0.0000000001)
  const addScore=(e)=>{
    
      setScore(s=>s+e);
     
    
  }
  const addWicket=()=>{
    if(Wicket<12){
      setWicket(s=>s+1)
    }
  }
  const addBall=()=>{
    if((Overs-Math.floor(Overs)+0.0001)>=(0.5)){
      let xx=(+Overs+0.500000000000001).toFixed(1)
      console.log(xx)
      setOvers(xx)
    }else{
      let xx=(+Overs+0.100000000000001).toFixed(1)
      console.log(xx)
      setOvers(xx)
    }
  }
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:
          <h1 className="scoreCount">
            {
              // show "score" here
              Score
            }
          </h1>
        </div>
        <div>
          Wicket:{" "}
          <h1 className="wicketCount">
            {
              // show wicket here
              Wicket
            }
          </h1>
        </div>

        <div>
          Over:{" "}
          <h1 className="overCount">
            {
              Overs
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" disabled={Score>=101} onClick={()=>addScore(1)}>Add 1</button>
        <button className="addScore4" disabled={Score>=101} onClick={()=>addScore(4)}>Add 4</button>
        <button className="addScore6" disabled={Score>=101} onClick={()=>addScore(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={addWicket} disabled={Score>=101} >Add 1 wicket</button>
      </div>

      <div className="addBall" >
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button disabled={Score>=101}  onClick={addBall}>Add 1</button>
      </div>
      <h1>
{Score>=101?"India Won":null}</h1>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;