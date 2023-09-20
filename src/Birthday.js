
import './App.css';



// Two children, Lily and Ron, want to share a chocolate bar. Each of the squares has an integer on it.

// Lily decides to share a contiguous segment of the bar selected such that:

// The length of the segment matches Ron's birth month, and,
// The sum of the integers on the squares is equal to his birth day.
// Determine how many ways she can divide the chocolate.





function App() {
    //Birthdays Challenge

    function Question() {

        // const s = [2, 2, 1, 3, 2];
        // const d = 4;
        // const m = 2;
        // const s = [4];
        // const d = 4;
        // const m = 1;
        // const s = [2, 5, 1, 3, 4, 4, 3, 5, 1, 1, 2, 1, 4, 1, 3, 3, 4, 2, 1];
        // const d = 18;
        // const m = 7;
        const s = [1,1,1,1,1,1,1];
        const d = 3;
        const m = 2;

        let count = 0;

        function birthdays(s, d, m) {
            if (s.length === 1 && m ===1) {
                console.log("length is 1");
                if (s[0] === d) {
                    count++;
                }
            }
            else {
                for (let i = 0; i < s.length; i++) {
                    console.log("i: ", i);
                    let sum = 0;
                    sum = s[i];
                    console.log("sum at beginning: ", sum);
                    if (i !== s.length - 1) {
                    //add up segments to a count equal to value of m
                        for (let j = i + 1; j < s.length && j < m + i; j++) {
                            console.log("j: ", j);
                            sum = sum + s[j];
                            console.log(sum);
                        }
                        console.log("sum total: ",sum);
                        if (sum === d) {
                            count++;
                        }
                    }
                }

            }

        }

        let answer = birthdays(s, d, m);


        return (
            <div>
                <p>
                    Question Output
                </p>
                <p>
                    { count } <br/>
                    { } <br />
                    { } <br/>
                    { } <br />
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
