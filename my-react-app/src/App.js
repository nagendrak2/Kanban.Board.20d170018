import './App.css';
import { Header } from './Components/Header/Header';
import { useState, useEffect } from 'react';
import { loadGridData } from './utils/gridUtils';
import { Grid } from './Components/Grid/Grid';

function App() {

  const [tickets, setTickets] = useState([]);
  const [userData, setUserData] = useState({});
  const [gridData, setGridData] = useState({});
  const [grouping, setGrouping] = useState("users");
  const [ordering, setOrdering] = useState("priority");
  
  useEffect(() => {
    load();
    fetchData();
  }, []);

  useEffect(() => {
    if (tickets.length === 0) { 
      return; 
    }
    setGridData(loadGridData(tickets, grouping, ordering));
  }, [tickets, grouping, ordering]);

  const onChangeOrder = (order) => {
    setOrdering(order);
    save({ ordering: order });
  }

  const onChangeGroup = (group) => {
    setGrouping(group);
    save({ grouping: group });
  }

  const save = (data) => {
    for (let key in data) {
      localStorage.setItem(key, data[key]);
    }
  }

  const load = () => {
    setGrouping(localStorage.getItem("grouping") || "status");
    setOrdering(localStorage.getItem("ordering") || "priority");
  };

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
      const data = await response.json();
      const { tickets, users } = data;
      const tempUsers = users.reduce((acc, user) => {
        acc[user.id] = user;
        return acc;
      }, {});
      setTickets(tickets);
      setUserData(tempUsers);
    } catch (err) {
      console.log("Error occurred while fetching data");
    }
  }

  return (
    <>
      <Header 
        grouping={grouping} 
        ordering={ordering} 
        setGrouping={onChangeGroup} 
        setOrdering={onChangeOrder}
      />
      <div style={{backgroundColor: "#f5f7fa", overflowX: 'scroll' }}>
        <Grid gridData={gridData} userData={userData} grouping={grouping}/>
      </div>

      {/* <div 
      style={{
        width: '100%',
        overflowY: 'auto',
        whiteSpace: 'nowrap',
        backgroundColor: '#f0f0f0', // Background color for the entire scrollable area
        padding: '1rem 0' // Optional padding for spacing
      }}
    >
      <div 
        style={{
          display: 'inline-block',  // To keep elements in a single row
          width: '200px', // Fixed width for each "card"
          backgroundColor: '#fff', // Background color for each individual card
          marginRight: '1rem', // Optional margin between cards
          boxSizing: 'border-box', // Ensures padding and border are included in width
          border: '1px solid #ccc', // Optional border for card separation
          padding: '1rem' // Padding inside the card
        }}
      >
        <Grid gridData={gridData} userData={userData} grouping={grouping} />
      </div>
    </div> */}
    </>
  );
}

export default App;
