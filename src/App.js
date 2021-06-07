import './App.scss';
import React from 'react';

function App() {
  return (
    <form className="container">
      <Header />
      <main>
        <StatusLeft />
        <StatusMid />
        <StatusRight />
        <AttaksAndSummons />
        <CharacteristcsAndTalents />
        <AnotherProeficiences />
        <EquipamentsAndNotes />
      </main>
    </form>
  )
}

function Header() {
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

function StatusLeft() {
  return (
    <section>
      <section className="atributos">
        <div className="scores">
          <ul>
            <li>
              <div className="score">
                <label for="forcaAtributo">Força</label>
                <input type="number" name="forcaAtributo" placeholder="10"></input>
              </div>
            </li>

            <li>
              <div className="score">
                <label for="destrezaAtributo">Destreza</label>
                <input type="number" name="destrezaAtributo" placeholder="10"></input>
              </div>
            </li>

            <li>
              <div className="score">
                <label for="constituicaoAtributo">Constituição</label>
                <input type="number" name="constituicaoAtributo" placeholder="10"></input>
              </div>
            </li>

            <li>
              <div className="score">
                <label for="inteligenciaAtributo">Inteligência</label>
                <input type="number" name="inteligenciaAtributo" placeholder="10"></input>
              </div>
            </li>

            <li>
              <div className="score">
                <label for="sabedoriaAtributo">Sabedoria</label>
                <input type="number" name="sabedoriaAtributo" placeholder="10"></input>
              </div>
            </li>

            <li>
              <div className="score">
                <label for="carismaAtributo">Carisma</label>
                <input type="number" name="carismaAtributo" placeholder="10"></input>
              </div>
            </li>
          </ul>
        </div>

        <div className="attr-aplicacoes">
          <div class="inspiracao box">
            <div class="label-container">
              <label for="inspiracao">Inspiração</label>
            </div>
            <input name="inspiracao" type="checkbox" />
          </div>

          <div class="bonusProeficiencia box">
            <div class="label-container">
              <label for="bonusProeficiencia">Bônus de Proeficiência</label>
            </div>
            <input name="bonusProeficiencia" placeholder="+2" />
          </div>
        </div>

        <div className="salvaguardas secaoList box">
          <ul>
            <li>
              <label for="forcaSalvaguarda">Força</label>
              <input name="forcaSalvaguarda" placeholder="+0" type="text" />
              <input name="forcaSalvaguardaProva" type="checkbox" />
            </li>

            <li>
              <label for="destrezaSalvaguarda">Destreza</label>
              <input name="destrezaSalvaguarda" placeholder="+0" type="text" />
              <input name="destrezaSalvaguardaProva" type="checkbox" />
            </li>

            <li>
              <label for="constituicaoSalvaguarda">Constituicao</label>
              <input name="constituicaoSalvaguarda" placeholder="+0" type="text" />
              <input name="constituicaoSalvaguardaProva" type="checkbox" />
            </li>

            <li>
              <label for="inteligenciaSalvaguarda">Inteligência</label>
              <input name="inteligenciaSalvaguarda" placeholder="+0" type="text" />
              <input name="inteligenciaSalvaguardaProva" type="checkbox" />
            </li>

            <li>
              <label for="sabedoriaSalvaguarda">Sabedoria</label>
              <input name="sabedoriaSalvaguarda" placeholder="+0" type="text" />
              <input name="sabedoriaSalvaguardaProva" type="checkbox" />
            </li>

            <li>
              <label for="carismaSalvaguarda">Carisma</label>
              <input name="carismaSalvaguarda" placeholder="+0" type="text" />
              <input name="carismaSalvaguardaProva" type="checkbox" />
            </li>
          </ul>
          <div className="label">
            Salvaguarda
          </div>
        </div>

        <div className="habilidades secaoList box">
          <ul>
            <li>
              <label for="acrobacia">Acrobacia <span class="habilidade">(Des)</span></label>
              <input name="acrobacia" placeholder="+0" type="text" />
              <input name="acrobacia-prova" type="checkbox" />
            </li>
            <li>
              <label for="lidarAnimais">Lidar com Animais <span class="habilidade">(Sab)</span></label>
              <input name="lidarAnimais" placeholder="+0" type="text" />
              <input name="lidarAnimais-prova" type="checkbox" />
            </li>
            <li>
              <label for="arcanismo">Arcanismo <span class="habilidade">(Int)</span></label>
              <input name="arcanismo" placeholder="+0" type="text" />
              <input name="arcanismo-prova" type="checkbox" />
            </li>
            <li>
              <label for="atletismo">Atletismo <span class="skill">(For)</span></label>
              <input name="atletismo" placeholder="+0" type="text" />
              <input name="atletismo-prova" type="checkbox" />
            </li>
            <li>
              <label for="enganacao">Enganação <span class="skill">(Car)</span></label>
              <input name="enganacao" placeholder="+0" type="text" />
              <input name="enganacao-prova" type="checkbox" />
            </li>
            <li>
              <label for="historia">História <span class="skill">(Int)</span></label>
              <input name="historia" placeholder="+0" type="text" />
              <input name="historia-prova" type="checkbox" />
            </li>
            <li>
              <label for="intuicao">Intuição <span class="skill">(Sab)</span></label>
              <input name="intuicao" placeholder="+0" type="text" />
              <input name="intuicao-prova" type="checkbox" />
            </li>
            <li>
              <label for="intimidacao">Intimidação <span class="skill">(Car)</span></label>
              <input name="intimidacao" placeholder="+0" type="text" />
              <input name="intimidacao-prova" type="checkbox" />
            </li>
            <li>
              <label for="investigacao">Investigação <span class="skill">(Int)</span></label>
              <input name="investigacao" placeholder="+0" type="text" />
              <input name="investigacao-prova" type="checkbox" />
            </li>
            <li>
              <label for="medicina">Medicina <span class="skill">(Sab)</span></label>
              <input name="medicina" placeholder="+0" type="text" />
              <input name="medicina-prova" type="checkbox" />
            </li>
            <li>
              <label for="natureza">Natureza <span class="skill">(Int)</span></label>
              <input name="natureza" placeholder="+0" type="text" />
              <input name="natureza-prova" type="checkbox" />
            </li>
            <li>
              <label for="percepcao">Percepção <span class="skill">(Sab)</span></label>
              <input name="percepcao" placeholder="+0" type="text" />
              <input name="percepcao-prova" type="checkbox" />
            </li>
            <li>
              <label for="atuacao">Atuação <span class="skill">(Car)</span></label>
              <input name="atuacao" placeholder="+0" type="text" />
              <input name="atuacao-prova" type="checkbox" />
            </li>
            <li>
              <label for="persuasao">Persuasão <span class="skill">(Car)</span></label>
              <input name="persuasao" placeholder="+0" type="text" />
              <input name="persuasao-prova" type="checkbox" />
            </li>
            <li>
              <label for="religiao">Religião <span class="skill">(Int)</span></label>
              <input name="religiao" placeholder="+0" type="text" />
              <input name="religiao-prova" type="checkbox" />
            </li>
            <li>
              <label for="prestidigitacao">Prestidigitação <span class="skill">(Des)</span></label>
              <input name="prestidigitacao" placeholder="+0" type="text" />
              <input name="prestidigitacao-prova" type="checkbox" />
            </li>
            <li>
              <label for="furtividade">Furtividade <span class="skill">(Des)</span></label>
              <input name="furtividade" placeholder="+0" type="text" />
              <input name="furtividade-prova" type="checkbox" />
            </li>
            <li>
              <label for="sobrevivencia">Sobrevivência <span class="skill">(Sab)</span></label>
              <input name="sobrevivencia" placeholder="+0" type="text" />
              <input name="sobrevivencia-prova" type="checkbox" />
            </li>
          </ul>
          <div className="label">
            Habilidades
          </div>
        </div>
      </section>

      <div className="sabedoriaPassiva box">
        <div class="label-container">
          <label for="percepcaoPassiva">Sabedoria Passiva (Percepção)</label>
        </div>
        <input name="percepcaoPassiva" placeholder="10" />
      </div>
    </section>
  )
}

function StatusMid() {
  return (
    <div className="status-mid">
      <p>status mid</p>
    </div>
  );
}

function StatusRight() {
  return (
    <div className="status-right">
      <p>status right</p>
    </div>
  );
}

function AttaksAndSummons() {
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

function CharacteristcsAndTalents() {
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

function AnotherProeficiences() {
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

function EquipamentsAndNotes() {
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
