import React, { Component } from 'react';
import {Link} from "react-router-dom";
import FileMedia from '../lib/fileMedia';
import Sortable from '../lib/sortable'
class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            open:true,
            type_media:'add', // add / thum...
            multi_select:true
        }
    }
    // return img
    return_image=(list_img,type_media)=>{
          console.log("🚀 ~ file: pagetEdit.js ~ line 15 ~ Home ~ type_media", type_media)
        console.log("🚀 ~ file: pagetEdit.js ~ line 12 ~ Home ~ list_img", list_img)
    }
    // set
    render() {
        return (
            <React.Fragment>
                <Sortable/>
            </React.Fragment>
        )
    }
}
export default Home;