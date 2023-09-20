
import './App.css';







function App() {
    //TwoArrays Challenge

    function Question() {

        //const testA = [2, 1, 3];
        //const testB = [7, 8, 9];
        //const testK = 10;
        //const testA = [1, 2, 2, 1];
        //const testB = [3, 3, 3, 4];
        //const testK = 5;
        const testA = [2, 3, 1, 1, 1];
        const testB = [1, 3, 4, 3, 3];
        const testK = 5;



        function twoArrays(k, A, B) {
            let success = 0;
            let result = "";
            let successFlag = false;
            console.log(A.length);
            console.log("k: ", k);
            //console.log(testA.sort());
            //let aSorted = testA.sort();
            //console.log(testB.reverse());
            //let bSorted = testB.reverse();

            function sortArr(arr, dir) {
                if (dir === "smallToLarge") {
                    arr.sort(function (a, b) {
                        return a - b
                    });
                }
                else {
                    arr.sort(function (a, b) {
                        return b - a
                    });
                }
                return arr;
            }
            let aSorted = sortArr(testA, "smallToLarge");
            console.log(aSorted);
            let bSorted = sortArr(testB, "largeToSmall");
            console.log(bSorted);

            for (let i = 0; i < A.length; i++) {
                successFlag = false;

                    if (successFlag === false) {
                        let sum = aSorted[i] + bSorted[i];
                        if (sum >= k) {
                            success++;
                            successFlag = true;
                        }

                    }


            }
            console.log("success: ", success);

            if (success === A.length) {
                result = "YES";
            }
            else {
                result = "NO";
            }

            return result;

        }

        let answer = twoArrays(testK, testA, testB);



        return (
            <div>
                <p>
                    Question Output
                </p>
                <p>
                    {testA } <br/>
                    {testB } <br />
                    {testK } <br/>
                    {answer } <br />
                    { } <br />
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
