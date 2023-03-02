import React from 'react';

function Layout() {

    const styleTitleLayout = {
                    width: '95%',
                    height: '50px',
                    display: 'flex',
                    border: '1pt solid gray',
                    backgroundColor: 'transparent',
                    justifyContent: "center", 
                    alignItems: "center",
    };

  return (
    <div>
        <header
        style={styleTitleLayout}>
            My Todo List  
            <span style={{padding: '350pt'}}></span> 
            React
        </header>
    </div>
  )
}

export default Layout