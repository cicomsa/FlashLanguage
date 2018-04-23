import React, {PureComponent} from 'react'
import Image from './image'


export default class WordToGuess extends PureComponent {
    render() {
        return (
            <div>
                <Image/>
                <img src="./appleImage.jpg" alt="word" width="500px"></img>
            </div>
        )
    }
      
}

