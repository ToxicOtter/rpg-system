import './App.scss';
import React from 'react';

function App(){
  return (
    <form className="container">
      <Header />
      <StatusLeft />
      <StatusMid />
      <StatusRight />
      <AttaksAndSummons />
      <CharacteristcsAndTalents />
      <AnotherProeficiences />
      <EquipamentsAndNotes />
    </form>
  )
}

function Header(){
  return (
    <header>
      <section className="charname">
        <label for="charname">Nome do Personagem</label>
        <input type="text" name="charname"></input>
      </section>
      <section className="headerinfo">
        <ul>
          <li>
            <label for="classeNivel">Classe & Nível</label>
            <input type="text" name="classeNivel"></input>    
          </li>
          <li>
            <label for="antecedentes">Antecedente</label>
            <input type="text" name="antecedentes"></input>
          </li>
          <li>
            <label for="playerName">Nome do Jogador</label>
            <input type="text" name="playerName"></input>
          </li>
          <li>
            <label for="raca">Raça</label>
            <input type="text" name="raca"></input>
          </li>
          <li>
            <label for="alinhamento">Alinhamento</label>
            <input type="text" name="alinhamento"></input>
          </li>
          <li>
            <label for="expPoints">Pontos de experiência</label>
            <input type="number" name="expPoints"></input>
          </li>
        </ul>
      </section>
    </header>
  )
}

function StatusLeft(){
  return (
    <div className="status-left">
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
  return (
    <div className="status-mid">
      <p>status mid</p>
    </div>
  );
} 

function StatusRight(){
  return (
    <div className="status-right">
      <p>status right</p>
    </div>
  );
}  

function AttaksAndSummons(){
  return (
    <div className="attack">
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
    <div className="carac">
      <form>
        <label>
          <textarea cols="50" rows="5"></textarea>
          <span>Características e Talentos</span>
        </label>
      </form>
    </div>
  )
} 

function AnotherProeficiences(){
  return (
    <div className="outro">
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
    <div className="equip">
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
