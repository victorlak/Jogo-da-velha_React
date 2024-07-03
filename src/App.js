import {React, useState, useEffect} from 'react';
import { Button, Col, Row } from 'reactstrap';
import './Style/App.css'

function App() {

  function zerarTabuleiro(){
    setOpcao1('')
    setOpcao2('')
    setOpcao3('')
    setOpcao4('')
    setOpcao5('')
    setOpcao6('')
    setOpcao7('')
    setOpcao8('')
    setOpcao9('')
  }
  const[jogador, setJogador] = useState('x')
  const [opcao1, setOpcao1] = useState('')
  const [opcao2, setOpcao2] = useState('')
  const [opcao3, setOpcao3] = useState('')

  const [opcao4, setOpcao4] = useState('')
  const [opcao5, setOpcao5] = useState('')
  const [opcao6, setOpcao6] = useState('')

  const [opcao7, setOpcao7] = useState('')
  const [opcao8, setOpcao8] = useState('')
  const [opcao9, setOpcao9] = useState('')
  
  useEffect(() => {
    console.log(jogador); 
    vitorias.map((element)=>{
      if(!(element.includes(''))){
        if(element.every((element,index,array)=>element===array[0])===true){
          zerarTabuleiro()
          setJogador('x')
        }
     }
    })
  }, [opcao1, opcao2, opcao3, opcao4, opcao5, opcao6, opcao7, opcao8, opcao9,]);
  const vitorias = [
    [opcao1,opcao2,opcao3],
    [opcao4,opcao5,opcao6],
    [opcao7,opcao8,opcao9],
    [opcao1,opcao5,opcao9],
    [opcao3,opcao5,opcao7],
    [opcao1,opcao4,opcao7],
    [opcao2,opcao5,opcao8],
    [opcao3,opcao6,opcao9]
  ]
  return (
    <div className="All">
        <Row className='Tabuleiro'>
          <Col  onClick={()=>{if(opcao1 === ''){
            if(jogador === 'x'){
              setOpcao1('x')
              setJogador('o')
            }else{
              setOpcao1('o')
              setJogador('x')
            }
          }
          }} md={4}className='Opcao'><h1>{opcao1}</h1></Col>
          <Col  onClick={()=>{if(opcao2 === ''){
            if(jogador === 'x'){
              setOpcao2('x')
              setJogador('o')
            }else{
              setOpcao2('o')
              setJogador('x')
            }
          }
          }}md={4}className='Opcao CentroSuperior'><h1>{opcao2}</h1></Col>
          <Col  onClick={()=>{if(opcao3 == ''){
            if(jogador === 'x'){
              setOpcao3('x')
              setJogador('o')
            }else{
              setOpcao3('o')
              setJogador('x')
            }
          }}}md={4}className='Opcao'><h1>{opcao3}</h1></Col>

          <Col  onClick={()=>{if(opcao4 == ''){
            if(jogador === 'x'){
              setOpcao4('x')
              setJogador('o')
            }else{
              setOpcao4('o')
              setJogador('x')
            }
          }}}md={4}className='Opcao PrimeiroMeio'><h1>{opcao4}</h1></Col>
          <Col onClick={()=>{if(opcao5 == ''){
            if(jogador === 'x'){
              setOpcao5('x')
              setJogador('o')
            }else{
              setOpcao5('o')
              setJogador('x')
            }
          }}}md={4}className='Opcao CentroMeio'><h1>{opcao5}</h1></Col>
          <Col onClick={()=>{if(opcao6 == ''){
            if(jogador === 'x'){
              setOpcao6('x')
              setJogador('o')
            }else{
              setOpcao6('o')
              setJogador('x')
            }
          }}}md={4}className='Opcao TerceiroMeio'><h1>{opcao6}</h1></Col>

          <Col onClick={()=>{if(opcao7 == ''){
            if(jogador === 'x'){
              setOpcao7('x')
              setJogador('o')
            }else{
              setOpcao7('o')
              setJogador('x')
            }
          }}}md={4}className='Opcao'><h1>{opcao7}</h1></Col>
          <Col onClick={()=>{if(opcao8 == ''){
            if(jogador === 'x'){
              setOpcao8('x')
              setJogador('o')
            }else{
              setOpcao8('o')
              setJogador('x')
            }
          }}}md={4}className='Opcao CentroInferior'><h1>{opcao8}</h1></Col>
          <Col onClick={()=>{if(opcao9 == ''){
            if(jogador === 'x'){
              setOpcao9('x')
              setJogador('o')
            }else{
              setOpcao9('o')
              setJogador('x')
            }
          }}}md={4}className='Opcao'><h1>{opcao9}</h1></Col>
        </Row>
    </div>
  );
}

export default App;
