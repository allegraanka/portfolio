import React, { Component } from 'react';
import Tabletop from 'tabletop';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './project-data.styles.scss';

class ProjectData extends Component {
    constructor() {
        super()
        this.state = {
          data: []
        }
      }
    
    componentDidMount() {
        Tabletop.init({
            key: '1LR1c5xiGvv3ISulEH5bBL30RmAXdj0q81Ixiy_aM79Q',
            callback: googleData => {
            this.setState({
                data: googleData
            })
            },
            simpleSheet: true
        })
    }

    render() {
        const { data } = this.state;

        return (
          <div className="project-data-container">
            <h1 className="project-data-title">Recent Projects</h1>
            <div id="project-list">
                {
                  data.map(obj => {
                    return (
                      <Card key={obj.title} className="root">
                        <CardActionArea>
                          <CardMedia title={`${obj.title}`} className="media"/>
                            <p>image here</p>
                          <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {obj.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            {obj.description}
                          </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions>
                        <Button size="small" color="primary">
                          <a href={obj.live_url}>Live</a>
                        </Button>
                        <Button size="small" color="primary">
                          <a href={obj.github_url}>GitHub</a>
                        </Button>
                      </CardActions>
                      </Card>
                    )
                  })
                }
            </div>
          </div>
        );
    }
}

export default ProjectData;