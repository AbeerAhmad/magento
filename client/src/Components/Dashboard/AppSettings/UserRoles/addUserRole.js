import React from 'react'
import {Tabs} from 'antd'
import AddRoleInfo from './addRoleInfo'
const {TabPane}=Tabs
// import '../../AppSettings/'

class AddUserRole extends React.Component{

    render(){
        function callback(key) {
            console.log(key);
          }
        return(
            <Tabs style={{textAlign: 'center'}} defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Role Info" key="1">
                    <AddRoleInfo/>
                </TabPane>                
            </Tabs>
        );
    }
}
export default AddUserRole;