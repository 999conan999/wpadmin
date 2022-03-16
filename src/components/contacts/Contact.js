import React, { Component } from 'react';
import { Table,Icon,Label } from 'semantic-ui-react';
import * as lang from '../lib/constants/language';
import { toast } from 'react-toastify';
import {action_update_data_theme} from '../lib/constants/axios';
import {fs_is_value_null} from '../lib/constants/fs'
class Contact extends Component {
    constructor (props) {
        super(props)
        this.state = {
        }
    }
    //
    async componentDidMount(){
        if(this.props.notify>0){
            let a=await action_update_data_theme({
                keyz:'contact_count',
                valuez:this.props.coun_contact_now
            });
            if(a.status){
                this.props.clear_notify_contact()
            }
        }
        //

    }
  
    render() {
        // let {}=this.state;
        return (
            <React.Fragment>
                <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width="2">Tên</Table.HeaderCell>
                        <Table.HeaderCell width="2">Số điện thoại</Table.HeaderCell>
                        <Table.HeaderCell width="3">Địa chỉ</Table.HeaderCell>
                        <Table.HeaderCell width="4">Đơn hàng</Table.HeaderCell>
                        <Table.HeaderCell width="2">Ghi chú</Table.HeaderCell>
                        <Table.HeaderCell width="2">Tổng tiền</Table.HeaderCell>
                        <Table.HeaderCell width="1">Xóa</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row  className='danhvt'>
                        <Table.Cell>No Name Specified</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                        <Table.Cell>None</Table.Cell>
                        <Table.Cell>
                            <Label className='delete-css'><i className="fas fa-trash-alt"></i> {lang.DELETE}</Label>
                        </Table.Cell>
                    </Table.Row>
                    </Table.Body>
                </Table>
            </React.Fragment>
        )
    }


}
export default Contact;