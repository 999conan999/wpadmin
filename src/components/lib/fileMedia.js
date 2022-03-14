import React, { Component  } from 'react';
import { Button,Segment,Input,Modal,Header,Image} from 'semantic-ui-react';
import * as lang from './constants/language';
import { toast } from 'react-toastify';
import {
  upload_core,
  get_imgs,
  action_remove_img_by_id
} from '../lib/constants/axios';
const quantity=30;
class FileMedia extends Component {
    constructor (props) {
        super(props)
        this.state = {
            // open:false,
            imgs_list:[],
            selected_list:[],
            show_button_more:true,
            show_more:false,
            page:0
        }
    }

    setOpen=(status)=>{
      this.props.set_open_media(status);
        this.setState({
            selected_list:[],
        })
    }
    //
   async componentDidMount(){

      let a= await get_imgs(0);
      let show_more=true;
      if(a.length>0){
        if(a.length<quantity) show_more=false;
        this.setState({
          imgs_list:a,
          show_more:show_more,
          page:1
        })
      }
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
          <div className={` delez ${is_selecte?'show':''}`}>
          <i className={`fa-solid fa-circle-xmark`}
            onClick={()=>this.action_delete_img(e)}
          ></i></div>
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
    action_delete_img=async(e)=>{
      let {selected_list,imgs_list} =this.state;
      if (window.confirm(`${lang.DELETE_IMAGE}`) == true) {
        let a=await action_remove_img_by_id(e.id);
          // test xoa hinh anh local list seletect and list all img
          if(a.status){
            toast.success(lang.SUCCESS_DELETE,{theme: "colored"})
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
          }else{
            if(a.permisstion_type=="administrator"||a.permisstion_type=="editor"||a.permisstion_type=="author"){
                toast.error(lang.ERRO_DELETE,{theme: "colored"});
            }else{
                toast.info(lang.NOT_PERMISSION_DELETE,{theme: "colored"})
            }
          }

      }
    }
    // click see more [todo]
    action_click_more=async()=>{
      let {imgs_list,page}=this.state;
      let a= await get_imgs(page);
      if(a!=null){
        let show_more=true;
        if(a.length<quantity) show_more=false;
        if(a.length>0){
          imgs_list=[...imgs_list,...a];
          this.setState({
            page:page+1,
            show_more:show_more,
            imgs_list:imgs_list
          })
        }else{
          this.setState({
            page:page+1,
            show_more:false,
          })
        }
      }else{
        this.setState({
          page:page+1,
          show_more:false,
        })
      }

    }
    // click ok media
    click_ok_media=()=>{
      let {selected_list} =this.state;
      this.props.return_image(selected_list,this.props.type_media);
      this.setOpen(false)
    }
    //
    handleChangeFile=async(e)=>{
      let listFile= e.target.files;
      //
      if(listFile.length>0){
        let a= await upload_core(listFile);
        let {imgs_list}=this.state;
        imgs_list=[...a,...imgs_list];
        this.setState({
          imgs_list:imgs_list
        })
      }

      
      //
    }

    render() {
        const { imgs_list,show_button_more,show_more} =  this.state;
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
              <input type="file" id="myFile" name="filename" className='btn-upl' multiple
                 onChange={this.handleChangeFile.bind(this)} 
              />
            </div>
            </Modal.Header>
            <Modal.Content >
              {this.show_imgs(imgs_list,multi_select)}

              {show_more&&<div className='wrap-more'>
                {show_button_more&&<a 
                  className='see_more'
                  primary 
                  onClick={this.action_click_more}
                >{lang.SEE_MORE}</a>}
              </div>}
              
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