import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import createStudent from '../actions/students/createStudent'
import editStudent from '../actions/students/editStudent'

class NewStudentPage extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,

  }
  constructor(props) {
    super()


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

    saveOrEdit(){


    }

    saveStudent() {
      const { _id } =this.props
      console.log("content", _id)
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
      if ( _id === undefined) {
        this.props.save(student)
      } else {
        this.props.edit( _id, student)
      }



   }

   renderTitle(){
     const { _id } =this.props
     if ( _id === undefined) {
       return <h1> add a student </h1>
     } else {
       return <h1> edit this student </h1>
     }
     return <h1> edit a student </h1>
   }



  render() {
    const { _id } =this.props
    return(
      <div className="student page">

        {this.renderTitle()}

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


const mapDispatchToProps = { save: createStudent, edit: editStudent }
export default connect(null, mapDispatchToProps)(NewStudentPage)
