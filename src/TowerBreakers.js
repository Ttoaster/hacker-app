
import './App.css';







function App() {


    function Question() {
        let index;

        function towerBreakers(n , m) {

            console.log("___________________________________________________");
            console.log("n",n ,"m", m);
            let winner = 0;

            if (m === 1 || n % 2 === 0) {
                winner = 2;
            }
            else {
                winner = 1
            }


            return winner;
        }
        // 374625, 796723   - 1
        // 950929, 183477  - 1
        // 732159, 779867   - 1
        // 598794, 596985  - 2
        // 212387, 779    - 1
        //let answer = towerBreakers(732159, 779867)
        //let answer = towerBreakers(374625, 796723)
        let answer = towerBreakers(374625, 796723)
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
