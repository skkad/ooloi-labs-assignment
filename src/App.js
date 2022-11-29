import './App.css';
import Table from './component/Table';
import {Data} from './data'
function App() {
  const data = Data;
  const columns = [
    
    { field: "person", header: "Name", visibilty: true },
    { field: "city", header: "City", visibilty: true },
    { field: "email", header: "Email Address", visibilty: true },
    { field: "joiningDate", header: "Joining Date", visibilty: true },
    { field: "role", header: "Role", visibilty: true }
  ];

  const columns1 = [
    { field: "email", header: "Email Address", visibilty: true },
    { field: "joiningDate", header: "Joining Date", visibilty: false },
    { field: "role", header: "Role", visibilty: true }
  ];

  const columns2 = [
    { field: "person", header: "Name", visibilty: false },
    { field: "city", header: "City", visibilty: true },
    { field: "joiningDate", header: "Joining Date", visibilty: false },
    { field: "role", header: "Role", visibilty: true }
  ];
  const columns3 = [
    { field: "person", header: "Name", visibilty: true },
    { field: "email", header: "Email Address", visibilty: false },
    { field: "role", header: "Role", visibilty: false }
  ];

  return (
    <div className="App">
      <h1>Table 1</h1>
      <Table data={data} columns={columns} />
      <h1>Table 2</h1>
      <Table data={data} columns={columns1} />
      <h1>Table 3</h1>
      <Table data={data} columns={columns2} />
      <h1>Table 4</h1>
      <Table data={data} columns={columns3} />
    </div>
  );

}

export default App;
