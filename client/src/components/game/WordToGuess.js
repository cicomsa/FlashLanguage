import React, {PureComponent} from 'react'
import Image from './image'
import appleImage from './appleImage.jpg'
import {Link} from 'react-router-dom'
import {hashHistory} from 'react-router'
import FormPage from './formPage'
import './WordToGuess.css'


export default class WordToGuess extends PureComponent {

    handleBack() {
        window.history.go(-1);
        
      }

    render() {
        return (
            <div id="guessWord">    
               
                <Image/>
                <br/>
                <FormPage/>
                <button onClick={this.handleBack}>Next image</button>
            </div>
        )
    }
      
}

