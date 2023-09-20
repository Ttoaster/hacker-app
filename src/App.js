
import './App.css';







function App() {


    function Question() {
        let index;

        function palindromeIndex(s) {

            console.log("___________________________________________________");
            console.log("s", s);
            // if  palindrome return -1
            // otherwise return index of char to remove
            let len = s.length;
            console.log("len", len);
            let original = s;
            let copyS = s;
            let leftSide = copyS.slice(0, copyS.length / 2);
            let rightSide = copyS.slice(copyS.length / 2, copyS.length);
            if (s.length % 2 === 0) {
                leftSide = copyS.slice(0, copyS.length / 2);
                rightSide = copyS.slice(copyS.length / 2, copyS.length);
            }
            else {
                leftSide = copyS.slice(0, copyS.length / 2);
                rightSide = copyS.slice(copyS.length / 2 + 1, copyS.length);
            }
            rightSide = rightSide.split("");
            rightSide = rightSide.reverse();
            rightSide = rightSide.join("");
            console.log(leftSide, rightSide);
            if (leftSide === rightSide) {
                return -1;
            }
            for (let i = 0; i < s.length; i++) {
                //attempt = copyS.shift();
                copyS = s;
                copyS = copyS.slice(0, i) + copyS.slice(i + 1);

                console.log("copyS",copyS,"original", original);
                leftSide = copyS.slice(0, copyS.length / 2);
                rightSide = copyS.slice(copyS.length / 2 + 1, copyS.length);
                rightSide = rightSide.split("");
                rightSide = rightSide.reverse();
                rightSide = rightSide.join("");
                console.log(leftSide, rightSide);
                if (leftSide === rightSide) {
                    console.log("i", i);
                    return i;
                }





            }


        }

        let answer = palindromeIndex("cbcbac")
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
