import React from 'react';
import ConditionalRendering from './components/ConditionalRendering';
class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    display: 'Mount',
    renderDetailedReview: true,    
  }
}

Render = () => {
  this.setState({
    renderDetailedReview: true,
  })
}

Derender = () => {
  this.setState({
    renderDetailedReview: false,
  })
}

Blue = () => {
  this.setState({
    display: 'unMount',
  })
}

    render() {
      const {
        display
      } = this.state;

      const {
        Render,
        Derender,
        Blue,
      } = this;

    return (
      <div className="App">
{this.state.renderDetailedReview && 
<ConditionalRendering isActive={ display === 'unMount' }/>
}

{this.state.renderDetailedReview ?
  <ConditionalRendering isActive={ display === 'unMount' }/>
  :
  <div>
  <p> Ternary Render of same component </p>
  <br/>
  </div>
  }


<button onClick={Render}> Render </button>
<button onClick={Derender}> DeRender </button>
<br/>
<button onClick={Blue}> Blue </button>

        </div>
    );
  }
}


export default App;
