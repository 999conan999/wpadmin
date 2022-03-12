import React, { Component } from 'react';
import PageEdit from './page/pagetEdit';
import PostEdit from './post/postEdit';
import Home from './home/pagetEdit';
import CategoryEdit from './category/CategoryEdit';
import SetupPage from './setup_Page/SetupPage';
import {  Menu, Segment } from 'semantic-ui-react'
import * as lang from './lib/constants/language';
import 'react-toastify/dist/ReactToastify.css';
import {alert_toast} from './lib/constants/language';
import { ToastContainer,toast } from 'react-toastify';
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
            activeItem:"posts",
            permission_type:"administrator"
        }
    }
    componentDidMount(){
        let a=[1,2,3,4,5,6,7];
        let random = Math.floor(Math.random() * a.length);
        if(random==1){
            toast(({ closeToast }) => alert_toast(),{
                position: "top-right",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                style:{
                    backgroundColor:"#f5e8c1",
                    color:"black"
                }
            });
        }
    }
    //
    clickMenu=(name)=>{
        this.setState({
            activeItem:name
        })
    }
    //
    set_permission=(list_permisstion,permission_type)=>{
        // let permission_org=["administrator","editor",'author','contributor','subscriber'];
            if(list_permisstion.indexOf(permission_type)!=-1){
               return true;
            }else{
                return false;
            }
    }
    render() {
        const { activeItem,permission_type } =  this.state;
        let permission_active_post=this.set_permission(["administrator","editor",'author','contributor'],permission_type);
        let permission_active_category=this.set_permission(["administrator","editor"],permission_type);
        let permission_active_page=this.set_permission(["administrator","editor"],permission_type);
        let permission_active_home=this.set_permission(["administrator","editor"],permission_type);
        let permission_active_setup=this.set_permission(["administrator","editor"],permission_type);
        // let permission_active_post=this.set_permission(["administrator","editor",'author','contributor','subscriber']);
        return (
            <Router>
                
            <Menu attached='top' tabular>
            
               {permission_active_post&&<Link 
                    to="/posts"
                    className={`link item ${activeItem=="posts"?"active":""}`}
                    onClick={()=>this.clickMenu("posts")}
                ><i className="fa-solid fa-file-word menu-icon-d"></i>{lang.POSTS}</Link>}
                {permission_active_category&&<Link 
                    to="/categorys"
                    className={`link item ${activeItem=="categorys"?"active":""}`}
                    onClick={()=>this.clickMenu("categorys")}
                ><i className="fa-solid fa-folder-tree menu-icon-d"></i>{lang.CATEGORY}</Link>}
                {permission_active_page&&<Link 
                    to="/pages"
                    className={`link item ${activeItem=="pages"?"active":""}`}
                    onClick={()=>this.clickMenu("pages")}
                ><i class="fa-solid fa-hand menu-icon-d"></i>Pages</Link>}
                {permission_active_home&&<Link 
                    to="/home"
                    className={`link item ${activeItem=="home"?"active":""}`}
                    onClick={()=>this.clickMenu("home")}
                ><i class="fa-solid fa-house menu-icon-d"></i>Home</Link>}
                {permission_active_setup&&<Link 
                    to="/setups"
                    className={`link item ${activeItem=="setups"?"active":""}`}
                    onClick={()=>this.clickMenu("setups")}
                ><i className="fa-solid fa-gears menu-icon-d"></i>{lang.SETUP_PAGE}</Link>}
                
            </Menu>
                {/* toast */}
                <ToastContainer
                    position="top-right"
                    autoClose={4000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                
                <Routes>
                {(permission_active_category||permission_active_home||permission_active_page||permission_active_setup||permission_active_post)&&<Route exact path="/" element={<PostEdit/>}/>}
                {permission_active_post&&<Route exact path="/posts" element={<PostEdit permission_type={permission_type}/>}/>}
                {permission_active_setup&&<Route exact path="/setups" element={<SetupPage/>}/>}
                {permission_active_page&&<Route exact path="/pages" element={<PageEdit/>}/>}
                {permission_active_home&&<Route exact path="/home" element={<Home/>}/>}
                {permission_active_category&&<Route exact path="/categorys" element={<CategoryEdit/>}/>}
                {(permission_active_category||permission_active_home||permission_active_page||permission_active_setup||permission_active_post)&&<Route exact path="/*" element={<PostEdit/>}/>}
                </Routes>
          </Router>
        )
    }
}
export default Index;