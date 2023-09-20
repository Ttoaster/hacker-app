
import './App.css';







function App() {
    //Birthdays Challenge

    function Question() {
        let index;

        function lonelyElement(arr) {
            console.log(arr);
            index = arr.length;
            console.log(index);
            arr = arr.sort(function (a, b  ){ return(b - a)})
            console.log(arr);

            for (let i = 0; i < arr.length; i++) {
                console.log("i: ", i);
                if (arr[i] === arr[i + 1]) {
                    i++;
                }
                else {
                    return arr[i];
                }

            }



        }

        let answer = lonelyElement([1,2,3,4,3,2,1]);


        return (
            <div>
                <p>
                    Question Output
                </p>
                <p>
                    Index: { index } <br/>
                    { } <br />
                    { } <br/>
                    { } <br />
                    { } <br />
                    Answer: {answer }
                </p>
            </div>
        )
    }







  return (
    <div className="App">
      <header className="App-header">
              <h1>
                  My HackerRank Testing App
              </h1>
              <Question/>
          </header>
          {/* <body>
              <Question/>
          </body> */}
    </div>
  );
}

export default App;
