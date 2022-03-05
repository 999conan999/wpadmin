import React, { Component } from 'react';
import { Segment,Header,Button,Message,Form,TextArea,Input,Dropdown } from 'semantic-ui-react';
import Sortable from '../lib/sortable';
import FileMedia from '../lib/fileMedia';
import * as lang from '../lib/constants/language'
class SetupPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            treeData:[{title:'text 1'},{title:'text 1'},{title:'text 3'},{title:'text 4'}],
            open:false,
            type_media:'',// addIcon,addlogo,addBtn
            data:{
                icon_url:'',
                logo_url:'',
            }

        }
    }
    //
    return_image=(arr_img)=>{
        let {type_media,data}=this.state;
        console.log("🚀 ~ file: SetupPage.js ~ line 18 ~ SetupPage ~ arr_img", arr_img)
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
    render() {
        let {data}=this.state;
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
                        <i class="fa-solid fa-x xxz zzx" onClick={this.action_delete_img_icon}></i>
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
                        <i class="fa-solid fa-x xxz zzx" onClick={this.action_delete_img_logo}></i>
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
                                                options={[{key:1,text:'giường sắt',value:1},{key:2,text:'giường gỗ',value:2},]}
                                            />
                                        </div>
                                        <div className='hhv'>
                                            <Button icon className='add-da' onClick={this.props.action_add_schema}>
                                                <i class="fa-solid fa-plus"></i>
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
                                                options={[{key:1,text:'giường sắt',value:1},{key:2,text:'giường gỗ',value:2},]}
                                            />
                                        </div>
                                        <div className='hhv'>
                                            <Button icon className='add-da' onClick={this.props.action_add_schema}>
                                                <i class="fa-solid fa-plus"></i>
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
                                                // value={data_source.title_post}
                                                // onChange={this.action_change_title}
                                            />
                                            <span>Url:</span>
                                            <Input 
                                                placeholder='http://google.com/xyz' fluid  size='small'
                                                // value={data_source.title_post}
                                                // onChange={this.action_change_title}
                                            />
                                        </div>
                                        <div className='hhv'>
                                            <Button icon className='add-da' onClick={this.props.action_add_schema}>
                                                <i class="fa-solid fa-plus"></i>
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
                            // value={data_source.descriptions}
                            // onChange={this.action_change_descriptions}
                        />
                    </Form>
                    <div className='wrap-kk'>
                        <div className='wrap-bb'>
                            <span>Giá trị 1:</span>
                            <div className='inputT'>
                                <Input 
                                    size='small' 
                                    placeholder='Nhập giá trị 1' fluid 
                                    
                                    // value={data_source.title_post}
                                    // onChange={this.action_change_title}
                                />
                            </div>
                            <div className='inputM'>
                                <Button basic color='blue' size='small' className='btn-mgb'
                                    // onClick={()=>this.setState({open:true,type_media:'add_img_thumnail',multi_select:false})}
                                ><i className="fas fa-photo-video vv"></i>Add Media</Button>
                            </div>
                        </div>
                        {/*  */}
                        <div className='wrap-bb'>
                            <span>Giá trị 2:</span>
                            <div className='inputT'>
                                <Input 
                                    size='small' 
                                    placeholder='Nhập giá trị 2' fluid 
                                    
                                    // value={data_source.title_post}
                                    // onChange={this.action_change_title}
                                />
                            </div>
                            <div className='inputM'>
                                <Button basic color='blue' size='small' className='btn-mgb'
                                    // onClick={()=>this.setState({open:true,type_media:'add_img_thumnail',multi_select:false})}
                                ><i className="fas fa-photo-video vv"></i>Add Media</Button>
                            </div>
                        </div>
                        {/*  */}
                        <div className='wrap-bb'>
                            <span>Giá trị 3:</span>
                            <div className='inputT'>
                                <Input 
                                    size='small' 
                                    placeholder='Nhập giá trị 3' fluid 
                                    
                                    // value={data_source.title_post}
                                    // onChange={this.action_change_title}
                                />
                            </div>
                            <div className='inputM'>
                                <Button basic color='blue' size='small' className='btn-mgb'
                                    // onClick={()=>this.setState({open:true,type_media:'add_img_thumnail',multi_select:false})}
                                ><i className="fas fa-photo-video vv"></i>Add Media</Button>
                            </div>
                        </div>
                        {/*  */}
                        <Button icon className='add-da' onClick={this.props.action_add_schema}>
                             <i class="fa-solid fa-plus"></i>
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
                                    // value={data_source.code_header}
                                    // onChange={this.action_change_code_header}
                                />
                            </Form>
                        </Segment>
                        <Segment raised className='okok'>
                            <Header as='h4'>Body:</Header>
                            <Form>
                                <TextArea placeholder='Code here.' rows={10}
                                    // value={data_source.code_body}
                                    // onChange={(e,data)=>this.props.action_change_code_body(data.value)}
                                />
                            </Form>
                        </Segment>
                        <Segment raised className='okok'>
                            <Header as='h4'>Footer:</Header>
                            <Form>
                                <TextArea placeholder='Code more' rows={10}
                                    // value={data_source.code_footer}
                                    // onChange={(e,data)=>this.props.action_change_code_footer(data.value)}
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