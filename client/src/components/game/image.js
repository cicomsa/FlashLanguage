import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {fetchImage} from '../../actions/image'

class Image extends PureComponent {
    
  componentWillMount(){
    this.props.fetchImage(1)
    
}

  render() {
      const {image} = this.props
    return (
      <div>
      <img src={image} alt="dog"></img>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    image:state.image
  }
}

export default connect(mapStateToProps, {fetchImage})(Image)
