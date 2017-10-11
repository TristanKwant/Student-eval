import React, { PureComponent } from 'react'
import Editor from 'react-medium-editor'
import toMarkdown from 'to-markdown'
import { connect } from 'react-redux'
import 'medium-editor/dist/css/medium-editor.css'
import 'medium-editor/dist/css/themes/default.css'
import updateStudentEval from '../actions/students/eval'


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

componentWillMount(){



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
    const { content } = this.props
    console.log("student",content)
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

     this.props.save(content, evaluation)

    console.log(evaluation)

    this.setState({

      green: null,
      yellow: null,
      red: null
    })
  }

  render() {
    const { content } = this.props
    console.log("props",this.props)
    console.log("id", content)
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
          <button className="primary" onClick={this.saveEvaluation.bind(this)}>Save</button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = { save: updateStudentEval }

const mapStateToProps = ({ _id }) => ({ _id })

export default connect(mapStateToProps, mapDispatchToProps)(StudentEvaluator)
