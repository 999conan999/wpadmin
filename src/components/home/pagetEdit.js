import React, { Component } from 'react';
import {Link} from "react-router-dom";
import FileMedia from '../lib/fileMedia';
import Sortable from '../lib/sortable';
import {
    test_get,
    test_post,
    get_posts_by_search,
    get_posts_by_category_id,
    action_create_or_edit_post,
    action_remove_post_by_id,
    get_all_category,
    action_remove_category_by_id,
    action_create_or_edit_category,
    action_create_or_edit_page,
    get_post_infor_by_id,
    get_all_page,
    action_remove_page_by_id
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
        // let z=await action_remove_post(87);
        // console.log("🚀 ~ file: pagetEdit.js ~ line 42 ~ Home ~ componentDidMount ~ z", z)
        // let y=await get_all_category();
        // console.log("🚀 ~ file: pagetEdit.js ~ line 50 ~ Home ~ componentDidMount ~ y", y)
        // let y=await action_remove_category_by_id(24);
        // console.log("🚀 ~ file: pagetEdit.js ~ line 50 ~ Home ~ componentDidMount ~ y", y)
        // let a=await action_create_or_edit_category({
        //     idN:-1,
        //     nameS:'category api ok__update',
        //     contentS:'noi dung cate ne ok__update',
        //     parentIdN:4,
        //     thumnailS:'anbinhnew.com ok__update',
        //     metaA:{
        //         meta_1:'day la the meta_1 ok__update',
        //         meta_2:'day la the meta_2 ok__update',
        //         meta_3:'day la the meta_3 ok__update',
        //     }
        // })
        // console.log("🚀 ~ file: pagetEdit.js ~ line 58 ~ Home ~ componentDidMount ~ a", a)
        // console.log(await action_create_or_edit_page({
        //     idN:104,
        //     titleS:'tao moiws chinh sua ne',
        //     contentS:'đây là phần contents đã chỉnh sửa',
        //     statusS:'publish',
        //     metaA:{
        //         meta_shortdescript:'chinh sua thanh cong đây là mô tả ngăn của thẻ meta',
        //         meta_code_header:'chinh sua thanh cong header code',
        //         meta_code_body:'chinh sua thanh cong code body'
        //     },
        //     thumnailS:'https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-2-tang-cao-cap-mau-trang-dep-nhat-hcm-binh-duong-dong-nai.jpg'
        // }))
    console.log(await action_remove_page_by_id(104))
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