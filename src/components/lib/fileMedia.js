import React, { Component  } from 'react';
import { Button,Segment,Input,Modal,Header,Image} from 'semantic-ui-react';
import * as lang from './constants/language';

class FileMedia extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // open:false,
            imgs_list:[],
            selected_list:[],
            show_button_more:true,
            test:5
        }
    }

    setOpen=(status)=>{
      this.props.set_open_media(status);
        this.setState({
            selected_list:[],
        })
    }
    //
    componentDidMount(){
      // [todo] get data first
      this.setState({
        imgs_list:[
          {
            id:1,
            url:'https://anbinhnew.com/wp-content/uploads/2021/01/ban-hoc-sinh-nhua-cho-be-4-300x300.jpg',
            title:'title 1'
          },
          {
            id:2,
            url:'https://anbinhnew.com/wp-content/uploads/2021/01/Giuong-ngu-sat-kieu-moi-gia-re-300x300.jpg',
            title:'title 2'
          },
          {
            id:3,
            url:'https://anbinhnew.com/wp-content/uploads/2021/01/ban-hoc-sinh-go-tu-nhien-gia-re-1-300x300.jpg',
            title:'title 3'
          },
          {
            id:4,
            url:'https://react.semantic-ui.com/images/wireframe/image-square.png',
            title:'title 4'
          },
          {
            id:5,
            url:'https://react.semantic-ui.com/images/wireframe/image-square.png',
            title:'title 5'
          },
          {
            id:6,
            url:'https://react.semantic-ui.com/images/wireframe/image-square.png',
            title:'title 6'
          },
          {
            id:7,
            url:'https://react.semantic-ui.com/images/wireframe/image-square.png',
            title:'title 7'
          }
        ]
      })
    }
    //
    show_imgs=(imgs_list,multi_select)=>{
      let {selected_list} =this.state;
      let result=[];
      imgs_list.forEach((e,i) => {
        let is_selecte=false;
        selected_list.forEach(element => {
          if(e.id==element.id){
            is_selecte=true;
          }
        });
        result.push(<div className={`wp-img ${is_selecte?'check-img':''}`} key={i}>
          <img style={{width:"80px"}} src={e.url} 
            onClick={()=>this.action_click_img(e,multi_select)}
          />
          <i className={`fa-solid fa-trash-can delez ${is_selecte?'show':''}`}
            onClick={()=>this.action_delete_img(e)}
          ></i>
        </div>)
      });
      return result;
    }
    //
    action_click_img=(e,multi_select)=>{
      let {selected_list} =this.state;
      if(multi_select){
        let is_selected=false; let index=null;
        selected_list.forEach((element,x) => {
          if(e.id==element.id){
            is_selected=true;
            index=x;
          }
        });
        //
        if(is_selected){// da co => xoa
          selected_list.splice(index,1);
        }else{
          selected_list.push(e);
        }
      }else{
        let is_selected=false; let index=null;
        selected_list.forEach((element,x) => {
          if(e.id==element.id){
            is_selected=true;
            index=x;
          }
        });
        //
        if(is_selected){// da co => xoa
          selected_list.splice(index,1);
        }else{
          selected_list[0]=(e);
        }
      }
      this.setState({
        selected_list:selected_list
      })
    }
    // delete img [todo]
    action_delete_img=(e)=>{
      let {selected_list,imgs_list} =this.state;
      if (window.confirm(`${lang.DELETE_IMAGE}`) == true) {
          // test xoa hinh anh local list seletect and list all img
          let is_selected=false; let index=null;
          selected_list.forEach((element,x) => {
            if(e.id==element.id){
              is_selected=true;
              index=x;
            }
          });
          if(is_selected){// da co => xoa
            selected_list.splice(index,1);
          }
          // list all
          let is_select=false; let indexAll=null;
          imgs_list.forEach((element,x) => {
            if(e.id==element.id){
              is_select=true;
              indexAll=x;
            }
          });
          if(is_select){// da co => xoa
            imgs_list.splice(indexAll,1);
          }
          //
          this.setState({
            selected_list:selected_list,
            imgs_list:imgs_list
          })
      }
    }
    // click see more [todo]
    action_click_more=()=>{
      let {imgs_list,test}=this.state;
      let data_demo_server=[
        {
          id:test*100-1,
          url:'https://react.semantic-ui.com/images/wireframe/image-square.png',
          title:'title 1'
        },
        {
          id:test*100-2,
          url:'https://react.semantic-ui.com/images/wireframe/image-square.png',
          title:'title 2'
        },
        {
          id:test*100-3,
          url:'https://react.semantic-ui.com/images/wireframe/image-square.png',
          title:'title 3'
        },
        {
          id:test*100-4,
          url:'https://react.semantic-ui.com/images/wireframe/image-square.png',
          title:'title 4'
        },
        {
          id:test*100-5,
          url:'https://react.semantic-ui.com/images/wireframe/image-square.png',
          title:'title 5'
        },
        {
          id:test*100-6,
          url:'https://react.semantic-ui.com/images/wireframe/image-square.png',
          title:'title 6'
        },
        {
          id:test*100-7,
          url:'https://react.semantic-ui.com/images/wireframe/image-square.png',
          title:'title 7'
        }
      ]
      if(test<=0) data_demo_server=[];
      if(data_demo_server.length>0){
        imgs_list=[...imgs_list,...data_demo_server];
        this.setState({
          imgs_list:imgs_list,
          show_button_more:test-1>0?true:false,
          test:test-1,
        })
      }
    }
    // click ok media
    click_ok_media=()=>{
      let {selected_list} =this.state;
      this.props.return_image(selected_list,this.props.type_media);
      this.setOpen(false)
    }

    render() {
        const { imgs_list,show_button_more} =  this.state;
        const multi_select= this.props.multi_select;
        return (
        <Modal
            onClose={() => this.setOpen(false)}
            onOpen={() => this.setOpen(true)}
            open={this.props.open}
            // trigger={<Button basic color='blue' size='small' className='btn-mgb'><i className="fas fa-photo-video vv"></i>Add Media</Button>}
        >
            <Modal.Header>{lang.IMAGE_MEDIA} 
            <div className='upload-btn-wrapper'>
              <Button size='small'  className='btnz'>
                Upload&nbsp;
                <i className="fa-solid fa-folder-open"></i>
              </Button>
              <input type="file" id="myFile" name="filename" className='btn-upl' multiple/>
            </div>
            </Modal.Header>
            <Modal.Content >
              {this.show_imgs(imgs_list,multi_select)}
              <div className='wrap-more'>
                {show_button_more&&<a 
                  className='see_more'
                  primary 
                  onClick={this.action_click_more}
                >{lang.SEE_MORE}</a>}
              </div>
            </Modal.Content>
            <Modal.Actions>
              <Button onClick={() => this.setOpen(false)}>Cancel</Button>
              <Button onClick={this.click_ok_media} positive>
                Ok
              </Button>
            </Modal.Actions>
          </Modal>
        )
    }
    data_contents=(data_content)=>{
        this.setState({
            data_content:data_content
        })
    }
}
export default FileMedia;