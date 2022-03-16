import React, { Component } from 'react';
import PageEdit from './page/pagetEdit';
import PostEdit from './post/postEdit';
import Home from './home/pagetEdit';
import Media from './media/controlMedia';
import CategoryEdit from './category/CategoryEdit';
import SetupPage from './setup_Page/SetupPage';
import {  Menu, Segment } from 'semantic-ui-react'
import * as lang from './lib/constants/language';
import 'react-toastify/dist/ReactToastify.css';
import {alert_toast} from './lib/constants/language';
import { ToastContainer,toast } from 'react-toastify';
import {check_login} from './lib/constants/axios';
import Contact from './contacts/Contact';
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
            permission_type:"null",
            notify:0
            // permission_type:"administrator"
        }
    }
   async componentDidMount(){
        this.random_popup_contact();
        let a=await check_login();
        let permission_type='null';
        if(a.permission_type!=undefined) permission_type=a.permission_type;
        this.setState({
           activeItem:window.location.pathname.replace('/',''),
           permission_type:permission_type,
           notify:a.notify,
           contact_count_pre:a.contact_count_pre,
           coun_contact_now:a.coun_contact_now
        });
        
    }
    // random popup infor
    random_popup_contact=()=>{
        let a=[1,2,3,4,5,6];
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
        //
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
        const { activeItem,permission_type,notify,coun_contact_now } =  this.state;
        let permission_active_post=this.set_permission(["administrator","editor",'author','contributor'],permission_type);
        let permission_active_category=this.set_permission(["administrator","editor"],permission_type);
        let permission_active_page=this.set_permission(["administrator","editor"],permission_type);
        let permission_active_home=this.set_permission(["administrator","editor"],permission_type);
        let permission_active_setup=this.set_permission(["administrator","editor"],permission_type);
        let permission_active_media=this.set_permission(["administrator","editor",'author','contributor'],permission_type);
        let permission_active_contact=this.set_permission(["administrator","editor",'author'],permission_type);
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
                ><i class="fa-solid fa-hand menu-icon-d"></i>{lang.PAGES}</Link>}
                {permission_active_media&&<Link 
                    to="/media"
                    className={`link item ${activeItem=="media"?"active":""}`}
                    onClick={()=>this.clickMenu("media")}
                ><i className="fas fa-photo-video  menu-icon-d"></i>{lang.MEDIA}</Link>}

                {/* {permission_active_contact&&<Link 
                    to="/contacts"
                    className={`link item ${activeItem=="contacts"?"active":""}`}
                    onClick={()=>this.clickMenu("contacts")}
                ><i class="fa-brands fa-wpforms  menu-icon-d"></i>{lang.FORM_CONTACT}
                {notify>0&&<span className='lk'>{notify}</span>}
                </Link>} */}

                <Menu.Menu position='right'>
                    {permission_active_home&&<Link 
                        to="/home"
                        className={`link item ${activeItem=="home"?"active":""}`}
                        onClick={()=>this.clickMenu("home")}
                    ><i class="fa-solid fa-gear menu-icon-d"></i>{lang.HOME_SETUP}</Link>}
                    {permission_active_setup&&<Link 
                        to="/setups"
                        className={`link item ${activeItem=="setups"?"active":""}`}
                        onClick={()=>this.clickMenu("setups")}
                    ><i className="fa-solid fa-gears menu-icon-d"></i>{lang.SETUP_PAGE}</Link>}
                </Menu.Menu>
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
                {/* {permission_active_contact&&<Route exact path="/contacts" element={<Contact 
                    notify={notify}
                    coun_contact_now={coun_contact_now}
                    clear_notify_contact={this.clear_notify_contact}
                />}/>} */}
                {permission_active_page&&<Route exact path="/pages" element={<PageEdit/>}/>}
                {permission_active_media&&<Route exact path="/media" element={<Media/>}/>}
                {permission_active_home&&<Route exact path="/home" element={<Home/>}/>}
                {permission_active_category&&<Route exact path="/categorys" element={<CategoryEdit/>}/>}
                {(permission_active_category||permission_active_home||permission_active_page||permission_active_setup||permission_active_post)&&<Route exact path="/*" element={<PostEdit/>}/>}
                </Routes>
          </Router>
        )
    }
    clear_notify_contact=()=>{
        this.setState({
            notify:0
        })
    }
}
export default Index;