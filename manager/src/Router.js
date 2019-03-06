import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm.js';
import EmployeeList from './components/EmpolyeeList.js';
import EmpolyeeCreate from './components/CreateEmpolyee.js'


const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Please Login" />
        </Scene>
        <Scene key="main">
          <Scene
          onRight={() => Actions.employeeCreate()}
          rightTitle="Add"
          key="employeeList"
          component={EmployeeList}
          title="Employees"
          initial
          />
          <Scene
          key="employeeCreate"
          component={EmpolyeeCreate}
          title="Create Employee" 
          />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
