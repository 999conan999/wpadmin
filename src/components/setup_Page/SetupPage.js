import React, { Component } from 'react';
import { Segment,Header,Button,Message,Form,TextArea,Input,Dropdown } from 'semantic-ui-react';
import Sortable from '../lib/sortable';
import FileMedia from '../lib/fileMedia';
import * as lang from '../lib/constants/language'
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
                icon_url:'',
                logo_url:'',
                category_list:[
                    {
                        title:'giường sắt 1',
                        key:'giường sắt 1',
                        text:'giường sắt 1',
                        value:'giường sắt 1',
                        url:'https://anbinhnew.com'
                    },
                    {
                        title:'giường gỗ 1',
                        key:'giường gỗ 1',
                        text:'giường gỗ 1',
                        value:'giường gỗ 1',
                        url:'https://anbinhnew.com'
                    },
                    {
                        title:'giường inox 1',
                        key:'giường inox 1',
                        text:'giường inox 1',
                        value:'giường inox 1',
                        url:'https://anbinhnew.com'
                    },
                ],
                page_list:[
                    {
                        title:'Liên hệ',
                        key:'Liên hệ',
                        text:'Liên hệ',
                        value:'Liên hệ',
                        url:'https://anbinhnew.com'
                    },
                    {
                        title:'Tư vấn',
                        key:'Tư vấn',
                        text:'Tư vấn',
                        value:'Tư vấn',
                        url:'https://anbinhnew.com'
                    },
                    {
                        title:'Login',
                        key:'Login',
                        text:'Login',
                        value:'Login',
                        url:'https://anbinhnew.com'
                    },
                ],
                treeData:[],// data value on server
                code_contacts:{
                    code_source:'[value1] code value 2 [value2]',
                    code_value:['giá trị 1','giá trị 2'],
                },
                code_header:'',
                code_body:'',
                code_footer:'',
            }

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
        let {data}=this.state;
        let js=null;
        data.category_list.forEach((e,i) => {
            if(e.value==value){
                js=i;
            }
        });
        if(js!=null){
            this.setState({
                value_category:data.category_list[js]
            })
        }

    }
    // change page
    onChange_page=(e, { value })=>{
        let {data}=this.state;
        let js=null;
        data.page_list.forEach((e,i) => {
            if(e.value==value){
                js=i;
            }
        });
        if(js!=null){
            this.setState({
                value_page:data.page_list[js]
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
            alert('Bạn nên chọn một giá trị cho DANH MỤC')
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
            alert('Bạn nên chọn một giá trị cho TRANG')
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
            alert('Bạn nên điền đầy đủ trường TEXT và trường URL!')
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
                    <span>Giá trị {i}:</span>
                    <div className='inputT'>
                        <Input 
                            size='small' 
                            placeholder={`Nhập giá trị ${i}`} fluid 
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
        let {data,value_category,value_page,value_custom_text}=this.state;
        return (
            <React.Fragment>
                <Message  color='brown'>
                    <Message.Header>Chú thích:</Message.Header>
                    <Message.List items={[
                          'Mọi thứ cài đặt ở đây, nó sẽ được hiển thị trên tất cả các trang.',
                          'Hỗ trợ chèn code google analytic, facebook,... mọi thứ các bạn muốn.',
                          'Hỗ trợ chèn code thanh liên hệ.',
                    ]} />
                </Message>
               <Segment raised className='okok'>
                    <Header as='h4' className='clh'>*Chọn icon cho trang web: </Header>
                    <p>
                        Khi bạn truy cập vào 1 trang web bằng 1 trình duyệt, ví dụ là chrome, trên tab mở đó, bạn có thấy 1 icon nhỏ xinh
                        ngay trên đầu tab của trình duyệt web, thì đây chính là icon mà bạn sẽ cài đặt ở phần này. <a href=''  target="_blank">Xem hướng dẫn ở đây.</a>
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
                    <Header as='h4' className='clh'>*Chọn logo cho trang web: </Header>
                    <p>
                        Phần này là cái logo hiển thị phía trên cùng của 1 trang, 1 bài viết. <a href=''  target="_blank">Xem hướng dẫn ở đây.</a>
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
                    <Header as='h4' className='clh'>*Cài đặt menu: </Header>
                    <p>
                        cài đặt thanh menu cho trang web. <a href=''  target="_blank">Xem hướng dẫn ở đây.</a>
                    </p>
                 

                    <Segment.Group horizontal>
                            <Segment raised className={'okok mrz'}>
                                <div>
                                    <p>Thêm danh mục:</p>
                                    <div className='iih'>
                                        <div className='hhz'>
                                            <Dropdown
                                                placeholder='Chọn danh mục'
                                                fluid
                                                search
                                                selection
                                                options={data.category_list}
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
                                    <p>Thêm trang:</p>
                                    <div>
                                        <div className='hhz'>
                                            <Dropdown
                                                placeholder='Chọn trang'
                                                fluid
                                                search
                                                selection
                                                options={data.page_list}
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
                                    <p>Thêm đường dẫn tùy chọn:</p>
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

               <Segment raised className='okok'>
                    <Header as='h4' className='clh'>*Chèn nút liên hệ: </Header>
                    <p>
                        Bạn thích tạo các nút liên hệ ví dụ như gọi điện, liên hệ facebook, Zalo,... thì đây là phần cài đặt cho nó đấy nhé! <a href=''  target="_blank">Xem hướng dẫn ở đây.</a>
                    </p>
                    <Form>
                        <TextArea 
                            rows={4}
                            placeholder='Chèn code hiển thị ở đây.'
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
                        <Header as='h4' className='clh'>*{lang.ADVANCED_SETING}:</Header>
                        <p>
                            Dưới đây là phần chèn code cho tất cả các trang. Thích hợp sử dụng cho chèn code google analytic, google ads, facebook,...
                        </p>
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
                       <Button negative onClick={this.click_action_no}>{lang.NO}</Button>
                       <Button positive onClick={this.click_action_yes} >{lang.UPDATE}</Button>
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
}
export default SetupPage;