import React, { Component } from 'react';
// import {} from 'semantic-ui-react';
import ModalEditerPage from '../lib/ModalEditerPage';
import {TEMPLATE_PAGE} from '../lib/constants/template'
class ControlModelPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            template_list:TEMPLATE_PAGE,
            data_source:{
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
    componentWillReceiveProps(nextProps){
        if(nextProps.id_page!==this.props.id_page){
            if(nextProps.id_page==-2){
                // create page
            }else{
                // edit post
            }
            console.log(nextProps.id_page);
            console.log('thay doi here!')
            //Perform some operation
            // this.setState({someState: someValue });
            // ....
            // [todo]
        }
    }
  componentDidMount(){
            // this.setState({
            //    data_source:{
            //         template_selected:1,
            //         title_post:'đây là title bài post',
            //         content_post:'<p>đây là content post</p>',
            //         descriptions:'đây là descriptions',
            //         thumnail_post:'http://anbinhnew.com/thumnail.jpg',
            //         schema_seo_list:['schema 1','schema 2'],
            //         // schema_seo_result:'schema 1*+*schema 2',
            //         code_header:'code header',
            //         code_body:'code body',
            //         code_footer:'code footer',
            //         status:'publish'
            //     }
            // });
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
click_action_yes=()=>{
    alert(this.props.id_page) // [todo]
}
}
export default ControlModelPage;