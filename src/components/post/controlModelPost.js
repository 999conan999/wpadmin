import React, { Component } from 'react';
import ModalEditerPost from '../lib/ModalEditerPost';
import {TEMPLATE_POST} from '../lib/constants/template'
import {get_cate_tag,get_post_infor_by_id,action_create_or_edit_post} from '../lib/constants/axios';
import {fs_convert_schema_cript} from '../lib/constants/fs';
import * as lang from '../lib/constants/language';
import { toast } from 'react-toastify';
class ControlModelPost extends Component {
    constructor (props) {
        super(props)
        this.state = {
            template_list:TEMPLATE_POST,
            data_source:{
                categorys_result:[],//
                template_selected:-1,//meta
                title_post:'',//
                content_post:'',//
                descriptions:'',//meta
                tags_result:[],//
                thumnail_post:'',//
                schema_seo_list:[],//meta array=> by JSON.Stringtify
                code_header:'',//meta
                code_body:'',//meta
                code_footer:'',//meta
                status:'private'//

            },
            id_post:-1,
            categorys_list:[],
            tags_all:[]
        }
    }
    //
   async componentWillReceiveProps(nextProps){
        if(nextProps.id_post!==this.props.id_post){
            if(nextProps.id_post==-2){
                // create post
                let data_source={
                id:-1,
                categorys_result:[],//
                template_selected:0,//meta
                title_post:'',//
                content_post:'',//
                descriptions:'',//meta
                tags_result:[],//
                thumnail_post:'',//
                schema_seo_list:[],//meta array=> by JSON.Stringtify
                code_header:'',//meta
                code_body:'',//meta
                code_footer:'',//meta
                status:'private'//
                };
                this.setState({
                    data_source:data_source,
                    id_post:nextProps.id_post
                })
            }else{
                // edit post [todo=> thêm code ở đây, để convert ra data input]
                let data_server=await get_post_infor_by_id(nextProps.id_post);
                if(data_server!='null'){
                    let data_source={
                        id:data_server.id,
                        categorys_result:data_server.categorys_result,//
                        template_selected:data_server.meta_data.template_selected==undefined?"":data_server.meta_data.template_selected,//meta
                        title_post:data_server.title_post,//
                        content_post:data_server.content_post,//
                        descriptions:data_server.meta_data.descriptions==undefined?"":data_server.meta_data.descriptions,//meta
                        tags_result:data_server.tags_result,//
                        thumnail_post:data_server.thumnail_post,//
                        schema_seo_list:data_server.meta_data.schema_seo_list==undefined?[]:JSON.parse(data_server.meta_data.schema_seo_list),//meta array=> by JSON.Stringtify
                        code_header:data_server.meta_data.code_header==undefined?"":data_server.meta_data.code_header,//meta
                        code_body:data_server.meta_data.code_body==undefined?"":data_server.meta_data.code_body,//meta
                        code_footer:data_server.meta_data.code_footer==undefined?"":data_server.meta_data.code_footer,//meta
                        status:data_server.status//
                    };
                    this.setState({
                        data_source:data_source
                    })
                }
            }

        }
    }
    async componentDidMount(){
       let data=await get_cate_tag();
       if(data!=null){
           this.setState({
            categorys_list: data.categorys_list,
            tags_all: data.tags_all
           })
       }
    }
    //**************** Category */
    action_change_category=(categorys_result)=>{
        let {data_source}=this.state;
        data_source.categorys_result=categorys_result;
        this.setState({
            data_source:data_source
        })
    }
    //******************Templates */
    action_change_template=(i)=>{
        let {data_source}=this.state;
        data_source.template_selected=i;
        this.setState({
            data_source:data_source
        })
    }
    //*******************Title */
    action_change_title=(value)=>{
        let {data_source}=this.state;
        data_source.title_post=value;
        this.setState({
            data_source:data_source
        })
    }
    //********************Content post */
    action_change_content_post=(value)=>{
        let {data_source}=this.state;
        data_source.content_post=value;
        this.setState({
            data_source:data_source
        })
    }
    //********************Description post */
    action_change_descriptions=(value)=>{
        let {data_source}=this.state;
        data_source.descriptions=value;
        this.setState({
            data_source:data_source
        })
    }
    //********************Tags post */
    action_change_tags=(value)=>{
        let {data_source}=this.state;
        data_source.tags_result=value;
        this.setState({
            data_source:data_source
        })
    }
    action_add_tags=(value)=>{
        let {data_source}=this.state;
        let tags_all=data_source.tags_all;
        let is_add_ok=true;
        tags_all.forEach(e => {
            if(e.name==value) is_add_ok=false;
        });
        if(is_add_ok){
            tags_all.push({
                key:value,
                text:value,
                value:value
            });
            data_source.tags_all=tags_all;
            this.setState({
                data_source:data_source
            })
        }

    }
    //********************** Schema post */
    action_change_schema=(value,i)=>{
        let {data_source}=this.state;
        data_source.schema_seo_list[i]=value;
        this.setState({
            data_source:data_source
        })
    }
    action_delete_schema=(i)=>{
        let {data_source}=this.state;
        data_source.schema_seo_list.splice(i,1);
        this.setState({
            data_source:data_source
        })
    }
    action_add_schema=()=>{
        let {data_source}=this.state;
        data_source.schema_seo_list.push('');
        this.setState({
            data_source:data_source
        })
    }
    //********************Header */
    action_change_code_header=(value)=>{
        let {data_source}=this.state;
        data_source.code_header=value;
        this.setState({
            data_source:data_source
        })
    }
    //********************body */
    action_change_code_body=(value)=>{
        let {data_source}=this.state;
        data_source.code_body=value;
        this.setState({
            data_source:data_source
        })
    }
    //********************footer */
    action_change_code_footer=(value)=>{
        let {data_source}=this.state;
        data_source.code_footer=value;
        this.setState({
            data_source:data_source
        })
    }
    //
    //********************add img to content */
    action_add_img_to_content=(value)=>{
        let {data_source}=this.state;
        data_source.content_post+=value;
        this.setState({
            data_source:data_source
        })
    }
    //
    //********************add img to thumnail */
    action_add_img_thumnail=(value)=>{
        let {data_source}=this.state;
        data_source.thumnail_post=value;
        this.setState({
            data_source:data_source
        })
    }
    //********************delete img to thumnail */
    delete_img_thumnail=()=>{
        let {data_source}=this.state;
        data_source.thumnail_post='';
        this.setState({
            data_source:data_source
        })
    }
    //
    //********************delete img to thumnail */
    action_change_status=(value)=>{
        let {data_source}=this.state;
        data_source.status=value;
        this.setState({
            data_source:data_source
        })
    }
    //
    render() {
        let {data_source,template_list,categorys_list,tags_all} =this.state;
        return (
            <React.Fragment>
                <ModalEditerPost
                    open={this.props.open}
                    data_source={data_source}
                    template_list={template_list}
                    categorys_list={categorys_list}
                    tags_all={tags_all}
                    action_change_category={this.action_change_category}
                    action_change_template={this.action_change_template}
                    action_change_title={this.action_change_title} 
                    action_change_content_post={this.action_change_content_post} 
                    action_change_descriptions={this.action_change_descriptions} 
                    action_change_tags={this.action_change_tags} 
                    action_add_tags={this.action_add_tags} 
                    action_change_schema={this.action_change_schema} 
                    action_delete_schema={this.action_delete_schema} 
                    action_add_schema={this.action_add_schema} 
                    action_change_code_header={this.action_change_code_header} 
                    action_change_code_body={this.action_change_code_body} 
                    action_change_code_footer={this.action_change_code_footer} 
                    action_add_img_to_content={this.action_add_img_to_content} 
                    action_add_img_thumnail={this.action_add_img_thumnail} 
                    action_change_status={this.action_change_status} 
                    delete_img_thumnail={this.delete_img_thumnail} 
                    click_action_yes={this.click_action_yes} 
                    click_action_no={this.click_action_no} 
                    id_post={this.props.id_post}
                    permission_type={this.props.permission_type}
                />
            </React.Fragment>
        )
    }
//
click_action_no=()=>{
    this.props.close_model_edit()
}
//
    click_action_yes=async()=>{
        // [todo] [todo=> sau này có chỉnh sửa code gì thêm biến ở đây]
        let {data_source} =this.state;
        this.props.close_model_edit();
// console.log(JSON.stringify(data_source.schema_seo_list));
        let a=await action_create_or_edit_post({
            idN:data_source.id,
            titleS:data_source.title_post,
            contentS:data_source.content_post,
            statusS:data_source.status,
            categoryA:data_source.categorys_result,
            tagA:data_source.tags_result,
            thumnailS:data_source.thumnail_post,
            metaA:{
                code_body:data_source.code_body,
                code_footer:data_source.code_footer,
                code_header:data_source.code_header,
                descriptions:data_source.descriptions,
                schema_seo_list:JSON.stringify(data_source.schema_seo_list),
                schema_seo_result:fs_convert_schema_cript(data_source.schema_seo_list),
                template_selected:data_source.template_selected
            },
        })
        if(a.status==true){
            if(data_source.id==-1){
                this.props.add_data_new_post({
                    id:a.id,
                    title:data_source.title_post,
                    status:data_source.status,
                    category:a.category,//
                    url:a.url,//
                    author_name:a.author_name,//
                    thumnail_url:data_source.thumnail_post
                });
                toast.success(lang.SUCCPOST_CREATE,{theme: "colored"})
            }else{
                this.props.add_data_update_post({
                    id:a.id,
                    title:data_source.title_post,
                    status:data_source.status,
                    category:a.category,//
                    url:a.url,//
                    author_name:a.author_name,//
                    thumnail_url:data_source.thumnail_post
                })
                toast.success(lang.SUCC_POST_EDIT,{theme: "colored"})
            }
            
        }else{
            if(data_source.id==-1){
                toast.error(lang.ERRO_POST_CREATE,{theme: "colored"})
            }else{
                toast.error(lang.ERRO_POST_EDIT,{theme: "colored"})
            }
        }
    }
}
export default ControlModelPost;