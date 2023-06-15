import './App.css';
import UnivLogo from "C:/Users/hwang/Desktop/kingokoin/kingokoin/src/image/UnivLogo.png";
import CoinIcon from "C:/Users/hwang/Desktop/kingokoin/kingokoin/src/image/CoinIcon.png";

function Header(){
  return <header style={{ display: 'flex'}}>
    <img src={UnivLogo} className="App-logo"/>
    <h1 style={{ marginLeft: '30px' }}>KingoKoin</h1>    
  </header>
}

function Body(props){
  return <body><div id="side" className="App-side">
    <ul>
       <li className="selected">내 코인</li>
       <li>사용처</li>
       <li>QnA</li>
       <li>더보기</li>
    </ul>
    
    </div>
    <div  className="App-content">
      <img src={CoinIcon} padding="20px"></img>
      <p>180</p> 
    </div>
  </body>
}





function App() {
  return (
    <div>
      <Header></Header>
      <p className='App-border'>.</p>
      <Body></Body>    
    </div>

  );
}

export default App;
