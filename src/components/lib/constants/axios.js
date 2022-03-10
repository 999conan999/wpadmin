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
export async function action_remove_post(id){
    let data_send=new FormData();
    data_send.append('idN',id);
    let response= axios.post(url_remove_post, 
        data_send
    )
    .then(function (response) {
        console.log("🚀 ~ file: axios.js ~ line 89 ~ response", response.data)
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








//=>> test POSTS ÔK
export  async function test_post(){
        let  product_id_list = ['pid1234', 'pid1235']
        let data=new FormData();
        product_id_list.forEach((item) => {
            data.append('product_id_list[x_'+item+']', item);
        });
             data.append('danhpro', 'item');
             data.append('arrynull[]','áda');

            let response= axios.post('http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/stsop/createP.php', 
            data
            )
            .then(function (response) {
             console.log(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
            // console.log("🚀 ~ file: axios.js ~ line 41 ~ test_post ~ response", response)


            

    }













// // tesst GET=> OK
// export async function test_get(){
//     let data= await axios.get('http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/stsop/tegStsop.php?page=0&category_id=3')
//     // let data= await axios.get('http://localhost/test/wp-content/themes/danhdev_1/templates/ajax/ipa_nimda/stsop/tegStsop.php?page=0&data_search=test')
//         .then(function (response) {
//             console.log("🚀 ~ file: axios.js ~ line 7 ~ response", response)
//             // handle success
//             return response.data
//         })
//         .catch(function (error) {
//             console.log("🚀 ~ file: axios.js ~ line 11 ~ test_get ~ error", error)
//             // handle error
//             return {
//                 data:[],
//             }
//         })
//         .then(function (data) {
//             return data;
//         });
//         // return data;
//         console.log("🚀 ~ file: axios.js ~ line 22 ~ get_category ~ data", data)
// }



// var domain='https://cofa.vn'  

//   export function url(type){
//     if(type=='img'){
//       //http://localhost/cofa/wp-content/plugins/addtool/core/rt-img.php?pass=VoThanhDanh_VTD&start_w=0
//         return domain+'/wp-content/plugins/addtool/core/rt-img.php?pass=VoThanhDanh_VTD&';
//     }else if(type=='category'){
//       //http://localhost/cofa/wp-content/plugins/addtool/core/rt-category.php?pass=VoThanhDanh_VTD
//       return domain+'/wp-content/plugins/addtool/core/rt-category.php?pass=VoThanhDanh_VTD';
//     }else if(type=='createP'){
//       //http://localhost/cofa/wp-content/plugins/addtool/core/createP.php
//       return domain+'/wp-content/plugins/addtool/core/createP.php';
//     }
//   }



//   export async function active_create_post_list(contents){
//     for(let i=0;i<contents.length;i++) {
//       let response=await active_post(contents[i])
//       console.log(response)
//     };
//   }
//   //
//   async function active_post(content){
//     return new Promise((resolve,reject)=>{
//       let response= axios.post(url('createP'), 
//       axqs(content))
//       .then(function (response) {
//         return response
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//       // setTimeout(()=>{
//       resolve(response)
//       // },2000);
//     })
//   }
//   function axqs(d){
//     let p = new URLSearchParams();
//     Object.keys(d).forEach(function(key){
//         p.append(key, this[key]);
//     }, d);
//     return p
// }

//   export async function get_category(){
//   let data= await axios.get(url('category'))
//     .then(function (response) {
//         // handle success
//         return response.data
//     })
//     .catch(function (error) {
//         // handle error
//         return {
//             data:[],
//             leng:0
//         }
//     })
//     .then(function (data) {
//         return data;
//       });
//       return data;
//   }
//   export async function get_img_50(start=0){
//   let data= await axios.get(url('img')+'start_w='+start)
//     .then(function (response) {
//         // handle success
//         return response.data
//     })
//     .catch(function (error) {
//         // handle error
//         return {
//             data:[],
//             leng:0
//         }
//     })
//     .then(function (data) {
//         return data;
//       });
//       return data;
//   }