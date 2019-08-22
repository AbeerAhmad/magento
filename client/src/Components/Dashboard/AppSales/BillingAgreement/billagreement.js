import { Table, Input, Select, DatePicker } from 'antd';
import React, { Component } from "react"
import { connect } from 'react-redux'
import moment from 'moment';
const { Option } = Select;

const columns = [
    {
        title: 'id',
        dataIndex: 'key',

    },

    {
        title: 'First Name',
        dataIndex: 'firstName',
    },
    {
        title: 'Last Name',
        dataIndex: 'lastName',
    },
    {
        title: 'Email',
        dataIndex: 'email',
    },
    {
        title: 'ref. id',
        dataIndex: 'userName',
    },
    {
        title: 'Status',
        dataIndex: 'status',
    },
    {
        title: 'Created',
        dataIndex: 'created'
    },
    {
        title: 'updated',
        dataIndex: 'updated'
    }

];

let    Initailstate = {
    key: "",
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    status: "",
    data: [
        {
            key: '1',
            userName: '10',
            firstName: 'Abeer',
            lastName: 'Ahmad',
            email: 'abeerahmad204@gmail.com',
            status: 'Active',
            created: 'Sun Jun 05 2019 16:32:52 GMT+0500',
            updated: 'Sun Jun 10 2019 16:32:52 GMT+0500'

        },
        {
            key: '2',
            userName: '10',
            firstName: 'Abeer',
            lastName: 'Ahmad',
            email: 'abeerahmad204@gmail.com',
            status: 'Canceled',
            created: 'Sun Sep 05 2019 16:32:52 GMT+0500',
            updated: 'Sun Jun 15 2019 16:32:52 GMT+0500'

        },
        {
            key: '3',
            userName: '10',
            firstName: 'usama',
            lastName: 'Ahmad',
            email: 'abeerahmad204@gmail.com',
            status: 'Active',
            created: 'Sun Jun 05 2019 16:32:52 GMT+0500',
            updated: 'Sun Jun 15 2019 16:32:52 GMT+0500'

        },

    ],
    startValue: '',
    endValue: '',
    endOpen: false,


}




class BillingAgreements extends Component {

    state = {
        key: "",
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        status: "",
        data: [
            {
                key: '1',
                userName: '10',
                firstName: 'Abeer',
                lastName: 'Ahmad',
                email: 'abeerahmad204@gmail.com',
                status: 'Active',
                created: 'Sun Jun 05 2019 16:32:52 GMT+0500',
                updated: 'Sun Jun 10 2019 16:32:52 GMT+0500'

            },
            {
                key: '2',
                userName: '10',
                firstName: 'Abeer',
                lastName: 'Ahmad',
                email: 'abeerahmad204@gmail.com',
                status: 'Canceled',
                created: 'Sun Sep 05 2019 16:32:52 GMT+0500',
                updated: 'Sun Jun 15 2019 16:32:52 GMT+0500'

            },
            {
                key: '3',
                userName: '10',
                firstName: 'usama',
                lastName: 'Ahmad',
                email: 'abeerahmad204@gmail.com',
                status: 'Active',
                created: 'Sun Jun 05 2019 16:32:52 GMT+0500',
                updated: 'Sun Jun 15 2019 16:32:52 GMT+0500'

            },

        ],
        startValue: '',
        endValue: '',
        endOpen: false,


    }


    //date picker for created
    disabledStartDate = startValue => {
        const { endValue } = this.state;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = endValue => {
        const { startValue } = this.state;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });

    };

    onStartChange = value => {
        this.onChange('startValue', value);
    };

    onEndChange = value => {
        this.onChange('endValue', value);
    };

    handleStartOpenChange = open => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    };

    handleEndOpenChange = open => {
        this.setState({ endOpen: open });
    };


    //date picker end
//datepicker for update
udisabledStartDate = ustartValue => {
    const { uendValue } = this.state;
    if (!ustartValue || !uendValue) {
        return false;
    }
    return ustartValue.valueOf() > uendValue.valueOf();
};

udisabledEndDate = uendValue => {
    const { ustartValue } = this.state;
    if (!uendValue || !ustartValue) {
        return false;
    }
    return uendValue.valueOf() <= ustartValue.valueOf();
};


uonStartChange = value => {
    this.onChange('ustartValue', value);
};

