import React, { useState, useEffect } from "react";
import "./App.css"; // Import custom CSS for styling

const API_URL = "https://www.test.com/api";

function App() {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState("status");
  const [sorting, setSorting] = useState("priority");

  // Fetch tickets from API
  useEffect(() => {
    fetchTickets();
  }, []);

  useEffect(() => {
    const savedGrouping = localStorage.getItem("grouping");
    const savedSorting = localStorage.getItem("sorting");
    if (savedGrouping) setGrouping(savedGrouping);
    if (savedSorting) setSorting(savedSorting);
  }, []);

  const fetchTickets = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  const handleGroupingChange = (option) => {
    setGrouping(option);
    localStorage.setItem("grouping", option);
  };

  const handleSortingChange = (option) => {
    setSorting(option);
    localStorage.setItem("sorting", option);
  };

  const getGroupedTickets = () => {
    if (grouping === "status") {
      return groupBy(tickets, "status");
    } else if (grouping === "user") {
      return groupBy(tickets, "assignedUser");
    } else if (grouping === "priority") {
      return groupBy(tickets, "priority");
    }
    return {};
  };

  const groupBy = (array, key) => {
    return array.reduce((result, item) => {
      (result[item[key]] = result[item[key]] || []).push(item);
      return result;
    }, {});
  };

  const sortedTickets = (group) => {
    return group.sort((a, b) => {
      if (sorting === "priority") {
        return b.priority - a.priority;
      }
      if (sorting === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  const groupedTickets = getGroupedTickets();

  return (
    <div className="App">
      <header className="kanban-header">
        <button
          onClick={() => handleGroupingChange("status")}
          className={grouping === "status" ? "active" : ""}
        >
          Group by Status
        </button>
        <button
          onClick={() => handleGroupingChange("user")}
          className={grouping === "user" ? "active" : ""}
        >
          Group by User
        </button>
        <button
          onClick={() => handleGroupingChange("priority")}
          className={grouping === "priority" ? "active" : ""}
        >
          Group by Priority
        </button>

        <button
          onClick={() => handleSortingChange("priority")}
          className={sorting === "priority" ? "active" : ""}
        >
          Sort by Priority
        </button>
        <button
          onClick={() => handleSortingChange("title")}
          className={sorting === "title" ? "active" : ""}
        >
          Sort by Title
        </button>
      </header>

      <div className="kanban-board">
        {Object.keys(groupedTickets).map((groupKey) => (
          <div key={groupKey} className="kanban-column">
            <h3>{groupKey}</h3>
            <div className="kanban-tickets">
              {sortedTickets(groupedTickets[groupKey]).map((ticket) => (
                <div key={ticket.id} className={`ticket priority-${ticket.priority}`}>
                  <h4>{ticket.title}</h4>
                  <p>{ticket.description}</p>
                  <p><strong>User:</strong> {ticket.assignedUser}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
