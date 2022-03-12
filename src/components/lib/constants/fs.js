export function fs_convert_schema_cript(arr){
    let script=''
    arr.forEach(e => {
        script+='<script type="application/ld+json">'+e+'</script>';
    });
    return script;
}