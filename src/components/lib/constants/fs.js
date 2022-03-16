export function fs_convert_schema_cript(arr){
    let script=''
    arr.forEach(e => {
        script+='<script type="application/ld+json">'+e+'</script>';
    });
    return script;
}
//
export function fs_is_value_null(data){
    if(data==null||data=='null'||data==undefined||data.length==undefined||data.length==0||data=='') return true;
    return false;
}