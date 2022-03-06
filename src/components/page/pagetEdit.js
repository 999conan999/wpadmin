import React, { Component } from 'react';
import { Button,Segment,Input,Select,Table,Label,Menu,Modal,Header,Dropdown} from 'semantic-ui-react';
import ControlModelPage from './controlModelPage';
import * as lang from '../lib/constants/language'

class PostEdit extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id_page:-1,
            open:false,
            openModalDelete:false,
            seleted_delete:{
                id:-1,
                title:'ERROR'
            },
            data_list_page:[
                {
                    id:1,
                    title:'title 1',
                    status:'publish',
                    url:'http://localhost:3000/'
                },
                {
                    id:2,
                    title:'title 2',
                    status:'publish',
                    url:'http://localhost:3000/'
                },
                {
                    id:3,
                    title:'title 3',
                    status:'publish',
                    url:'http://localhost:3000/'
                },
                {
                    id:4,
                    title:'title 4',
                    status:'private',
                    url:'http://localhost:3000/'
                },
            ]

        }
    }
    //********************************API */
    componentDidMount(){
        //[todo] get all post first here and all category
        // 
    }
    // get more post
    action_click_more=()=>{
        alert('Click xem them')
    }


    //******************************** */
    // modal delete
    setOpenModalDelete=(st)=>{
        this.setState({
            openModalDelete:st
        })
    }
    // delete post
    clickDeletePost=(id,title)=>{
        this.setState({
            openModalDelete:true,
            seleted_delete:{
                id:id,
                title:title
            }
        })
    }
    action_click_edit=(id)=>{
        this.setState({
            id_page:id,
            open:true
        })
    }
    // close modal edit
    close_model_edit=()=>{
        this.setState({
            open:false
        })
    }
    // Create post
    action_click_create_page=(id)=>{
        this.setState({
            id_page:id,
            open:true
        })
    }
    // yes delete post
    action_yes_delete_page=()=>{
        let {seleted_delete}=this.state;
        console.log("🚀 ~ file: postEdit.js ~ line 93 ~ PostEdit ~ seleted_delete", seleted_delete)
        //[todo]
        this.setState({
            openModalDelete:false
        })
    }
    // show post
    show_page_list=(data)=>{
        let result=[];
        data.forEach((e,i) => {

            //
            result.push(
                <Table.Row key={i} className='danhvt'>
                    <Table.Cell><b><a href={e.url}  target="_blank">{e.title} <i className="fa-solid fa-arrow-up-right-from-square" style={{'fontSize':'10px'}}></i></a></b></Table.Cell>
                    <Table.Cell><span className={e.status=='private'?'priva':'publ'}>{e.status}</span></Table.Cell>
                    <Table.Cell>
                        <Label className='edit-css' onClick={()=>this.action_click_edit(e.id)}><i className="fas fa-edit"></i> {lang.EDIT}</Label>
                        <Label className='delete-css' onClick={()=>this.clickDeletePost(e.id,e.title)}><i className="fas fa-trash-alt"></i> {lang.DELETE}</Label>
                    </Table.Cell>
                </Table.Row>
            )
        });
        return result;
    }

    //************************ */
    render() {
        let {openModalDelete,id_page,open,data_list_page,seleted_delete} =this.state;
        return (
            <React.Fragment>
                <Segment.Group horizontal className='assd'>
                    <Segment>
                        <Button primary onClick={()=>this.action_click_create_page(-2)}>
                            <i className="fas fa-plus addcss"></i>
                            {lang.CREATE_POST_NEW}
                        </Button>
                    </Segment>
                    <Segment className='bol0px'></Segment>
                </Segment.Group>
                {/* listpost */}
                <Table color={"blue"} >
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell >{lang.TITLE}</Table.HeaderCell>
                        <Table.HeaderCell width="1">{lang.STATUS}</Table.HeaderCell>
                        <Table.HeaderCell width="3">{lang.EDIT_DEL}</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.show_page_list(data_list_page)}
                    </Table.Body>

                    <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                            <span className='smo'
                                onClick={this.action_click_more}
                            >{lang.SEE_MORE}</span>
                        </Table.HeaderCell>
                    </Table.Row>
                    </Table.Footer>
                </Table>
                {/* Modal delete */}
                <Modal
                    onClose={() => this.setOpenModalDelete(false)}
                    open={openModalDelete}
                    >
                    <Header ><i className="fas fa-trash-alt cds"></i>{lang.DELETE_THIS_POST} {seleted_delete.title}</Header>
                    <Modal.Content>
                        <p>{lang.DO_YOU_SURE_DELETE_POST}</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='red' onClick={() => this.setOpenModalDelete(false)}>
                            <i className="fas fa-times cds"></i> {lang.NO_DELETE}
                        </Button>
                        <Button color='green' onClick={this.action_yes_delete_page}>
                         <i className="fas fa-check cds"></i> {lang.OK_DELETE}
                        </Button>
                    </Modal.Actions>
                </Modal>
                <ControlModelPage
                    open={open}
                    id_page={id_page}
                    close_model_edit={this.close_model_edit}
                />
            </React.Fragment>
        )
    }
    //

}
export default PostEdit;