import React, { Component } from 'react';
import { Segment,Header,Button,Message,Form } from 'semantic-ui-react'
class SetupPage extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <React.Fragment>
                <Message  color='brown'>
                    <Message.Header>Chú thích:</Message.Header>
                    <Message.List items={[
                          'Mọi thứ cài đặt ở đây, nó sẽ được hiển thị trên tất cả các trang.',
                          'Hỗ trợ chèn code google analytic, facebook,... mọi thứ các bạn muốn.',
                          'Hỗ trợ chèn code thanh liên hệ.',
                    ]} />
                </Message>
               <Segment raised className='okok'>
                    <Header as='h4'>Chọn icon cho trang web: </Header>
                    <Button basic color='blue' size='small' className='btn-mgb'
                        // onClick={()=>this.setState({open:true,type_media:'add_img_thumnail',multi_select:false})}
                    ><i className="fas fa-photo-video vv"></i>Add Media</Button>
                </Segment>












                {/* <Segment raised  className={'okok'}>
                    <Header as='h4'>Cài đặt thông tin thương hiệu: </Header>
                    <p>
                        Ở mục này, sẽ thiết lập hiển thị THƯƠNG HIỆU của trang web cho tất cả các trang. Các bạn lưu ý nhé !. 
                    </p>
                    <Segment.Group horizontal className={'okok'}>
                        <Segment raised className=''>
                            <Header as='h4'>Tiêu đề hiển thị cho trang web: </Header>
                            <Form>
                                <TextArea 
                                    rows={2}
                                    placeholder='google.com <<hoặc>> Công ty dịch vụ Google |...'
                                    // value={data_source.descriptions}
                                    // onChange={this.action_change_descriptions}
                                />
                            </Form>
                        </Segment>
                        <Segment raised className=''>
                            <Header as='h4'>Mô tả ngắn cho trang web của bạn: </Header>
                            <Form>
                                <TextArea 
                                    rows={2}
                                    placeholder='Công ty chuyên cung cấp dịch vụ mạng xã hội, SEO, |...'
                                    // value={data_source.descriptions}
                                    // onChange={this.action_change_descriptions}
                                />
                            </Form>
                        </Segment>
                    </Segment.Group>
                 
                </Segment> */}
            </React.Fragment>
        )
    }
}
export default SetupPage;