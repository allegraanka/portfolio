import React, { Component } from 'react';
import Tabletop from 'tabletop';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

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
          <div className='project-page-content-container'>
            <div className='project-description-container'>This is something about these cool projects I've made.</div>
            <div className="project-data-container">
              <GridList cellHeight={180} cols={2} spacing={6} className="gridList">
              <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                <ListSubheader component="div">Recent Projects</ListSubheader>
              </GridListTile>
              {data.map(obj => (
                <GridListTile key={obj.title} className='tile'>
                <img src={obj.image_url} alt={obj.title} className="tile-image"/>
                <GridListTileBar
                  title={obj.title}
                  subtitle={<span>{obj.description}</span>}
                />
                </GridListTile>
              ))}
              </GridList>
            </div>
          </div>
        );
    }
}

export default ProjectData;