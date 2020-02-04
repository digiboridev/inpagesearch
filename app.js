function serch(name) {
    let things = document.evaluate(`//*[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ","abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя"),"${name}")]`,document.body,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
    
    function myFunction(e) {
        console.log(e)
    }
    console.log(things)
    for (var i = 0; i < things.snapshotLength; i++) {

        let regex = new RegExp(name, 'i');
        let str = things.snapshotItem(i).innerHTML.replace(regex, '<span class="asdasd" style="color:blue;background:yellow">$&</span>');
        let snap = things.snapshotItem(i);
        things.snapshotItem(i).innerHTML = str
        console.log(snap)
        console.log(str)

        if (things.snapshotItem(i).querySelector('.asdasd') == undefined) {
            console.log('yas')
        } else {
            console.log('nau')
            things.snapshotItem(i).querySelector('.asdasd').addEventListener('mouseover', (event) => {
                event.target.style.background = "purple";           
                myFunction(event)
            })
            things.snapshotItem(i).querySelector('.asdasd').addEventListener('mouseout', (event) => {
                event.target.style.background = "yellow";               
                myFunction(event)
            })
        }

        
        
        
    }

}
serch('tsi')
