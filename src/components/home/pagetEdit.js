import React, { Component } from 'react';
import {Link} from "react-router-dom";
// import FileMedia from '../lib/fileMedia';
import { Button} from 'semantic-ui-react';
import {
    test_get,
    test_post,
    get_posts_by_search,
    get_posts_by_category_id,
    action_create_or_edit_post,
    action_remove_post_by_id,
    get_all_category,
    action_remove_category_by_id,
    action_create_or_edit_category,
    action_create_or_edit_page,
    get_post_infor_by_id,
    get_all_page,
    action_remove_page_by_id
} from '../lib/constants/axios'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            open:true            
        }
    }
    // return img
 async   componentDidMount(){}
    // set
    render() {
        return (
            <React.Fragment>
                {/* <Button basic color='blue' size='small' className='btn-mgb'
                    onClick={()=>this.setState({open:true})}
                ><i className="fas fa-photo-video vv"></i>Add Media</Button>
                <FileMedia
                    multi_select={true}
                    open={this.state.open}
                    type_media={'this.state.type_media'}
                    return_image={this.return_image}
                    set_open_media={(open)=>this.setState({open:open})}
                /> */}
            </React.Fragment>
        )
    }
    //
    // return_image=(data)=>{
    //      console.log("🚀 ~ file: pagetEdit.js ~ line 103 ~ Home ~ data", data)
    // }
    //

}
export default Home;