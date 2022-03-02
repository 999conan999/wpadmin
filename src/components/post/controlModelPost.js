import React, { Component } from 'react';
// import {} from 'semantic-ui-react';
import ModalEditerPost from '../lib/ModalEditerPost';
class ControlModelPost extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data_source:{
                categorys_list:[],
                categorys_result:[],
                template:{
                    selected:-1,
                    template_list:[]
                },
                template_result:-1,
                title_post:'',
                content_post:'',
                descriptions:'',
                tags:[],
                tags_result:[],
                thumnail_post:'',
                schema_seo_list:[],
                code_header:'',
                code_body:'',
                code_footer:'',
                status:'publish'

            },
            id_post:-1
        }
    }
    //
    componentWillReceiveProps(nextProps){
        if(nextProps.id_post!==this.props.id_post){
            if(nextProps.id_post==-2){
                // create post
            }else{
                // edit post
            }
            console.log(nextProps.id_post);
            console.log('thay doi here!')
            //Perform some operation
            // this.setState({someState: someValue });
            // ....
            // [todo]
        }
    }
    // componentDidMount(){
    //         // this.setState({
    //         //    data_source:{
    //         //         categorys_list:[
    //         //             {
    //         //                 key:12,
    //         //                 text:'Giường sắt',
    //         //                 value:12
    //         //             },
    //         //             {
    //         //                 key:13,
    //         //                 text:'Giường gỗ',
    //         //                 value:13
    //         //             },
    //         //             {
    //         //                 id:14,
    //         //                 text:'Giường inox',
    //         //                 value:14
    //         //             },
    //         //         ],
    //         //         categorys_result:[12,13],
    //         //         template:{
    //         //             selected:0,
    //         //             template_list:[
    //         //                 {
    //         //                     id:0,
    //         //                     url_demo:'http://anbinhnew.com/demo_tempalte_0'
    //         //                 },
    //         //                 {
    //         //                     id:1,
    //         //                     url_demo:'http://anbinhnew.com/demo_tempalte_1'
    //         //                 },
    //         //                 {
    //         //                     id:2,
    //         //                     url_demo:'http://anbinhnew.com/demo_tempalte_2'
    //         //                 },
    //         //             ]
    //         //         },
    //         //         title_post:'đây là title bài post',
    //         //         content_post:'<p>đây là content post</p>',
    //         //         descriptions:'đây là descriptions',
    //         //         tags_all:[
    //         //             {
    //         //                 key:"giường sắt",
    //         //                 text:'giường sắt',
    //         //                 value:'giường sắt'
    //         //             },
    //         //             {
    //         //                 key:"giường gỗ",
    //         //                 text:'giường gỗ',
    //         //                 value:'giường gỗ'
    //         //             }
    //         //         ],
    //         //         tags_result:['giường sắt'],
    //         //         thumnail_post:'http://anbinhnew.com/thumnail.jpg',
    //         //         schema_seo_list:['schema 1','schema 2'],
    //         //         // schema_seo_result:'schema 1*+*schema 2',
    //         //         code_header:'code header',
    //         //         code_body:'code body',
    //         //         code_footer:'code footer'

    //         //     }
    //         // });
    // }
    // convert_data_server=(data)=>{
    // }
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
        data_source.template.selected=i;
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
        let {data_source,id_post} =this.state;
        return (
            <React.Fragment>
                <ModalEditerPost
                    open={this.props.open}
                    data_source={data_source}
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
                />
            </React.Fragment>
        )
    }
//
click_action_no=()=>{
    this.props.close_model_edit()
}
//
click_action_yes=()=>{
    alert('yest') // [todo]
}
}
export default ControlModelPost;