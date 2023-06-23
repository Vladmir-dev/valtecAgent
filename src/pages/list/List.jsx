import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
// import Table from "../../components/table/Table";
import JobTable from "../../components/jobtable/JobTable";

const List = ({type}) => {
  let component;
  if (type === "job"){
    component = <JobTable />
  }else if(type === "user"){
    component = <Datatable />
  }
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        {component}
        {/* <JobTable /> */}
        {/* <Datatable/> */}
      </div>
    </div>
  )
}

export default List