import React, { Component } from 'react'
import Btn from './Btn'
import Input from './Input'

export default class Form extends Component {
    constructor(props) {
    super(props)
        this.state = {
            hk1:0,
            hk2:0,
            avg:0,
            result:"",
            rank:""
        }
        this.changeHandle = this.changeHandle.bind(this)
        this.submitHandle = this.submitHandle.bind(this)
    }
    
    changeHandle = (e)=>{
        this.setState({[e.target.name] : e.target.value})
    }
    submitHandle = (e)=>{
        e.preventDefault();
        let tb = this.count( parseFloat(this.state.hk1), parseFloat(this.state.hk2))
        this.setState({avg:Math.round(tb).toFixed(2)})
        this.xepLoai(tb);
    }
    // function to count 
    count = (kh1,hk2)=> (kh1 +(hk2)*2)/3
    // function to short
    xepLoai = (number)=>{
        if(number>=9){  
            this.setState({result:"Học sinh giỏi"})
            this.setState({rank:"Được lên nè"})
        } else if(number >= 7){
            this.setState({result:"Học sinh Khá"})
            this.setState({rank:"Được lên nè"})
        }
        else if(number>=5){
            this.setState({result:"Học sinh trung bình"})
            this.setState({rank:"Được lên nè"})
        }
        else{
            this.setState({result:"Học sinh yếu"})
            this.setState({rank:"Không được lên lớp"})
        } 
    }
  render() {
    return (
        <>
           <form>
            <h2>this is form</h2>
                <Input type = "number" changeHandle={this.changeHandle} name="hk1" namelb ="Điểm hk1"></Input>
                <Input type = "number" changeHandle={this.changeHandle} name="hk2" namelb ="Điểm hk2"></Input>
                <Input type = "number" val = {this.state.avg}    name="avg"    namelb ="Điểm trung bình"></Input>
                <Input type = "text"   val = {this.state.result} name="result" namelb ="Kết quả"></Input>
                <Input type = "text"   val = {this.state.rank}   name="rank"   namelb ="Xếp loại học"></Input>
                <Btn sub={this.submitHandle}></Btn>
           </form>
        </>
    )
  }
}
