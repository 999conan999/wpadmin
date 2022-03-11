const axios = require('axios');

//chức năng: lấy dữ liệu các bài post theo tieu de hoac lay TAT CA cac bai post.
// đầu vào : url_get_post_list(*bắt buộc) + page(*bắt buộc) + data_search ( biến này ='*' => get all posts; còn có giá trị => search title)
// return_err : return_err => ARRAY ~~ OBJECT ; cai nay la sau khi gap loi se tra be mang rong hoac obj rong
const url_get_post_list='http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/stsop/tegStsop.php';
export async function get_posts_by_search(page,data_search){
    if(data_search=='*'){// get all post
        let url=url_get_post_list+'?page='+page;
        return await fs_axios_get(url,'ARRAY');
    }else{// get post search by title
        let url=url_get_post_list+'?page='+page+'&data_search='+data_search;
        return await fs_axios_get(url,'ARRAY');
    }
}
export async function get_posts_by_category_id(page,category_id){
        let url=url_get_post_list+'?page='+page+'&category_id='+category_id;
        return await fs_axios_get(url,'ARRAY');
}
//****************************** */
async function fs_axios_get(url,return_err){ // return_err => ARRAY ~~ OBJECT
    let data= await axios.get(url)
    .then(function (response) {
        return response.data
    })
    .catch(function (error) {
        console.log(error)
        // handle error
        if(return_err=='ARRAY') return [];
        return {};
    })
    .then(function (data) {
        return data;
    });
    return data;
}
//******************************  */
const url_create_edit_post='http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/stsop/etaercPtideP.php';
// data={
//     idN:-1, //==>id=-1 >> create || còn không là edit
//     titleS:'tiêu đề nè',
//     contentS:'đây là phần contents',
//     statusS:'publish',
//     categoryA:[24,1],
//     tagA:['thẻ tag 1',' thẻ tag 2'],
//     metaA:{
//         meta_shortdescript:'đây là mô tả ngăn của thẻ meta',
//         meta_code_header:'header code',
//         meta_code_body:'code body'
//     },
//     thumnailS:'https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-2-tang-cao-cap-mau-trang-dep-nhat-hcm-binh-duong-dong-nai.jpg'
// }
export async function action_create_or_edit_post(data){
    let data_send=new FormData();
    Object.keys(data).forEach(function(key) {
        if(key=='categoryA'){
            if(data[key].length>0){
                data[key].forEach(e => {
                    data_send.append('categoryA[]',e);
                });
            }else{
                    data_send.append('categoryA','null');
            }
        }else if(key=='tagA'){
            if(data[key].length>0){
                data[key].forEach(e => {
                    data_send.append('tagA[]',e);
                });
            }else{
                data_send.append('tagA','null');
            }
        }else if(key=='metaA'){
            if(Object.keys(data[key]).length>0){
                Object.keys(data[key]).forEach(function(key_meta) {
                    data_send.append('metaA['+key_meta+']',data[key][key_meta]);
                })
            }else{
                data_send.append('metaA','null');
            }
        }else{
            data_send.append(key,data[key]);
        }
    });
    //
    let response= axios.post(url_create_edit_post, 
        data_send
    )
    .then(function (response) {
        if(response.data.status=="ok"){
            return true
        }else{
            return false
        }
    })
    .catch(function (error) {
        console.log("🚀 ~ file: axios.js ~ line 97 ~ action_create_or_edit_post ~ error", error)
        return false
    })
    return response;
}
const url_remove_post='http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/stsop/eteled.php';
export async function action_remove_post_by_id(id){
    let data_send=new FormData();
    data_send.append('idN',id);
    let response= axios.post(url_remove_post, 
        data_send
    )
    .then(function (response) {
        if(response.data.status=="ok"){
            return true
        }else{
            return false
        }
    })
    .catch(function (error) {
        console.log("🚀 ~ file: axios.js ~ line 97 ~ action_create_or_edit_post ~ error", error)
        return false
    })
    return response;
}
//
const url_post_infor='http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/stsop/tegrofintsop.php?idN=';
export async function get_post_infor_by_id(id){
    let url=url_post_infor+id;
    return fs_axios_get(url,'OBJECT');
}
//
const url_category_infor='http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/cate/tegrofinCate.php?idN=';
export async function get_category_infor_by_id(id){
    let url=url_category_infor+id;
    return fs_axios_get(url,'OBJECT');
}
//
const url_get_all_category='http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/cate/tegCate.php';
export async function get_all_category(){
    return await fs_axios_get(url_get_all_category,'ARRAY');
}
const url_remove_category='http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/cate/eteled.php';
export async function action_remove_category_by_id(id){
    let data_send=new FormData();
    data_send.append('idN',id);
    let response= axios.post(url_remove_category, 
        data_send
    )
    .then(function (response) {
        if(response.data.status=="ok"){
            return true
        }else{
            return false
        }
    })
    .catch(function (error) {
        console.log("🚀 ~ file: axios.js ~ line 97 ~ action_create_or_edit_post ~ error", error)
        return false
    })
    return response;
}
//
const url_create_edit_category='http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/cate/etaercCtideC.php';
// {
//     idN:-1, // idN = -1 => new category || edit
//     nameS:'category api ok__update',
//     contentS:'noi dung cate ne ok__update',
//     parentIdN:4,
//     thumnailS:'anbinhnew.com ok__update',
//     metaA:{
//         meta_1:'day la the meta_1 ok__update',
//         meta_2:'day la the meta_2 ok__update',
//         meta_3:'day la the meta_3 ok__update',
//     }
// }
export async function action_create_or_edit_category(data){
    let data_send=new FormData();
    Object.keys(data).forEach(function(key) {
        if(key=='metaA'){
            if(Object.keys(data[key]).length>0){
                Object.keys(data[key]).forEach(function(key_meta) {
                    data_send.append('metaA['+key_meta+']',data[key][key_meta]);
                })
            }else{
                data_send.append('metaA','null');
            }
        }else{
            data_send.append(key,data[key]);
        }
    });
    //
    let response= axios.post(url_create_edit_category, 
        data_send
    )
    .then(function (response) {
        console.log("🚀 ~ file: axios.js ~ line 168 ~ response", response.data)
        if(response.data.status=="ok"){
            return true
        }else{
            return false
        }
    })
    .catch(function (error) {
        console.log("🚀 ~ file: axios.js ~ line 97 ~ action_create_or_edit_post ~ error", error)
        return false
    })
    return response;
}
//
const url_create_edit_page='http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/egap/etaercGtideG.php';
// data={
//     idN:-1, //==>id=-1 >> create || còn không là edit
//     titleS:'tiêu đề nè',
//     contentS:'đây là phần contents',
//     statusS:'publish',
//     metaA:{
//         meta_shortdescript:'đây là mô tả ngăn của thẻ meta',
//         meta_code_header:'header code',
//         meta_code_body:'code body'
//     },
//     thumnailS:'https://anbinhnew.com/wp-content/uploads/2021/01/giuong-sat-2-tang-cao-cap-mau-trang-dep-nhat-hcm-binh-duong-dong-nai.jpg'
// }
export async function action_create_or_edit_page(data){
    let data_send=new FormData();
    Object.keys(data).forEach(function(key) {
        if(key=='metaA'){
            if(Object.keys(data[key]).length>0){
                Object.keys(data[key]).forEach(function(key_meta) {
                    data_send.append('metaA['+key_meta+']',data[key][key_meta]);
                })
            }else{
                data_send.append('metaA','null');
            }
        }else{
            data_send.append(key,data[key]);
        }
    });
    //
    let response= axios.post(url_create_edit_page, 
        data_send
    )
    .then(function (response) {
        console.log("🚀 ~ file: axios.js ~ line 227 ~ response", response.data)
        if(response.data.status=="ok"){
            return true
        }else{
            return false
        }
    })
    .catch(function (error) {
        console.log("🚀 ~ file: axios.js ~ line 97 ~ action_create_or_edit_post ~ error", error)
        return false
    })
    return response;
}
//
const url_get_page_list='http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/egap/tegegap.php';
export async function get_all_page(page){
    let url=url_get_page_list+'?page='+page;
    return await fs_axios_get(url,'OBJECT');
}
//
const url_remove_page='http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/egap/eteled.php';
export async function action_remove_page_by_id(id){
    let data_send=new FormData();
    data_send.append('idN',id);
    let response= axios.post(url_remove_page, 
        data_send
    )
    .then(function (response) {
        console.log("🚀 ~ file: axios.js ~ line 267 ~ response", response.data)
        if(response.data.status=="ok"){
            return true
        }else{
            return false
        }
    })
    .catch(function (error) {
        console.log("🚀 ~ file: axios.js ~ line 97 ~ action_create_or_edit_post ~ error", error)
        return false
    })
    return response;
}