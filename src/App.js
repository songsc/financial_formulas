import React, { Component } from 'react';
import './App.css';

class HeaderBar extends Component {    
    render() {
        return (
                <div className="HeaderBar">
                    <header className="App-header">
                        <h2 className="Title-Menu">
                            Calculators:
                        </h2>
                        <h1 className="Title-Calc" 
                            onClick={this.props.click_PV}>
                            Present Value to Future Value
                        </h1>
                        <h1 className="Title-Calc" 
                            onClick={this.props.click_AV}>
                            Annuity to Future Value
                        </h1>
                    </header>
                </div>
                );
    }
}

class Calculator extends Component {
    render() {
        const choice = this.props.choice;
        switch(choice) {
            case "PV":
                return(<CalculatorPV />);
            case "AV":
                return(<CalculatorAV />);
            default:
                return(null);
        }
    }
}

class CalculatorPV extends Component {
    constructor() {
        super();
        this.state = {
            pv: 0.0,
            n: 0,
            r: 0.0,
            fv: 0.0,
        };
        this.pv_change = this.pv_change.bind(this);
        this.n_change = this.n_change.bind(this);
        this.r_change = this.r_change.bind(this);
        this.PV_Submit = this.PV_Submit.bind(this);
    }
    
    pv_change(event) {        
        this.setState({pv: event.target.value});
    }

    n_change(event) {
        this.setState({n: event.target.value});
    }
    
    r_change(event) {
        this.setState({r: event.target.value});
    }
    
    PV_Submit(event) {
        const pv = parseFloat(this.state.pv);
        const r = parseFloat(this.state.r);
        const n = parseFloat(this.state.n);
        var result = pv * Math.pow((1 +  r), n);
        this.setState({fv: parseFloat(result).toFixed(4)});
        event.preventDefault();
    }
    
    render() {
        return(
                <div className="CalculatorPV">
                    <h1>Present Value to Future Value</h1>
                    <br /><br />
                    <label>
                        Present Value:
                        <input type="number"
                               step="any"
                               min="0"
                               name="PV" 
                               value={this.state.pv} 
                               onChange={this.pv_change} 
                        />
                    </label>
                    <br /><br />
                    <label>
                        Number of Period:
                        <input type="number" 
                               name="n"
                               step="1"
                               min="0"
                               value={this.state.n} 
                               onChange={this.n_change} 
                        />
                    </label>
                    <br /><br />
                    <label>
                        Interest Rate:
                        <input type="number" 
                               name="rate"
                               step="any"
                               value={this.state.r} 
                               onChange={this.r_change} 
                        />
                    </label>
                    <br /><br />
                    <button type="button" onClick={this.PV_Submit}>
                        Calculate FV
                    </button>
                    <br /><br />               
                    <span>Future Value: {this.state.fv}</span>
                </div>
               );       
    }    
}

class CalculatorAV extends Component {
    constructor() {
        super();
        this.state = {
            av: 0.0,
            n: 0,
            r: 0.0,
            fv: 0.0,
        };

        this.av_change = this.av_change.bind(this);
        this.n_change = this.n_change.bind(this);
        this.r_change = this.r_change.bind(this);
        this.AV_Submit = this.AV_Submit.bind(this);
    }
    
    av_change(event) {        
        this.setState({av: event.target.value});
    }

    n_change(event) {
       this.setState({n: event.target.value});
    }
    
    r_change(event) {
        this.setState({r: event.target.value});
    }
    
    AV_Submit(event) {
        const av = parseFloat(this.state.av);
        const r = parseFloat(this.state.r);
        const n = parseFloat(this.state.n);
        var result = av * ((Math.pow((1 +  r), n) - 1) / r);
        this.setState({fv: parseFloat(result).toFixed(4)});
        event.preventDefault();
    }
    
    render() {
        return(
                <div className="CalculatorPV">
                    <h1>Annuity to Future Value</h1>
                    <br /><br />
                    <label>
                        Annuity Value:
                        <input type="number"
                               step="any"
                               min="0"
                               name="AV" 
                               value={this.state.av} 
                               onChange={this.av_change} 
                        />
                    </label>
                    <br /><br />
                    <label>
                        Number of Period:
                        <input type="number" 
                               name="n"
                               step="1"
                               min="0"
                               value={this.state.n} 
                               onChange={this.n_change} 
                        />
                    </label>
                    <br /><br />
                    <label>
                        Interest Rate:
                        <input type="number" 
                               name="rate"
                               step="any"
                               value={this.state.r} 
                               onChange={this.r_change} 
                        />
                    </label>
                    <br /><br />
                    <button type="button" onClick={this.AV_Submit}>
                        Calculate FV
                    </button>
                    <br /><br />     
                    <span>Future Value: {this.state.fv}</span>
                </div>
               );       
    }    
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: '',
        };
        
        this.click_PV = this.click_PV.bind(this);
        this.click_AV = this.click_AV.bind(this);        
    }
    
    click_PV() {
        this.setState({
            choice: 'PV',
        });
    }
    
    click_AV() {
        this.setState({
            choice: 'AV',
        });
    }
        
    render() {
        return (
                <div className="App">
                    <HeaderBar 
                        choice={this.state.choice}
                        click_PV={this.click_PV}
                        click_AV={this.click_AV}
                    />
                    <div className="Display">
                        <Calculator
                            choice={this.state.choice}                            
                        />
                    </div>
                </div>
                );
    }
}

export default App;
