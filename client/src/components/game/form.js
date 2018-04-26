import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { SUBMIT } from '../../actions/image'

class Form extends PureComponent {
    state = {}




 	handleChange = (event) => {

        this.setState({value: event.target.value})
            event.preventDefault()

    }

	handleSubmit = (e) => {

        e.preventDefault()
		this.props.dispatch({type:SUBMIT, payload: this.state.value})

	}

	render() {

		return (

            <div>
			<form className = "Form"
            onSubmit={this.handleSubmit}>
				<div>
                    <h2>Ce este asta?</h2>
					<input name="word" value={this.state.word} type ="text" id="word" onChange={this.handleChange}/>
                    <button id = "goButton" type="submit">Go!</button>
                </div>
			</form>


            </div>
		)
	}
}

const mapStateToProps = function(state) {
    return {
        input: state.input

    }
  }

  export default connect (mapStateToProps)(Form)
