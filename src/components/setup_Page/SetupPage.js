import React, { Component } from 'react';
import { Segment,Header,Button,Message,Form,TextArea,Input,Dropdown } from 'semantic-ui-react';
import Sortable from '../lib/sortable';
import FileMedia from '../lib/fileMedia';
import * as lang from '../lib/constants/language';
import { toast } from 'react-toastify';
import {
    get_all_category,
    get_all_page_All,
    action_edit_setup,
    get_setup
} from '../lib/constants/axios'
class SetupPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            keyz:0,
            code_value_i:null,
            value_update:{},
            treeData:[],
            open:false,
            type_media:'',// addIcon,addlogo,codeValue
            value_category:{value:""},
            value_page:{value:""},
            value_custom_text:{
                text:'',
                url:''
            },
            data:{
                idN:1,
                icon_url:'',
                logo_url:'',
                code_contacts:{
                    code_source:'',
                    code_value:[],
                },
                code_header:'',
                code_body:'',
                code_footer:'',
                css_code:'',
                value_1:null ,
                value_2:'' ,
                value_3:'' ,
                value_4:'' ,
                value_5:'' ,
                value_6:'' ,
                value_7:'' ,
                value_8:'' ,
            },
            category_list:[],
            page_list:[]
        }
    }
    //
    async componentDidMount(){
        let cate_list=await get_all_category();
        let page_list=await get_all_page_All();
        let data_setup= await get_setup();
        if(data_setup.id!=undefined){
            let data={
                idN:data_setup.id,
                icon_url:data_setup.icon,
                logo_url:data_setup.logo,
                code_contacts:data_setup.contact_code=='null'?{code_source:'',code_value:[],}:JSON.parse(data_setup.contact_code),
                code_header:data_setup.header_code,
                code_body:data_setup.body_code,
                code_footer:data_setup.footer_code,
                css_code:data_setup.css_code,
                // code_function:''
                value_1:data_setup.value_1=='null'?null:JSON.parse(data_setup.value_1),
                value_2:data_setup.value_2 ,
                value_3:data_setup.value_3 ,
                value_4:data_setup.value_4 ,
                value_5:data_setup.value_5 ,
                value_6:data_setup.value_6 ,
                value_7:data_setup.value_7 ,
                value_8:data_setup.value_8 ,
            };
            let treeData=data_setup.menu_json=='null'?[]:JSON.parse(data_setup.menu_json);
                this.setState({
                    category_list:cate_list,
                    page_list:page_list,
                    treeData:treeData,
                    data:data
                })
        }

    }
    //
    return_image=(arr_img)=>{
        let {type_media,data,code_value_i}=this.state;
        if(type_media=='addIcon'){
            if(arr_img.length>0){
                data.icon_url=arr_img[0].url;
                this.setState({
                    data:data
                })
            }
        }else if(type_media=='addlogo'){
            if(arr_img.length>0){
                data.logo_url=arr_img[0].url;
                this.setState({
                    data:data
                })
            }
        }else if(type_media=='codeValue'){
            if(arr_img.length>0){
                data.code_contacts.code_value[code_value_i]=arr_img[0].url;
                this.setState({
                    data:data
                })
            }
        }
        
    }
    // delete icon
    action_delete_img_icon=()=>{
        let {data}=this.state;
        data.icon_url='';
        this.setState({
            data:data
        })
    }
    // delete logo
    action_delete_img_logo=()=>{
        let {data}=this.state;
        data.logo_url='';
        this.setState({
            data:data
        })
    }
    // change cateogry
    onChange_category=(e, { value })=>{
        let {category_list}=this.state;
        let js=null;
        category_list.forEach((e,i) => {
            if(e.value==value){
                js=i;
            }
        });
        if(js!=null){
            this.setState({
                value_category:category_list[js]
            })
        }

    }
    // change page
    onChange_page=(e, { value })=>{
        let {page_list}=this.state;
        let js=null;
        page_list.forEach((e,i) => {
            if(e.value==value){
                js=i;
            }
        });
        if(js!=null){
            this.setState({
                value_page:page_list[js]
            })
        }

    }
    // add category
    action_add_Cateogry=()=>{
        let {value_category,keyz}=this.state;
        if(value_category.value!=''){
            // treeData.push(value_category);
            this.setState({
                keyz:keyz+1,
                value_update:value_category,
                value_category:{
                    value:""
                },
            })
        }else{
            alert(lang.ALERT_1)
        }
    }
    // add page
    action_add_page=()=>{
        let {value_page,keyz}=this.state;
        if(value_page.value!=''){
            // treeData.push(value_category);
            this.setState({
                keyz:keyz+1,
                value_update:value_page,
                value_page:{
                    value:""
                },
            })
        }else{
            alert(lang.ALERT_2)
        }
    }
    // change text
    action_change_text=(e,{value})=>{
        let {value_custom_text}=this.state;
        value_custom_text.text=value;
        this.setState({
            value_custom_text:value_custom_text
        })
    }
    // change url
    action_change_url=(e,{value})=>{
        let {value_custom_text}=this.state;
        value_custom_text.url=value;
        this.setState({
            value_custom_text:value_custom_text
        })
    }
    // add custom text url
    action_add_text=()=>{
        let {value_custom_text,keyz}=this.state;
        if(value_custom_text.text!=''&&value_custom_text.url!=""){
            this.setState({
                keyz:keyz+1,
                value_update:{
                    title:value_custom_text.text,
                    key:value_custom_text.text,
                    text:value_custom_text.text,
                    value:value_custom_text.text,
                    url:value_custom_text.url
                },
                value_custom_text:{
                    text:'',
                    url:''
                },
            })
        }else{
            alert(lang.ALERT_3)
        }
    }
    action_change_code_source=(e,{value})=>{
        let {data}=this.state;
        data.code_contacts.code_source=value;
        this.setState({data:data});
    }
    // show code value
    show_code_value=(code_value)=>{
        let result=[];
        code_value.forEach((e,i) => {
            result.push(
                <div className='wrap-bb' key={i}>
                    <span>{lang.VALUE} {i}:</span>
                    <div className='inputT'>
                        <Input 
                            size='small' 
                            placeholder={`${lang.VALUE_ADD} ${i}`} fluid 
                            value={e}
                            onChange={(e,{value})=>this.action_change_code_value(value,i)}
                        />
                        
                    </div>
                    <div className='inputM'>
                        <Button basic color='blue' size='small' className='btn-mgb'
                            onClick={()=>this.setState({open:true,type_media:'codeValue',code_value_i:i})}
                        ><i className="fas fa-photo-video vv"></i>Add Media</Button>
                        <i className="fa-solid fa-circle-xmark uuz" onClick={()=>this.action_delete_code_value(i)}></i>
                        {e.search('http')!=-1&&<img src={e} height={'50px'}/>}
                    </div>
                </div>
            )
        });
        return result;
    }
    // change code value
    action_change_code_value=(value,i)=>{
        let {data}=this.state;
        data.code_contacts.code_value[i]=value;
        this.setState({data:data})
    }
    // add new code value
    action_add_code_value=()=>{
        let {data}=this.state;
        data.code_contacts.code_value.push('');
        this.setState({data:data})
    }
    // delete code value
    action_delete_code_value=(i)=>{
        let {data}=this.state;
        data.code_contacts.code_value.splice(i,1);
        this.setState({data:data})
    }

    render() {
        let {data,value_category,value_page,value_custom_text,category_list,page_list}=this.state;
        return (
            <React.Fragment>
                <Message  color='brown'>
                    <Message.Header>{lang.NOTIFY}:</Message.Header>
                    <Message.List items={[
                          lang.NOTIFY_1,
                          lang,lang.NOTIFY_2,
                          lang.NOTIFY_3,
                    ]} />
                </Message>
               <Segment raised className='okok'>
                    <Header as='h4' className='clh'>*{lang.ICON_WEB} </Header>
                    <p>
                        {lang.NOTIFY_ICON_WEB} <a href={lang.NOTIFY_ICON_WEB_HDSD_URL}  target="_blank">{lang.NOTIFY_WEB_HDSD_TITLE}</a>
                    </p>
                    <Button basic color='blue' size='small' className='btn-mgb'
                        onClick={()=>this.setState({open:true,type_media:'addIcon'})}
                    ><i className="fas fa-photo-video vv"></i>Add Media</Button>
                    {data.icon_url!=''&&<div className='thum'><div className='vvv'>
                        <img src={data.icon_url} height={'50px'}/>
                        <i className="fa-solid fa-x xxz zzx" onClick={this.action_delete_img_icon}></i>
                    </div></div>}
                </Segment>

               <Segment raised className='okok'>
                    <Header as='h4' className='clh'>*{lang.LOGO_WEB} </Header>
                    <p>
                        {lang.NOTIFY_LOGO_WEB} <a href={lang.NOTIFY_LOGO_WEB_HDSD_URL}  target="_blank">{lang.NOTIFY_WEB_HDSD_TITLE}</a>
                    </p>
                    <Button basic color='blue' size='small' className='btn-mgb'
                         onClick={()=>this.setState({open:true,type_media:'addlogo'})}
                    ><i className="fas fa-photo-video vv"></i>Add Media</Button>
                     {data.logo_url!=''&&<div className='thum'><div className='vvv'>
                        <img src={data.logo_url} height={'50px'}/>
                        <i className="fa-solid fa-x xxz zzx" onClick={this.action_delete_img_logo}></i>
                    </div></div>}
                </Segment>

               <Segment raised className='okok'>
                    <Header as='h4' className='clh'>*{lang.MENU_WEB} </Header>
                    <p>
                         {lang.NOTIFY_MENU_WEB}<a href={lang.NOTIFY_MENU_WEB_HDSD_URL}  target="_blank">{lang.NOTIFY_WEB_HDSD_TITLE}</a>
                    </p>
                 

                    <Segment.Group horizontal>
                            <Segment raised className={'okok mrz'}>
                                <div>
                                    <p>{lang.ADD_CATEGORY}:</p>
                                    <div className='iih'>
                                        <div className='hhz'>
                                            <Dropdown
                                                placeholder={lang.HOLDER_ADD_CATEGORY}
                                                fluid
                                                search
                                                selection
                                                options={category_list}
                                                value={value_category.value}
                                                onChange={this.onChange_category}
                                            />
                                        </div>
                                        <div className='hhv'>
                                            <Button icon className='add-da' onClick={this.action_add_Cateogry}>
                                                <i className="fa-solid fa-plus"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </div>                                
                                <div className='iih'>
                                    <p>{lang.ADD_PAGE}</p>
                                    <div>
                                        <div className='hhz'>
                                            <Dropdown
                                                placeholder={lang.HOLDER_ADD_PAGE}
                                                fluid
                                                search
                                                selection
                                                options={page_list}
                                                value={value_page.value}
                                                onChange={this.onChange_page}
                                            />
                                        </div>
                                        <div className='hhv'>
                                            <Button icon className='add-da' onClick={this.action_add_page}>
                                                <i className="fa-solid fa-plus"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </div>                                
                                <div className='iih'>
                                    <p>{lang.ADD_CUSTOM_TEXT}</p>
                                    <div>
                                        <div className='hhz'>
                                            <span>Text:</span>
                                            <Input 
                                                placeholder='Text' fluid  size='small'
                                                value={value_custom_text.text}
                                                onChange={this.action_change_text}
                                            />
                                            <span>Url:</span>
                                            <Input 
                                                placeholder='http://google.com/xyz' fluid  size='small'
                                                value={value_custom_text.url}
                                                onChange={this.action_change_url}
                                            />
                                        </div>
                                        <div className='hhv'>
                                            <Button icon className='add-da' onClick={this.action_add_text}>
                                                <i className="fa-solid fa-plus"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </div>                                
                            </Segment>
                            <Segment raised  className={'okok'}>
                                <Sortable
                                    treeData={this.state.treeData}
                                    change_treeData={(treeData)=>this.setState({treeData:treeData})}
                                    maxDepth={2}
                                    keyz={this.state.keyz}
                                    value_update={this.state.value_update}
                                />
                            </Segment>
                        </Segment.Group>

                </Segment>
{/* value_1 here */}
                <Segment raised className='okok'>
                    <Header as='h4' className='clh'>*{lang.FOOTER_PAGE_SETUP}</Header>
                    <div className='wrap-bb' >
                        <span>{lang.VALUE} :</span>
                        <div className='inputF'>
                            <Input 
                                size='small' 
                                placeholder={`${lang.VALUE_ADD} `} fluid 
                                // value={data.value_1}
                                // onChange={(e,{value})=>this.action_change_code_value(value,i)}
                            />
                            
                        </div>
                    </div>
                </Segment>

               <Segment raised className='okok'>
                    <Header as='h4' className='clh'>*{lang.CONTACT_CODE_WEB}</Header>
                    <p>
                        {lang.NOTIFY_CONTACT_CODE_WEB} <a href={lang.NOTIFY_CONTACT_CODE_HDSD_URL}  target="_blank">{lang.NOTIFY_WEB_HDSD_TITLE}</a>
                    </p>
                    <Form>
                        <TextArea 
                            rows={4}
                            placeholder={lang.ADD_CODE_HERE}
                            value={data.code_contacts.code_source}
                            onChange={this.action_change_code_source}
                        />
                    </Form>
                    <div className='wrap-kk'>
                        {this.show_code_value(data.code_contacts.code_value)}
                        <Button icon className='add-da' onClick={this.action_add_code_value}>
                             <i className="fa-solid fa-plus"></i>
                        </Button>
                    </div>                    
                </Segment>

                <Segment raised className='xyg' >
                        <Header as='h4' className='clh'>*{lang.ADD_CODE}</Header>
                        <p>
                            {lang.NOTIFY_ADD_CODE}<a href={lang.NOTIFY_ADD_CODE_HDSD_URL}  target="_blank">{lang.NOTIFY_WEB_HDSD_TITLE}</a>
                        </p>
                        <Segment raised className='okok'>
                            <Header as='h4'>CSS code:</Header>
                            <Form>
                                <TextArea placeholder='Code here.' rows={10}
                                    value={data.css_code}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.css_code=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </Form>
                        </Segment>
                        <Segment raised className='okok'>
                            <Header as='h4'>Header:</Header>
                            <Form>
                                <TextArea placeholder='Code here.' rows={10}
                                    value={data.code_header}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.code_header=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </Form>
                        </Segment>
                        <Segment raised className='okok'>
                            <Header as='h4'>Body:</Header>
                            <Form>
                                <TextArea placeholder='Code here.' rows={10}
                                    value={data.code_body}
                                    onChange={(e,{value})=>{
                                        let {data}=this.state;
                                        data.code_body=value;
                                        this.setState({data:data})
                                    }}
                                />
                            </Form>
                        </Segment>
                        <Segment raised className='okok'>
                            <Header as='h4'>Footer:</Header>
                            <Form>
                                <TextArea placeholder='Code here' rows={10}
                                     value={data.code_footer}
                                     onChange={(e,{value})=>{
                                         let {data}=this.state;
                                         data.code_footer=value;
                                         this.setState({data:data})
                                     }}
                                />
                            </Form>
                        </Segment>
 
                    </Segment>
                    <div style={{float:"right"}}>
                       {/* <Button negative onClick={this.click_action_no}>{lang.NO}</Button> */}
                       <Button positive onClick={this.click_action_update} >{lang.UPDATE}</Button>
                    </div>
                <FileMedia
                    open={this.state.open}
                    type_media={this.state.type_media}
                    return_image={this.return_image}
                    multi_select={false}
                    set_open_media={(open)=>this.setState({open:open})}
                />
             <div style={{height:'80px'}}></div>
            </React.Fragment>
        )
    }
    click_action_update=async()=>{
        let {treeData,data} =this.state;
        // console.log("🚀 ~ file: SetupPage.js ~ line 478 ~ SetupPage ~ data", data)
        let data_convert={
            idN:data.idN,
            icon:data.icon_url,
            logo:data.logo_url,
            menu_json:JSON.stringify(treeData) ,
            menu_html:this.convert_menu_html(treeData),
            contact_code:JSON.stringify(data.code_contacts) ,
            contact_html:this.convert_contact_html(data.code_contacts) ,
            css_code:data.css_code,
            header_code:data.code_header ,
            body_code:data.code_body ,
            footer_code:data.code_footer ,
            value_1:JSON.stringify(data.value_1),
            value_2:data.value_2==undefined?'': data.value_2 ,
            value_3:data.value_3==undefined?'': data.value_3 ,
            value_4:data.value_4==undefined?'': data.value_4 ,
            value_5:data.value_5==undefined?'': data.value_5 ,
            value_6:data.value_6==undefined?'': data.value_6 ,
            value_7:data.value_7==undefined?'': data.value_7 ,
            value_8:data.value_8==undefined?'': data.value_8 ,
        }
        console.log("🚀 ~ file: SetupPage.js ~ line 525 ~ SetupPage ~ click_action_update=async ~ data_convert", data_convert)
        let a= await action_edit_setup(data_convert)
        if(a){
            toast.success(lang.SUCC_POST_EDIT,{theme: "colored"});
        }else{
            toast.error(lang.ERRO_POST_EDIT,{theme: "colored"});
        }
    }
    // convert treeData => html menu [todo=>]
    convert_menu_html=(treeData)=>{
        let result='';
        treeData.forEach((e,i) => {
            result+='<li class="parent-menu" ><a href="">'+e.title+'</a>'
            if(e.children!=undefined){
                result+='<ul>';
                for(let j=0;j<e.children.length;j++){
                    result+='<li class="parent-menu" ><a href="">'+e.children[j].title+'</a></li>'
                }
                result+='</ul>';
            }
            result+='</li>'
        });
        return result;
    }
    //
    convert_contact_html=(code_contacts)=>{
        let contact_html=code_contacts.code_source;
        code_contacts.code_value.forEach((e,i) => {
            contact_html= contact_html.replace('[value='+i+']',e)
        });
        return contact_html;
    }

}
export default SetupPage;