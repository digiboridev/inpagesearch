function highlight(name){

    document.querySelectorAll('.asdasd').forEach(e => {
        // let innerTxt = e.innerHTML
        // e.replaceWith(innerTxt)


        e.parentNode.innerHTML = e.parentNode.innerHTML.replace('<span class="asdasd" style="color:blue;background:yellow;">','')
        // e.parentNode.innerHTML = e.parentNode.innerHTML.replace('</span>','')


        // console.log(e.parentNode.innerHTML)
    })



    var things = document.evaluate(`//*[contains(translate(text(),"ABCDEFGHIJKLMNOPQRSTUVWXYZАБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ","abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя"),"${name}")]`, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);





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

    function remover(event) {

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
    document.body.addEventListener("click", remover);


    function myFunction(e) {
        console.log(e)

        let content = `
        <button class="ppup_close" style="
        width: 35px;
        height: 20px;
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
        <div style="height: 200px;width: 200px;margin: 20px;background:white;">
                <h3>The content</h3>
        </div>
        `
        // let popupWraper = `
        // <div class="ppup" style="background: #dfdfdf;position: absolute;top: ${e.pageY + 20}px;left: ${e.pageX}px;z-index: 999;
        // box-shadow: 0 0 40px black;
        // border-radius: 10px;
        // ">  
            
        //     ${content}
        // </div>
        // `





        document.querySelector('.ppup').parentNode.style.visibility = "visible"
        document.querySelector('.ppup').innerHTML = content;
        document.querySelector('.ppup').style.top = `${e.pageY + 20}px`;
        document.querySelector('.ppup').style.left = `${e.pageX + 20}px`;
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

        let regex = new RegExp(name, 'i');
        let str = things.snapshotItem(i).innerHTML.replace(regex,
            `<span class="asdasd" style="color:blue;background:yellow;">$&</span>`);
        things.snapshotItem(i).innerHTML = str

        if (things.snapshotItem(i).querySelector('.asdasd') == undefined) {
            console.log('yas')
        } else {
            console.log('nau')


            things.snapshotItem(i).querySelector('.asdasd').addEventListener('mouseover', (event) => {
                if (event.currentTarget !== event.target) {
                    return;
                }
                // event.target.style.background = "purple";
                setTimeout(() => {
                    myFunction(event)                    
                }, 2000);           
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
                // event.target.style.background = "yellow";
                // myFunction(event)

            })
        }




    }


}
highlight('work')

