import React from 'react';
import './index.css'; 

function App() {
  let element = new Date();
  element = element.getHours();
  let greeting = "";
  const styles = {};
  if (element >= 1 && element < 12) {
    greeting = "Good Morning";
    styles.color = "red";
  } else if (element >= 12 && element < 19) {
    greeting = "Good Afternoon";
    styles.color = "green";
  } else {
    greeting = "Good Night";
    styles.color = "black";
  }
  return (
    <>
      <div>
        <h1>
          Hello Sir,<span style={styles}>{greeting}</span>
        </h1>
      </div>
    </>
  );
}

export default App;
