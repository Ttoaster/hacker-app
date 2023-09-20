
import './App.css';









function App() {
    //Comparison Sorting Challenge

    function Question() {

        let numberArray = [
            63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86,76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33,             63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86,76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33
        ];
        console.log(numberArray);
        //sort numberArray from lowest to highest
        numberArray = numberArray.sort();
        console.log(numberArray);

        let sortedArray = new Array(100).fill(0);
        console.log(sortedArray);

        // run through number array counting from 0 the number of times each int appears and writing the result into the sorted array.
        function countIntegers(array) {
            let tempNumberArray = array;
            for (let i = 0; i < 100; i++) {
                let count = 0;
                for (let j = 0; j < sortedArray.length; j++) {
                    if (i === tempNumberArray[j]) {
                        count++;
                        //console.log(count);
                    }
                }
                sortedArray[i] = count;
            }
            return sortedArray;
        }

        let testArray = countIntegers(numberArray);
        console.log("test array");

        console.log(testArray);
        return (
            <div>
                <p>
                    Question Output
                </p>
                <p>
                    {numberArray } <br/>
                    { sortedArray } <br />
                    { } <br/>
                    {} <br />
                    {} <br />
                    { }
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
