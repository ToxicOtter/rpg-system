import './App.css';
import React from 'react';

function App(){
  return (
    <div className="container">
      <Header />
      <StatusLeft />
      <StatusMid />
      <StatusRight />
      <AttaksAndSummons />
      <CharacteristcsAndTalents />
      <AnotherProeficiences />
      <EquipamentsAndNotes />
    </div>
  )
}

function Header(){
  return (
    <div>
      <h1>Dungeons & Dragons</h1>
      <form>
        <label>
          Nome do Personagem
          <input type="text"></input>
        </label>
        <label>
          Classe & Nível
          <input type="text"></input>
        </label>
        <label>
          Antecedente
          <input type="text"></input>
        </label>
        <label>
          Nome do Jogador
          <input type="text"></input>
        </label>
        <label>
          Raça
          <input type="text"></input>
        </label>
        <label>
          Alinhamento
          <input type="text"></input>
        </label>
        <label>
          Pontos de experiência
          <input type="number"></input>
        </label>
      </form>
    </div>
  )
}

function StatusLeft(){
  return (
    <div>
      <form>
        <label>
          Bônus de Proeficiência
          <input type="number"></input>
        </label>
        <label>
          Inspiração
          <input type="text"></input>
        </label>

        <div>
          <label>
            Força
            <input type="number"></input>
          </label>
          <fieldset>
            <label>
              Salvaguarda
              <input type="checkbox"></input>
            </label>
            <label>
              Atletismo
              <input type="checkbox"></input>
            </label>
          </fieldset>
        </div>

        <div>
          <label>
            Destreza
            <input type="number"></input>
          </label>
          <fieldset>
            <label>
              Salvaguarda
              <input type="checkbox"></input>
            </label>
            <label>
              Acrobacia
              <input type="checkbox"></input>
            </label>
            <label>
              Furtividade
              <input type="checkbox"></input>
            </label>
            <label>
              Prestidigitação
              <input type="checkbox"></input>
            </label>
          </fieldset>
        </div>

        <div>
          <label>
            Constituição
            <input type="number"></input>
          </label>
          <fieldset>
            <label>
              Salvaguarda
              <input type="checkbox"></input>
            </label>
          </fieldset>
        </div>

        <div>
          <label>
            Inteligência
            <input type="number"></input>
          </label>
          <fieldset>
            <label>
              Salvaguarda
              <input type="checkbox"></input>
            </label>
            <label>
              Arcanismo
              <input type="checkbox"></input>
            </label>
            <label>
              História
              <input type="checkbox"></input>
            </label>
            <label>
              Investigação
              <input type="checkbox"></input>
            </label>
            <label>
              Natureza
              <input type="checkbox"></input>
            </label>
            <label>
              Religião
              <input type="checkbox"></input>
            </label>
          </fieldset>
        </div>

        <div>
          <label>
            Sabedoria
            <input type="number"></input>
          </label>
          <fieldset>
            <label>
              Salvaguarda
              <input type="checkbox"></input>
            </label>
            <label>
              Intuição
              <input type="checkbox"></input>
            </label>
            <label>
              Lidar com animais
              <input type="checkbox"></input>
            </label>
            <label>
              Medicina
              <input type="checkbox"></input>
            </label>
            <label>
              Percepção
              <input type="checkbox"></input>
            </label>
            <label>
              Sobrevivência
              <input type="checkbox"></input>
            </label>
          </fieldset>
        </div>

        <div>
          <label>
            Carisma
            <input type="number"></input>
          </label>
          <fieldset>
            <label>
              Salvaguarda
              <input type="checkbox"></input>
            </label>
            <label>
              Atuação
              <input type="checkbox"></input>
            </label>
            <label>
              Enganação
              <input type="checkbox"></input>
            </label>
            <label>
              Intimidação
              <input type="checkbox"></input>
            </label>
            <label>
              Persuasão
              <input type="checkbox"></input>
            </label>
          </fieldset>
        </div>

        <label>
          Sabedoria Passiva (Percepção)
          <input type="text"></input>
        </label>
      </form>
    </div>
  )
} 

function StatusMid(){
  return null;
} 

function StatusRight(){
  return null;
}  

function AttaksAndSummons(){
  return (
    <div>
      <form>
        {/*falta coisa aqui */}
        <label>
        Ataques & Conjuração
          <input type="text"></input>
        </label>
      </form>
    </div>
  )
} 

function CharacteristcsAndTalents(){
  return (
    <div>
      <form>
        <label>
          Características e Talentos
          <input type="text"></input>
        </label>
      </form>
    </div>
  )
} 

function AnotherProeficiences(){
  return (
    <div>
      <form>
        <label>
          Outras Proeficiências & Idiomas
          <input type="text"></input>
        </label>
      </form>
    </div>
  )
} 

function EquipamentsAndNotes(){
  return (
    <div>
      <form>
        <label>
          Equipamentos & Notas do Personagem
          <input type="text"></input>
        </label>
      </form>
    </div>
  )
} 

export default App;
