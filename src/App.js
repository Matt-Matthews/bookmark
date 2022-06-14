import React from 'react'
import './App.css';
import Card from './components/Card';
import data from './components/data';


function App() {

  // eslint-disable-next-line no-unused-vars
  const [languages, setLanguages] = React.useState(data);

  function addBookmark(id){

    for(let i=0; i<languages.length; i++) {
      if(id===languages[i].id){
        localStorage.setItem([languages[i].language],JSON.stringify(languages[i]));
        window.location.reload()
      }
    }
  }
  
  const bookmarked = [];

  
  for(let i=0; i<languages.length; i++) {
    if(localStorage.getItem(languages[i].language)){
      bookmarked.push(JSON.parse(localStorage.getItem(languages[i].language)));
    }
  }
  
  function removeBookmark(id){
    for(let i=0; i<bookmarked.length; i++) {
      if(id===bookmarked[i].id){
        localStorage.removeItem([bookmarked[i].language]);
        window.location.reload()
      }
    }
  }

  return (
    <div className="App">
      <h1>Programming Languages</h1>
     <Card items={languages} isBookmarked={false} addBookmark={addBookmark} />
     <h1>The bookmarked</h1>
     <Card items={bookmarked} isBookmarked={true} addBookmark={removeBookmark} />
    </div>
  );
}

export default App;
