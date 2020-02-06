var things = document.evaluate(`/html/body//node()[contains(.,"work")]/..`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);

    for (var i = 0; i < things.snapshotLength; i++) {
        console.log(things.snapshotItem(i))
        // things.snapshotItem(i).style.outline = '1px solid red';
    }

    //*[@class="class"]



    var things = document.evaluate('//*[@class="asdasd"]/following-sibling::node()[contains(., "element")]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);

    for (var i = 0; i < things.snapshotLength; i++) {
        console.log(things.snapshotItem(i))
        // things.snapshotItem(i).style.outline = '1px solid red';
    }



    var things = document.evaluate('//*[@class="asdasd"]/following-sibling::node()[contains(translate(.,"ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ","abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя"), "import")]/..',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);

    for (var i = 0; i < things.snapshotLength; i++) {
        console.log(things.snapshotItem(i))
        things.snapshotItem(i).style.outline = '1px solid red';
    }


    var things = document.evaluate('//*[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"),"something") or contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"),"outermost") or contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"),"xpath")or contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZ","abcdefghijklmnopqrstuvwxyz"),"similar")]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
for (var i = 0; i < things.snapshotLength; i++) {
    console.log(things.snapshotItem(i))
}




var things = document.evaluate('//*[contains = (text(),"something" | "outermost")]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);
for (var i = 0; i < things.snapshotLength; i++) {
    console.log(things.snapshotItem(i))
}

[categorie = ('Kinderwagens', 'Wonderwagens')]