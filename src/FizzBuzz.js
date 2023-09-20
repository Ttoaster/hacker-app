
import './App.css';








function App() {
    //FizzBuzz Challenge

    function Question() {
        //write code here


        let n = 15;
        let result = "";

        function FizzBuzz(number) {
            for (let i = 1; i <= number; i++) {
                result = "";
                if (i % 3 === 0) {
                    result += "Fizz";
                    if (i % 5 === 0) {
                        result += "Buzz";
                    }
                    console.log(result);
                }
                else if (i % 5 === 0) {
                    result += "Buzz";
                    console.log(result);
                }
                else {
                    console.log(i);
                }
            }


        }
        // code submitted to hackerrank ////
        // function fizzBuzz(n) {
        //     // Write your code here
        //     let result = "";

        //     for (let i = 1; i <= n; i++) {
        //         result = "";
        //         if (i % 3 === 0) {
        //             result += "Fizz";
        //             if (i % 5 === 0) {
        //                 result += "Buzz";
        //             }
        //         }
        //         else if (i % 5 === 0) {
        //             result += "Buzz";
        //         }
        //         else {
        //             result = i;
        //         }
        //         console.log(result);
        //     }
        // }
        ///////////////////////////////////

        let answer = FizzBuzz(n);

        return (
            <div>
                <p>
                    Question Output
                </p>
                <p>
                    { result } <br/>
                    { } <br />
                    { } <br/>
                    { } <br />
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
