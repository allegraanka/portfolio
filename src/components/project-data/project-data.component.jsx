import React, { Component } from 'react';
import Tabletop from 'tabletop';

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
            {data.map(obj => (
              <div key={obj.title} className='project-data-list'>
                <div className='inner-project-data-container'>
                  <div className='project-title project-data-item'>{obj.title}</div>
                  <div className='project-data-item'>{obj.description}</div>
                  <div className='project-data-item'>{obj.live_url}</div>
                  <div className='project-data-item'>{obj.github_url}</div>
                </div>
              </div>
            ))}
          </div>
        );
    }
}

export default ProjectData;