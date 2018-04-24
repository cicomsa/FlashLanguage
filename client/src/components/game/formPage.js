import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Form from './form'
import {Redirect} from 'react-router-dom'
import { fetchWord } from '../../actions/word'
import {SUBMIT} from '../../actions/image'

class FormPage extends PureComponent {
    
    componentDidMount(props){
        this.props.fetchWord(1)
    }

	render() {

        const {word} = this.props
        const {input} = this.props
        function raspuns() {
        if (input === word){
            <p>Raspuns corect!</p>

        }}

		return (
			<div>
                <Form />
               <p>{console.log(input)}</p>
               <p>{word}</p>
               { input !== null ? (input === word? <p>Raspuns corect</p>: <p>Raspuns gresit</p>) : <p></p> }
			</div>
		)
	}
}

function mapStateToProps(state) {
    return {
        word:state.word,
        input: state.input
    }
}

export default connect(mapStateToProps,{fetchWord})(FormPage)