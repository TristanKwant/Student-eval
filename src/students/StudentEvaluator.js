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
      red
    }
  }

  componentWillUpdate(){
    const { content, currentBatch } = this.props
    console.log(content.batch)
    if (currentBatch.length === 0) {

      this.props.findBatch(content.batch)
    }

  }

  updateIntro(text, medium) {
    this.setState({
      summary: text
    })
  }


  setType(event) {
    // console.log(event.target.value ===)
    this.setState({
      green: event.target.value === 'green',
      yellow: event.target.value === 'yellow',
      red: event.target.value === 'red'
    })
  }

  saveEvaluation() {
    const { content, currentBatch } = this.props
    console.log("batchid:", currentBatch[0]._id)
    const {
      green,
      yellow,
      red
    } = this.state

    const evaluation = {
      green,
      // summary: toMarkdown(summary),
      yellow,
      red,
    }

     this.props.save(content._id, evaluation)

    console.log(evaluation)

    this.setState({

      green: null,
      yellow: null,
      red: null
    })
    // console.log(batch._id)
    history.push(`/batch/${currentBatch[0]._id}`)
  }

  render() {
    const { content } = this.props


    return (
      <div className="editor">


        <Editor
          ref="summary"
          options={{
            placeholder: {text: 'Write an comment'}
          }}
          onChange={this.updateIntro.bind(this)}
          text={this.state.summary} />



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
