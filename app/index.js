import React, {Component} from 'react';
import ReactDOM from 'react-dom';
export default class App extends Component {
    render() {
        const { isMobile } = this.props;

        return (
            <div>
                <h1>hello world {isMobile ? 'mobile' : 'desktop'}</h1>
                <form>
                    <input type="text"/>
                    <input type="password"/>
                    <input type="submit"/>
                </form>
            </div>
        );
    }
}