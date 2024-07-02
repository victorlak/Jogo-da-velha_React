import {React, useState, useEffect} from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import './Style/App.css'

function App() {
  const [jogador, setJogador] = useState('X')
  const [jogadorX, setJogadorX] = useState([])
  const [jogadorO, setJogadorO] = useState([])

  const [close, setClose] = useState(false)

  const sequenciaVitoria = [
    [1,2,3], [4,5,6], [7,8,9],
    [1,4,7], [2,5,8], [3,6,9],
    [1,5,9], [3,5,7]
  ]

  function trocaVez(){
    if(jogador === 'X'){
      setJogador('O')
    }else{
      setJogador('X')
    }
  }

  function verificaVitoria(movimentos) {
    return sequenciaVitoria.some(sequencia =>
      sequencia.every(numero => movimentos.includes(numero))
    );
  }

  useEffect(()=> {

    if(verificaVitoria(jogadorX)){
      alert('Jogador X ganhou')

      setClose(true)

    }else if(verificaVitoria(jogadorO)){
      alert('Jogador O ganhou')

      setClose(true)
    }

    if (jogadorX.length + jogadorO.length === 9 && !close) {
      alert('Deu velha')
      setClose(true)
    }

  }, [jogador])

  function handleClick(event){
    const casa = Number(event.target.id)
    if (close) {
      alert('Jogo finalizado')
      return
    }
    //exibir o x ou o o na tela
    const elemento = document.getElementById(casa)
    elemento.innerHTML = `<span class=jogada> ${jogador}</span>`
    elemento.style.pointerEvents = 'none'

    if (jogador === 'X' ) {
      setJogadorX([...jogadorX, casa])
    }else{
      setJogadorO([...jogadorO, casa])
    }

    trocaVez()
  }
  /*
  Linhas horizontais:
      [1, 2, 3]
      [4, 5, 6]
      [7, 8, 9]

      Linhas verticais:
      [1, 4, 7]
      [2, 5, 8]
      [3, 6, 9]

      Diagonais:
      [1, 5, 9]
      [3, 5, 7]
  */

  return (
    <>
    <div className="Placar mt-1">
      {
        close && <Button color="success" onClick={()=> window.location.reload()}>Reiniciar</Button>
      }

    </div>
    <div className="All">
    <div className="Tabuleiro">
        <div onClick={handleClick} id='1' className="box A1"></div>
        <div onClick={handleClick} id='2' className="box A2"></div>
        <div onClick={handleClick} id='3' className="box A3"></div>
        <div onClick={handleClick} id='4' className="box B1"></div>
        <div onClick={handleClick} id='5' className="box B2"></div>
        <div onClick={handleClick} id='6' className="box B3"></div>
        <div onClick={handleClick} id='7' className="box C1"></div>
        <div onClick={handleClick} id='8' className="box C2"></div>
        <div onClick={handleClick} id='9' className="box C3"></div>
    </div>

</div>


</>
  );
}

export default App;
