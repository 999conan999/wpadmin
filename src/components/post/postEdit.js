import React, { Component } from 'react';
import { Button,Segment,Input,Select,Table,Label,Menu,Modal,Header,Dropdown} from 'semantic-ui-react';
import ControlModelPost from './controlModelPost';
import * as lang from '../lib/constants/language'

class PostEdit extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id_post:-1,
            open:false,
            listCategory:[
                { key: 'all', text: 'All', value: 'all' },
                { key: 'articles', text: 'Articles', value: 'articles' },
                { key: 'products', text: 'Products', value: 'products' },
            ],
            openModalDelete:false,

        }
    }
    // modal delete
    setOpenModalDelete=(st)=>{
        this.setState({
            openModalDelete:st
        })
    }
    clickDeletePost=()=>{
        this.setState({
            openModalDelete:true
        })
    }
    //
    action_click_edit=(id)=>{
        this.setState({
            id_post:id,
            open:true
        })
    }
    // close modal edit
    close_model_edit=()=>{
        this.setState({
            open:false
        })
    }
    //
    // Create post
    action_click_create_post=(id)=>{
        this.setState({
            id_post:id,
            open:true
        })
    }
    //
    render() {
        let {listCategory,openModalDelete,id_post,open} =this.state;
        return (
            <React.Fragment>
                <Segment.Group horizontal className='assd'>
                    <Segment>
                        <Button primary onClick={()=>this.action_click_create_post(-2)}>
                            <i className="fas fa-plus addcss"></i>
                            {lang.CREATE_POST_NEW}
                        </Button>
                    </Segment>
                    <Segment className='bol0px'></Segment>
                    <Segment>
                        <div className="ui action input"><input type="text" placeholder="Search..."/><button className="ui button bdr">Search</button></div>
                    </Segment>   
                    <Segment>
                        <Select  options={listCategory} defaultValue='all' />
                    </Segment> 
                </Segment.Group>
                {/* listpost */}
                <Table color={"red"} selectable>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell >{lang.TITLE_POST}</Table.HeaderCell>
                        <Table.HeaderCell width="1">{lang.STATUS}</Table.HeaderCell>
                        <Table.HeaderCell width="3">{lang.CATEGORY}</Table.HeaderCell>
                        <Table.HeaderCell width="3">Edit/Delete</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>title 1 </Table.Cell>
                        <Table.Cell>Public</Table.Cell>
                        <Table.Cell>
                            <span className='catezz'>bed</span>
                            <span className='catezz'>category</span>
                            <span className='catezz'>theme wordpress</span>
                            <span className='catezz'>theme wordpress</span>
                            <span className='catezz'>theme wordpress</span>
                            <span className='catezz'>theme wordpress</span>
                        </Table.Cell>
                        <Table.Cell>
                            <Label className='edit-css' onClick={()=>this.action_click_edit(1)}><i className="fas fa-edit"></i> edit</Label>
                            <Label className='delete-css' onClick={()=>this.clickDeletePost()}><i className="fas fa-trash-alt"></i> delete</Label>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>title 1</Table.Cell>
                        <Table.Cell>Public</Table.Cell>
                        <Table.Cell>
                            <span className='catezz'>bed</span>
                            <span className='catezz'>category</span>
                            <span className='catezz'>theme wordpress</span>
                        </Table.Cell>
                        <Table.Cell>
                            <Label className='edit-css' onClick={()=>this.action_click_edit(2)}><i className="fas fa-edit"></i> edit</Label>
                            <Label className='delete-css' onClick={()=>this.clickDeletePost()}><i className="fas fa-trash-alt"></i> delete</Label>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>title 1</Table.Cell>
                        <Table.Cell>Public</Table.Cell>
                        <Table.Cell>
                            <span className='catezz'>bed</span>
                            <span className='catezz'>category</span>
                            <span className='catezz'>theme wordpress</span>
                        </Table.Cell>
                        <Table.Cell>
                            <Label className='edit-css' onClick={()=>this.action_click_edit(3)}><i className="fas fa-edit"></i> edit</Label>
                            <Label className='delete-css' onClick={()=>this.clickDeletePost()}><i className="fas fa-trash-alt"></i> delete</Label>
                        </Table.Cell>
                    </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                            <i className="fas fa-chevron-left"></i>
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                            <i className="fas fa-chevron-right"></i>
                            </Menu.Item>
                        </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                    </Table.Footer>
                </Table>
                {/* Modal delete */}
                <Modal
                    onClose={() => this.setOpenModalDelete(false)}
                    open={openModalDelete}
                    >
                    <Header ><i className="fas fa-trash-alt cds"></i> Delete this post</Header>
                    <Modal.Content>
                        <p>
                        Your inbox is getting full, would you like us to enable automatic
                        archiving of old messages?
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={() => this.setOpenModalDelete(false)}>
                            <i className="fas fa-times cds"></i> No
                        </Button>
                        <Button color='green' onClick={() => this.setOpenModalDelete(false)}>
                         <i className="fas fa-check cds"></i> Yes
                        </Button>
                    </Modal.Actions>
                </Modal>
                <ControlModelPost
                    open={open}
                    id_post={id_post}
                    close_model_edit={this.close_model_edit}
                />
            </React.Fragment>
        )
    }
}
export default PostEdit;