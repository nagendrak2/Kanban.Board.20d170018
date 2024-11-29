import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar'
import Board from './Board/Board';
import { status, priorities } from './data';

// Example API URL
const API_URL = "https://api.quicksell.co/v1/internal/frontend-assignment";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const defaultGroup = localStorage.getItem('selectedGroup');
  const defaultOrder = localStorage.getItem('selectedOrder');

  const [group, setGroup] = useState(defaultGroup ? defaultGroup : 'status');
  const [order, setOrder] = useState(defaultOrder ? defaultOrder : 'priority');

  const handleGroupChange = (groupSelected) => {
    setGroup(groupSelected);
    localStorage.setItem("selectedGroup", groupSelected);
  }

  
  const handleOrderChange = (orderSelected) => {
    setOrder(orderSelected);
    localStorage.setItem("selectedOrder", orderSelected);
  }

  const fetchData = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.log("Unable to fetch data! ", error);
    }
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App scroll-container">
      <Navbar group={group} order={order} onGroupchange={handleGroupChange} onOrderChange={handleOrderChange} />
      <div className='boards_container'>
        <div className='app_boards'>
          {
            group === 'status' && status.map((opt, id) => (
              <Board order={order} data={opt} key={id} tickets={tickets} users={users} group={group} />
            ))
          }
          {
            group === 'user' && users.map((opt) => (
              <Board order={order} data={opt} key={opt.id} tickets={tickets} users={users} group={group} userId={opt?.id} />
            ))
          }
          {
            group === 'priority' && priorities.map((opt, id) => (
              <Board order={order} data={opt} level={id} key={id} tickets={tickets} users={users} group={group} />
            ))
          }
        </div>
      </div>
    </div>
  );

}

// const TicketList = () => {
//   const [tickets, setTickets] = useState([]);
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     // Fetch data from the API
//     const fetchData = async () => {
//       try {
//         const response = await fetch(API_URL);
//         const data = await response.json();
        
//         // Set tickets and users data in state
//         setTickets(data.tickets);
//         setUsers(data.users);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to get the user name based on userId
//   const getUserName = (userId) => {
//     const user = users.find(user => user.id === userId);
//     return user ? user.name : "Unknown";
//   };

//   // Function to get user availability based on userId
//   const getUserAvailability = (userId) => {
//     const user = users.find(user => user.id === userId);
//     return user ? (user.available ? "Available" : "Not Available") : "Unknown";
//   };

//   return (
//     <div className="ticket-list">
//       <h1>Ticket Management</h1>
//       <ul>
//         {tickets.map(ticket => (
//           <li key={ticket.id} className="ticket-item">
//             <div className="ticket-card">
//               <h2>{ticket.title}</h2>
//               <p><strong>Tags:</strong> {ticket.tag.join(", ")}</p>
//               <p><strong>Status:</strong> {ticket.status}</p>
//               <p><strong>Priority:</strong> {ticket.priority}</p>
//               <p><strong>Assigned User:</strong> {getUserName(ticket.userId)}</p>
//               <p><strong>User Availability:</strong> {getUserAvailability(ticket.userId)}</p>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default App;
