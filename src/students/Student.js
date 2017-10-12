
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
// import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import './Student.css'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 800,
    overflowY: 'auto',
  },

};








export class Student extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,

  }

  renderColor(){
    const { currentColor } = this.props

    if(currentColor === "red"){
      return {backgroundColor: 'red'}
    }

    if(currentColor === "green"){
      return {backgroundColor: 'green'}
    }

    if(currentColor === "yellow"){
      return {backgroundColor: 'yellow'}
    }



  }

  render() {
    const { _id, name, photo, currentColor } = this.props

    return(

        <div className="student-container">
          <div style={styles.root}>


          <GridTile
            key={photo}
            title={<Link to={`/students/${_id}`}>{ name }</Link>}
            className="tile"

          >
            <img src={photo} width="200" alt="this"/>
          </GridTile>



          </div>
          <div className="colorstudent" style={this.renderColor()}>

          </div>
        </div>


    )
  }
}

const mapStateToProps = ({ students }) => ({ students })

export default connect(mapStateToProps, { Student })(Student)


// <article className="RecipeItem">
//   <header>
//
//     <img src={photo} width="200" alt="this"/>
//     <h1>
//       <Link to={`/students/${_id}`}>{ name }</Link>
//     </h1>
//     <h2>{currentColor} </h2>
//
//
//   </header>
