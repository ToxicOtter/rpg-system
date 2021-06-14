import './App.scss';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charData: "",
      teste: "",
      playerData: {
        header: {
          charname: "",
          classlevel: "",
          backgound: "",
          playername: "",
          race: "",
          alignment: "",
          experiencepoints: ""
        },
        sectionLeft: {
          scores: {
            strength: {
              Strengthscore: "",
              Strengthmod: ""
            },
            dexterity: {
              Dexterityscore: "",
              Dexteritymod: ""
            },
            constitution: {
              Constitutionscore: "",
              Constitutionmod: ""
            },
            wisdom: {
              Wisdomscore: "",
              Wisdommod: ""
            },
            intelligence: {
              Intelligencescore: "",
              Intelligencemod: ""
            },
            charisma: {
              Charismascore: "",
              Charismamod: ""
            }
          },
          inspiration: "",
          proficiencybonus: "",
          saves: {
            strength: {
              Strengthsave: "",
              Strengthsaveprof: ""
            },
            dexterity: {
              Dexteritysave: "",
              Dexteritysaveprof: ""
            },
            constitution: {
              Constitutionsave: "",
              Constitutionsaveprof: ""
            },
            wisdom: {
              Wisdomsave: "",
              Wisdomsaveprof: ""
            },
            intelligence: {
              Intelligencesave: "",
              Intelligencesaveprof: ""
            },
            charisma: {
              Charismasave: "",
              Charismasaveprof: ""
            }
          },
          skills: {
            Acrobatics: {
              Acrobatics: "",
              Acrobaticsprof: ""
            },
            AnimalHandling: {
              AnimalHandling: "",
              AnimalHandlingprof: ""
            },
            Arcana: {
              Arcana: "",
              Arcanaprof: ""
            },
            Athletics: {
              Athletics: "",
              Athleticsprof: ""
            },
            Deception: {
              Deception: "",
              Deceptionprof: ""
            },
            History: {
              History: "",
              Historyprof: ""
            },
            Insight: {
              Insight: "",
              Insightprof: ""
            },
            Intimidation: {
              Intimidation: "",
              Intimidationprof: ""
            },
            Investigation: {
              Investigation: "",
              Investigationprof: ""
            },
            Medicine: {
              Medicine: "",
              Medicineprof: ""
            },
            Nature: {
              Nature: "",
              Natureprof: ""
            },
            Perception: {
              Perception: "",
              Perceptionprof: ""
            },
            Performance: {
              Performance: "",
              Performanceprof: ""
            },
            Persuasion: {
              Persuasion: "",
              Persuasionprof: ""
            },
            Religion: {
              Religion: "",
              Religionprof: ""
            },
            SleightofHand: {
              SleightofHand: "",
              SleightofHandprof: ""
            },
            Stealth: {
              Stealth: "",
              Stealthprof: ""
            },
            Survival: {
              Survival: "",
              Survivalprof: ""
            }
          },
          passiveperception: "",
          otherprofs: ""
        },
        sectionMid: {

        },
        sectionRight: {

        }
      }
    }

    this.handleTestChange = this.handleTestChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = event => {
    alert(`${this.state.playerData.header.race}`);
    console.log(this.state.playerData.header);
    event.preventDefault();
  }

  handleTestChange = event => {
    let playerData = {...this.state.playerData};

    for(let key in playerData){
      if (playerData[key].hasOwnProperty(event.target.name)){
        playerData[key][event.target.name] = event.target.value;
      }
    }
    this.setState({ playerData })
  }

  render() {
    return (
      <form className="charsheet" onSubmit={this.handleSubmit}>
        <Header 
          handleTestChange={this.handleTestChange}
          obj={this.state.playerData.header}
        />
        <main>
          <SectionLeft 
            handleTestChange={this.handleTestChange}
          />
          <SectionMid 
            handleTestChange={this.handleTestChange}
          />
          <SectionRight 
            handleTestChange={this.handleTestChange}
          />
        </main>
        <button type="submit">Uepa</button>
      </form>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <section className="charname">
          <label htmlFor="charname">Character Name</label>
          <input name="charname" placeholder="Thoradin Fireforge" onChange={this.props.handleTestChange} value={this.props.obj.charname}></input>
        </section>
        <section className="misc">
          <ul>
            <li>
              <label htmlFor="classlevel">Class & Level</label>
              <input name="classlevel" placeholder="Paladin 2" onChange={this.props.handleTestChange}></input>
            </li>
            <li>
              <label htmlFor="background">Background</label>
              <input name="background" placeholder="Acolyte" onChange={this.props.handleTestChange}></input>
            </li>
            <li>
              <label htmlFor="playername">Player Name</label>
              <input name="playername" placeholder="Player McPlayerface" onChange={this.props.handleTestChange}></input>
            </li>
            <li>
              <label htmlFor="race">Race</label>
              <input name="race" placeholder="Half-elf" onChange={this.props.handleTestChange}></input>
            </li>
            <li>
              <label htmlFor="alignment">Alignment</label>
              <input name="alignment" placeholder="Lawful Good" onChange={this.props.handleTestChange}></input>
            </li>
            <li>
              <label htmlFor="experiencepoints">Experience Points</label>
              <input name="experiencepoints" placeholder="3240" onChange={this.props.handleTestChange}></input>
            </li>
          </ul>
        </section>
      </header>
    )
  }
}

