import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import Form from './form'
// import {Redirect} from 'react-router-dom'
import { fetchImage } from '../../actions/image'


class FormPage extends PureComponent {

	render() {

        const {image} = this.props
        const {input} = this.props

		return (
			<div>
                <Form />
			</div>
		)
	}
}

function mapStateToProps(state, props) {
    return {
        image: state.image,
        input: state.input
    }
}

export default connect(mapStateToProps,{fetchImage})(FormPage)
