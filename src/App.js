import './App.scss';
import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

firebase.initializeApp({
  apiKey: "AIzaSyCL06BnO3QjBxNiZHDlpcLwS5eOFoVflKg",
  authDomain: "rpg-system-7c298.firebaseapp.com",
  projectId: "rpg-system-7c298",
  storageBucket: "rpg-system-7c298.appspot.com",
  messagingSenderId: "171426896799",
  appId: "1:171426896799:web:66b564fe17de1e96353baa",
  measurementId: "G-M0B1EX98Q4"
});

var isSelected = false;
var isLogged = false;

const auth = firebase.auth();
const firestore = firebase.firestore();
const colecao = firestore.collection("teste");

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charname: "",
      classlevel: "",
      background: "",
      playername: "",
      race: "",
      alignment: "",
      experiencepoints: "",
      Strengthscore: "",
      Strengthmod: "",
      Dexterityscore: "",
      Dexteritymod: "",
      Constitutionscore: "",
      Constitutionmod: "",
      Wisdomscore: "",
      Wisdommod: "",
      Intelligencescore: "",
      Intelligencemod: "",
      Charismascore: "",
      Charismamod: "",
      inspiration: "",
      proficiencybonus: "",
      Strengthsave: "",
      Strengthsaveprof: "",
      Dexteritysave: "",
      Dexteritysaveprof: "",
      Constitutionsave: "",
      Constitutionsaveprof: "",
      Wisdomsave: "",
      Wisdomsaveprof: "",
      Intelligencesave: "",
      Intelligencesaveprof: "",
      Charismasave: "",
      Charismasaveprof: "",
      Acrobatics: "",
      Acrobaticsprof: "",
      AnimalHandling: "",
      AnimalHandlingprof: "",
      Arcana: "",
      Arcanaprof: "",
      Athletics: "",
      Athleticsprof: "",
      Deception: "",
      Deceptionprof: "",
      History: "",
      Historyprof: "",
      Insight: "",
      Insightprof: "",
      Intimidation: "",
      Intimidationprof: "",
      Investigation: "",
      Investigationprof: "",
      Medicine: "",
      Medicineprof: "",
      Nature: "",
      Natureprof: "",
      Perception: "",
      Perceptionprof: "",
      Performance: "",
      Performanceprof: "",
      Persuasion: "",
      Persuasionprof: "",
      Religion: "",
      Religionprof: "",
      SleightofHand: "",
      SleightofHandprof: "",
      Stealth: "",
      Stealthprof: "",
      Survival: "",
      Survivalprof: "",
      passiveperception: "",
      otherprofs: "",
      ac: "",
      initiative: "",
      speed: "",
      maxhp: "",
      currenthp: "",
      temphp: "",
      totalhd: "",
      remaininghd: "",
      deathsuccess1: "",
      deathsuccess2: "",
      deathsuccess3: "",
      deathfail1: "",
      deathfail2: "",
      deathfail3: "",
      atkname1: "",
      atkname2: "",
      atkname3: "",
      atkbonus1: "",
      atkbonus2: "",
      atkbonus3: "",
      atkdamage1: "",
      atkdamage2: "",
      atkdamage3: "",
      cp: "",
      sp: "",
      ep: "",
      gp: "",
      pp: "",
      equipamenttext: "",
      personality: "",
      ideals: "",
      bonds: "",
      flaws: "",
      features: "",
      sheets: {}
    }

    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.authStateObserver = this.authStateObserver.bind(this);
    this.updateSheet = this.updateSheet.bind(this);
  }

  updateSheet(value, name){
    const otherSheets = {...this.state.sheets};

    this.setState({sheets: {...otherSheets, [name]:value}});
    console.log(this.state.sheets);
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await colecao.doc("testezinho").set({
      ...this.state
    }).catch(error => console.log(error));
  }



  handleChanges = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  initFirebaseAuth() {
    firebase.auth().onAuthStateChanged(this.authStateObserver);
  }

  authStateObserver(result) {
    isLogged = true;
    this.setState({ playername: result.additionalUserInfo.profile.name });
  }

  render() {
    if (!isLogged) {
      return (
        <div>
          <h1>Uepa</h1>
          <SingIn
            authStateObserver={this.authStateObserver}
          />  
        </div>
      )
    } else if (!isSelected) {
      return <CreateSheet 
        updateSheet={this.updateSheet}
      />;
    } else {
      return (
        <form className="charsheet" onSubmit={this.handleSubmit}>
          <Header
            handleChanges={this.handleChanges}
            playerData={{
              charname: this.state.charname,
              classlevel: this.state.classlevel,
              playername: this.state.playername,
              background: this.state.background,
              race: this.state.race,
              alignment: this.state.alignment,
              experiencepoints: this.state.experiencepoints
            }}
          />
          <main>
            <SectionLeft
              handleChanges={this.handleChanges}
              playerData={{
                Strengthscore: this.state.Strengthscore,
                Strengthmod: this.state.Strengthmod,
                Dexterityscore: this.state.Dexterityscore,
                Dexteritymod: this.state.Dexteritymod,
                Constitutionscore: this.state.Constitutionscore,
                Constitutionmod: this.state.Constitutionmod,
                Wisdomscore: this.state.Wisdomscore,
                Wisdommod: this.state.Wisdommod,
                Intelligencescore: this.state.Intelligencescore,
                Intelligencemod: this.state.Intelligencemod,
                Charismascore: this.state.Charismascore,
                Charismamod: this.state.Charismamod,
                inspiration: this.state.inspiration,
                proficiencybonus: this.state.proficiencybonus,
                Strengthsave: this.state.Strengthsave,
                Strengthsaveprof: this.state.Strengthsaveprof,
                Dexteritysave: this.state.Dexteritysave,
                Dexteritysaveprof: this.state.Dexteritysaveprof,
                Constitutionsave: this.state.Constitutionsave,
                Constitutionsaveprof: this.state.Constitutionsaveprof,
                Wisdomsave: this.Wisdomsave,
                Wisdomsaveprof: this.Wisdomsaveprof,
                Intelligencesave: this.Intelligencesave,
                Intelligencesaveprof: this.Intelligencesaveprof,
                Charismasave: this.Charismasave,
                Charismasaveprof: this.Charismasaveprof,
                Acrobatics: this.Acrobatics,
                Acrobaticsprof: this.Acrobaticsprof,
                AnimalHandling: this.AnimalHandling,
                AnimalHandlingprof: this.AnimalHandlingprof,
                Arcana: this.Arcana,
                Arcanaprof: this.Arcanaprof,
                Athletics: this.Athletics,
                Athleticsprof: this.Athleticsprof,
                Deception: this.Deception,
                Deceptionprof: this.Deceptionprof,
                History: this.History,
                Historyprof: this.Historyprof,
                Insight: this.Insight,
                Insightprof: this.Insightprof,
                Intimidation: this.Intimidation,
                Intimidationprof: this.Intimidationprof,
                Investigation: this.Investigation,
                Investigationprof: this.Investigationprof,
                Medicine: this.Medicine,
                Medicineprof: this.Medicineprof,
                Nature: this.Nature,
                Natureprof: this.Natureprof,
                Perception: this.Perception,
                Perceptionprof: this.Perceptionprof,
                Performance: this.Performance,
                Performanceprof: this.Performanceprof,
                Persuasion: this.Persuasion,
                Persuasionprof: this.Persuasionprof,
                Religion: this.Religion,
                Religionprof: this.Religionprof,
                SleightofHand: this.SleightofHand,
                SleightofHandprof: this.SleightofHandprof,
                Stealth: this.Stealth,
                Stealthprof: this.Stealthprof,
                Survival: this.Survival,
                Survivalprof: this.Survivalprof,
                passiveperception: this.passiveperception,
                otherprofs: this.otherprofs,
              }}
            />
            <SectionMid
              handleChanges={this.handleChanges}
              playerData={{
                ac: this.ac,
                initiative: this.initiative,
                speed: this.speed,
                maxhp: this.maxhp,
                currenthp: this.currenthp,
                temphp: this.temphp,
                totalhd: this.totalhd,
                remaininghd: this.remaininghd,
                deathsuccess1: this.deathsuccess1,
                deathsuccess2: this.deathsuccess2,
                deathsuccess3: this.deathsuccess3,
                deathfail1: this.deathfail1,
                deathfail2: this.deathfail2,
                deathfail3: this.deathfail3,
                atkname1: this.atkname1,
                atkname2: this.atkname2,
                atkname3: this.atkname3,
                atkbonus1: this.atkbonus1,
                atkbonus2: this.atkbonus2,
                atkbonus3: this.atkbonus3,
                atkdamage1: this.atkdamage1,
                atkdamage2: this.atkdamage2,
                atkdamage3: this.atkdamage3,
                cp: this.cp,
                sp: this.sp,
                ep: this.ep,
                gp: this.gp,
                pp: this.pp,
                equipamenttext: this.equipamenttext
              }}
            />
            <SectionRight
              handleChanges={this.handleChanges}
              playerData={{
                personality: this.personality,
                ideals: this.ideals,
                bonds: this.bonds,
                flaws: this.flaws,
                features: this.features
              }}
            />
          </main>
          <button type="submit">Uepa</button>
        </form>
      )
    }
  }
}

