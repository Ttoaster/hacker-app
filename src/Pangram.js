
import './App.css';









function App() {
    //Pangram Challenge


    function Question() {

        let testString = "We promptly judged antique ivory buckles for the next prize";
        //let testString = "WWe promptly judged antique ivory buckles for the prize";
        let receivedString = testString;
        let alphabet = [
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
        ];

        function countLetters(s) {
            let localString = s;
            console.log(localString.length);
            let result = "";
            let hasLetter = 0;
            for (let i = 0; i < alphabet.length; i++) {
                let letterNotFound = true;
                //if (localString[i] !== " ") {

                    for (let j = 0; j < localString.length; j++) {
                        if (localString[j] !== " ") {
                            //console.log("current letter in string: ", localString[j].toLowerCase(), " test letter: ", alphabet[i]);
                            if (localString[j].toLowerCase()  === alphabet[i]&& letterNotFound === true) {
                                hasLetter += 1;
                                console.log("hasLetter count: ", hasLetter, " letter: ", alphabet[i]);
                                letterNotFound = false;
                                console.log("letterNotFound: ", letterNotFound);
                            }

                        }
                    }
            //    }
            }
            console.log("hasLetter count: ", hasLetter);
            if (hasLetter === 26) {
                result = "pangram";
            }
            else {
                result = "not pangram";
            }

            return result;
        }

        let answer = countLetters(receivedString);

        var array1 = ["1", "2", "3", "4"];
        var test = JSON.parse(JSON.stringify(array1));// makes a deep copy so original is not changed.
        console.log(array1);
        var array2 = test.reverse();
        console.log(array2);
        console.log("1" + 2 + "3" + 4);

        return (
            <div>
                <p>
                    Question Output
                </p>
                <p>
                    {testString } <br/>
                    {alphabet } <br />
                    {array1} array1 <br />
                    { test } test is a deep copy of array1 when it is modified it does not change the original <br/>
                    {array2 } array2 <br />
                    { } <br />
                    {answer }
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
