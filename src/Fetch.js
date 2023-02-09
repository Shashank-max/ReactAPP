import React from "react";
class App extends React.Component {
   
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    componentDidMount() {
        fetch('/PHPREST/api/read.php')
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h2>Fetch</h2>{
                <ol>
                    {items.map((item)=>(
                        <li>
                            <br></br>
                            Id: {item.id},
                            <br></br>
                            Name: {item.name},
                            <br></br>
                            Country Code: {item.country_code}
                            <br></br>
                            Number: {item.number}
                            <br></br>
                            Email: {item.email}
                            <br></br>
                            Location: {item.location}
                        </li>
                    ))}
                </ol>
            }
        </div>
    );
}
}
   
export default App;