import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import labels from '../../Constants/labels';
const useStyles = {
    cardcolor: { border: "1px solid #E4E4E4", "box-shadow": "none", cursor: "pointer", height: "225px", "border-radius": "2px", width: "346px", "margin-left": "20px", "margin-top": "20px","padding-top":"50px" },
    togglecardcolor: { "box-shadow": "0px 4px 20px rgba(216, 175, 40, 0.28)", "border": "1px solid #ebd79c", cursor: "pointer", height: "225px", width: "346px", "margin-left": "20px","margin-top": "20px","padding-top":"50px" },
  btncolor:{border: "1px solid #E4E4E4","box-shadow": "none",cursor:"pointer", "border-radius": "2px", 'height': "240px", 'width': '350px'}, 
  togglebtncolor:{"box-shadow": "0px 4px 20px rgba(216, 175, 40, 0.28)","border": "2px solid #ebd79c",cursor:"pointer", 'height': '240px', 'width': '350px'}, 
  cardtext:{color:"#A3B0B8","font-size": "14px", 'font-family': 'Open Sans', 'font-style': 'normal', 'font-weight': 400, 'font-size': '14px', 'line-height': '19px', 'text-align': 'center', color: '#A3B0B8'},
  cardHeading:{'font-family': 'Open Sans', 'font-style': 'normal', 'font-weight': '600', 'font-size': '14px', 'line-height': '19px', 'text-align': 'center', color: '#3D4A52',"margin-top":"-500px"}
};
export default function AddProjectCard(props) {
    const [isshowbutton, setisshowbutton] = React.useState(false);
    const [screenlabels, setscreenlabels] = React.useState(labels['en'])

  return (

    <Card style={!isshowbutton?useStyles.cardcolor:useStyles.togglecardcolor} onClick={()=>props.addevent()} onMouseEnter={()=>setisshowbutton(true)} onMouseLeave={()=>setisshowbutton(false)}>
      <CardContent>
        <Row style={{'margin-top': '-40px'}}>
          <Col xs={12} sm={12} md={12} lg={12}>
           <span style={useStyles.cardHeading}>{screenlabels.project.add_project}</span>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} style={{'margin-top': '5px'}}>
          <img
              src={require('../../Assets/Img/add.svg')}
              style={{width: '71px', height: '71px'}}
              alt="new"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} style={{'margin-top': '5px', 'padding': '0','padding-left': '35px', 'padding-right': '35px'}}>
          <span style={useStyles.cardtext}>{screenlabels.project.add_project_text2}</span>
          </Col>
          {/*
          <Col xs={12} sm={12} md={12} lg={12}>
          <span style={useStyles.cardtext}>{props.thirdText}</span>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12}>
          <span style={useStyles.cardtext}>{props.fourText}</span>
          </Col>
          */}
        </Row>
      </CardContent>
    </Card>
  );
}