class SingIn extends Component {
  signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => { this.props.authStateObserver(result) });
  }

  render() {
    return (
      <button onClick={this.signInWithGoogle}> Sign In</button>
    )
  }
}

class CreateSheet extends Component {
  componentDidMount(){ 
    const result = async() => {
      await colecao.where('charname',"==","Luan").get()
        .then(result => {
          result.docs.map(doc => {
            
            this.props.updateSheet(doc.data(),doc.id);
            return doc.data();
          })
        });
    };

    result();
  }

  render(){
    return(
      <div>
        <button type="button">+</button>
      </div>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <section className="charname">
          <label htmlFor="charname">Character Name</label>
          <input
            name="charname"
            placeholder="Thoradin Fireforge"
            onChange={this.props.handleChanges}
            value={this.props.playerData.charname}
          ></input>
        </section>
        <section className="misc">
          <ul>
            <li>
              <label htmlFor="classlevel">Class & Level</label>
              <input
                name="classlevel"
                placeholder="Paladin 2"
                onChange={(event) => { this.props.handleChanges(event, "header") }}
                value={this.props.playerData.classlevel}></input>
            </li>
            <li>
              <label htmlFor="background">Background</label>
              <input name="background" placeholder="Acolyte" onChange={(event) => { this.props.handleChanges(event, "header") }}></input>
            </li>
            <li>
              <label htmlFor="playername">Player Name</label>
              <input
                name="playername"
                placeholder="Player McPlayerface"
                onChange={(event) => { this.props.handleChanges(event, "header") }}
                value={this.props.playerData.playername}
                readOnly={true}
              ></input>
            </li>
            <li>
              <label htmlFor="race">Race</label>
              <input name="race" placeholder="Half-elf" onChange={(event) => { this.props.handleChanges(event, "header") }}></input>
            </li>
            <li>
              <label htmlFor="alignment">Alignment</label>
              <input name="alignment" placeholder="Lawful Good" onChange={(event) => { this.props.handleChanges(event, "header") }}></input>
            </li>
            <li>
              <label htmlFor="experiencepoints">Experience Points</label>
              <input name="experiencepoints" placeholder="3240" onChange={(event) => { this.props.handleChanges(event, "header") }}></input>
            </li>
          </ul>
        </section>
      </header>
    )
  }
}

