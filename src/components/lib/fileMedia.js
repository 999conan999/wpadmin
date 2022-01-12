import React, { Component  } from 'react';
import { Button,Segment,Input,Modal,Header,Image} from 'semantic-ui-react';
import EditorWrap from './editorwrap';

class FileMedia extends Component {
    constructor (props) {
        super(props)
        this.state = {
            open:true
        }
    }

    setOpen=(status)=>{
        this.setState({
            open:status
        })
    }
    //
    render() {
        const { open } =  this.state;
        return (
        <Modal
            onClose={() => this.setOpen(false)}
            onOpen={() => this.setOpen(true)}
            open={open}
            trigger={<Button>Show Modal</Button>}
          >
            <Modal.Header>Image <Button size='small'  className='btn-upl'><i className="fas fa-file-upload iconupload"></i></Button></Modal.Header>
            <Modal.Content >
              
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img check-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wp-img'><img style={{width:"80px"}} src='https://react.semantic-ui.com/images/wireframe/image-square.png'  /></div>
              <div className='wrap-more'>
                <Button primary>More...</Button>
              </div>
            </Modal.Content>
            <Modal.Actions>
              <Input label='Title Imge' placeholder='...' />
              <Button onClick={() => this.setOpen(false)}>Cancel</Button>
              <Button onClick={() => this.setOpen(false)} positive>
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