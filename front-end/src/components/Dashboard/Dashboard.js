import React, { useEffect }from "react";
import { useDispatch }  from "react-redux";
import { getCategories, getPriority, getStatus } from "../../actions/actions"
import DashboardMenu from "./DashboardMenu";
import { DashboardDiv } from "../../hooks/index";


const Dashboard = props => {
  const dispatch = useDispatch();
useEffect(() => {


dispatch(getCategories());
dispatch(getPriority());
dispatch(getStatus());

}, [dispatch]
) 
  return (
    <DashboardDiv>
      <DashboardMenu />
      <div className="dash-main">{props.children}</div>
    </DashboardDiv>
  );
};

export default Dashboard;
