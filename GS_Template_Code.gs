/*
  This code is written by Alan Wells - 
  I reserve the right to use my own code - but other than that there are no requirements
*/

/* FNK NAMES
  getSkrpt_ - get multiple skript files and concatenate them to put into html
  loadCSS_
*/

function getSkrpt_(a){
try{
  var f,h,i,rE,thisFile;
  //a - array of file names, h - html, f - file name
  
  h="";
  errHtml="";
  
  for (i=0;i<a.length;i++) {
    f = a[i];//one file
    try{
      thisFile = HtmlService.createHtmlOutputFromFile(f).getContent();
    }catch(e) {
      thisFile = undefined;
    }
    if (!thisFile) {
      errHtml = errHtml + "<div>There is no file for " + f + "<div>";
      continue;
    }
    
    h = h + thisFile;
  }

  rE = new RegExp("<" + "script>","g");//The string for the tag name is being broken up into multipe sections for a very
  //special situation that has nothing to do with this code or how the add-on works - its to avoid having a program find
  //the tag name when parsing this  code to strip out the comments
  h = h.replace(rE,"");//Replace all occurances of the tag

  rE = new RegExp("</" + "script>","g");
  h = h.replace(rE,"");  
  //lts('h 56',h.slice(0,100))
  
  return '<' + 'script language="javascript">' + h + "</" + "script>" + errHtml;
}catch(e){
  errHndl_(e,'vjtijfr87qt49i','a: '+a);
  return "<div>Error: " + e.message + "<div>";
};
};

function loadCSS_(arr) {
  var i,h,l;
  h="";
  l = arr.length;
  for (i=0;i<l;i++){
    h = h + HtmlService.createHtmlOutputFromFile(arr[i]).getContent();
  }
  return h;
};