class SectionLeft extends Component {
  render() {
    return (
      <section>
        <section className="attributes">
          <div className="scores">
            <ul>
              <li>
                <div className="score">
                  <label htmlFor="Strengthscore">Strength</label>
                  <input
                    name="Strengthscore"
                    placeholder="10"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionScores") }}
                    value={this.props.playerData.Strengthscore}
                  ></input>
                </div>
                <div className="modifier">
                  <input
                    name="Strengthmod"
                    placeholder="+0"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionScores") }}
                    value={this.props.playerData.Strengthmod}
                  ></input>
                </div>
              </li>
              <li>
                <div className="score">
                  <label htmlFor="Dexterityscore">Dexterity</label>
                  <input
                    name="Dexterityscore"
                    placeholder="10"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionScores") }}
                    value={this.props.playerData.Dexterityscore}
                  ></input>
                </div>
                <div className="modifier">
                  <input
                    name="Dexteritymod"
                    placeholder="+0"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionScores") }}
                    value={this.props.playerData.Dexteritymod}
                  ></input>
                </div>
              </li>
              <li>
                <div className="score">
                  <label htmlFor="Constitutionscore">Constitution</label>
                  <input
                    name="Constitutionscore"
                    placeholder="10"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionScores") }}
                    value={this.props.playerData.Constitutionscore}
                  ></input>
                </div>
                <div className="modifier">
                  <input
                    name="Constitutionmod"
                    placeholder="+0"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionScores") }}
                    value={this.props.playerData.Constitutionmod}
                  ></input>
                </div>
              </li>
              <li>
                <div className="score">
                  <label htmlFor="Wisdomscore">Wisdom</label>
                  <input
                    name="Wisdomscore"
                    placeholder="10"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionScores") }}
                    value={this.props.playerData.Wisdomscore}
                  ></input>
                </div>
                <div className="modifier">
                  <input
                    name="Wisdommod"
                    placeholder="+0"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionScores") }}
                    value={this.props.playerData.Wisdommod}
                  ></input>
                </div>
              </li>
              <li>
                <div className="score">
                  <label htmlFor="Intelligencescore">Intelligence</label>
                  <input
                    name="Intelligencescore"
                    placeholder="10"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionScores") }}
                    value={this.props.playerData.Intelligencescore}
                  ></input>
                </div>
                <div className="modifier">
                  <input
                    name="Intelligencemod"
                    placeholder="+0"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionScores") }}
                    value={this.props.playerData.Intelligencemod}
                  ></input>
                </div>
              </li>
              <li>
                <div className="score">
                  <label htmlFor="Charismascore">Charisma</label>
                  <input
                    name="Charismascore"
                    placeholder="10"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionScores") }}
                    value={this.props.playerData.Charismascore}
                  ></input>
                </div>
                <div className="modifier">
                  <input
                    name="Charismamod"
                    placeholder="+0"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionScores") }}
                    value={this.props.playerData.Charismamod}
                  ></input>
                </div>
              </li>
            </ul>
          </div>
          <div className="attr-applications">
            <div className="inspiration box">
              <div className="label-container">
                <label htmlFor="inspiration">Inspiration</label>
              </div>
              <input
                name="inspiration"
                type="checkbox"
                onChange={(event) => { this.props.handleChanges(event, "leftSection") }}
                value={this.props.playerData.inspiration}
              ></input>
            </div>
            <div className="proficiencybonus box">
              <div className="label-container">
                <label htmlFor="proficiencybonus">Proficiency Bonus</label>
              </div>
              <input
                name="proficiencybonus"
                placeholder="+2"
                onChange={(event) => { this.props.handleChanges(event, "leftSection") }}
                value={this.props.playerData.proficiencybonus}
              ></input>
            </div>
            <div className="saves list-section box">
              <ul>
                <li>
                  <label htmlFor="Strengthsave">Strength</label>
                  <input
                    name="Strengthsave"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSaves") }}
                    value={this.props.playerData.Strengthsave}
                  ></input>
                  <input
                    name="Strengthsaveprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSaves") }}
                    value={this.props.playerData.Strengthsaveprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Dexteritysave">Dexterity</label>
                  <input
                    name="Dexteritysave"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSaves") }}
                    value={this.props.playerData.Dexteritysave}
                  ></input>
                  <input
                    name="Dexteritysaveprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSaves") }}
                    value={this.props.playerData.Dexteritysaveprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Constitution-save">Constitution</label>
                  <input
                    name="Constitutionsave"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSaves") }}
                    value={this.props.playerData.Constitutionsave}
                  ></input>
                  <input
                    name="Constitutionsaveprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSaves") }}
                    value={this.props.playerData.Constitutionsaveprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Wisdomsave">Wisdom</label>
                  <input
                    name="Wisdomsave"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSaves") }}
                    value={this.props.playerData.Wisdomsave}
                  ></input>
                  <input
                    name="Wisdomsaveprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSaves") }}
                    value={this.props.playerData.Wisdomsaveprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Intelligencesave">Intelligence</label>
                  <input
                    name="Intelligencesave"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSaves") }}
                    value={this.props.playerData.Intelligencesave}
                  ></input>
                  <input
                    name="Intelligencesaveprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSaves") }}
                    value={this.props.playerData.Intelligencesaveprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Charismasave">Charisma</label>
                  <input
                    name="Charismasave"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSaves") }}
                    value={this.props.playerData.Charismasave}
                  ></input>
                  <input
                    name="Charismasaveprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSaves") }}
                    value={this.props.playerData.Charismasaveprof}
                  ></input>
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
                  <input
                    name="Acrobatics"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Acrobatics}
                  ></input>
                  <input
                    name="Acrobaticsprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Acrobaticsprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="AnimalHandling">Animal Handling <span className="skill">(Wis)</span></label>
                  <input
                    name="AnimalHandling"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.AnimalHandling}
                  ></input>
                  <input
                    name="AnimalHandlingprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.AnimalHandlingprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Arcana">Arcana <span className="skill">(Int)</span></label>
                  <input
                    name="Arcana"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Arcana}
                  ></input>
                  <input
                    name="Arcanaprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Arcanaprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Athletics">Athletics <span className="skill">(Str)</span></label>
                  <input
                    name="Athletics"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Athletics}
                  ></input>
                  <input
                    name="Athleticsprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Athleticsprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Deception">Deception <span className="skill">(Cha)</span></label>
                  <input
                    name="Deception"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Deception}
                  ></input>
                  <input
                    name="Deceptionprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Deceptionprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="History">History <span className="skill">(Int)</span></label>
                  <input
                    name="History"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.History}
                  ></input>
                  <input
                    name="Historyprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Historyprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Insight">Insight <span className="skill">(Wis)</span></label>
                  <input
                    name="Insight"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Insight}
                  ></input>
                  <input
                    name="Insightprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Insightprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Intimidation">Intimidation <span className="skill">(Cha)</span></label>
                  <input
                    name="Intimidation"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Intimidation}
                  ></input>
                  <input
                    name="Intimidationprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Intimidationprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Investigation">Investigation <span className="skill">(Int)</span></label>
                  <input
                    name="Investigation"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Investigationprof}
                  ></input>
                  <input
                    name="Investigationprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Investigationprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Medicine">Medicine <span className="skill">(Wis)</span></label>
                  <input
                    name="Medicine"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Medicine}
                  ></input>
                  <input
                    name="Medicineprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Medicineprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Nature">Nature <span className="skill">(Int)</span></label>
                  <input
                    name="Nature"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Nature}
                  ></input>
                  <input
                    name="Natureprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Natureprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Perception">Perception <span className="skill">(Wis)</span></label>
                  <input
                    name="Perception"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Perception}
                  ></input>
                  <input
                    name="Perceptionprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Perceptionprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Performance">Performance <span className="skill">(Cha)</span></label>
                  <input
                    name="Performance"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Performance}
                  ></input>
                  <input
                    name="Performanceprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Performanceprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Persuasion">Persuasion <span className="skill">(Cha)</span></label>
                  <input
                    name="Persuasion"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Persuasion}
                  ></input>
                  <input
                    name="Persuasionprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Persuasionprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Religion">Religion <span className="skill">(Int)</span></label>
                  <input
                    name="Religion"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Religion}
                  ></input>
                  <input
                    name="Religionprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Religionprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="SleightofHand">Sleight of Hand <span className="skill">(Dex)</span></label>
                  <input
                    name="SleightofHand"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.SleightofHand}
                  ></input>
                  <input
                    name="SleightofHandprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.SleightofHandprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Stealth">Stealth <span className="skill">(Dex)</span></label>
                  <input
                    name="Stealth"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Stealth}
                  ></input>
                  <input
                    name="Stealthprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Stealthprof}
                  ></input>
                </li>
                <li>
                  <label htmlFor="Survival">Survival <span className="skill">(Wis)</span></label>
                  <input
                    name="Survival"
                    placeholder="+0"
                    type="text"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Survival}
                  ></input>
                  <input
                    name="Survivalprof"
                    type="checkbox"
                    onChange={(event) => { this.props.handleChanges(event, "leftSectionSkills") }}
                    value={this.props.playerData.Survivalprof}
                  ></input>
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
          <input
            name="passiveperception"
            placeholder="10"
            onChange={(event) => { this.props.handleChanges(event, "leftSection") }}
            value={this.props.playerData.passiveperception}
          ></input>
        </div>
        <div className="otherprofs box textblock">
          <label htmlFor="otherprofs">Other Proficiencies and Languages</label>
          <textarea
            name="otherprofs"
            onChange={(event) => { this.props.handleChanges(event, "leftSection") }}
            value={this.props.playerData.otherprofs}
          ></textarea>
        </div>
      </section>
    )
  }
}

