
import './App.css';







function App() {
    //Birthdays Challenge

    function Question() {
        let index;

        function findMedian(arr) {
            console.log(arr);
            index = arr.length;
            console.log(index);
            arr.sort(function (a, b) { return (b - a) })
            console.log(arr);
            index = (index - 1) / 2
            console.log(index);
            console.log(arr[index]);
            return arr[index];


        }

        let answer = findMedian([0,1,2,4,6,5,3]);


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
