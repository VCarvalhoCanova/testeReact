import React,{Component} from "react";

export default class Conversor extends Component{

    constructor(props){
        super(props);
        

        this.state ={
            moedaa_valor:"",
            moedab_valor: 0,
        }

        this.converter = this.converter.bind(this);
    }

    converter(){

        console.log(this.state)
    }

    render(){
        return(
            <div className="conversor">
               <h2>{this.props.moedaa} para {this.props.moedab}</h2>
                <input type="text" onChange={(event)=>{this.setState({moedaa_valor:event.target.value})}}></input>
                <input type="button"value="Converter" onClick={this.converter}></input>
                <h2> valor convertido</h2>                
            </div>
        )
    }
}