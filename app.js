function highlight(name,name2){

    name = name.toLocaleLowerCase();

    // if(!noclear){
    //     document.querySelectorAll('.asdasd').forEach(e => {
    //         if(e.parentNode !== null){
    //             e.parentNode.innerHTML = e.parentNode.innerHTML.replace('<span class="asdasd" style="color:blue;background:yellow;">','')
    //         } else {
    //             let innerTxt = e.innerHTML
    //             e.replaceWith(innerTxt)
    //         }
    //     })
    // }


    var oldThings = document.evaluate('//*[@class="asdasd"]',document,null,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,null);

    for (var i = 0; i < oldThings.snapshotLength; i++) {
        console.log(oldThings.snapshotItem(i))
        // things.snapshotItem(i).style.outline = '1px solid red';
        let str = oldThings.snapshotItem(i).parentNode.innerHTML.replace('<span class="asdasd" style="color:blue;background:yellow;">','');
        oldThings.snapshotItem(i).parentNode.innerHTML = str;
    }


    var things = document.evaluate(`/html/body//*[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ","abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя"),"${name}")]`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);



    if (!document.querySelector('.ppup')) {
        let popupWraper = `
        <div class="ppup" style="
        background: #dfdfdf;
        position: absolute;
        z-index: 999;
        box-shadow: 0 0 40px black;
        border-radius: 10px;
        transition:opacity 1s;
        opacity:0.6;">
            
        </div>
        `
        let el = document.createElement("div");
        el.innerHTML = popupWraper;
        document.body.appendChild(el)
    }


    function missClickDetector(event) {

        let detected = false;
        event.path.forEach(e => {
            if (e.className == 'ppup') {
                detected = true
            }
        })
        event.path.forEach(e => {
            if (e.className == 'asdasd') {
                detected = true
            }
        })

        if (!detected) {
            console.log('miss')
            document.querySelector('.ppup').parentNode.style.visibility = "hidden"
            document.querySelector('.ppup').style.opacity = `0.2`;
        }

    }
    document.body.addEventListener("click", missClickDetector);


    function myFunction(e) {
        console.log(e)

        let content = `
        <button class="ppup_close" style="
        min-width: 35px;
        min-height: 20px;
        position: relative;
        float: right;
        font-size: 10px;
        /* text-indent: 0; */
        padding: 0;
        background: #444;
        color: white;
        outline: none;
        border: none;
        ">X</button>
        <div style="min-height: 200px;min-width: 200px;margin: 20px;background:#dfdfdf;">
                <h3>The content</h3>
                <h2>Element: ${e.target.innerText}</h3>
                <img src="https://sciencenotes.org/wp-content/uploads/2019/01/001-Hydrogen.png" alt="Smiley face" width="200px">
                <h2>Table</h3>
                <table style="width:100%;padding: 10px;
                text-align: left;">
                  <tr>
                    <th>Name</th>
                    <th colspan="2">Telephone</th>
                  </tr>
                  <tr>
                    <td>Bill Gates</td>
                    <td>55577854</td>
                  </tr>
                </table>
        </div>
        `

        document.querySelector('.ppup').parentNode.style.visibility = "visible"
        document.querySelector('.ppup').innerHTML = content;
        document.querySelector('.ppup').style.top = `${e.pageY + 20}px`;
        document.querySelector('.ppup').style.left = `${e.pageX - 100}px`;
        document.querySelector('.ppup').style.opacity = `1`;

        document.querySelector('.ppup_close').addEventListener('click', (event) => {
            if (event.currentTarget !== event.target) {
                return;
            }
            document.querySelector('.ppup').parentNode.style.visibility = "hidden"
            document.querySelector('.ppup').style.opacity = `0.2`;
        })

    }



    for (var i = 0; i < things.snapshotLength; i++) {
        console.log(things.snapshotItem(i))
        let regex = new RegExp(name, 'gi');
        let str = things.snapshotItem(i).innerHTML.replace(regex,
            `<span class="asdasd" style="color:blue;background:yellow;">$&</span>`);
        things.snapshotItem(i).innerHTML = str;

        if (things.snapshotItem(i).querySelector('.asdasd') == undefined) {
            console.log('yas')
            console.log(things.snapshotItem(i))
        } else {
            console.log('nau')

            let hoverTimer;

            things.snapshotItem(i).querySelector('.asdasd').addEventListener('mouseover', (event) => {
                if (event.currentTarget !== event.target) {
                    return;
                }
                // event.target.style.background = "purple";
                hoverTimer = setTimeout(() => {
                    myFunction(event)                    
                }, 1000);           
            })

            things.snapshotItem(i).querySelector('.asdasd').addEventListener('click', (event) => {
                if (event.currentTarget !== event.target) {
                    return;
                }
                // event.target.style.background = "purple";
                myFunction(event)                             
            })

            things.snapshotItem(i).querySelector('.asdasd').addEventListener('mouseout', (event) => {
                if (event.currentTarget !== event.target) {
                    return;
                }
                clearTimeout(hoverTimer)
                // event.target.style.background = "yellow";
                // myFunction(event)

            })
        }




    }


}
highlight('work')

