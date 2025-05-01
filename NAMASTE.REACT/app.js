const hedding = React.createElement('div',{id:'parent'},[React.createElement('div',{id:'child'},React.createElement('div',{id:'likhith'},[React.createElement('h3',{class:'likhith'},'HELLO REACT!',React.createElement('h5',{class:'dummy'},'HELLO LIKHITH THIS IS REACT'))]))],React.createElement('div',{id:'child2'},React.createElement('div',{id:'likhith'},[React.createElement('h3',{class:'likhith'},'HELLO REACT!',React.createElement('h5',{class:'dummy'},'HELLO LIKHITH THIS IS REACT')),])));

const dummy = ReactDOM.createRoot(document.getElementById('likhith'))

dummy.render(hedding)