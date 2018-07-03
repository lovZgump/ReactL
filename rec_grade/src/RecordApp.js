import React, {Component} from 'react';
import {Route} from "react-router-dom";
import {Switch} from 'react-router';
import {view as Records} from './record/';
import {view as Filter} from './filter/';
import NotFound from './404';

class RecordApp extends Component{
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Records}/>
                    <Route exact path="/completed" component={Records}/>
                    <Route exact path="/uncompleted" component={Records}/>
                    <Route exact path="*" component={NotFound}/>
                </Switch>
                <div>
                    <Filter/>
                </div>
            </div>
        );
    }
}

export default RecordApp;