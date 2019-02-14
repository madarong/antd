import React from 'react'

const MyInput = ({value = '', onChange}) => {
    return (
        <input type="text" value={value} onChange={onChange}/>
    )
};

 class Demo extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }


    onTextChange = (event) => {
        this.setState({text: event.target.value})
    };

    onTextReset = () => {
        this.setState({text: ''})
    };

    render() {
        return (
            <div>
                <MyInput value={text} onChange={this.onTextChange}/>
                <button onClick={this.onTextReset}/>
            </div>
        )
    }
}