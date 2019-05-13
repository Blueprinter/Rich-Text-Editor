/*
This App is built based on:
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content/Rich-Text_Editing_in_Mozilla#Example_a_simple_but_complete_Rich_Text_Editor

*/

/* READ READ READ
  To get all the code from this Web App, choose FILE, and then choose "Make a copy", then look
  for a new file in your Google Drive
*/

function doGet(e) {
  var h,srchStr,whichApp;
  
  srchStr = e.parameter;
  
  //Logger.log('srchStr: ' + JSON.stringify(srchStr))
  whichApp = srchStr.whichapp;
  //Logger.log('whichApp: ' + whichApp)
  
  if (whichApp === 'Simple') {
    whichApp = 'index_All_Simple';
  } else if (whichApp === 'Pro') {
    whichApp = 'index';
  } else {
    whichApp = 'H_Ask_Which_App';
  }
  
  //Logger.log('whichApp: ' + whichApp)
  
  h = HtmlService.createTemplateFromFile(whichApp).evaluate();
  h.setTitle('Rich Text Editor');
  
  return h;
}
