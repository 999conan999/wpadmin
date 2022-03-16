import React, { Component  } from 'react';
import { Button,Segment,Input,Modal,Header,Dropdown,Radio, Form, TextArea, Accordion, Icon,Select,Popup} from 'semantic-ui-react';
import EditorWrap from './editorwrap';
import * as lang from './constants/language';
import FileMedia from './fileMedia';
import { ToastContainer, toast } from 'react-toastify';
class ModalEditerCategory extends Component {
    constructor (props) {
        super(props)
        this.state = {
            data_content:"",
            activeIndex: -1,
            open:false,
            type_media:'', // add / thum...
            multi_select:true
        }
    }
handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index
    this.setState({ activeIndex: newIndex })
}
//  **************** Categorys
action_change_category=(e,data)=>{
    this.props.action_change_category(data.value);
}
// **************** Templates
show_templates=(template_list,template_selected)=>{
    let result=[];
    let selected=template_selected;
    if(selected==-1){
        return result;
    }else{
        template_list.forEach((e,i) => {
            if(i==selected){
                result.push(
                    <div className='selecte' key={i}>
                        <span>{lang.TEMPLATE} {i+1} (<a href={e.url_demo} target="_blank">{lang.DEMO}</a>)</span><br/>
                        <Radio toggle checked />
                    </div>
                )
            }else{
                result.push(
                    <div className='selecte'>
                        <span>{lang.TEMPLATE} {i+1} (<a href={e.url_demo} target="_blank">{lang.DEMO}</a>)</span><br/>
                        <Radio toggle onClick={()=>this.action_change_template(i)}/>
                    </div>
                )
            }
        });
        return result
    }
}
//
action_change_template=(i)=>{
    this.props.action_change_template(i);
}
//******************Title
action_change_title=(e,data)=>{
    this.props.action_change_title(data.value);
}
//******************Contents post
action_change_content_post=(value)=>{
    this.props.action_change_content_post(value);
}
//******************Descriptions
action_change_descriptions=(e,data)=>{
    this.props.action_change_descriptions(data.value);
}

