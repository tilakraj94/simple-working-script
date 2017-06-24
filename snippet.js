  window.addEventListener('load',function(){
    var unique_code="3412313"// Initialize it with the unique code provided to you.
    var param1="1"; // Initialize this with the value that you wish to see.For example 1 for navbar display , 2 for the side floating pop up
                  //while 3 for a transparent overlay on the whole page.
    var domain=window.location.hostname;// current domain.
    function jsonp(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    window[callbackName] = function(data) {
    delete window[callbackName];
    document.body.removeChild(script);
    callback(data);
    };
    var script = document.createElement('script');
    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
    script.onerror=function(){
      alert("failed to load snippet!");
    }
    }

    jsonp('http://yourserver.com/project/server.php?unique_code='+unique_code+'&domain='+domain, function(data) {
    if(data.status=='success'){
      document.body.style.margin="0px";
      if(param1==1){
        var div=document.createElement('div');
        div.style.backgroundColor="black";
        div.style.height="20px";
        div.style.width="100%";
        div.setAttribute("id","ASDAS@@@!!")
        //document.body.appendChild(div);
        var boddy=document.getElementsByTagName('body')[0];
        boddy.insertBefore(div,boddy.firstChild);
        setTimeout(function(){
          document.getElementById('ASDAS@@@!!').style.display="none";
        },5000);
      }else if(param1==2){
        var div=document.createElement('div');
        div.setAttribute('id','ASDASD@!@!@');
        div.setAttribute("style","position:fixed;top:40%;left: 37%;width:400px;height:200px;z-index:9999;margin:0 auto;background-color:black;");
        var cross=document.createElement('a');
        cross.setAttribute("style","text-decoration:none;position:relative;z-index:99999;left:380px;color:white;font-size:20px;")
        cross.setAttribute('id','32423423423423423_ID_Q@#')
        var textnode=document.createTextNode('X');
        cross.href="#";
        cross.appendChild(textnode);
        div.appendChild(cross);
        document.body.appendChild(div);
        document.getElementById('32423423423423423_ID_Q@#').addEventListener('click',function(){
          document.getElementById('ASDASD@!@!@').style.display="none";
        });
      }else if(param1==3){
        var div=document.getElementsByTagName("body")[0];
        div.style.backgroundColor="black";
        div.style.height="100%";
        div.style.textAlign="right";
        div.style.width="100%";
        div.style.opacity="0.7";
        var cross=document.createElement('a');
        cross.setAttribute('id','345533_ID_#@#');
        cross.setAttribute('style','text-decoration:none;position:fixed;z-index:9999999;font-size:30px;color:red;right:0px;')
        var textnode=document.createTextNode('X');
        cross.appendChild(textnode);
        //div.appendChild(cross);
        //document.body.appendChild(div);
        div.insertBefore(cross,div.firstChild);
        document.getElementById('345533_ID_#@#').addEventListener('click',function(){
          document.getElementsByTagName('body')[0].removeAttribute("style");
          document.getElementsByTagName('body')[0].removeChild(document.getElementById('345533_ID_#@#'));
          //document.getElementsByTagName('body')[0].style.display="none";
        });
      }
    }else alert(data.reason);
    });
  });