class SectionMid extends Component {
  render() {
    return (
      <section>
        <section className="combat">
          <div className="armorclass">
            <div>
              <label htmlFor="ac">Armor Class</label>
              <input
                name="ac"
                placeholder="10"
                type="text"
                onChange={(event) => { this.props.handleChanges(event, "midSection") }}
                value={this.props.playerData.ac}
              ></input>
            </div>
          </div>
          <div className="initiative">
            <div>
              <label htmlFor="initiative">Initiative</label>
              <input
                name="initiative"
                placeholder="+0"
                type="text"
                onChange={(event) => { this.props.handleChanges(event, "midSection") }}
                value={this.props.playerData.initiative}
              ></input>
            </div>
          </div>
          <div className="speed">
            <div>
              <label htmlFor="speed">Speed</label>
              <input
                name="speed"
                placeholder="30"
                type="text"
                onChange={(event) => { this.props.handleChanges(event, "midSection") }}
                value={this.props.playerData.speed}
              ></input>
            </div>
          </div>
          <div className="hp">
            <div className="regular">
              <div className="max">
                <label htmlFor="maxhp">Hit Point Maximum</label>
                <input
                  name="maxhp"
                  placeholder="10"
                  type="text"
                  onChange={(event) => { this.props.handleChanges(event, "midSectionHp") }}
                  value={this.props.playerData.maxhp}
                ></input>
              </div>
              <div className="current">
                <label htmlFor="currenthp">Current Hit Points</label>
                <input
                  name="currenthp"
                  type="text"
                  onChange={(event) => { this.props.handleChanges(event, "midSectionHp") }}
                  value={this.props.playerData.currenthp}
                ></input>
              </div>
            </div>
            <div className="temporary">
              <label htmlFor="temphp">Temporary Hit Points</label>
              <input
                name="temphp"
                type="text"
                onChange={(event) => { this.props.handleChanges(event, "midSectionHp") }}
                value={this.props.playerData.temphp}
              ></input>
            </div>
          </div>
          <div className="hitdice">
            <div>
              <div className="total">
                <label htmlFor="totalhd">Total</label>
                <input
                  name="totalhd"
                  placeholder="2d10"
                  type="text"
                  onChange={(event) => { this.props.handleChanges(event, "midSectionHitDice") }}
                  value={this.props.playerData.totalhd}
                ></input>
              </div>
              <div className="remaining">
                <label htmlFor="remaininghd">Hit Dice</label>
                <input
                  name="remaininghd"
                  type="text"
                  onChange={(event) => { this.props.handleChanges(event, "midSectionHitDice") }}
                  value={this.props.playerData.remaininghd}
                ></input>
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
                    <input
                      name="deathsuccess1"
                      type="checkbox"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionDeath") }}
                      value={this.props.playerData.deathsuccess1}
                    ></input>
                    <input
                      name="deathsuccess2"
                      type="checkbox"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionDeath") }}
                      value={this.props.playerData.deathsuccess2}
                    ></input>
                    <input
                      name="deathsuccess3"
                      type="checkbox"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionDeath") }}
                      value={this.props.playerData.deathsuccess3}
                    ></input>
                  </div>
                </div>
                <div className="deathfails">
                  <label>Failures</label>
                  <div className="bubbles">
                    <input
                      name="deathfail1"
                      type="checkbox"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionDeath") }}
                      value={this.props.playerData.deathfail1}
                    ></input>
                    <input
                      name="deathfail2"
                      type="checkbox"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionDeath") }}
                      value={this.props.playerData.deathfail2}
                    ></input>
                    <input
                      name="deathfail3"
                      type="checkbox"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionDeath") }}
                      value={this.props.playerData.deathfail3}
                    ></input>
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
                    <input
                      name="atkname1"
                      type="text"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionAttack") }}
                      value={this.props.playerData.atkname1}
                    ></input>
                  </td>
                  <td>
                    <input
                      name="atkbonus1"
                      type="text"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionAttack") }}
                      value={this.props.playerData.atkbonus1}
                    ></input>
                  </td>
                  <td>
                    <input
                      name="atkdamage1"
                      type="text"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionAttack") }}
                      value={this.props.playerData.atkdamage1}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      name="atkname2"
                      type="text"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionAttack") }}
                      value={this.props.playerData.atkname2}
                    ></input>
                  </td>
                  <td>
                    <input
                      name="atkbonus2"
                      type="text"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionAttack") }}
                      value={this.props.playerData.atkbonus2}
                    ></input>
                  </td>
                  <td>
                    <input
                      name="atkdamage2"
                      type="text"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionAttack") }}
                      value={this.props.playerData.atkdamage2}
                    ></input>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      name="atkname3"
                      type="text"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionAttack") }}
                      value={this.props.playerData.atkname3}
                    ></input>
                  </td>
                  <td>
                    <input
                      name="atkbonus3"
                      type="text"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionAttack") }}
                      value={this.props.playerData.atkbonus3}
                    ></input>
                  </td>
                  <td>
                    <input
                      name="atkdamage3"
                      type="text"
                      onChange={(event) => { this.props.handleChanges(event, "midSectionAttack") }}
                      value={this.props.playerData.atkdamage3}
                    ></input>
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
                  <input
                    name="cp"
                    onChange={(event) => { this.props.handleChanges(event, "midSectionEquipament") }}
                    value={this.props.playerData.cp}
                  ></input>
                </li>
                <li>
                  <label htmlFor="sp">sp</label>
                  <input
                    name="sp"
                    onChange={(event) => { this.props.handleChanges(event, "midSectionEquipament") }}
                    value={this.props.playerData.sp}
                  ></input>
                </li>
                <li>
                  <label htmlFor="ep">ep</label>
                  <input
                    name="ep"
                    onChange={(event) => { this.props.handleChanges(event, "midSectionEquipament") }}
                    value={this.props.playerData.ep}
                  ></input>
                </li>
                <li>
                  <label htmlFor="gp">gp</label>
                  <input
                    name="gp"
                    onChange={(event) => { this.props.handleChanges(event, "midSectionEquipament") }}
                    value={this.props.playerData.gp}
                  ></input>
                </li>
                <li>
                  <label htmlFor="pp">pp</label>
                  <input
                    name="pp"
                    onChange={(event) => { this.props.handleChanges(event, "midSectionEquipament") }}
                    value={this.props.playerData.pp}
                  ></input>
                </li>
              </ul>
            </div>
            <textarea
              placeholder="Equipment list here"
              name="equipamenttext"
              onChange={(event) => { this.props.handleChanges(event, "midSectionEquipament") }}
              value={this.props.playerData.equipamenttext}
            ></textarea>
          </div>
        </section>
      </section>
    )
  }
}

