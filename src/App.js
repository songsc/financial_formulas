import React, { Component } from 'react';
import './App.css';

class HeaderBar extends Component {
    render() {
        return (
                <div className="HeaderBar">
                    <header className="App-header">
                        <h2 className="Title-Menu">
                            Click on One of the Options Below
                        </h2>
                        <h1 className="Title-PV" onClick={this.props.click_PV}>
                            Present Value to Future Value
                        </h1>
                        <h1 className="Title-AV" onClick={this.props.click_AV}>
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
                return(<CalculatorPV
                            pv={this.props.pv}
                            n={this.props.n}
                            r={this.props.r}
                            fv={this.props.fv}
                            handle_pv={this.props.handle_pv}
                            handle_n={this.props.handle_n}
                            handle_r={this.props.handle_r}
                            PV_Submit={this.props.PV_Submit}
                        />);
                break;
            case "AV":
                return(<CalculatorAV
                            av={this.props.av}
                            n={this.props.n}
                            r={this.props.r}
                            fv={this.props.fv}
                            handle_av={this.props.handle_av}
                            handle_n={this.props.handle_n}
                            handle_r={this.props.handle_r}
                            AV_Submit={this.props.AV_Submit}
                        />);
                break;
            default:
                return(null);
        }
    }
}

class CalculatorPV extends Component {
    constructor() {
        super();

        this.pv_change = this.pv_change.bind(this);
        this.n_change = this.n_change.bind(this);
        this.r_change = this.r_change.bind(this);
        this.PV_Submit = this.PV_Submit.bind(this);
    }
    
    pv_change(event) {        
        this.props.handle_pv(event.target.value);
    }

    n_change(event) {
        this.props.handle_n(event.target.value);
    }
    
    r_change(event) {
        this.props.handle_r(event.target.value);
    }
    
    PV_Submit(event) {
        this.props.PV_Submit();
        event.preventDefault();
    }
    
    render() {
        return(
                <div className="CalculatorPV">
                    <label>
                        Present Value:
                        <input type="number"
                               step="any"
                               min="0"
                               name="PV" 
                               value={this.props.pv} 
                               onChange={this.pv_change} 
                        />
                    </label>
                    <label>
                        Number of Period:
                        <input type="number" 
                               name="n"
                               step="1"
                               min="0"
                               value={this.props.n} 
                               onChange={this.n_change} 
                        />
                    </label>
                    <label>
                        Interest Rate:
                        <input type="number" 
                               name="rate"
                               step="any"
                               value={this.props.r} 
                               onChange={this.r_change} 
                        />
                    </label>
                    <br /><br />
                    <button type="button" onClick={this.PV_Submit}>
                        Calculate FV
                    </button>
                                   
                    <span>Future Value: {this.props.fv}</span>
                </div>
               );       
    }    
}

class CalculatorAV extends Component {
    constructor() {
        super();

        this.av_change = this.av_change.bind(this);
        this.n_change = this.n_change.bind(this);
        this.r_change = this.r_change.bind(this);
        this.AV_Submit = this.AV_Submit.bind(this);
    }
    
    av_change(event) {        
        this.props.handle_av(event.target.value);
    }

    n_change(event) {
        this.props.handle_n(event.target.value);
    }
    
    r_change(event) {
        this.props.handle_r(event.target.value);
    }
    
    AV_Submit(event) {
        this.props.AV_Submit();
        event.preventDefault();
    }
    
    render() {
        return(
                <div className="CalculatorPV">
                    <label>
                        Annuity Value:
                        <input type="number"
                               step="any"
                               min="0"
                               name="AV" 
                               value={this.props.av} 
                               onChange={this.av_change} 
                        />
                    </label>
                    <label>
                        Number of Period:
                        <input type="number" 
                               name="n"
                               step="1"
                               min="0"
                               value={this.props.n} 
                               onChange={this.n_change} 
                        />
                    </label>
                    <label>
                        Interest Rate:
                        <input type="number" 
                               name="rate"
                               step="any"
                               value={this.props.r} 
                               onChange={this.r_change} 
                        />
                    </label>
                    <br /><br />
                    <button type="button" onClick={this.AV_Submit}>
                        Calculate FV
                    </button>
                                   
                    <span>Future Value: {this.props.fv}</span>
                </div>
               );       
    }    
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choice: '',
            pv: 0.0,
            av: 0.0,
            n: 0,
            r: 0.0,
            fv: 0.0,
        };
        
        this.click_PV = this.click_PV.bind(this);
        this.click_AV = this.click_AV.bind(this);
        this.handle_pv = this.handle_pv.bind(this);
        this.handle_av = this.handle_av.bind(this);
        this.handle_n = this.handle_n.bind(this);
        this.handle_r = this.handle_r.bind(this);
        this.PV_Submit = this.PV_Submit.bind(this);
        this.AV_Submit = this.AV_Submit.bind(this);
    }
    
    click_PV() {
        this.setState({
            choice: 'PV',
            pv: 0.0,
            av: 0.0,
            n: 0,
            r: 0.0,
            fv: 0.0,
        });
    }
    
    click_AV() {
        this.setState({
            choice: 'AV',
            pv: 0.0,
            av: 0.0,
            n: 0,
            r: 0.0,
            fv: 0.0,
        });
    }
    
    handle_pv(data) {        
        this.setState({pv: data});
    }
    
    handle_av(data) {        
        this.setState({av: data});
    }

    handle_n(data) {
        this.setState({n: data});
    }
    
    handle_r(data) {
        this.setState({r: data});
    }
    
    PV_Submit() {
        const pv = parseFloat(this.state.pv);
        const r = parseFloat(this.state.r);
        const n = parseFloat(this.state.n);
        var result = pv * Math.pow((1 +  r), n);
        this.setState({fv: parseFloat(result).toFixed(4)});
    }
    
    AV_Submit() {
        const av = parseFloat(this.state.av);
        const r = parseFloat(this.state.r);
        const n = parseFloat(this.state.n);
        var result = av * ((Math.pow((1 +  r), n) - 1) / r);
        this.setState({fv: parseFloat(result).toFixed(4)});
    }
    
    render() {
        return (
                <div className="App">
                    <HeaderBar 
                        click_PV={this.click_PV}
                        click_AV={this.click_AV}
                    />
                    <div className="Display">
                        <Calculator
                            choice={this.state.choice}
                            pv={this.state.pv}
                            av={this.state.av}
                            n={this.state.n}
                            r={this.state.r}
                            fv={this.state.fv}
                            handle_pv={this.handle_pv}
                            handle_av={this.handle_av}
                            handle_n={this.handle_n}
                            handle_r={this.handle_r}
                            PV_Submit={this.PV_Submit}
                            AV_Submit={this.AV_Submit}
                        />
                    </div>
                </div>
                );
    }
}

export default App;
