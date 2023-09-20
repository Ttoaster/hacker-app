
import './App.css';







function App() {


    function Question() {
        let index;

        function caesarCipher(s , k) {

            console.log("___________________________________________________");
            console.log("s", s, "k", k);
            let originalAlpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let  originalUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
            let shiftedAlpha = [ ...originalAlpha];
            let shiftedUpper = [...originalUpper];

            let cipher = "";
            let letter1 = "";
            let letter2 = "";
            for (let i = 0; i < k; i++) {
                let tempLetter = shiftedAlpha.shift();
                shiftedAlpha.push(tempLetter);
                let tempUpper = shiftedUpper.shift();
                shiftedUpper.push(tempUpper);
            }
            console.log(originalAlpha);
            console.log(shiftedAlpha);
            console.log(originalUpper);
            console.log(shiftedUpper);
            for (let i = 0; i < s.length; i++) {
                console.log(s[i]);
                let letter = s[i];
                let index = "";
                for (let j = 0; j < originalAlpha.length; j++) {
                    if (letter === originalAlpha[j] || letter === originalUpper[j]) {
                        index = j;
                    }

                }
                console.log(index);
                if (index === "") {
                    cipher = cipher + letter;
                }
                else {
                    if (letter === letter.toLowerCase()) {
                        cipher = cipher + shiftedAlpha[index];
                    }
                    else {
                        cipher = cipher + shiftedUpper[index];
                    }
                }
            }
            console.log("cipher", cipher);


        }
        //Always-Look-on-the-Bright-Side-of-Life
        //5
        let answer = caesarCipher("middle-Outz", 2)
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