function SectionLeft() {
  return (
    <section>
      <section className="attributes">
        <div className="scores">
          <ul>
            <li>
              <div className="score">
                <label htmlFor="Strengthscore">Strength</label>
                <input name="Strengthscore" placeholder="10"></input>
              </div>
              <div className="modifier">
                <input name="Strengthmod" placeholder="+0"></input>
              </div>
            </li>
            <li>
              <div className="score">
                <label htmlFor="Dexterityscore">Dexterity</label>
                <input name="Dexterityscore" placeholder="10"></input>
              </div>
              <div className="modifier">
                <input name="Dexteritymod" placeholder="+0"></input>
              </div>
            </li>
            <li>
              <div className="score">
                <label htmlFor="Constitutionscore">Constitution</label>
                <input name="Constitutionscore" placeholder="10"></input>
              </div>
              <div className="modifier">
                <input name="Constitutionmod" placeholder="+0"></input>
              </div>
            </li>
            <li>
              <div className="score">
                <label htmlFor="Wisdomscore">Wisdom</label>
                <input name="Wisdomscore" placeholder="10"></input>
              </div>
              <div className="modifier">
                <input name="Wisdommod" placeholder="+0"></input>
              </div>
            </li>
            <li>
              <div className="score">
                <label htmlFor="Intelligencescore">Intelligence</label>
                <input name="Intelligencescore" placeholder="10"></input>
              </div>
              <div className="modifier">
                <input name="Intelligencemod" placeholder="+0"></input>
              </div>
            </li>
            <li>
              <div className="score">
                <label htmlFor="Charismascore">Charisma</label>
                <input name="Charismascore" placeholder="10"></input>
              </div>
              <div className="modifier">
                <input name="Charismamod" placeholder="+0"></input>
              </div>
            </li>
          </ul>
        </div>
        <div className="attr-applications">
          <div className="inspiration box">
            <div className="label-container">
              <label htmlFor="inspiration">Inspiration</label>
            </div>
            <input name="inspiration" type="checkbox"></input>
          </div>
          <div className="proficiencybonus box">
            <div className="label-container">
              <label htmlFor="proficiencybonus">Proficiency Bonus</label>
            </div>
            <input name="proficiencybonus" placeholder="+2"></input>
          </div>
          <div className="saves list-section box">
            <ul>
              <li>
                <label htmlFor="Strengthsave">Strength</label>
                <input name="Strengthsave" placeholder="+0" type="text" /><input name="Strengthsaveprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Dexteritysave">Dexterity</label>
                <input name="Dexteritysave" placeholder="+0" type="text" /><input name="Dexteritysaveprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Constitution-save">Constitution</label>
                <input name="Constitutionsave" placeholder="+0" type="text" /><input name="Constitutionsaveprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Wisdomsave">Wisdom</label>
                <input name="Wisdomsave" placeholder="+0" type="text" /><input name="Wisdomsaveprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Intelligencesave">Intelligence</label>
                <input name="Intelligencesave" placeholder="+0" type="text" /><input name="Intelligencesaveprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Charismasave">Charisma</label>
                <input name="Charismasave" placeholder="+0" type="text" /><input name="Charismasaveprof" type="checkbox"></input>
              </li>
            </ul>
            <div className="label">
              Saving Throws
            </div>
          </div>
          <div className="skills list-section box">
            <ul>
              <li>
                <label htmlFor="Acrobatics">Acrobatics <span className="skill">(Dex)</span></label>
                <input name="Acrobatics" placeholder="+0" type="text"></input>
                <input name="Acrobaticsprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="AnimalHandling">Animal Handling <span className="skill">(Wis)</span></label>
                <input name="AnimalHandling" placeholder="+0" type="text"></input>
                <input name="AnimalHandlingprof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Arcana">Arcana <span className="skill">(Int)</span></label>
                <input name="Arcana" placeholder="+0" type="text"></input>
                <input name="Arcanaprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Athletics">Athletics <span className="skill">(Str)</span></label>
                <input name="Athletics" placeholder="+0" type="text"></input>
                <input name="Athleticsprof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Deception">Deception <span className="skill">(Cha)</span></label>
                <input name="Deception" placeholder="+0" type="text"></input>
                <input name="Deceptionprof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="History">History <span className="skill">(Int)</span></label>
                <input name="History" placeholder="+0" type="text"></input>
                <input name="Historyprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Insight">Insight <span className="skill">(Wis)</span></label>
                <input name="Insight" placeholder="+0" type="text"></input>
                <input name="Insightprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Intimidation">Intimidation <span className="skill">(Cha)</span></label>
                <input name="Intimidation" placeholder="+0" type="text"></input>
                <input name="Intimidationprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Investigation">Investigation <span className="skill">(Int)</span></label>
                <input name="Investigation" placeholder="+0" type="text"></input>
                <input name="Investigationprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Medicine">Medicine <span className="skill">(Wis)</span></label>
                <input name="Medicine" placeholder="+0" type="text"></input>
                <input name="Medicineprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Nature">Nature <span className="skill">(Int)</span></label>
                <input name="Nature" placeholder="+0" type="text"></input>
                <input name="Natureprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Perception">Perception <span className="skill">(Wis)</span></label>
                <input name="Perception" placeholder="+0" type="text"></input>
                <input name="Perceptionprof" type="checkbox" />
              </li>
              <li>
                <label htmlFor="Performance">Performance <span className="skill">(Cha)</span></label>
                <input name="Performance" placeholder="+0" type="text"></input>
                <input name="Performanceprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Persuasion">Persuasion <span className="skill">(Cha)</span></label>
                <input name="Persuasion" placeholder="+0" type="text"></input>
                <input name="Persuasionprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Religion">Religion <span className="skill">(Int)</span></label>
                <input name="Religion" placeholder="+0" type="text"></input>
                <input name="Religionprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="SleightofHand">Sleight of Hand <span className="skill">(Dex)</span></label>
                <input name="SleightofHand" placeholder="+0" type="text"></input>
                <input name="SleightofHandprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Stealth">Stealth <span className="skill">(Dex)</span></label>
                <input name="Stealth" placeholder="+0" type="text"></input>
                <input name="Stealthprof" type="checkbox"></input>
              </li>
              <li>
                <label htmlFor="Survival">Survival <span className="skill">(Wis)</span></label>
                <input name="Survival" placeholder="+0" type="text"></input>
                <input name="Survivalprof" type="checkbox"></input>
              </li>
            </ul>
            <div className="label">
              Skills
            </div>
          </div>
        </div>
      </section>
      <div className="passive-perception box">
        <div className="label-container">
          <label htmlFor="passiveperception">Passive Wisdom (Perception)</label>
        </div>
        <input name="passiveperception" placeholder="10"></input>
      </div>
      <div className="otherprofs box textblock">
        <label htmlFor="otherprofs">Other Proficiencies and Languages</label><textarea name="otherprofs"></textarea>
      </div>
    </section>
  )
}

