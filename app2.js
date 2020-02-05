let highlight = (name) => {
    // let things = document.evaluate(`//*[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ","abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя"),"${name}")]`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    var things = document.evaluate("//*[contains(., 'get')]", document, null, XPathResult.ANY_TYPE, null );
    
    for (var i = 0; i < things.snapshotLength; i++) {

        let regex = new RegExp(name, 'i');
        let str = things.snapshotItem(i).innerHTML.replace(regex,
            `<span class="asdasd" style="color:blue;background:yellow;">$&</span>`);
        things.snapshotItem(i).innerHTML = str

    }


}

let clear = () => {
    document.querySelectorAll('.asdasd').forEach(e => {
        let innerTxt = e.innerHTML
        e.replaceWith(innerTxt)


        // e.parentNode.innerHTML = e.parentNode.innerHTML.replace('<span class="asdasd" style="color:blue;background:yellow;">','')
        // e.parentNode.innerHTML = e.parentNode.innerHTML.replace('</span>','')

        
        // console.log(e.parentNode.innerHTML)
    })
}
highlight('work')

