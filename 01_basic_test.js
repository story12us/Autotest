Feature('add_task');

Scenario('test todo MVC', (I) => {
  /*I.amOnPage('http://localhost:2015');
  I.see('todos');
  I.seeElement('.new-todo');
  I.fillField('.new-todo', 'Go to kitchen');
  I.pressKey('Enter');
  I.see('Go to kitchen');

  I.fillField('.new-todo', 'Go to USA');
  I.pressKey('Enter');


  I.fillField('.new-todo', 'Go to cinema');
  I.pressKey('Enter');


  I.seeElement('ul.todo-list li:last-child label');
  I.seeTextEquals('Go to cinema', 'ul.todo-list li:last-child label');
  
 I.click("ul.todo-list li:last-child div input.toggle");
 I.wait(1);
  I.seeAttributesOnElements("ul.todo-list li:last-child", {class: "completed"});
  //I.seeElement("button.clear-completed")*/
  I.amOnPage('http://45.118.145.149:8089/wp-login.php');
  I.fillField('#user_login', 'user');
  I.fillField('#user_pass', 'bitnami');
  I.click('wp-submit')
  I.see('Dashboard');
  I.clickLink('New');
  //I.waitForNavigation('http://45.118.145.149:8089/wp-admin/post-new.php',1);
  I.fillField('#post-title-0', 'Canh dep Sapa 2');
  
  I.click('.components-button.components-icon-button.editor-inserter__toggle.block-editor-inserter__toggle');
  //I.click('.editor-block-types-list__item.block-editor-block-types-list__item.editor-block-list-item-paragraph');
  //I.fillField('.rich-text.editor-rich-text__editable.block-editor-rich-text__editable.wp-block-paragraph','ABC');
  I.click('.editor-block-types-list__item.block-editor-block-types-list__item.editor-block-list-item-image');
  I.click('.components-button.components-icon-button.block-editor-media-placeholder__button.editor-media-placeholder__button.block-editor-media-placeholder__upload-button.has-text.is-button.is-default.is-large');
 //I.attachFile()
 I.attachFile('input[type="file"]','anhdep.jpg');

 I.click('.editor-rich-text.block-editor-rich-text');
 I.click('.editor-rich-text__inline-toolbar.block-editor-rich-text__inline-toolbar');
 I.fillField('.rich-text.editor-rich-text__editable.block-editor-rich-text__editable.is-selected','Cảnh dep');
 
 I.click ('Publish');
 I.click('Publish');
 I.switchToNextTab(); 
 I.amOnPage('http://45.118.145.149:8089/');
 I.see('Canh dep Sapa 2');
  I.wait(5);
});