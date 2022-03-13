import React, { Component } from 'react';
import {fs_convert_schema_cript} from '../lib/constants/fs';
import * as lang from '../lib/constants/language';
import { toast } from 'react-toastify';
import ModalEditerPage from '../lib/ModalEditerPage';
import {TEMPLATE_PAGE} from '../lib/constants/template'
import {
    action_create_or_edit_page,
    get_page_infor_by_id
} from '../lib/constants/axios'
class ControlModelPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            template_list:TEMPLATE_PAGE,
            data_source:{
                id:-1,
                template_selected:-1,// meta
                title_post:'',//
                content_post:'',//
                descriptions:'',// meta
                thumnail_post:'',// meta
                schema_seo_list:[],// meta
                code_header:'',// meta
                code_body:'',// meta
                code_footer:'',// meta
                status:'publish'//
            },
            id_page:-1
        }
    }
    //
  async  componentWillReceiveProps(nextProps){
        if(nextProps.id_page!==this.props.id_page){
            if(nextProps.id_page==-2){
                // create page
                let data_source={
                    id:-1,
                    template_selected:0,// meta
                    title_post:'',//
                    content_post:'',//
                    descriptions:'',// meta
                    thumnail_post:'',// meta
                    schema_seo_list:[],// meta
                    code_header:'',// meta
                    code_body:'',// meta
                    code_footer:'',// meta
                    status:'private'//
                };
                this.setState({
                    data_source:data_source
                })
            }else{
                // edit post [todo=>]
                let data_server= await get_page_infor_by_id(nextProps.id_page);
                if(data_server!='null'){
                    let data_source={
                        id:data_server.id,
                        template_selected:data_server.metaA.template_selected==undefined?"":data_server.metaA.template_selected,// meta
                        title_post:data_server.title_post,//
                        content_post:data_server.content_post,//
                        descriptions:data_server.metaA.descriptions==undefined?"":data_server.metaA.descriptions,// meta
                        thumnail_post:data_server.metaA.thumnail_url==undefined?"":data_server.metaA.thumnail_url,// meta
                        schema_seo_list:data_server.metaA.schema_seo_list==undefined?[]:JSON.parse(data_server.metaA.schema_seo_list),// meta
                        code_header:data_server.metaA.code_header==undefined?"":data_server.metaA.code_header,// meta
                        code_body:data_server.metaA.code_body==undefined?"":data_server.metaA.code_body,// meta
                        code_footer:data_server.metaA.code_footer==undefined?"":data_server.metaA.code_footer,// meta
                        status:data_server.status//
                    };
                    this.setState({
                        data_source:data_source
                    })
                }  
            }
            // console.log(nextProps.id_page);
            // console.log('thay doi here!')
            //Perform some operation
            // this.setState({someState: someValue });
            // ....
            // [todo]
        }
    }

    // convert_data_server=(data)=>{
    // }
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
        let {data_source,template_list} =this.state;
        return (
            <React.Fragment>
                <ModalEditerPage
                    open={this.props.open}
                    data_source={data_source}
                    template_list={template_list}
                    action_change_template={this.action_change_template}
                    action_change_title={this.action_change_title} 
                    action_change_content_post={this.action_change_content_post} 
                    action_change_descriptions={this.action_change_descriptions} 
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
                    id_page={this.props.id_page}
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
    // alert(this.props.id_page) // [todo=>]
    let {data_source}=this.state;
    this.props.close_model_edit()
    console.log("🚀 ~ file: controlModelPage.js ~ line 229 ~ ControlModelPage ~ data_source", data_source)
    let a=await action_create_or_edit_page({
        idN:data_source.id,
        titleS:data_source.title_post,
        contentS:data_source.content_post,
        statusS:data_source.status,
        thumnailS:data_source.thumnail_post,
        metaA:{
            code_body:data_source.code_body,
            code_footer:data_source.code_footer,
            code_header:data_source.code_header,
            descriptions:data_source.descriptions,
            template_selected:data_source.template_selected,
            schema_seo_list:JSON.stringify(data_source.schema_seo_list),
            schema_seo_result:fs_convert_schema_cript(data_source.schema_seo_list)
        }
    });
    if(a.status==true){
        if(data_source.id==-1){
            this.props.add_data_new_page({
                id:a.id,
                title:data_source.title_post,
                status:data_source.status,
                url:a.url,//
                thumnail_url:data_source.thumnail_post
            });
            toast.success(lang.SUCCPOST_CREATE,{theme: "colored"})
        }else{
            this.props.add_data_update_page({
                id:a.id,
                title:data_source.title_post,
                status:data_source.status,
                url:a.url,//
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
export default ControlModelPage;