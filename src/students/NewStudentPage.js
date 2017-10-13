import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import createStudent from '../actions/students/createStudent'
import editStudent from '../actions/students/editStudent'
import RaisedButton from 'material-ui/RaisedButton'
import { history } from '../store'

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
        // history.push(`/batch/`)
      } else {
        this.props.edit( _id, student)
      }



   }

   renderTitle(){
     const { _id } =this.props
     if ( _id === undefined) {
       return <h3> add a student </h3>
     } else {
       return <h3> edit this student </h3>
     }
     return <h3> edit a student </h3>
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
          <RaisedButton label="Save student" onClick={this.saveStudent.bind(this)}/>
        </div>

        </div>
      </div>
    )
  }
}


const mapDispatchToProps = { save: createStudent, edit: editStudent }
export default connect(null, mapDispatchToProps)(NewStudentPage)
