import { useState } from "react";

import Header from "./components/Header";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th of 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th of 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Dinner with Mom",
      day: "Feb 8th of 7:00pm",
      reminder: false,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <AddTask />
      <Tasks />
      <Footer />
    </div>
  );
}

export default App;
