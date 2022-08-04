import logo from './logo.svg';
import './App.css';

const questions=["Dine in or take out",
"what describes the food quality best",
"what describes the order accuracy best",
"what describes the overall service best",
"what describes the value for money best",
"what describes the overall experience best"
]
const options=[["Dine in","Take out"],
  [
  "Excellent",
  "Good",
  "Average",
  "Dissatisfied"
  ],
  [
  "Excellent",
  "Good",
  "Average",
  "Dissatisfied"
  ],
  [
  "Excellent",
  "Good",
  "Average",
  "Dissatisfied"
  ],
  [
  "Excellent",
  "Good",
  "Average",
  "Dissatisfied"
  ],
  [
  "Excellent",
  "Good",
  "Average",
  "Dissatisfied"
  ]]

  const data=[{
    1: "Take out",
    2: "Average",
    3: "Good",
    4: "Good",
    5: "Average",
    6: "Good"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Good",
    5: "Good",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Good",
    3: "Good",
    4: "Excellent",
    5: "Good",
    6: "Good"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Good",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Dissatisfied",
    3: "Dissatisfied",
    4: "Dissatisfied",
    5: "Dissatisfied",
    6: "Average"
  }, {
    1: "Dine in",
    2: "Good",
    3: "Good",
    4: "Good",
    5: "Average",
    6: "Good"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Good",
    3: "Good",
    4: "Good",
    5: "Good",
    6: "Good"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Good",
    6: "Good"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Good",
    3: "Average",
    4: "Average",
    5: "Good",
    6: "Average"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Good",
    4: "Good",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Good",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Good",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Good",
    5: "Excellent",
    6: "Good"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Good",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Good",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Good",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Good",
    6: "Good"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Good",
    5: "Good",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Good",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Good"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Good",
    4: "Excellent",
    5: "Good",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Good",
    6: "Good"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Take out",
    2: "Excellent",
    3: "Good",
    4: "Good",
    5: "Good",
    6: "Good"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }, {
    1: "Dine in",
    2: "Excellent",
    3: "Excellent",
    4: "Excellent",
    5: "Excellent",
    6: "Excellent"
  }]

const datas = new Array()
for(var i=0;i<questions.length;i++){
  if(i!=0){ 
    for(var k=0;k<options[i].length;k++){
      var cnt=new Array()
      for (var j=0;j<options[0].length;j++){
        var count =0
        for(var x=0;x<data.length;x++){
          if(data[x][1]==options[0][j]){
            if(data[x][i+1]==options[i][k]){
              count=count+1
            }
          }
        }
        cnt.push(count)
      }
      datas.push(cnt)
    }
  }
}
const fields=new Array()
for(var a=0;a<options.length;a++){
  if(a!=0){
    for(var b=0;b<options[a].length;b++){
      fields.push(options[a][b])
    }
  }
}



function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
          <th>fields</th>
          {options[0].map(head => <th>{head}</th>)}
          </tr>
        </thead>
        <tbody>
          <td> {fields.map(head => <th>{head}</th>)}
        {datas.map(row => <TableRow row={row} />)}
        </td>
        </tbody>
      </table>
    </div>
  );
}
const TableRow = ({ row }) => {
  return (
      <>
          <tr>
              {row.map(val => <td>{val}</td>)}
          </tr>
      </>
  )
}

export default App;

