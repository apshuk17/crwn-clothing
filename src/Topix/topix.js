import React from 'react';
import { Route } from 'react-router-dom';

const Topic = (props) => {
    console.log('Topic', props);
    return (
    <div>
        <h1>This is topics home page</h1>
    </div>
)};

const TopicsList = (props) => {
    console.log('Topic List', props);
    return (
    <div>
        <h1>This is topics list page</h1>
        <button onClick={() => {props.history.push('/topic/23/aswer/drte')}}>Topic Detail</button>
    </div>
)};

const TopicDetail = (props) => {
    console.log('Topic Detail', props);
    return (
    <div>
        <h1>This is topics detail page</h1>
    </div>
)};

const App = () => {
    return (
        <div>
            <Route path={'/'} component={Topic}></Route>
            <Route path={'/topicslist'} component={TopicsList}></Route>
            <Route exact path={'/topic/:topiciId'} component={TopicDetail}></Route>
        </div>
    );
};

export default App;