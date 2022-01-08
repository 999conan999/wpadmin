import React, { Component } from 'react';
import { Button,Segment,Input,Select,Table,Label,Menu,Modal,Header} from 'semantic-ui-react';

class PostEdit extends Component {
    constructor (props) {
        super(props)
        this.state = {
            listCategory:[
                { key: 'all', text: 'All', value: 'all' },
                { key: 'articles', text: 'Articles', value: 'articles' },
                { key: 'products', text: 'Products', value: 'products' },
            ],
            openModalDelete:false
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
    render() {
        let {listCategory,openModalDelete} =this.state;
        return (
            <React.Fragment>
                <Segment.Group horizontal>
                    <Segment>
                        <Button primary>
                            <i className="fas fa-plus addcss"></i>
                            Create Post
                        </Button>
                    </Segment>
                    <Segment></Segment>
                    <Segment>
                        <Input type='text' placeholder='Search...' action>
                            <input />
                            <Select compact options={listCategory} defaultValue='articles' />
                        </Input>
                    </Segment>    
                </Segment.Group>
                {/* listpost */}
                <Table color={"red"} selectable>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell >Title</Table.HeaderCell>
                        <Table.HeaderCell width="1">Status</Table.HeaderCell>
                        <Table.HeaderCell width="3">Category</Table.HeaderCell>
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
                            <Label className='edit-css'><i class="fas fa-edit"></i> edit</Label>
                            <Label className='delete-css' onClick={()=>this.clickDeletePost()}><i class="fas fa-trash-alt"></i> delete</Label>
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
                            <Label className='edit-css'><i class="fas fa-edit"></i> edit</Label>
                            <Label className='delete-css' onClick={()=>this.clickDeletePost()}><i class="fas fa-trash-alt"></i> delete</Label>
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
                            <Label className='edit-css'><i class="fas fa-edit"></i> edit</Label>
                            <Label className='delete-css' onClick={()=>this.clickDeletePost()}><i class="fas fa-trash-alt"></i> delete</Label>
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
                    <Header ><i class="fas fa-trash-alt cds"></i> Delete this post</Header>
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

            </React.Fragment>
        )
    }
}
export default PostEdit;