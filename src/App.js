import React,{useState} from 'react';
import './App.css';
import backgroundImage from './health.jpg';


function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message ,setMessage] = useState( '')


  let calBmi = (e) =>{
    e.preventDefault();

    if(weight === 0 || height === 0)
    {
      alert('please enter a valid weight and height')
    }
    else{
      let bmi =(weight / ((height / 100) * (height / 100)))
      setBmi(bmi.toFixed(1))
      //
      if(bmi<18.5){
        setMessage('you are underweight')
      }
      else if(bmi>=18.5 && bmi <24.9){
         setMessage('you are healthy weight')
      }
      else{
        setMessage('you are overweight')
      }
    }
  }

  // reload 
  let reload = () => {
    window.location.reload()
  }

  return (

    <div className="App-box">
  
     <h2>BMI Calculator</h2>
     <form onSubmit={calBmi}>
      <div className='content'>
        <label htmlFor=""> weight (kg)</label>
        <input type="text" placeholder='enter weight value' value={weight}
        onChange={(e) => setWeight(e.target.value)} />
        
      </div>
      <div className='content'>
        <label htmlFor=""> Height (cm)</label>
        <input type="text" placeholder='enter height value' value={height} 
        onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <button className='btn' type='submit'>submit</button>
        <button className='btn btn-outline' onClick={reload} type='reload'>Reload</button>
      </div>
      <div className="center">
        <h3>Your BMI is :{bmi}</h3>
        <p>{message}</p>
      </div>
     </form>
    </div>
   
  
    
  );
}

export default App;
