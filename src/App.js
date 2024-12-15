import { useState } from "react";


function App() {
  const [value , setValue] = useState("")

  const handleClick = (buttonvalue)=>{
    setValue((prev)=> prev+buttonvalue)
  }
  const handleClear =()=>{
    setValue('')
  }
  const handleDelete = ()=>{
    setValue((prev)=>prev.slice(0,-1));
  }
  const handleEvaluate =()=>{
    try{
      const result = eval(value)
      setValue(result.toString())
    

    }
    catch(error){
        setValue("")
    }
  }

  return (
    <main>
      <form class = "Form" onSubmit={(e)=> e.preventDefault()}>
        <input
        autoFocus
        type="text"
        value = {value}
        />
    <div className="App">
      <input type="button" value = "1" onClick={()=> handleClick("1")}/>
      <input type="button" value = "2" onClick={()=> handleClick("2")}/>
      <input type="button" value = "3" onClick={()=> handleClick("3")}/>
      <input type="button" value = "+" onClick={()=> handleClick("+")}/>
      <input type="button" value = "4" onClick={()=> handleClick("4")}/>
      <input type="button" value = "5" onClick={()=> handleClick("5")}/>
      <input type="button" value = "6" onClick={()=> handleClick("6")}/>
      <input type="button" value = "-" onClick={()=> handleClick("-")}/>
      <input type="button" value = "7" onClick={()=> handleClick("7")}/>
      <input type="button" value = "8" onClick={()=> handleClick("8")}/>
      <input type="button" value = "9" onClick={()=> handleClick("9")}/>
      <input type="button" value = "*" onClick={()=> handleClick("*")}/>
      <input type="button" value = "0" onClick={()=> handleClick("0")}/>
      <input type="button" value = "." onClick={()=> handleClick(".")}/>
      <input type="button" value = "/" onClick={()=> handleClick("/")}/>
      <input type="button" value = "%" onClick={()=> handleClick("%")}/>
      <input type="button" value = "=" onClick={handleEvaluate}/>
      <input type ="button" value = "Clear" onClick ={handleClear} />
      <input type= "button" value = "Delete" onClick={handleDelete} />
      </div>
    </form>
    </main>
  );
}

export default App;
