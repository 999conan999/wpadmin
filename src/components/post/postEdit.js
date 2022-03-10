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
            openModalDelete:false,
            listCategory:[
                { key: -1, text: 'All', value: -1 },
                { key: 1, text: 'Giường sắt', value: 1 },
                { key: 2, text: 'Giường gỗ', value: 2 },
            ],
            selected_category_id:-1,
            seleted_delete:{
                id:-1,
                title:'ERROR'
            },
            key_search:'',
            data_list_post:[
                {
                    id:1,
                    title:'title 1',
                    status:'publish',
                    category:['danh muc 1'],
                    url:'http://localhost:3000/',
                    author_name:"danh 1",
                    thumnail_url:'https://anbinhnew.com/wp-content/uploads/2021/01/ban-hoc-sinh-go-tu-nhien-gia-re-1-300x300.jpg'
                },
                {
                    id:2,
                    title:'title 2',
                    status:'publish',
                    category:['danh muc f','danh muc h','theme wordpres'],
                    url:'http://localhost:3000/',
                    author_name:"danh 1",
                    thumnail_url:'https://anbinhnew.com/wp-content/uploads/2021/01/ban-hoc-sinh-go-tu-nhien-gia-re-1-300x300.jpg'
                },
                {
                    id:3,
                    title:'title 3',
                    status:'publish',
                    category:['danh muc 3','danh muc 3','theme wordpres 3'],
                    url:'http://localhost:3000/',
                    author_name:"danh 1",
                    thumnail_url:'xfc'
                },
                {
                    id:4,
                    title:'title 4',
                    status:'private',
                    category:['danh muc 4','danh muc4','theme wordpres'],
                    url:'http://localhost:3000/',
                    author_name:"danh 1",
                    thumnail_url:'https://anbinhnew.com/wp-content/uploads/2021/01/ban-hoc-sinh-go-tu-nhien-gia-re-1-300x300.jpg'
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
    // search keywork
    action_click_search=()=>{
        let {key_search}=this.state;
        alert(key_search)
    }
    // selected category
    action_selecte_category=(e,data)=>{
        let id=data.value;
        alert(id);        
        this.setState({
            selected_category_id:id
        })
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
    // Create post
    action_click_create_post=(id)=>{
        this.setState({
            id_post:id,
            open:true
        })
    }
    // yes delete post
    action_yes_delete_post=()=>{
        let {seleted_delete}=this.state;
        console.log("🚀 ~ file: postEdit.js ~ line 93 ~ PostEdit ~ seleted_delete", seleted_delete)
        //[todo]
        this.setState({
            openModalDelete:false
        })
    }
    // show post
    show_post_list=(data)=>{
        let result=[];
        data.forEach((e,i) => {
            //
            let rs=[]
            e.category.forEach((element,j) => {
                rs.push( <span className='catezz' key={j}>{element}</span>)
            });
            //
            result.push(
                <Table.Row key={i} className='danhvt'>
                    <Table.Cell><b><a href={e.url}  target="_blank">{e.title} <i className="fa-solid fa-arrow-up-right-from-square" style={{'fontSize':'10px'}}></i></a></b></Table.Cell>
                    <Table.Cell><img src={e.thumnail_url} height="50px"/></Table.Cell>
                    <Table.Cell><span >{e.author_name}</span></Table.Cell>
                    <Table.Cell><span className={e.status=='private'?'priva':'publ'}>{e.status}</span></Table.Cell>
                    <Table.Cell>

                        {rs}
                    </Table.Cell>
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
        let {listCategory,openModalDelete,id_post,open,data_list_post,seleted_delete} =this.state;
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
                        <div className="ui action input">
                            <input type="text" placeholder={lang.TITLE}
                                value={this.state.key_search}
                                onChange={(e)=>this.setState({key_search:e.target.value})}
                            />
                        <button className="ui button bdr" 
                            onClick={this.action_click_search}
                        >{lang.SEARCH}</button></div>
                    </Segment>   
                    <Segment>
                        <Select  
                            options={listCategory}
                            defaultValue={-1} 
                            onChange={this.action_selecte_category}
                        />
                    </Segment> 
                </Segment.Group>
                {/* listpost */}
                <Table color={"red"} >
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell >{lang.TITLE}</Table.HeaderCell>
                        <Table.HeaderCell width="2">Ảnh đại diện</Table.HeaderCell>
                        <Table.HeaderCell width="2">Tác giả</Table.HeaderCell>
                        <Table.HeaderCell width="1">{lang.STATUS}</Table.HeaderCell>
                        <Table.HeaderCell width="3">{lang.CATEGORY}</Table.HeaderCell>
                        <Table.HeaderCell width="3">{lang.EDIT_DEL}</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.show_post_list(data_list_post)}
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
                        <Button color='green' onClick={this.action_yes_delete_post}>
                         <i className="fas fa-check cds"></i> {lang.OK_DELETE}
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
    //

}
export default PostEdit;