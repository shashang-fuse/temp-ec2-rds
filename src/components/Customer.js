import React from 'react';


class Customer extends React.Component {
    render(){
        return(
            <div>
                {/* props: 구조화 되어서 계층적으로 표현할 수 있다.  */}
            <h2>{this.props.name}</h2>
            <p>{this.props.birthday}</p>
            <p>{this.props.gender}</p>
            <p>{this.props.job}</p>
        </div>
        )
    }
}

export default Customer;