uonEndChange = value => {
    this.onChange('uendValue', value);
};

uhandleStartOpenChange = open => {
    if (!open) {
        this.setState({ uendOpen: true });
    }
};

uhandleEndOpenChange = open => {
    this.setState({ uendOpen: open });
};
//end






    handleClick = (e) => {
        console.log("this click in me" + e.target)
    }
  
    render() {
        const { startValue, endValue, endOpen,ustartValue, uendValue, uendOpen } = this.state

        const inputFields = [
            {
                key: <Input value={this.state.key} onChange={(e) => { this.setState({ key: e.target.value }) }} />,
                userName: <Input value={this.state.userName} onChange={(e) => { this.setState({ userName: e.target.value.toLowerCase() }) }} />,
                firstName: <Input value={this.state.firstName} onChange={(e) => { this.setState({ firstName: e.target.value.toLowerCase() }) }} />,
                lastName: <Input value={this.state.lastName} onChange={(e) => { this.setState({ lastName: e.target.value.toLowerCase() }) }} />,
                email: <Input value={this.state.email} onChange={(e) => { this.setState({ email: e.target.value.toLowerCase() }) }} />,
                status: <Select defaultValue="Active" style={{ width: 120 }} onChange={(value) => { this.setState({ status: value.toLowerCase() }) }}>
                    <Option value="Active">Active</Option>
                    <Option value="Canceled">Canceled</Option>
                </Select>,
                created: (<div>
                    <DatePicker
                        disabledDate={this.disabledStartDate}

                        format="YYYY-MM-DD  "
                        value={startValue}
                        placeholder="Start"
                        onChange={this.onStartChange}
                        onOpenChange={this.handleStartOpenChange}
                    />
                    <DatePicker
                        disabledDate={this.disabledEndDate}

                        format="YYYY-MM-DD  "
                        value={endValue}
                        placeholder="End"
                        onChange={this.onEndChange}
                        open={endOpen}
                        onOpenChange={this.handleEndOpenChange}
                    />
                </div>),
                updated: (<div>
                    <DatePicker

                        disabledDate={this.udisabledStartDate}

                        format="YYYY-MM-DD  "
                        value={ustartValue}
                        placeholder="Start"
                        onChange={this.uonStartChange}
                        onOpenChange={this.uhandleStartOpenChange}
                    />
                    <DatePicker
                        disabledDate={this.udisabledEndDate}

                        format="YYYY-MM-DD  "
                        value={uendValue}
                        placeholder="End"
                        onChange={this.uonEndChange}
                        open={uendOpen}
                        onOpenChange={this.uhandleEndOpenChange}
                    />
                </div>)


            }
        ]
        var data = this.state.data;
        

        let rangeFilter = data.filter((item) => {

            if (this.state.startValue && this.state.endValue) {

                return moment(item.created).add(1, 'days').isAfter(this.state.startValue) &&
                    moment(item.created.toString()).isBefore(this.state.endValue)
            }
            else{
                return  true
            }
        })
        let updateFilter = rangeFilter.filter((item) => {

            if (this.state.ustartValue && this.state.uendValue) {

                return moment(item.updated).add(1, 'days').isAfter(this.state.ustartValue) &&
                    moment(item.updated.toString()).isBefore(this.state.uendValue)
            }
            else{
                return  true
            }
        })



        let fData = updateFilter.filter(
            (value) => {
                return value.key.includes(this.state.key)
                    && value.userName.toLowerCase().includes(this.state.userName)
                    && value.firstName.toLowerCase().includes(this.state.firstName)
                    && value.lastName.toLowerCase().includes(this.state.lastName)
                    && value.email.toLowerCase().includes(this.state.email)
                    && value.status.toLowerCase().includes(this.state.status)
                

            }

        )

        return (
            <div>
                {/* <Link to="/dashboard/setting/user/edituser">Settings</Link> */}
                <h1 style={{ fontSize: 24 }}>Billing Agreements</h1>
                <button onClick={()=>{this.setState(Initailstate)}} >Reset filter</button>
                <span style={{marginLeft:'20px'}}>{fData.length} Record Found</span>

                <Table bordered pagination={{ position: 'top', defaultPageSize: '5' }} columns={columns} dataSource={[...inputFields, ...fData]} />
            </div>
        )
    }
}

export default (BillingAgreements);