// **************** Schema
show_schema=(schema_seo_list)=>{
    let result=[];
    schema_seo_list.forEach((e,i) => {
        result.push(<Segment raised key={i}  className={e!=''?'okok':''}>
            <Header as='h4'>Schema {i}:</Header>
                <Form>
                    <TextArea placeholder='Code schema here.' 
                        value={e}
                        onChange={(e,data)=>this.action_change_schema(data,i)}
                    />
                </Form>
                <i className="fa-solid fa-trash-can rmx" onClick={()=>this.action_delete_schema(i)}></i>
            </Segment>)
    });
    return result;
}
//
action_change_schema(data,i){
this.props.action_change_schema(data.value,i);
}
//
action_delete_schema(i){
    if (window.confirm(`${lang.NOTIFY_DELETE_SCHEMA} Schema ${i}`) == true) {
        this.props.action_delete_schema(i);
    }
}
//****************Header */
action_change_code_header=(e,data)=>{
    this.props.action_change_code_header(data.value);
}
// ************* Modal file media
// return img
return_image=(list_img,type_media)=>{
    if(type_media=='add_img_to_content'){
        if(list_img.length>0){
            let img_rs='';
            list_img.forEach(e => {
                img_rs+=`<p><img src="${e.url}" alt="" width="300" height="300" /></p>`;
            });
            this.props.action_add_img_to_content(img_rs);
        }
    }else if(type_media=='add_img_thumnail'){
        if(list_img.length>0){
            this.props.action_add_img_thumnail(list_img[0].url);
        }
    }
}

    render() {
        const { activeIndex } =  this.state;
        const {data_source,id_category,template_list,categorys_list}=this.props;
        let categorys_lists=[{key:0,value:0,text:'Không chọn'}];
        if(categorys_list!=undefined){
            categorys_lists=[...[{key:0,value:0,text:'Không chọn'}],...categorys_list]
        }

        return (<React.Fragment>
            <Modal
                size={"small"}
                open={this.props.open}
            >
                <Modal.Header className='blackw'>{id_category==-2?lang.CREATE_CATEGORY:lang.EDIT_CATEGORY} </Modal.Header>
                <Modal.Content className='blackw'>
                    <Segment raised className='xyg '>
                        <Header as='h3' className='clh'>*{lang.INPORTANT_CATEGORY}:</Header>
                        <Segment raised className={data_source.categorys_result.length>0?'okok':''}>
                            <Header as='h4'>{lang.CATEGORY_POST_PARENT}: </Header>
                            <Select  
                                options={categorys_lists}
                                // defaultValue={''} 
                                value={data_source.categorys_result}
                                onChange={this.action_change_category}
                            />
                        </Segment>
                        <Segment raised  className={data_source.template_selected!=-1?'okok':''}>
                            <Header as='h4'>{lang.TEMPLATE_POST}:</Header>
                            {this.show_templates(template_list,data_source.template_selected)}
                        </Segment>
                        <Segment raised  className={data_source.title_post!=''?'okok':''}>
                            <Header as='h4'>{lang.TITLE}:</Header>
                            <Input 
                                placeholder='Title' fluid  size='big'
                                value={data_source.title_post}
                                onChange={this.action_change_title}
                            />
                        </Segment>
                        <Segment raised className={data_source.content_post!=''?'okok':''}>
                            <Header as='h4'>{lang.CONTENT_CATEGORY}:</Header>
                            <Button basic color='blue' size='small' className='btn-mgb'
                                onClick={()=>this.setState({open:true,type_media:'add_img_to_content',multi_select:true})}
                            ><i className="fas fa-photo-video vv"></i>Add Media</Button>
                            <div className='yu'><Popup content={lang.NOTE_ADD_ICON} trigger={ <span>👉<a target="_blank" href={lang.URL_ICON_TOOL}><i class="fa-solid fa-icons"></i>{lang.TITLE_ADD_ICON_TOOL}</a>👈</span>}/></div>
                            <EditorWrap
                                action_change_content_post={this.action_change_content_post}
                                content_post={data_source.content_post}
                            />
                        </Segment>
                        <Segment.Group horizontal>
                
                            <Segment raised className={data_source.descriptions!=''?'okok':''}>
                                <Header as='h4'>{lang.DESCRIPTION_POST}:</Header>
                                <Form>
                                    <TextArea placeholder=''
                                        value={data_source.descriptions}
                                        onChange={this.action_change_descriptions}
                                    />
                                
                                </Form>
                            </Segment>
                            <Segment raised  className={data_source.thumnail_post!=''?'okok':''}>
                                <Header as='h4'>{lang.THUMNAIL_POST}:</Header>
                                <Button basic color='blue' size='small' className='btn-mgb'
                                 onClick={()=>this.setState({open:true,type_media:'add_img_thumnail',multi_select:false})}
                                ><i className="fas fa-photo-video vv"></i>Add Media</Button>
                                <div className='thumxx'>
                                    <div className='vvv'>
                                        {(data_source.thumnail_post!=""&&data_source.thumnail_post!=undefined)&&<img src={data_source.thumnail_post} className='thumnailzz'/>}
                                        {(data_source.thumnail_post!=""&&data_source.thumnail_post!=undefined)&&<i class="fa-solid fa-circle-xmark kk" onClick={()=>this.props.delete_img_thumnail()}></i>}
                                    </div>
                                </div>
                            </Segment>
                        </Segment.Group>
                    </Segment>
                    <Segment raised className='xyg'>
                        <Header as='h3' className='clh'>*{lang.SEO_POST}:</Header>
                        <Accordion>
                            <Accordion.Title
                            active={activeIndex === 0}
                            index={0}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                                {lang.TITLE_SEO_POST_1}
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                            <p>
                               {lang.DESCRIPTIONS_SEO_POST_1}
                            </p>
                            </Accordion.Content>

                            <Accordion.Title
                            active={activeIndex === 1}
                            index={1}
                            onClick={this.handleClick}
                            >
                            <Icon name='dropdown' />
                                {lang.TITLE_SEO_POST_2}
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                            <p>
                                 👉 <a href={lang.URL_HDSD_SEO_SCHEMA} target="_blank">{lang.TITLE_HDSD_SEO_SCHEMA}</a>
                            </p>
                            </Accordion.Content>

                        </Accordion>
                        <p className='uet'><a href={lang.GENERATOR_SCHEMA_URL} target="_blank">{lang.GENERATOR_SCHEMA_WEB}</a></p>
                        {this.show_schema(data_source.schema_seo_list)}
                        <Button icon className='add-da' onClick={this.props.action_add_schema}>
                             <i className="fa-solid fa-plus"></i>
                        </Button>
                    </Segment>
                    <Segment raised className='xyg' >
                        <Header as='h3' className='clh'>*{lang.ADVANCED_SETING}:</Header>
                        <Segment raised className={data_source.code_header!=''?'okok':''}>
                            <Header as='h4'>Header:</Header>
                            <Form>
                                <TextArea placeholder='Code here.' 
                                    value={data_source.code_header}
                                    onChange={this.action_change_code_header}
                                />
                            </Form>
                        </Segment>
                        <Segment raised className={data_source.code_body!=''?'okok':''}>
                            <Header as='h4'>Body:</Header>
                            <Form>
                                <TextArea placeholder='Code here.'
                                    value={data_source.code_body}
                                    onChange={(e,data)=>this.props.action_change_code_body(data.value)}
                                />
                            </Form>
                        </Segment>
                        <Segment raised className={data_source.code_footer!=''?'okok':''}>
                            <Header as='h4'>Footer:</Header>
                            <Form>
                                <TextArea placeholder='Code more'
                                    value={data_source.code_footer}
                                    onChange={(e,data)=>this.props.action_change_code_footer(data.value)}
                                />
                            </Form>
                        </Segment>
                    </Segment>
                    
                </Modal.Content>
                <Modal.Actions>
                   
                    <Button negative onClick={this.click_action_no}>{lang.NO}</Button>
                    <Button positive onClick={this.click_action_yes} >{id_category==-2?lang.ACTION_POST:lang.UPDATE}</Button>
                </Modal.Actions>
            </Modal>
            <FileMedia
                multi_select={this.state.multi_select}
                open={this.state.open}
                type_media={this.state.type_media}
                return_image={this.return_image}
                set_open_media={(open)=>this.setState({open:open})}
            />
        </React.Fragment>
        )
    }
    // 
    click_action_no=()=>{
        this.props.click_action_no()
    }
    //
    click_action_yes=()=>{
        if(this.props.data_source.title_post.length<3){
            toast.info(lang.NOTIFY_VALIDATE_TITLE,{theme: "colored"})
        }else{
            this.props.click_action_yes()
        }
    }
}
export default ModalEditerCategory;