import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import createStudent from '../actions/students/createStudent'

class BatchPage extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,

  }
  constructor(props) {
    super()

    const { number } = props

    this.state = {
      name: 0,
      batch: 0,
      photo:''

    }
  }



  componentWillMount() {

    }

    updateName(event) {
      this.setState({
        name: event.target.value
      })
    }

    updatebatch(event) {
      this.setState({
        batch: event.target.value
      })
    }

    updatePhoto(event){
      this.setState({
        photo: event.target.value
      })
    }

    saveStudent() {


    const {
      name,
      batch,
      photo
    } = this.state

    const student = {
      name,
      batch,
      photo
    }

     this.props.save(student)
    console.log(student)
  //   this.setState({
  //     title: '',
  //     summary: '',
  //     photo: '',
  //     vegetarian: null,
  //     vegan: null,
  //     pescatarian: null
  //   })
 }

  render() {

    return(
      <div className="recipe page">
        <h1>Add a student</h1>
        <div className="form">
          <input
          type="text"
          ref="name"
          className="name"
          placeholder="Student Name"
          onChange={this.updateName.bind(this)}/>

          <input
          type="number"
          ref="bach"
          className="batch"
          placeholder="batch"
          onChange={this.updatebatch.bind(this)}/>

          <input
          type="text"
          ref="photo"
          className="photo"
          placeholder="Photo URL"

          onChange={this.updatePhoto.bind(this)} />



          <div className="actions">
          <button className="primary" onClick={this.saveStudent.bind(this)}>Save</button>
        </div>

        </div>
      </div>
    )
  }
}


const mapDispatchToProps = { save: createStudent }
export default connect(null, mapDispatchToProps)(BatchPage)
