
import './App.css';







function App() {


    function Question() {
        let index;

        function flippingMatrix(arr) {
            // all this has to do is check the 4 mirror values of each cell, get the max and add it to the sum.
            console.log("___________________________________________________");
            console.log(arr);
            let sum = 0;
            let len = arr.length;

            for (let i = 0; i < len / 2; i++) {
                for (let j = 0; j < len / 2; j++) {
                    console.log(sum, arr[i][j]);
                    sum = sum + Math.max(arr[i][j], arr[i][len - j - 1], arr[len - i - 1][j], arr[len - i - 1][len - j - 1]);
                }
                console.log("SUM",sum);
            }


            console.log(arr.length);



            //sum = max;
            return sum;
        }

        let answer = flippingMatrix([[112,42, 83,119],[56,125, 56, 49],[15,78,56,49],[62,98, 114, 108]]);


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
