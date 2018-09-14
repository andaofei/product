import React, {Component} from 'react';
import './styl/index.css';
import DataList from './data/index';
// import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _active: 0,
            currentIndex: -1,
            activeHover: ''
        }
    }

    handleClick(v, index) {
    }

    handleMouseOver(v, index) {
        this.setState({
            currentIndex: index
        })
    }

    handleMouseOut(v, index) {
        this.setState({
            currentIndex: -1
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <header className="App-header">
                        <div className="App-title">
                  <span className="img-box">
                  </span>
                        </div>
                    </header>
                </ReactCSSTransitionGroup>


                <div className="App-intro">

                    <div className="menu-title">
                        <span className="menu-img"/>
                        <span className="menu-text">清影产品展示</span>
                    </div>

                    {/*列表*/}
                    <div className="list-box">
                        <ul className="item-inner">
                            {DataList.map((v, index) => {
                                return (

                                    <li className="item" key={v.id}
                                        onMouseOver={() => this.handleMouseOver(v, index)}
                                        onMouseOut={() => this.handleMouseOut(v, index)}
                                        onClick={() => this.handleClick(v, index)}>
                                        <ReactCSSTransitionGroup
                                            transitionName="example"
                                            transitionAppear={true}
                                            transitionAppearTimeout={500}
                                            transitionEnter={false}
                                            transitionLeave={false}>
                                            <a href={v.url}
                                               className={index === this.state.currentIndex ? "item-hover" : null}>
                                                <div
                                                    className={["item-img-box", index === this.state.currentIndex ? "item-img-hover" : null].join(' ')}>

                                                    <div
                                                        className={["item-img", index === this.state.currentIndex ? "item-img-hover" : null].join(' ')}
                                                        style={{backgroundImage: 'url(' + v.bg + ')'}}>
                                                    </div>

                                                    <div className="item-img-child">
                                                        <div
                                                            className={["item-img-inner", index === this.state.currentIndex ? "item-img-hover" : null].join(' ')}>
                                                            <p className="item-inner-box">
                                                                    <img src={v.hover} alt=""/>
                                                            </p>
                                                        </div>

                                                        <div className="hover-text"
                                                             style={{display: (index === this.state.currentIndex) ? "block" : "none"}}>
                                                            <p className="hover-text-inner">
                                                                <span>{v.text}</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    className={["item-title", index === this.state.currentIndex ? "item-title-hover" : null].join(' ')}>
                                                    <p className="item-title-box">
                                                        <span>{index === this.state.currentIndex ? v.slogan : v.title}</span>
                                                        <span className="item-arrow-box">
                                                     {index === this.state.currentIndex ?
                                                         <span className="item-arrow"/> : null}
                                                     </span>
                                                    </p>
                                                </div>
                                            </a>
                                        </ReactCSSTransitionGroup>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

