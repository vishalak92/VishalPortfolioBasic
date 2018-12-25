import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

class Projects extends Component{
constructor(props){
  super(props);
  this.state = {activeTab: 0};
}

toggleCategories(){
  if(this.state.activeTab === 0){
    return (
      <div  className = "projects-grid">
      <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
        <CardTitle style={{color:"black", height:"176px", background:"url(../resources/ProfilePic.png) center center no-repeat"}}>
          Netflix User Experience Research
        </CardTitle>
        <CardText>
          This is a dummy project description
        </CardText>
        <CardActions>
          <Button colored> Read More </Button>
        </CardActions>
      </Card>

      <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
        <CardTitle style={{color:"black", height:"176px", background:"url(../resources/ProfilePic.png) center center no-repeat"}}>
          Netflix User Experience Research
        </CardTitle>
        <CardText>
          This is a dummy project description
        </CardText>
        <CardActions>
          <Button colored> Read More </Button>
        </CardActions>
      </Card>

      <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
        <CardTitle style={{color:"black", height:"176px", background:"url(../resources/ProfilePic.png) center center no-repeat"}}>
          Netflix User Experience Research
        </CardTitle>
        <CardText>
          This is a dummy project description
        </CardText>
        <CardActions>
          <Button colored> Read More </Button>
        </CardActions>
      </Card>

      </div>
    )
  }
  else if(this.state.activeTab === 1){
    return (
      <div  className = "projects-grid">
      <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
        <CardTitle style={{color:"black", height:"176px", background:"url(../resources/ProfilePic.png) center center no-repeat"}}>
          Netflix User Experience Research
        </CardTitle>
        <CardText>
          This is a dummy project description
        </CardText>
        <CardActions>
          <Button colored> Read More </Button>
        </CardActions>
      </Card>

      <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
        <CardTitle style={{color:"black", height:"176px", background:"url(../resources/ProfilePic.png) center center no-repeat"}}>
          Netflix User Experience Research
        </CardTitle>
        <CardText>
          This is a dummy project description
        </CardText>
        <CardActions>
          <Button colored> Read More </Button>
        </CardActions>
      </Card>

      <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
        <CardTitle style={{color:"black", height:"176px", background:"url(../resources/ProfilePic.png) center center no-repeat"}}>
          Netflix User Experience Research
        </CardTitle>
        <CardText>
          This is a dummy project description
        </CardText>
        <CardActions>
          <Button colored> Read More </Button>
        </CardActions>
      </Card>

      </div>




    )
  }
  else if(this.state.activeTab === 2){
    return (
      <div  className = "projects-grid">
      <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
        <CardTitle style={{color:"black", height:"176px", background:"url(../resources/ProfilePic.png) center center no-repeat"}}>
          Netflix User Experience Research
        </CardTitle>
        <CardText>
          This is a dummy project description
        </CardText>
        <CardActions>
          <Button colored> Read More </Button>
        </CardActions>
      </Card>

      <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
        <CardTitle style={{color:"black", height:"176px", background:"url(../resources/ProfilePic.png) center center no-repeat"}}>
          Netflix User Experience Research
        </CardTitle>
        <CardText>
          This is a dummy project description
        </CardText>
        <CardActions>
          <Button colored> Read More </Button>
        </CardActions>
      </Card>

      <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
        <CardTitle style={{color:"black", height:"176px", background:"url(../resources/ProfilePic.png) center center no-repeat"}}>
          Netflix User Experience Research
        </CardTitle>
        <CardText>
          This is a dummy project description
        </CardText>
        <CardActions>
          <Button colored> Read More </Button>
        </CardActions>
      </Card>

      </div>
    )
  }
  else if(this.state.activeTab === 3){
    return (
      <div  className = "projects-grid">
      <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
        <CardTitle style={{color:"black", height:"176px", background:"url(../resources/ProfilePic.png) center center no-repeat"}}>
          Netflix User Experience Research
        </CardTitle>
        <CardText>
          This is a dummy project description
        </CardText>
        <CardActions>
          <Button colored> Read More </Button>
        </CardActions>
      </Card>

      <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
        <CardTitle style={{color:"black", height:"176px", background:"url(../resources/ProfilePic.png) center center no-repeat"}}>
          Netflix User Experience Research
        </CardTitle>
        <CardText>
          This is a dummy project description
        </CardText>
        <CardActions>
          <Button colored> Read More </Button>
        </CardActions>
      </Card>

      <Card shadow={5} style={{minWidth:"450", margin:"auto"}}>
        <CardTitle style={{color:"black", height:"176px", background:"url(../resources/ProfilePic.png) center center no-repeat"}}>
          Netflix User Experience Research
        </CardTitle>
        <CardText>
          This is a dummy project description
        </CardText>
        <CardActions>
          <Button colored> Read More </Button>
        </CardActions>
      </Card>

      </div>
    )
  }
}

  render(){
    return(
      <div className="category-tabs">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab: tabId})} ripple>
        <Tab>All</Tab>
        <Tab>Recent Projects</Tab>
        <Tab>Industry Projects</Tab>
        <Tab>Academic Projects</Tab>
        </Tabs>



        <Grid>
          <Cell col={12}>
            <div className = "content">{this.toggleCategories()}</div>
          </Cell>

        </Grid>



      </div>
    )
  }
}

export default Projects;
