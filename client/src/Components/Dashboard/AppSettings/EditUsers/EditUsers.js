import React from 'react';
import { Tabs } from 'antd';
import EditUserInfo from './EditUserInfo'
import SelectUserRole from './SelectUserRole'
const { TabPane } = Tabs;



class EditUser extends React.Component {

state={
    key:null
}

    render() {
        
        
        
        
        function callback(key) {
            console.log(key);
          }
        return (
            <Tabs style={{textAlign: 'center'}} defaultActiveKey="1" onChange={callback}>
                <TabPane tab="User Info" key="1">
                    <EditUserInfo/>
                </TabPane>
                <TabPane tab="User Role" key="2">
                    <SelectUserRole/>
                </TabPane>
                
            </Tabs>
        );
    }
}

export default EditUser;