import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const projTitle = "drum machine";
const beats = [
               {btn: 'Q', name: 'Clap-1', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/92[kb]Moombah-Clap-1.wav.mp3'},
               {btn: 'W', name: 'Clap-2', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/76[kb]Moombah-Clap-2.wav.mp3'},
               {btn: 'E', name: 'Kick-1', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/119[kb]Moombah-Kick-1.wav.mp3'},
               {btn: 'A', name: 'Kick-2', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/66[kb]Moombah-Kick-2.wav.mp3'},
               {btn: 'S', name: 'Kick-3', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/78[kb]Moombah-Kick-5.wav.mp3'},
               {btn: 'D', name: 'Kick-4', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/69[kb]Moombah-Kick-4.wav.mp3'},
               {btn: 'Z', name: 'Kick-5', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/60[kb]Moombah-Kick-8.wav.mp3'},
               {btn: 'X', name: 'Vocal-1', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/93[kb]Moombah-Vocal-1.wav.mp3'},
               {btn: 'C', name: 'Vocal-2', url: 'https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Moombah%20Kit/63[kb]Moombah-Vocal-2.wav.mp3'}
              ];


class DrumMachine extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
    this.onClick = this.onClick.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
    this.playSound = this.playSound.bind(this);
  }
componentDidMount() {
    document.addEventListener('keypress', this.onKeyPress);
  }
componentWillUnmount() {
    document.removeEventListener('keypress', this.onKeyPress);
  }
 onKeyPress(event){
   var sound = beats.filter(x=> x.btn === event.key.toUpperCase());
   if(sound[0]){   
   this.setState ({
      name: sound[0].name
    });
   document.getElementById(event.key.toUpperCase()).click();
   }
 } 
  
 onClick(event){
   var sound = beats.filter(x=> x.btn === event.target.id);
    this.setState ({
      name: sound[0].name
    });
   this.playSound(sound[0].url);
 }
  playSound(url){
    var clip = new Audio(url);
    clip.play();
  }
  
 render() {
  return(
    <div class="brushed" id="drum-machine">
        <div class= "trans-bg panel" id="controls">
        <span class="oi text-LED" data-glyph="audio"></span> <h1 class="text-LED" id="title">{projTitle}</h1>
        <div id="display">{this.state.name}</div>

      </div>
      <div class="trans-bg panel" id="pads">
        <div class="row1 lines">
          <button class="drum-pad" id="Q" onClick = {this.onClick}>Q</button>
          <button class="drum-pad" id="W" onClick = {this.onClick}>W</button>   
          <button class="drum-pad" id="E" onClick = {this.onClick}>E</button>  
        </div>
        <div class="row2 lines">
          <button class="drum-pad" id="A" onClick = {this.onClick}>A</button>
          <button class="drum-pad" id="S" onClick = {this.onClick}>S</button>   
          <button class="drum-pad" id="D" onClick = {this.onClick}>D</button>   
        </div>
        <div class="row3 lines">
          <button class="drum-pad" id="Z" onClick = {this.onClick}>Z</button>
          <button class="drum-pad" id="X" onClick = {this.onClick}>X</button>   
          <button class="drum-pad" id="C" onClick = {this.onClick}>C</button> 
        </div>
      </div>
    </div>
    
    
  ); 
 } 
  
  
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'));

