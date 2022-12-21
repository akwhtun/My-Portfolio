    // skill progress circle
    let html = document.querySelector('.html');
    let css = document.querySelector('.css');
    let bootstrap = document.querySelector('.bootstrap');
    let js = document.querySelector('.js');
    let jquery = document.querySelector('.jquery');
    let react = document.querySelector('.react');
    let php = document.querySelector('.php');
    let laravel = document.querySelector('.laravel');

    let htmlVal = document.querySelector('.html .value');
    let cssVal = document.querySelector('.css .value');
    let bootstrapVal = document.querySelector('.bootstrap .value')
    let jsVal = document.querySelector('.js .value');
    let jqueryVal = document.querySelector('.jquery .value');
    let reactVal = document.querySelector('.react .value');
    let phpVal = document.querySelector('.php .value')
    let laravelVal = document.querySelector('.laravel .value');

    let htmlValue = htmlVal.textContent;
    let cssValue = cssVal.textContent;
    let bootstrapValue = bootstrapVal.textContent;
    let jsValue = jsVal.textContent;
    let jqueryValue = jqueryVal.textContent;
    let reactValue = reactVal.textContent;
    let phpValue = phpVal.textContent;
    let laravelValue = laravelVal.textContent;

    let htmlProgressStart = 0;
    let cssProgressStart = 0;
    let bootstrapProgressStart = 0;
    let jsProgressStart = 0;
    let jqueryProgressStart = 0;
    let reactProgressStart = 0;
    let phpProgressStart = 0;
    let laravelProgressStart = 0;

    let htmlProgressEnd = parseInt(htmlValue);
    let cssProgressEnd = parseInt(cssValue);
    let bootstrapProgressEnd = parseInt(bootstrapValue);
    let jsProgressEnd = parseInt(jsValue);
    let jqueryProgressEnd = parseInt(jqueryValue);
    let reactProgressEnd = parseInt(reactValue);
    let phpProgressEnd = parseInt(phpValue);
    let laravelProgressEnd = parseInt(laravelValue);

    let speed = 550;

    let skillFinish = false;

    let progressStart = () => setInterval(() => {

        if(htmlProgressStart < htmlValue ){
            htmlProgressStart++;
        }

        if(cssProgressStart < cssValue){
            cssProgressStart++;
        }

        if(bootstrapProgressStart < bootstrapValue){
            bootstrapProgressStart++;
        }

        if(jsProgressStart < jsValue){
            jsProgressStart++;
        }

        if(jqueryProgressStart < jqueryValue ){
            jqueryProgressStart++;
        }

        if(reactProgressStart < reactValue){
            reactProgressStart++;
        }

        if(phpProgressStart < phpValue){
            phpProgressStart++;
        }

        if(laravelProgressStart < laravelValue){
            laravelProgressStart++;
        }

        if(htmlProgressStart == htmlValue && cssProgressStart == cssValue  && bootstrapProgressStart == bootstrapValue && jsProgressStart == jsValue && jqueryProgressStart == jqueryValue && reactProgressStart == reactValue && phpProgressStart == phpValue && laravelProgressStart == laravelValue){
            skillFinish = true;
        }


        htmlVal.textContent= `${htmlProgressStart}%`;
        cssVal.textContent= `${cssProgressStart}%`;
        bootstrapVal.textContent = `${bootstrapProgressStart}%`;
        jsVal.textContent= `${jsProgressStart}%`;
        jqueryVal.textContent= `${jqueryProgressStart}%`;
        reactVal.textContent= `${reactProgressStart}%`;
        phpVal.textContent = `${phpProgressStart}%`;
        laravelVal.textContent= `${laravelProgressStart}%`;

        html.style.background = `conic-gradient( 
        #ff2727 ${cssProgressStart * 3.6}deg,
        #fff ${cssProgressStart * 3.6}deg)`;

        css.style.background = `conic-gradient( 
        #1e8eff ${cssProgressStart * 3.6}deg,
        #fff ${cssProgressStart * 3.6}deg)`;

        bootstrap.style.background = `conic-gradient( 
        #8e009b ${bootstrapProgressStart * 3.6}deg,
        #fff ${bootstrapProgressStart * 3.6}deg)`;

        js.style.background = `conic-gradient( 
        #fff021 ${jsProgressStart * 3.6}deg,
        #fff ${jsProgressStart * 3.6}deg)`;

        jquery.style.background = `conic-gradient( 
        #3c5e74 ${jqueryProgressStart * 3.6}deg,
        #fff ${jqueryProgressStart * 3.6}deg)`;

        react.style.background = `conic-gradient( 
        #060d12 ${reactProgressStart * 3.6}deg,
        #fff ${reactProgressStart * 3.6}deg)`;

        php.style.background = `conic-gradient( 
        #9b54f9 ${phpProgressStart * 3.6}deg,
        #fff ${phpProgressStart * 3.6}deg)`;

        laravel.style.background = `conic-gradient( 
        #ff626c ${laravelProgressStart * 3.6}deg,
        #fff ${laravelProgressStart * 3.6}deg)`;        

    }, speed);

    window.addEventListener("scroll", () => {
        let screenPosition = window.innerHeight;
        let contentPosition = document.querySelector(".skillCircle").getBoundingClientRect().top;
        
        if(contentPosition < screenPosition){
           setTimeout(() => {
            progressStart();
           }, 500);
        }
    })

    if(skillFinish) {
        clearInterval(progressStart);
    }



    //light dark
    let redText = document.querySelectorAll(".text-danger");
    let mutedText = document.querySelectorAll(".text-muted");
    let whiteText = document.querySelectorAll(".text-white-50");
    let whiteFullText = document.querySelectorAll(".text-white");
    let btnText = document.querySelectorAll(".btn-dark");
    let backgroundBlack = document.querySelectorAll(".bg-black");
    let backgroundDark = document.querySelectorAll(".bg-dark");
    let redOutline = document.querySelectorAll(".btn-outline-danger");
    let redBorder = document.querySelectorAll(".address");
    let btnRedText = document.querySelectorAll(".btn-red-text");
    let hsp = document.querySelectorAll(".normal");

    let redBtn = document.querySelector(".bg-danger");
    let free = document.querySelector(".free");

    let changeColor = (textColor, preColor, nowColor) => {
        textColor.forEach(text => {
            text.classList.remove(preColor);
            text.classList.add(nowColor);
        });
    }

    
   var checkbox = document.querySelector("#checkbox");

 
   let darkMode = () => {
        redBtn.classList.remove("bg-dark");
        redBtn.classList.add("bg-danger");

        free.classList.remove("text-white-50");
        free.classList.add("text-dark");

        changeColor(redText, "text-dark", "text-danger");
        changeColor(mutedText, "text-dark", "text-muted");
        changeColor(whiteText, "text-dark", "text-white-50");
        changeColor(whiteFullText, "text-dark",  "text-white");
        changeColor(btnText, "text-white", "text-dark");
        changeColor(backgroundBlack, "super", "bg-black");
        changeColor(backgroundDark,  "super", "bg-dark");
        changeColor(redOutline,"btn-outline-white", "btn-outline-danger");
        changeColor(redBorder, "black-border", "address");
        changeColor(btnRedText, "btn-dark", "btn-white");
        changeColor(hsp, "normal", "darker");

        checkbox.checked = true;
        sessionStorage.setItem("mode", "dark");
   }

   let lightMode = () => {
        redBtn.classList.remove("bg-danger");
        redBtn.classList.add("bg-dark");

        free.classList.remove("text-dark");
        free.classList.add("text-white-50");

        changeColor(redText, "text-danger", "text-dark");
        changeColor(mutedText, "text-muted", "text-dark");
        changeColor(whiteText, "text-white-50", "text-dark");
        changeColor(whiteFullText, "text-white", "text-dark");
        changeColor(btnText, "text-dark", "text-white");
        changeColor(backgroundBlack, "bg-black", "super");
        changeColor(backgroundDark, "bg-dark", "super");
        changeColor(redOutline, "btn-outline-danger", "btn-outline-white");
        changeColor(redBorder, "address", "black-border");
        changeColor(btnRedText, "btn-white", "btn-dark");
        changeColor(hsp, "darker", "normal");

        checkbox.checked = false;

        sessionStorage.setItem("mode", "light");
   }

        lightMode();

        if(sessionStorage.getItem("mode") == "dark"){
            darkMode();
        }else{
            lightMode();
        }

        checkbox.addEventListener("change", () => {
            if(checkbox.checked) {
                darkMode();
            }else{
            lightMode();
            }
        })



