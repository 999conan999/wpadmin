import React, { Component  } from 'react';
import { Button,Segment,Input,Modal,Header,Dropdown} from 'semantic-ui-react';
import EditorWrap from './editorwrap';
const stateOptions = [
    { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  ]
class ModalEditPost extends Component {
    constructor (props) {
        super(props)
        this.state = {
            activeItem:"posts",
            data_content:""
        }
    }

    
    render() {
        const { activeItem,data_content } =  this.state;
        return (
            <Modal
                size={"fullscreen"}
                open={true}
                // onClose={() => dispatch({ type: 'close' })}
            >
                <Modal.Header className='blackw'>Create Post/ Edit Post</Modal.Header>
                <Modal.Content className='blackw'>
                    <Segment raised className='okok'>
                        <Header as='h4'>Category:</Header>
                        <Dropdown
                            placeholder='Category'
                            fluid
                            multiple
                            search
                            selection
                            options={stateOptions}
                        />
                    </Segment>
                    <Segment raised>
                        <Header as='h4'>Title:</Header>
                        <Input placeholder='Title' fluid  size='big' />
                    </Segment>
                    <Segment raised>
                        <Header as='h4'>Content post:</Header>
                        <Button basic color='blue' size='small' className='btn-mgb'><i className="fas fa-photo-video vv"></i>Add Media</Button>
                        <EditorWrap
                            data_contents={this.data_contents}
                            data_content={data_content}
                        />
                    </Segment>
                    <Segment raised>
                        <Header as='h4'>Add thumnail:</Header>
                        <Button basic color='blue' size='small' className='btn-mgb'><i className="fas fa-photo-video vv"></i>Add Media</Button>
                    </Segment>
                </Modal.Content>
                <Modal.Actions>
                <Button negative >No</Button>
                <Button positive >Yes</Button>
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
export default ModalEditPost;