class SectionRight extends Component {
  render() {
    return (
      <section>
        <section className="flavor">
          <div className="personality">
            <label htmlFor="personality">Personality</label>
            <textarea
              name="personality"
              onChange={(event) => { this.props.handleChanges(event, "rightSectionFlavor") }}
              value={this.props.playerData.personality}
            ></textarea>
          </div>
          <div className="ideals">
            <label htmlFor="ideals">Ideals</label>
            <textarea
              name="ideals"
              onChange={(event) => { this.props.handleChanges(event, "rightSectionFlavor") }}
              value={this.props.playerData.ideals}
            ></textarea>
          </div>
          <div className="bonds">
            <label htmlFor="bonds">Bonds</label>
            <textarea
              name="bonds"
              onChange={(event) => { this.props.handleChanges(event, "rightSectionFlavor") }}
              value={this.props.playerData.bonds}
            ></textarea>
          </div>
          <div className="flaws">
            <label htmlFor="flaws">Flaws</label>
            <textarea
              name="flaws"
              onChange={(event) => { this.props.handleChanges(event, "rightSectionFlavor") }}
              value={this.props.playerData.flaws}
            ></textarea>
          </div>
        </section>
        <section className="features">
          <div>
            <label htmlFor="features">Features & Traits</label>
            <textarea
              name="features"
              onChange={(event) => { this.props.handleChanges(event, "rightSection") }}
              value={this.props.playerData.features}
            ></textarea>
          </div>
        </section>
      </section>
    )
  }
}

export default App;