function SectionMid() {
  return (
    <section>
      <section className="combat">
        <div className="armorclass">
          <div>
            <label htmlFor="ac">Armor Class</label>
            <input name="ac" placeholder="10" type="text"></input>
          </div>
        </div>
        <div className="initiative">
          <div>
            <label htmlFor="initiative">Initiative</label>
            <input name="initiative" placeholder="+0" type="text"></input>
          </div>
        </div>
        <div className="speed">
          <div>
            <label htmlFor="speed">Speed</label>
            <input name="speed" placeholder="30" type="text"></input>
          </div>
        </div>
        <div className="hp">
          <div className="regular">
            <div className="max">
              <label htmlFor="maxhp">Hit Point Maximum</label>
              <input name="maxhp" placeholder="10" type="text"></input>
            </div>
            <div className="current">
              <label htmlFor="currenthp">Current Hit Points</label>
              <input name="currenthp" type="text"></input>
            </div>
          </div>
          <div className="temporary">
            <label htmlFor="temphp">Temporary Hit Points</label>
            <input name="temphp" type="text"></input>
          </div>
        </div>
        <div className="hitdice">
          <div>
            <div className="total">
              <label htmlFor="totalhd">Total</label>
              <input name="totalhd" placeholder="2d10" type="text"></input>
            </div>
            <div className="remaining">
              <label htmlFor="remaininghd">Hit Dice</label>
              <input name="remaininghd" type="text"></input>
            </div>
          </div>
        </div>
        <div className="deathsaves">
          <div>
            <div className="label">
              <label>Death Saves</label>
            </div>
            <div className="marks">
              <div className="deathsuccesses">
                <label>Successes</label>
                <div className="bubbles">
                  <input name="deathsuccess1" type="checkbox"></input>
                  <input name="deathsuccess2" type="checkbox"></input>
                  <input name="deathsuccess3" type="checkbox"></input>
                </div>
              </div>
              <div className="deathfails">
                <label>Failures</label>
                <div className="bubbles">
                  <input name="deathfail1" type="checkbox"></input>
                  <input name="deathfail2" type="checkbox"></input>
                  <input name="deathfail3" type="checkbox"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="attacksandspellcasting">
        <div>
          <label>Attacks & Spellcasting</label>
          <table>
            <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Atk Bonus
                </th>
                <th>
                  Damage/Type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input name="atkname1" type="text"></input>
                </td>
                <td>
                  <input name="atkbonus1" type="text"></input>
                </td>
                <td>
                  <input name="atkdamage1" type="text"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input name="atkname2" type="text"></input>
                </td>
                <td>
                  <input name="atkbonus2" type="text"></input>
                </td>
                <td>
                  <input name="atkdamage2" type="text"></input>
                </td>
              </tr>
              <tr>
                <td>
                  <input name="atkname3" type="text"></input>
                </td>
                <td>
                  <input name="atkbonus3" type="text"></input>
                </td>
                <td>
                  <input name="atkdamage3" type="text"></input>
                </td>
              </tr>
            </tbody>
          </table>
          <textarea></textarea>
        </div>
      </section>
      <section className="equipment">
        <div>
          <label>Equipment</label>
          <div className="money">
            <ul>
              <li>
                <label htmlFor="cp">cp</label>
                <input name="cp"></input>
              </li>
              <li>
                <label htmlFor="sp">sp</label>
                <input name="sp"></input>
              </li>
              <li>
                <label htmlFor="ep">ep</label>
                <input name="ep"></input>
              </li>
              <li>
                <label htmlFor="gp">gp</label>
                <input name="gp"></input>
              </li>
              <li>
                <label htmlFor="pp">pp</label>
                <input name="pp"></input>
              </li>
            </ul>
          </div>
          <textarea placeholder="Equipment list here"></textarea>
        </div>
      </section>
    </section>
  )
}

function SectionRight() {
  return (
    <section>
      <section className="flavor">
        <div className="personality">
          <label htmlFor="personality">Personality</label>
          <textarea name="personality"></textarea>
        </div>
        <div className="ideals">
          <label htmlFor="ideals">Ideals</label>
          <textarea name="ideals"></textarea>
        </div>
        <div className="bonds">
          <label htmlFor="bonds">Bonds</label>
          <textarea name="bonds"></textarea>
        </div>
        <div className="flaws">
          <label htmlFor="flaws">Flaws</label>
          <textarea name="flaws"></textarea>
        </div>
      </section>
      <section className="features">
        <div>
          <label htmlFor="features">Features & Traits</label>
          <textarea name="features"></textarea>
        </div>
      </section>
    </section>
  )
}

export default App;
