import React, { Component } from 'react';
import PageEdit from './page/pagetEdit';
import PostEdit from './post/postEdit';
import Home from './home/pagetEdit';
import CategoryEdit from './category/CategoryEdit';
import {  Menu, Segment } from 'semantic-ui-react'
import * as lang from './lib/constants/language'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
  } from "react-router-dom";
class Index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            activeItem:"posts"
        }
    }

    //
    clickMenu=(name)=>{
        this.setState({
            activeItem:name
        })
    }
    render() {
        const { activeItem } =  this.state;
        return (
            <Router>
                
            <Menu attached='top' tabular>
            
               <Link 
                    to="/posts"
                    className={`link item ${activeItem=="posts"?"active":""}`}
                    onClick={()=>this.clickMenu("posts")}
                >{lang.POSTS}</Link>
                <Link 
                    to="/categorys"
                    className={`link item ${activeItem=="categorys"?"active":""}`}
                    onClick={()=>this.clickMenu("categorys")}
                >{lang.CATEGORY}</Link>
                <Link 
                    to="/pages"
                    className={`link item ${activeItem=="pages"?"active":""}`}
                    onClick={()=>this.clickMenu("pages")}
                >Pages</Link>
                <Link 
                    to="/home"
                    className={`link item ${activeItem=="home"?"active":""}`}
                    onClick={()=>this.clickMenu("home")}
                >Home</Link>
                
            </Menu>
                
                <Routes>
                     <Route exact path="/" element={<PostEdit/>}/>
                     <Route exact path="/posts" element={<PostEdit/>}/>
                     <Route exact path="/pages" element={<PageEdit/>}/>
                     <Route exact path="/home" element={<Home/>}/>
                     <Route exact path="/categorys" element={<CategoryEdit/>}/>
                     <Route exact path="/*" element={<PostEdit/>}/>
                </Routes>
          </Router>
        )
    }
}
export default Index;