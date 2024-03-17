import React from 'react';

const addItemButton = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick} 
      style={{ 
        border: '1px solid red', 
        backgroundColor: 'lightblue', 
        color: 'white', 
        padding: '10px 20px', 
        borderRadius: '5px', 
        cursor: 'pointer', 
        marginLeft: '10px' 
      }}
    >
      {children}
    </button>
  );
};

export default addItemButton;
