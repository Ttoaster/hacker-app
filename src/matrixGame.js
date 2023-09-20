
import './App.css';









function App() {
    //Matrix Challenge

    function Question() {
        //write code here
        const matrix = [
            [23 , 56, 78, 20],
            [67 , 45, 78, 32],
            [121, 44, 87,102],
            [77 , 54 ,10, 34]
        ]

        let matrixCopy = [...matrix];
        let matrixCopy2 = [...matrix];
        let matrixCopy3 = [...matrix];
        console.log(matrixCopy.length);
        for (let i = 0; i < matrixCopy.length; i++) {

            for (let j = 0; j < matrixCopy.length; j++) {
                matrixCopy2[i][j] = matrix[i][j];
            }
        }

        //find highest value
        let big = 0;
        let biggest = 0;
        for (let i = 0; i < matrixCopy.length; i++) {
            if (big > biggest) {
                biggest = big;
            }
            big = 0;
            for (let j = 0; j < matrixCopy.length; j++) {
                if (big < matrixCopy[i][j]) {
                    big = matrixCopy[i][j];
                    console.log("big: ",big);
                }
            }


        }
        let tempFlip = [];
        console.log("biggest: ", biggest);
        for (let i = 0; i < matrixCopy.length; i++) {

            for (let j = 0; j < matrixCopy.length; j++) {
                if (biggest === matrixCopy[i][j]) {
                    for (let k = 0; k < matrixCopy.length; k++) {
                        tempFlip.push(matrixCopy[k][j]);
                    }
                    console.log(tempFlip);
                    for (let k = 0; k < matrixCopy.length; k++) {
                        let reverse = matrixCopy.length - 1;
                        for (let l = 0; l < matrixCopy.length; l++) {
                            console.log("reverse: ", tempFlip[reverse]);
                            matrixCopy2[l][j] = tempFlip[reverse];
                            reverse--;
                        }
                    }
                }
            }
        }
        //find highest value but not in first column
        let bigger = 0;
        let biggester = 0;
        for (let i = 0; i < matrixCopy.length; i++) {
            if (bigger > biggester) {
                biggester = bigger;
            }
            bigger = 0;
            for (let j = 1; j < matrixCopy.length; j++) {
                if (bigger < matrixCopy[i][j]) {
                    bigger = matrixCopy[i][j];
                    console.log("bigger: ",bigger);
                }
            }
        }


        let tempFlip2 = [];
        console.log("biggester: ", biggester);
        for (let i = 0; i < matrixCopy.length; i++) {

            for (let j = 0; j < matrixCopy.length; j++) {
                if (biggest === matrixCopy[i][j]) {
                    for (let k = 0; k < matrixCopy.length; k++) {
                        tempFlip2.push(matrixCopy[k][j]);
                    }
                    console.log(tempFlip2);
                    for (let k = 0; k < matrixCopy.length; k++) {
                        let reverse = matrixCopy.length - 1;
                        for (let l = 0; l < matrixCopy.length; l++) {
                            console.log("reverse: ", tempFlip[reverse]);
                            matrixCopy2[l][j] = tempFlip[reverse];
                            reverse--;
                        }
                    }
                }
            }
        }





        //get sum of top left quadrant
        let sum = 0;
        let half = 0;
        if (matrixCopy.length % 2 === 0) {
            half = matrixCopy.length / 2;
        }
        else {
            half = (matrixCopy.length - 1) / 2
        }
        for (let i = 0; i < half; i++) {
            for (let j = 0; j < half; j++) {
                sum = sum + matrixCopy[i][j];
            }
        }
        console.log("sum: ", sum);



        return (
            <div>
                <p>
                    Question Output
                </p>
                <p>
                    { matrixCopy[0] } <br/>
                    {matrixCopy2 } <br />
                    { } <br/>
                    { } <br />
                    { } <br />
                    {sum }
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
