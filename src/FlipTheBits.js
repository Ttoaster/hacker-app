
import './App.css';









function App() {
    //Flip The Bits Challenge

    function Question() {
        // From a length

        let aanswer = 2147483647;
        //let aanswer = 4294967294;
        //let aanswer = 4294967295;
        //let aanswer = 1;
        //let aanswer = -1;
        //aanswer = aanswer.toString(2);

        function convertNumber(num) {

            let temp = (num >>> 0).toString(2);

            console.log(typeof (temp));
            if (temp.length < 32) {
                console.log("in if in convertNumber");
                console.log(temp);
                temp = temp.padStart(32, '0')
            }
            console.log(temp);
            return temp;

        }
        console.log("aanswer");
        console.log(aanswer);
        console.log("type of aanswer");
        console.log(typeof (aanswer));

        let banswer = convertNumber(aanswer);

        console.log("banswer");
        console.log(banswer);
        console.log("type of banswer");
        console.log(typeof(banswer));
        let length = banswer.length;



        function flipString(stringBinary) {
            let receivedBinary = stringBinary;
            let answer = "";

            for (let i = 0; i < receivedBinary.length; i++) {
                if (receivedBinary[i] === "0") {
                    let temp = receivedBinary[i].replace("0", "1");
                    answer += temp;
                }
                else {
                    let temp = receivedBinary[i].replace("1", "0");
                    answer += temp;
                }
            }
            return answer;
        }

        let flippedString = flipString(banswer);

        function convertB(n) {
            return parseInt(n, 2).toString(10);
        }

        console.log("flippedString before turning to number");
        console.log(flippedString);

        let newAnswer = convertB(flippedString);
        console.log(typeof (newAnswer));
        //let newAnswer = parseInt(answer, 2);
        console.log(newAnswer);




        return (
            <div>
                <p>
                    Question Output
                </p>
                <p>
                    { aanswer } <br/>
                    {banswer} <br />
                    {flippedString} <br/>
                    {length} <br />
                    { newAnswer}
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
