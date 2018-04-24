import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchImage} from '../../actions/image'
import FormPage from './formPage'

class WordToGuess extends PureComponent {

    componentWillMount(props){
      this.props.fetchImage(this.props.match.params.id)
      // this.props.fetchWord(this.props.match.params.id)

  }

  handleBack() {
    window.history.go(-1);
    
  }

    render() {
        const {image} = this.props
      return (
        <div>
        <img src={image.imageUrl} alt="dog" width="500px"></img>
        <p>{image.word}</p>
        <FormPage />
        <button onClick={this.handleBack}>Next image</button>
        </div>
      )
    }
  }

  const mapStateToProps = function (state) {
    return {
      image:state.image
    }
  }

  export default connect(mapStateToProps, {fetchImage})(WordToGuess)

