import React, { Component } from 'react';
import {Link} from "react-router-dom";
import FileMedia from '../lib/fileMedia';
import Sortable from '../lib/sortable';
import {test_get,test_post,get_posts_by_search,get_posts_by_category_id,action_create_or_edit_post,
    action_remove_post,
} from '../lib/constants/axios'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data_test:'xx'            
        }
    }
    // return img
 async   componentDidMount(){
        // test
        // test_get();
        // test_post();
        //    let x=await get_posts_by_search(0,'*')
        //    console.log("🚀 ~ file: pagetEdit.js ~ line 20 ~ Home ~ componentDidMount ~ x", x)
  
        // let k=await get_posts_by_category_id(0,4);
        // console.log("🚀 ~ file: pagetEdit.js ~ line 23 ~ Home ~ componentDidMount ~  k",  k)
        // let k=await action_create_or_edit_post({
        //     idN:87,
        //     titleS:'Tác giả ==>tiêu đề đã chỉnh sửa',
        //     contentS:'đây là phần contents đã chỉnh sửa',
        //     statusS:'publish',
        //     categoryA:[24,1],
        //     tagA:['thẻ tag 1',' thẻ tag 2'],
        //     metaA:{
        //         meta_shortdescript:'đây là mô tả ngăn của thẻ meta',
        //         meta_code_header:'header code',
        //         meta_code_body:'code body'
        //     },
        //     thumnailS:'https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-2-tang-cao-cap-mau-trang-dep-nhat-hcm-binh-duong-dong-nai.jpg'
        // });
        // console.log("🚀 ~ file: pagetEdit.js ~ line 38 ~ Home ~ componentDidMount ~  k",  k)
        let z=await action_remove_post(87);
        console.log("🚀 ~ file: pagetEdit.js ~ line 42 ~ Home ~ componentDidMount ~ z", z)




        //[todo] get all post first here and all category
        // 
    }
    // set
    render() {
        return (
            <React.Fragment>
                {this.state.data_test}
            </React.Fragment>
        )
    }
}
export default Home;