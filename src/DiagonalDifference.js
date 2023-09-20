
import './App.css';









function App() {
    //Diagonal Difference Challenge

    function Question() {

        //define matrix number array
        const numberArray = [
            [11, 2, 4],
            [4, 5, 6],
            [10, 8, -12]
        ];

        console.log("numberArray");
        console.log(numberArray);


        let arrayOne = [];
        console.log(arrayOne);
        let arrayTwo = [];

        function createDiagonalArray1(arr) {
            let tempArray = arr;
            let returnArray = [];
            let arrayRows = tempArray.length;
            console.log("arrayRows: ", arrayRows);
            let arrayColumns = tempArray[0].length;
            console.log("arrayColumns: ", arrayColumns);

            for (let i = 0; i < tempArray.length; i++) {
                let temp = tempArray[i][i];
                returnArray.push(temp);
            }
            return returnArray;
        }

        function createDiagonalArray2(array) {
            let tempArray = array;
            let returnArray = [];
            for (let i = 0; i < tempArray.length; i++) {
                let temp = tempArray[i][tempArray.length - i - 1];
                returnArray.push(temp);
            }
            return returnArray;
        }

        function sumArray(arr) {
            let tempArray = arr;
            let sum = 0;
            for (let i = 0; i < tempArray.length; i++) {
                sum = sum + tempArray[i];
            }
            return sum;
        }

        function getDifference(num1, num2) {
            let diff = 0;
            if (num1 > num2) {
                diff = num1 - num2;
            }
            else {
                diff = num2 - num1;
            }
            return diff;
        }

        arrayOne = createDiagonalArray1(numberArray);
        console.log(arrayOne);
        arrayTwo = createDiagonalArray2(numberArray);
        console.log(arrayTwo);
        let sum1 = sumArray(arrayOne);
        let sum2 = sumArray(arrayTwo);
        let diff = getDifference(sum1, sum2);


        return (
            <div>
                <p>
                    Question Output
                </p>
                <p>
                    { numberArray } <br/>
                    { arrayOne } <br />
                    { arrayTwo } <br/>
                    {sum1} <br />
                    {sum2} <br />
                    { diff }
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
