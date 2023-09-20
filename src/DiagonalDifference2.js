
import './App.css';







function App() {


    function Question() {
        let index;

        function diagonalDifference(arr) {
            let rowLength = arr.length - 1;
            let leftToRight = 0;
            let rightToLeft = 0;
            for (let i = 0; i < arr.length; i++) {
                leftToRight = leftToRight + arr[i][i];
                rightToLeft = rightToLeft + arr[i][rowLength - i];
            }

            let returnAnswer = leftToRight - rightToLeft;
            if (returnAnswer < 0) {
                returnAnswer = -(returnAnswer);
            }
            return returnAnswer;
        }

        let answer = diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]);


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
