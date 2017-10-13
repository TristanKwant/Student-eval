import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import updateStudentEval from '../actions/students/eval'
import { history } from '../store'
import findBatch from '../actions/batch/findBatch'

import RaisedButton from 'material-ui/RaisedButton'

const TYPES = [
  'green',
  'yellow',
  'red'
]

class StudentEvaluator extends PureComponent {
  constructor(props) {
    super()

    const { green, yellow, red } = props

    this.state = {
      green,
      yellow,
      red,
      date: this.getDate()
    }
  }

  componentWillUpdate(){
    const { content, currentBatch } = this.props

    if (currentBatch.length === 0) {

      this.props.findBatch(content.batch)
    }

  }

  updateIntro(text, medium) {
    console.log(text)
    this.setState({
      comment: text
    })
  }

  validateDate(){
    const { content,} = this.props

    const days =content.days.filter((day) =>{
      if (day.day === this.state.date) {
        return true
      }
        return false
      })

      if (days.length !== 0) {
        return false
      }else {
        return true
      }

  }

  validateComment() {
    const { comment } = this.state
    return comment && toMarkdown(comment).length > 2
  }

  validate() {
    const isDateValid = this.validateDate()
    const isCommentValid = this.validateComment()
    return isDateValid && isCommentValid
  }

  updateDate(event){

    this.setState({
      date: event.target.value
    })

  }



  setType(event) {

    this.setState({
      green: event.target.value === 'green',
      yellow: event.target.value === 'yellow',
      red: event.target.value === 'red'
    })
  }

  saveEvaluation() {
    if (!this.validate()) return
    const { content, currentBatch } = this.props

    const {
      green,
      comment,
      yellow,
      red,
      date
    } = this.state

    const evaluation = {
        green,
        comment: toMarkdown(comment),
        yellow,
        red,
        date
      }

     this.props.save(content._id, evaluation)


      this.setState({

        green: null,
        yellow: null,
        red: null
      })
      history.push(`/batch/${currentBatch[0]._id}`)
    }

  getDate(){
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

     return yyyy + '-' + mm + '-' + dd;

  }

  render() {
    return (
      <div className="editor">


        <Editor
          ref="summary"
          options={{
            placeholder: {text: 'Write an comment'}
          }}
          onChange={this.updateIntro.bind(this)}
          text={this.state.comment} />

          <label>
          evaluation date
            <input
            type="date"
            ref="photo"
            className="photo"
            value={this.state.date}
            onChange={this.updateDate.bind(this)}
            />
          </label>



        {TYPES.map((type) => {
          return <label key={type} htmlFor={type}>
            <input id={type} type="radio" name="type" value={type} onChange={this.setType.bind(this)} />
            {type}
          </label>
        })}


        <div className="actions">
          <RaisedButton label="save" onClick={this.saveEvaluation.bind(this)}/>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: updateStudentEval, findBatch }

const mapStateToProps = ({ batch, currentBatch }) => ({ batch, currentBatch })

export default connect(mapStateToProps, mapDispatchToProps)(StudentEvaluator)
