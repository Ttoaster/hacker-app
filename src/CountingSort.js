
import './App.css';







function App() {


    function Question() {
        let index;

        function countingSort(arr) {

            // return array has length of 100

            const returnArray = new Array(100);
            returnArray.fill(0);
            console.log(returnArray);
            for (let i = 0; i < arr.length; i++) {
                returnArray[arr[i]] = returnArray[arr[i]] + 1;
            }


            return returnArray;
        }

        let answer = countingSort([1,1,3,2,1,4,3,7,2,0,0,0,0,4,10,11,10]);


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
